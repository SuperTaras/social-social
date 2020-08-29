import React from 'react';
import st from '../Profile/Profile.module.css' ;



const Profile = () => {
    return <div className={st.content}>
        <div>
            <img src='https://cdn.sandals.com/sandals/v12/images/resorts/srb/private-island/island.jpg' width='1000px'/>
        </div>
        <div>
            ava+descr
        </div>
        <div>
            MyPost
        </div>
        <div>
            New Post
        </div>
        <div className ={st.item}>
            Post 1
        </div>
        <div className ={st.item}>
            Post 2
        </div>
        <div className ={st.item}>
            Post 3
        </div>
    </div>
}


export default Profile;