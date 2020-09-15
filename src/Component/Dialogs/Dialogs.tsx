import React from 'react';
import s from '../Dialogs/Dialogs.module.css'
import DialogItem from "./DialogItem/Dialogitem";
import Message from "./Message/Message";


export type DialogsPropsType = {
    dialogsData: Array<{ id: number, name: string }>
    messagesData: Array<{ id: number, message: string }>
}






const Dialogs = (props: DialogsPropsType) => {


    let dialogsElement = props.dialogsData.map(dg =>
        <DialogItem name={dg.name} id={dg.id}/>);

    let messagesElement = props.messagesData.map(mes =>
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