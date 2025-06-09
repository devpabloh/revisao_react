import { Outlet } from "react-router";
import { Header } from "../Header";

export function AuthLayout() {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Header/>
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <Outlet />
            </div>
        </div>
    )
}