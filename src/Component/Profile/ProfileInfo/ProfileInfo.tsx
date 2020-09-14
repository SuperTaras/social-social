import React from 'react';
import st from './ProfileInfo.module.css' ;






export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://cdn.sandals.com/sandals/v12/images/resorts/srb/private-island/island.jpg'
                     width='1000px'/>
            </div>
            <div className={st.descriptionBlock}>
                ava+descr
            </div>
        </div>

    )
}


