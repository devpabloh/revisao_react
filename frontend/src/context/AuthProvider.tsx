import { useState } from "react"
import { AuthContext } from "./AuthContext"

interface User{
    isLoggedIn: boolean
    role?: string
}

export function AuthProvider({ children }: {children: React.ReactNode}) {
    const [user, setUser]=useState<User |null>(null)

    const login = (role: string) =>{
        setUser({isLoggedIn: true, role})
    }

    const logout = ()=>{
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
        
}