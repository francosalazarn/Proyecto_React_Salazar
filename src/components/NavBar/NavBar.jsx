import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

const NavBar = () => {

    return (
        <>
            <div className="header">
                <nav className="navbar">
                    <h1 className="home_logo">LOGO</h1>
                        <div className="navbar_actionables">
                            <ul className="navbar_items">
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="">Shop</a>
                                </li>
                                <li>
                                    <a href="">About</a>
                                </li>
                                <li>
                                    <a href="">Contact</a>
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