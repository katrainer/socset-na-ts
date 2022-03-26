import preloaderImg from '../../assets/img/preloader.gif';
import React from 'react';

export const Preloader = () => {
    return <img src={preloaderImg}
                style={{width: 100}}
                alt="изображение не загрузилось((("/>
}