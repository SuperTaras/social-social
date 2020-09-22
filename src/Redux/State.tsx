import {renderTree} from '..';

export type DialogPageType = {

    messagesData: Array<MessageType>,
    dialogsData: Array<DialogMessageType>

}

export type DialogMessageType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string

}

export type ProfilePageType = {
    postsData: Array<PostType>
    newPostText: string
}

export type StateType = {
    profilePage: ProfilePageType

    messagesPage: DialogPageType

}

export type PostType = {
    id: number
    message: string
    likesCount: number

}

let State: StateType = {

    profilePage: {
        postsData: [
            {id: 1, message: 'Love dogs', likesCount: 0},
            {id: 2, message: 'It s my first post', likesCount: 23},
        ],
        newPostText: '',

    },

    messagesPage: {
        messagesData: [
            {id: 1, message: 'HI'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Bye'},
        ],
        dialogsData: [
            {id: 1, name: 'Taras'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Lera'},
            {id: 4, name: 'Masha'},
            {id: 5, name: 'Sasha'},
            {id: 6, name: 'Gena'},

        ],
    },


}


export const addPost = (postText: string) => {


    const newPost: PostType = {
        id: new Date().getTime(),
        message: postText != null ? postText : '----',
        likesCount: 0
    }
    State.profilePage.postsData.push(newPost);
    renderTree(State)
}


export let UpdateNewPostText = (text: string) => {
    State.profilePage.newPostText = text
    renderTree(State)
}


export default State;
