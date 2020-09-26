import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, StateType} from "../../Redux/State";


type MyPostsPropsType = {
    state: ProfilePageType
    // addPost: (message: string) => void
    dispatch: (action: ActionsTypes) => void

}


export const Profile = (props: MyPostsPropsType) => {


    return <div>
        <ProfileInfo/>
        <MyPosts postsData={props.state}
                 dispatch={props.dispatch}


        />
    </div>
}


