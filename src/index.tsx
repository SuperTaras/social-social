import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import App from './App';
import {StateType} from './Redux/State';
import store from "./Redux/State";


export let renderTree = (state: StateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <App
                appState={store._State}
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderTree(store._State)
store.subscribe(renderTree)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
