import {Routes, Route} from "react-router"

import { SignIn } from "../pages/SignIn"
import { AuthLayout } from "../Components/AuthLayout"
import { ProtectedRoute } from "../Components/ProtectedRoute"

/* Componentes  */

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<AuthLayout/>}>
                <Route path="signin" element={<SignIn/>}/>
            </Route>
            
            {/* Rotas protegidas */}
            <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
                <Route path="/admin" element={<h1>Admin Page</h1>} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
                <Route path="/dashboard" element={<h1>Dashboard</h1>} />
            </Route>
        </Routes>
    )
}
