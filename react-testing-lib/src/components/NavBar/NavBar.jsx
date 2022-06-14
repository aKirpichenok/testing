import { Link } from "react-router-dom"

const NavBar = () => {
return (
    <div>
    <Link to="/" data-testid="main-link">main</Link>
    <Link to="/about" data-testid="about-link">about</Link>
    <Link to="/users" data-testid="user-link">users</Link>
    </div>

)
}

export default NavBar