
import { createContext } from "react"

interface User{
    isLoggedIn: boolean
    role?: string
}

interface AuthContextType{
    user: User | null
    login: (role: string) => void
    logout: () => void
}

const initialValue: AuthContextType ={
    user: null,
    login: () => {},
    logout: () => {}
}

export const AuthContext = createContext<AuthContextType>(initialValue)

