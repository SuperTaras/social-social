import React from 'react';
import MyPosts, {MyPostsPropsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";








export const Profile = (props: MyPostsPropsType) => {


    return <div>
        <ProfileInfo/>
        <MyPosts postsData={props.postsData}/>
    </div>
}


