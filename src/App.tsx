import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import {Profile} from './Component/Profile/Profile';
import Dialogs from "./Component/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';


export type StatePropsType = {
    postsData: Array<{ id: number, message: string, likesCount: number }>
    dialogsData: Array<{ id: number, name: string }>
    messagesData: Array<{ id: number, message: string }>

}



const App = (props: StatePropsType) => {


    let SomeRenderDialog = () => <Dialogs dialogsData={props.dialogsData}
                                          messagesData={props.messagesData}/>

    let SomeRenderProfile = () => <Profile postsData={props.postsData}/>


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
