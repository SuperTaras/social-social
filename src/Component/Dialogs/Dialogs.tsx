import React from 'react';
import s from '../Dialogs/Dialogs.module.css'


const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Taras
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>

                <div className={s.dialog}>
                    Nika
                </div>

                <div className={s.dialog}>
                    Masha
                </div>

                <div className={s.dialog}>
                    SashaHI
                </div>

                <div className={s.dialog}>
                    Gena
                </div>
            </div>
            <div className={s.messages} >
                <div className={s.dialog}>HI</div>
                <div className={s.dialog}>Bye</div>
                <div className={s.dialog}>How are you</div>


            </div>


        </div>
    )
}


export default Dialogs;