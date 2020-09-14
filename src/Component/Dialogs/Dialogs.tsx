import React from 'react';
import s from '../Dialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemProps = {
    name: string
    id: number

}
type propsMessage = {
    message: string


}


const DialogItem = (props: DialogItemProps) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'/Dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props: propsMessage) => {
    return <div className={s.dialog}>{props.message}</div>
}


const Dialogs = () => {


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


    let dialogsElement =  dialogsData.map(dg =>
        <DialogItem name={dg.name} id={dg.id}/> ) ;

    let messagesElement =  messagesData.map(mes =>
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