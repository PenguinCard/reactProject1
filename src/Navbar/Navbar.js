import { Link } from "react-router-dom";
import { useLayoutEffect, useState } from "react";

const Navbar = () => {

    // 화면 너비가 575px인 것을 기점으로 클래스 변경
    const [navbarHeight, setNavbarHeight] = useState(window.innerWidth > 575);

    useLayoutEffect(() =>
            window.addEventListener('resize', function(){
                setNavbarHeight(window.innerWidth > 575) }
            ),
        [navbarHeight]
    )

    return (
        <ul className={ "nav flex-sm-column nav-pills align-content-center ".concat(navbarHeight ? "vh-100" : '')}>
            <li className="nav-item" style={{ paddingTop: navbarHeight ? "3rem" : "1.5rem" }}>
                <Link to="/" className="nav-link text-white text-center">
                    MAIN
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/todolist" className="nav-link text-white text-center" style={{ paddingTop: "1.5rem"}}>
                    TODO LIST
                </Link>
            </li>

            <li>
                <Link to="/shopee" className="nav-link text-white text-center" style={{ paddingTop: "1.5rem"}}>
                    SHOPEE
                </Link>
            </li>

            <li>
                <Link to="/lazada" className="nav-link text-white text-center" style={{ paddingTop: "1.5rem"}}>
                    LAZADA
                </Link>
            </li>

            <li className="nav-item" style={{ paddingTop: "1.5rem"}}>
                <Link to="/upload" className="nav-link text-white text-center">
                    UPLOAD
                </Link>
            </li>

            <li className="nav-item" style={{ paddingTop: "1.5rem"}}>
                <Link to="/download" className="nav-link text-white text-center">
                    DOWNLOAD
                </Link>
            </li>
        </ul>
    )
}

export default Navbar