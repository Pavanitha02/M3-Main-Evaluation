import { useEffect,useRef,useState } from "react";
import {useAuth} from "../context/AuthContext.jsx";
 const Login = () => {
    const [role,setRole]=useState("Admin");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const{login,user}=useAuth();
    const inputRef=useRef(null);

    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus();
        },[]);

        const handleSubmit=(e)=>{
            e.preventDefault();
            if(!email || !password){
                alert("Please fill in all fields");
                return;
            }
            login(role,email,password);
        };
    return(
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <select value={role} onChange={(e)=>setRole(e.target.value)}>
                    <option value="Admin">Admin</option>
                    <option value="Customer">Customer</option>
                </select>
                <br/>
                <input
                ref={inputRef}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <br/>   
                <input
                type="password"
                placeholder="Password"
                value={password}    
                onChange={(e)=>setPassword(e.target.value)}
                />
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
 }
export default Login;