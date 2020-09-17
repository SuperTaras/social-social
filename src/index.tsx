import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './index.css';
import App   from './App';
import * as serviceWorker from './serviceWorker';
import state, {addPost, StateType} from './Redux/State';







export const renderTree = (state:StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderTree(state)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
