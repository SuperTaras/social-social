import React from 'react';
import st from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../Redux/State";


export type MyPostsPropsType = {
    postsData: ProfilePageType
    addPost: (postText: string) => void
    newPostText: (text: string) => void


}


const MyPosts = (props: MyPostsPropsType) => {


    let postElement = props.postsData.postsData.map(Po =>
        <Post message={Po.message} likesCount={Po.likesCount}/>)


    let newPostElement = React.createRef<HTMLTextAreaElement>();


    let addPost = () => {
        if (newPostElement.current)
            props.addPost(newPostElement.current.value);
        // @ts-ignore
        newPostElement.current.value = '';
    }


    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.newPostText(text)
        }
    }

    return (
        <div className={st.postsBlock}>
            <h3>MyPost</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.postsData.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={st.posts}>
                {postElement}

            </div>
        </div>
    )
}


export default MyPosts;