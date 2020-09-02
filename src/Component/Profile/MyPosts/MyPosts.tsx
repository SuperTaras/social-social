import React from 'react';
import st from './MyPosts.module.css'
import {Post} from "./Post/Post";






const MyPosts = (props:any) => {
    return <div>
        MyPost
        <div>
            <textarea></textarea>
            <button>Add Post</button>
        </div>
        <div className={st.posts}>
            <Post message = "Love dogs" likesCount ='0'/>
            <Post message='It s my first post' likesCount ='23' />
        </div>
    </div>

}


export default MyPosts;