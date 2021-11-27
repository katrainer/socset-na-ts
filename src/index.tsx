import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/storeRedux";
import {Provider} from "react-redux";
import ReactDOM from 'react-dom';


// const rerenderApp=(state: StateType)=>{
const rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App storeData={store.getState()} store={store}/>
        </Provider>,
        document.getElementById('root')
    )
}
// rerenderApp(state);
rerenderEntireTree();
store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
