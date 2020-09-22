import React from 'react';
import s from '../Dialogs/Dialogs.module.css'
import DialogItem from "./DialogItem/Dialogitem";
import Message from "./Message/Message";
import {StateType} from "../../Redux/State";


export type DialogsPropsType = {
    state: StateType
    addPost: (message: string) => void

}


const Dialogs = (props: DialogsPropsType) => {


    let dialogsElement = props.state.messagesPage.dialogsData.map(dg =>
        <DialogItem name={dg.name} id={dg.id}/>);

    let messagesElement = props.state.messagesPage.messagesData.map(mes =>
        <Message message={mes.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                {messagesElement}

            </div>
        </div>


    )
}


export default Dialogs;