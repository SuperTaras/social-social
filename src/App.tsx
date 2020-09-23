import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import {Profile} from './Component/Profile/Profile';
import Dialogs from "./Component/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import store, {StateType, StoreType} from "./Redux/State";



export type StatePropsType = {
    appState: StateType
    addPost: (message: string) => void
    newPostText: (text: string) => void
    store: StoreType
}

const App = (props: StatePropsType) => {



    let SomeRenderDialog = () => <Dialogs state={props.appState}
                                          addPost={props.addPost}/>
    let SomeRenderProfile = () => <Profile state={props.appState.profilePage}
                                           addPost={props.store.addPost.bind(props.store)}
                                           newPostText={props.store.UpdateNewPostText.bind(props.store)}/>


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/Dialogs' render={SomeRenderDialog}/>
                    <Route path='/Profile' render={SomeRenderProfile}/>
                </div>
            </div>
        </BrowserRouter>
    )

}


export default App;
