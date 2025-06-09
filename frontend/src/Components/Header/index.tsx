import { Link } from "react-router"

export function Header(){
    return(
        <header>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}