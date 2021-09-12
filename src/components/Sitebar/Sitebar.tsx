import React from "react";
import s from './Sitebar.module.css'

type propsType={
    sitebar: Array<sitebarOb>
}
type sitebarOb={
    id: string
    img: string
    name: string
}

export const Sitebar=(props: propsType)=>{

    let sitebarBlock = props.sitebar.map((t)=>{
        return (
            <div key={t.id} className={s.SitebarBlock}>
            <div><img src={t.img}/></div>
            <div>{t.name}</div>
        </div>
        )
    })

    return(
        <div className={s.Siterbar}>
            <h1>Friends</h1>
            {sitebarBlock}
        </div>
    )
}