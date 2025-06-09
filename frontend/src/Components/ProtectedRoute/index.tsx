import { useContext } from "react";
import {Navigate, Outlet} from "react-router"
import { AuthContext } from "../../context/AuthContext";

interface ProtectedRouteProps{
    allowedRoles: string[];
}

export function ProtectedRoute({allowedRoles}: ProtectedRouteProps) {
    const {user} = useContext(AuthContext)

    if(!user || !user.isLoggedIn){
        return <Navigate to="/signin" replace/>
    }

    if(!user.role || !allowedRoles.includes(user.role)){
        return <Navigate to="/" replace />
    }
    return <Outlet />
}