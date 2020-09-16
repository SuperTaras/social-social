import React from 'react';
import st from './MyPosts.module.css'
import {Post} from "./Post/Post";


export type MyPostsPropsType = {
    postsData: Array<{ id: number, message: string, likesCount: number }>
}




const MyPosts = (props: MyPostsPropsType) => {


    let postElement = props.postsData.map(Po =>
        <Post message={Po.message} likesCount={Po.likesCount}/>)




    let addPost =() => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            alert(text)
        }
    }

    let newPostElement:any = React.createRef();


    return (
        <div className={st.postsBlock}>
            <h3>MyPost</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
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