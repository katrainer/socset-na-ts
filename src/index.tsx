import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {v1} from "uuid";

let postsData=[
    {id:v1(), message: 'yo', likeCount:12},
    {id:v1(), message: 'yoyo', likeCount: 212},
    {id:v1(), message: 'yoyo', likeCount: 212},
]

let dialogsData=[
    {id:v1(), name: 'Nikita'},
    {id:v1(), name: 'Jana'},
    {id:v1(), name: 'Daniil'},
    {id:v1(), name: 'Lecha'},
    {id:v1(), name: 'Lecha'},
    {id:v1(), name: 'Lecha'},
]

let messagesData=[
    {id:v1(), message: 'yo'},
    {id:v1(), message: 'yoyo'},
    {id:v1(), message: 'yoyoyo'},
    {id:v1(), message: 'yoyoyoyo'},
    {id:v1(), message: 'yoyoyoyo'},
    {id:v1(), message: 'yoyoyoyo'},
]

ReactDOM.render(
    <React.StrictMode>
        <App postsData={postsData} messagesData={messagesData} dialogsData={dialogsData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
