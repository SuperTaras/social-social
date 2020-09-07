import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import {Profile} from './Component/Profile/Profile';
import Dialogs from "./Component/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';






const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path ='/Dialogs' component={Dialogs}/>
                    <Route path ='/Profile' component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    )

}


export default App;
