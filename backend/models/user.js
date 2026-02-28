const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: function(){
            return !this.googleId;
        },
        trim:true
    },
    email:{
        type:String,
        required: function(){
            return !this.googleId;
        },
    },
    password:{
        type:String,
        required: function(){
            return !this.googleId;
        },
        minlength:8
    },
    role:{
        type:String,
        enum:["admin", "user"],
        default:"user"
    },
    avatar:{
        type:String
    },
    googleId:{
        type:String,
        sparse:true,
        unique:true
    }
});
userSchema.pre("save", async function(){
    if(!this.isModified("password" || !this.password)){
        return false;
    }
    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }catch(error){
        console.log(`Password hashing problem ${error.message}`);
    }
});

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);