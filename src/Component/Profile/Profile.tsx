import React from 'react';
import st from './Profile.module.css' ;
import MyPosts  from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";







export const Profile = () => {

    let postsData = [
        {id: 1, message: 'Love dogs' , likesCount:0},
        {id: 2, message: 'It s my first post', likesCount:23},
    ]

    return <div>
        <ProfileInfo/>
        <MyPosts postsData={postsData} />
    </div>
}


