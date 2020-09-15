import React from 'react';
import s from './../Message/Message.module.css'





type propsMessage = {
    message: string


}


const Message = (props: propsMessage) => {
    return <div className={s.dialog}>{props.message}</div>
}




export default Message;