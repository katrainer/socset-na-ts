import React from 'react';
import s from './Sitebar.module.css'

type propsType = {
    sidebar: Array<{
        id: string
        img: string
        name: string
    }>
}
export const Sidebar = (props: propsType) => {
    const sidebarBlock = props.sidebar.map((t) => {
        return (
            <div key={t.id} className={s.SitebarBlock}>
                <div><img src={t.img} alt='изображение того, чего нету'/></div>
                <div>{t.name}</div>
            </div>
        )
    })

    return (
        <div className={s.Siterbar}>
            <h1>Friends</h1>
            {sidebarBlock}
        </div>
    )
}