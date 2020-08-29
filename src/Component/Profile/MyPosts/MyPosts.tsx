import React from 'react';
import st from './MyPosts.module.css'
import {Post} from "./Post/Post";





const MyPosts = () => {
    return <div>
        MyPost
        <div>
            <textarea></textarea>
            <button>Add Post</button>
        </div>
        <div className={st.posts}>
            <Post/>
        </div>
    </div>

}


export default MyPosts;