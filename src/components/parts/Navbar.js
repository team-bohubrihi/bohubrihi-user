import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
        </div>
    )
}

export default Navbar;