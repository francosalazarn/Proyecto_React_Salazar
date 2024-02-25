import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

const NavBar = () => {

    return (
        <>
            <div className="header">
                <nav className="navbar">

                    <Link to={'/'}>
                        <h1 className="home_logo">LOGO</h1>
                    </Link>

                    <div className="navbar_actionables">
                        <ul className="navbar_items">
                            <li>
                                <NavLink to={'/'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'categoria/Consolas'}>Consolas</NavLink>
                            </li>
                            <li>
                                <NavLink to={'categoria/Celulares'}>Celulares</NavLink>
                            </li>
                            <li>
                                <NavLink to={'categoria/PC'}>PC</NavLink>
                            </li>
                        </ul>

                        <CartWidget/>
                    </div>
                </nav>
            </div>
        </>
    )

}

export default NavBar;