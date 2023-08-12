import { Link } from "react-router-dom";
import "./navigation.css";

const NavigationBar = () => {
    return (
        <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/joblistings">Job Listings</Link>
        <Link to="/employers">Employers</Link>
        </div>
    );
    };

export default NavigationBar;