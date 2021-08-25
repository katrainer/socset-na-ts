import React from "react";
import classes from "./Profile.module.css";
import {Post} from "./MyPosts/Post";


export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="http://novostroi18.ru/files/products/Yaponskay_jivopis.500x500.jpg?0fc269b39df6f5315e72570d8a10f34c"
                    alt="aaa"/>
            </div>
            <div className={classes.item}>
                avatar-descript
            </div>
            <Post message="hei" likeCount={12}/>
            <Post message="olo" likeCount={121}/>
        </div>
    )
}