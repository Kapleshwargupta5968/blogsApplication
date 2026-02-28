import { useState } from "react";
import { useContext, createContext } from "react";
import axiosInstance from "../utils/api/axiosInstance";
import { useEffect } from "react";

export const AuthContext = createContext({
    user: null,
    setUser: () => { },
    loading: false,
    checkAuth: () => { },
    isAuthenticated: false,
    hasRole: () => { },
    logout: () => { },
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const checkAuth = async () => {
        try {
            const response = await axiosInstance.get("/auth/me");
            setUser(response.data.user);
        } catch (error) {
            console.log(error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        checkAuth();
    }, []);

    const logout = async () => {
        try {
            const response = await axiosInstance.post("/auth/logout");
            setUser(null);
        } catch (error) {
            console.log(error);
        } finally {
            setUser(null);
        }
    };

    const hasRole = (role) => {
        return user?.role === role;
    };
    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            loading,
            checkAuth,
            isAuthenticated: !!user,
            hasRole,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}