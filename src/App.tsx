import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {v1} from "uuid";

type postType = {
    postsData: Array<postsDataOb>
    dialogsData: Array<dialogsDataOb>
    messagesData: Array<messagesDataOb>
}
type postsDataOb={
    message: string
    likeCount: number
    id: string
}

type dialogsDataOb={
    id: string
    name: string
}

type messagesDataOb={
    id: string
    message: string
}

function App(props: postType) {


        return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={()=><Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                    <Route path='/profile' render={()=><Profile postsData={props.postsData}/>}/>
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
