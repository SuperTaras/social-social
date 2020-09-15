import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';





let postsData = [
    {id: 1, message: 'Love dogs', likesCount: 0},
    {id: 2, message: 'It s my first post', likesCount: 23},
]

let dialogsData = [
    {id: 1, name: 'Taras'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Lera'},
    {id: 4, name: 'Masha'},
    {id: 5, name: 'Sasha'},
    {id: 6, name: 'Gena'},

];


let messagesData = [
    {id: 1, message: 'HI'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Bye'},
];


ReactDOM.render(
    <React.StrictMode>
        <App postsData={postsData}
             dialogsData={dialogsData}
             messagesData={messagesData}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
