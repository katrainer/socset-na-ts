import React from "react";
import classes from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <div className={classes.item}>
                <div>
                    <a href='/profile'>Profile</a>
                </div>
                <div>
                    <a href='/dialogs'>Message</a>
                </div>
                <div>
                    <a href='/news'>News</a>
                </div>
                <div>
                    <a href='/music'>Music</a>
                </div>
                <div>
                    <a href='/settings'>Settings</a>
                </div>
            </div>
        </nav>
    )
}