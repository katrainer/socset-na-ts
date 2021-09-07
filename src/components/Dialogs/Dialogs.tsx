import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from "./Dialogs.module.css";

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to='/dialogs/1'> Nikita </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'> Jana </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'> Daniil </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'> Lecha </NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>yo</div>
                <div className={classes.message}>yoyo</div>
                <div className={classes.message}>yoyoyo</div>
                <div className={classes.message}>yoyoyoyo</div>
            </div>
        </div>
    )
}