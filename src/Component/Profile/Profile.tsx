import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StateType} from "../../Redux/State";



type MyPostsPropsType = {
    state: StateType
}




export const Profile = (props: MyPostsPropsType) => {


    return <div>
        <ProfileInfo/>
        <MyPosts postsData={props.state.profilePage.postsData}/>
    </div>
}


