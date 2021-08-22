import React from "react";
import classes from "./Profile.module.css";


export const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src="https://get.wallhere.com/photo/sunlight-trees-landscape-sunset-lake-nature-reflection-grass-sky-field-sunrise-green-morning-Sun-panorama-Pennsylvania-marsh-creek-state-park-dawn-agriculture-meadow-prairie-5760x1080-px-rural-area-atmospheric-phenomenon-computer-wallpaper-573802.jpg"
                    alt="aaa"/>
            </div>
            <div className={classes.item}>
                avatar-descript
            </div>
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