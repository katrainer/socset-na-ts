import React, {ChangeEvent, useState} from 'react';

type ProfileStatusType = {
    value: string
    updateStatusTC: (status: string) => void
}

export const ProfileStatus: React.FC<ProfileStatusType> = React.memo((
    {
        value,
        updateStatusTC,
    }) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(value)
    const onBlurHandler = () => {
        updateStatusTC(status)
        setEditMode(false)
    }
    const onDoubleClickHandler = () => setEditMode(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)
    return <div>
        {editMode
            ? <div>
                <input value={status} autoFocus onBlur={onBlurHandler} onChange={onChangeHandler}/>
            </div>
            : <span style={{fontSize:16, wordBreak: 'break-word'}} onDoubleClick={onDoubleClickHandler}>{value || 'NO STATUS'}</span>}
    </div>
})