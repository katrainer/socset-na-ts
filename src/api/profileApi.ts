import {instance} from './apiConfig/apiConfig';

export const profileAPI = {
    getProfileUserData(userId: string) {
        return instance.get<ProfileDataType>(`profile/` + userId)
    },
    getProfileStatus(userId: string) {
        return instance.get<string>('profile/status/' + userId)
    },
    updateProfileStatus(status: string) {
        return instance.put<ResponseType>('profile/status', {status})
    },
    updateProfilePhoto(photo: File) {
        let form = new FormData()
        form.append('image', photo)
        return instance.put<ResponseType<{ small: string, large: string }>>('profile/photo', form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfileInfo(data: updateProfileInfoType) {
        return instance.get('profile')
    },
}


//type
type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

export type ProfileDataType = {
    aboutMe: string | null
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
export type updateProfileInfoType = {
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
}