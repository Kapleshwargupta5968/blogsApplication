const dotEnv = require("dotenv");
dotEnv.config();

const cors = require("cors");

const connectDB = require("./config/database");
connectDB();

const express = require("express") 

const app = express();
app.use(express.json());
app.use(cors({
    origin:"hhtp://localhost:5173",
    credentials:true
}));
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`Server is connected on this ${process.env.PORT}`);
});