import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Login  from "../components/Login";


const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const user = localStorage.getItem("user");
      if(user){
        setIsAuthenticated(true);
      }
    }, []);

    return isAuthenticated;
    
}

export const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return  isAuth ? <Outlet /> : <Login />;
    
};