import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {UpdateNewPostText} from './Redux/State';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, StateType} from './Redux/State';


export const renderTree = (state: StateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <App appState={state}
                 addPost={addPost}
                 newPostText={UpdateNewPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree(state)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
