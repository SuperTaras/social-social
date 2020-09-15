 import React from 'react';
import s from '../DialogItem/DialogsItem.module.css';
import {NavLink} from "react-router-dom";


type DialogItemProps = {
    name: string
    id: number

}



const DialogItem = (props: DialogItemProps) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'/Dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}


export default DialogItem;