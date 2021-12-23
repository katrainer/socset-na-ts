import classes from "./ProfileInfo.module.css";
import React from "react";
import {userProfilePageType} from "../../../redux/reducer/profilePageReducer";


type PropsType =
    {
        profileUserData: userProfilePageType | null
    }
export const ProfileInfo: React.FC<PropsType> = ({profileUserData}) => {
// type PropsType = userProfilePageType
// export const ProfileInfo= (props: PropsType) => {

    return (
        <div>
            <div>
                <img
                    src="http://novostroi18.ru/files/products/Yaponskay_jivopis.500x500.jpg?0fc269b39df6f5315e72570d8a10f34c"/>
            </div>
            <div className={classes.descriptionBlock}>
                avatar-description
            </div>
            <div>
            </div>
            {profileUserData && (<><img src={profileUserData.photos.small}/>
                <span>{profileUserData.fullName}</span></>)}
        </div>
    )
}