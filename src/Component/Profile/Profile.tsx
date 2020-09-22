import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, StateType} from "../../Redux/State";


type MyPostsPropsType = {
    state: ProfilePageType
    addPost: (message: string) => void
    newPostText: (message: string) => void


}


export const Profile = (props: MyPostsPropsType) => {


    return <div>
        <ProfileInfo/>
        <MyPosts postsData={props.state}
                 addPost={props.addPost}
                 newPostText={props.newPostText}


        />
    </div>
}


