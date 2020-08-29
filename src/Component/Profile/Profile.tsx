import React from 'react';
import st from './Profile.module.css' ;
import MyPosts from "./MyPosts/MyPosts";



export const Profile = () => {
    return <div className={st.content}>
        <div>
            <img src='https://cdn.sandals.com/sandals/v12/images/resorts/srb/private-island/island.jpg' width='1000px'/>
        </div>
        <div>
            ava+descr
        </div>
        <MyPosts/>
</div>
}


