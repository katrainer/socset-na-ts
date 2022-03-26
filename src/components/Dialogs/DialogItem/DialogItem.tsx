import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';

type propsType = {
    name: string
    id: string
    img: string
}

export const DialogItem: React.FC<propsType> = React.memo(({name, id, img}) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + id}>
                <img src={img} alt='изображение того, чего нету'/> {name}
            </NavLink>
        </div>
    )
})