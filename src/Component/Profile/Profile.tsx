import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost, StateType} from "../../Redux/State";



type MyPostsPropsType = {
    state: StateType
     addPost: (message:string) => void
}




export const Profile = (props: MyPostsPropsType) => {


    return <div>
        <ProfileInfo/>
        <MyPosts postsData={props.state.profilePage.postsData}
        addPost ={props.addPost}
        />
    </div>
}


