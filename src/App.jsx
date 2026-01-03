import Login from "./components/Login.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
import CustomerDashboard from "./components/CustomerDashboard.jsx";
import AdminUpdatePage from "./pages/AdminUpdatePage.jsx";
import {Routes, Route, Navigate} from "react-router-dom";
import {useAuth} from "./context/AuthContext.jsx";

const PrivateRoute =({children,role})=>{
  const {user}=useAuth();
  if(!user){
    return <Navigate to="/" replace/>;
  
    if (role && user.role!== role)
      return <Navigate to="/" replace/>;
    return children;
  };

  function App() {
      return(
        <Routes>
          <ROute path="/" element={<Login/>}/>
          <Route path="/admin/dashboard" element={
            <PrivateRoute role="Admin">
              <AdminDashboard/>
              </PrivateRoute>
          }/>
          <Route path="/customer/dashboard" element={
            <PrivateRoute role="Customer">
              <CustomerDashboard/>
            </PrivateRoute>
          }/>
          <Route path="/admin/restaurants/update/:id" element={
            <PrivateRoute role="Admin">
              <AdminUpdatePage/>
            </PrivateRoute>
          }/>
            
        </Routes>
      )
    }
}