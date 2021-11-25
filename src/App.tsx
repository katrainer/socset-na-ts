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
import {StoreType} from "./redux/storeRedux";

type AppPropsType = {
    appState: StoreType
}


function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sitebar={props.appState.sidebarPageReducer}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dialogsData={props.appState.messagesPageReducer.dialogsData}
                               messagesData={props.appState.messagesPageReducer.messagesData}
                               newMessageText={props.appState.messagesPageReducer.newMessageText}
                           />}/>
                    <Route path='/profile'
                           render={() => <Profile
                               postsData={props.appState.profilePageReducer.postsData}
                               postText={props.appState.profilePageReducer.newPostText}
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
