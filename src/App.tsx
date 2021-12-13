import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {AppStateType} from "./redux/storeRedux";
import {DialogsConteiner} from "./components/Dialogs/DialogsConteiner";
import {UsersConteiner} from './components/Users/UsersConteiner';

type AppPropsType = {
    storeData: AppStateType
    store: any
}


function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sitebar={props.storeData.sidebarPageReducer}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsConteiner/>}
                    />
                    <Route path='/profile'
                           render={() => <Profile/>}
                    />
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                    <Route path='/users' render={()=><UsersConteiner/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
