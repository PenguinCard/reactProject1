import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <ul style={{ backgroundRepeat: "repeat-y", backgroundColor: "rgb(39, 50, 42)", height: "100vh" }}
            className="nav flex-sm-column nav-pills align-content-center">
            <li className="nav-item" style={{ paddingTop: "3rem" }}>
                <Link to="/" className="nav-link" style={{ textAlign: "center", color: "rgb(255, 255, 255)" }}>
                    MAIN
                </Link>
            </li>
            <li className="nav-item" style={{ paddingTop: "1.5rem"}}>
                <Link to="/todolist" className="nav-link" style={{ textAlign: "center", color: "rgb(255, 255, 255)" }}>
                    TODO LIST
                </Link>
            </li>
        </ul>
    )
}

export default Navbar