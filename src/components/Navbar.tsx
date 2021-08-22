import React from "react";
import classes from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <div className={classes.item}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Message</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </div>
        </nav>
    )
}