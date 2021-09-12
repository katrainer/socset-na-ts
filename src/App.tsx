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

type propsType = {
    appState: appStateOb
}
type appStateOb = {
    profilePage: profilePageOb
    messagesPage: messagesPageOb
    sitebar: Array<sitebarOb>
}
type profilePageOb = {
    postsData: Array<postsDataOb>
}
type messagesPageOb = {
    dialogsData: Array<dialogsDataOb>
    messagesData: Array<messagesDataOb>
}
type postsDataOb = {
    message: string
    likeCount: number
    id: string
}
type dialogsDataOb = {
    id: string
    name: string
}
type messagesDataOb = {
    id: string
    message: string
}
type sitebarOb={
    id: string
    img: string
    name: string
}

function App(props: propsType) {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sitebar={props.appState.sitebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dialogsData={props.appState.messagesPage.dialogsData}
                               messagesData={props.appState.messagesPage.messagesData}
                           />}/>
                    <Route path='/profile'
                           render={() => <Profile
                               postsData={props.appState.profilePage.postsData}
                           />}/>
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
