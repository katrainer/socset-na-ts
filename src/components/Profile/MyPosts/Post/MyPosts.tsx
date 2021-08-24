import React from "react";
import classes from "./MyPosts.module.css";


export const MyPosts = () => {
    return (
        <div className={classes.content}>
            <div className={classes.item}>
                my post
                <div>
                    New post
                </div>
                <div className={classes.posts}>
                    <div>post1</div>
                    <div>post2</div>
                </div>
            </div>
        </div>
    )
}