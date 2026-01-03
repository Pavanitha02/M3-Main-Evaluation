import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import App from "./App.jsx";
import {AuthProvider,useAuth} from "./context/AuthContext.jsx";
import {RestaurantProvider} from "./context/RestaurantContext.jsx";

const PrivateRoute=({children,role})=>{
    const{user}=useAuth();
    if(!user){
        return <Navigate to="/" replace/>;
    }
    if(role && user.role!==role){
        return <Navigate to="/" replace/>;
    }
    return children;
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RestaurantProvider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </RestaurantProvider>
        </AuthProvider>
    </React.StrictMode>
);
