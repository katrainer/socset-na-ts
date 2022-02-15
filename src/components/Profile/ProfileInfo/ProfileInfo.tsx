import classes from "./ProfileInfo.module.css";
import React from "react";
import {userProfilePageType} from "../../../redux/reducer/profilePageReducer";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";


type PropsType = {
    profileUserData: userProfilePageType | null,
    status: string
    thunkUpdateStatus: (status: string) => void
}
export const ProfileInfo: React.FC<PropsType> = (
    {
        profileUserData,
        status,
        thunkUpdateStatus,
    }) => {
    return (
        <div>
            <div>
                <img
                    src="http://novostroi18.ru/files/products/Yaponskay_jivopis.500x500.jpg?0fc269b39df6f5315e72570d8a10f34c"/>
            </div>

            {profileUserData && (<div><img src={profileUserData.photos.small}/>
                <p>{profileUserData.fullName}</p>
                <ProfileStatus
                    value={status}
                    thunkUpdateStatus={thunkUpdateStatus}/>
            </div>)}
        </div>
    )
}