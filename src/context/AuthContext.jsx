import { createContext,useContext,useState } from "react";
import {useNavigate} from "react-router-dom";
import {ADMIN_CREDENTIALS,CUSTOMER_CREDENTIALS} from "../util/constants.jsx";
const AuthContext=createContext(null);
export const AuthProvider=({children})=>{
    const[user,setUser]=useState(null);
    const navigate=useNavigate();
    const login=(role,email,password)=>{
    const creds=(role==="Admin"?ADMIN_CREDENTIALS:CUSTOMER_CREDENTIALS);
    if(email===creds.email && password===cred.password){
        const loggeduser={role:Creds.role,email:creds.email};
        setUser(loggeduser);
        if(creds.role==="Admin"){
            navigate("/Admin/dashboard");
        }else{
            navigate("/customer/dashboard");
        }
    }else{
        alert("Invalid credentials");
    }
    };
    const logout=()=>{
        setUser(null);
        navigate("/");
    };
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth=()=>{
    return useContext(AuthContext);
};



