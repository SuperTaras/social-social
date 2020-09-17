import { renderTree } from ".."

export type StateType = {
    profilePage: {
        postsData: Array<{ id: number, message: string, likesCount: number }>
    }
    messagesPage: {
        messagesData: Array<{ id: number, message: string }>,
        dialogsData: Array<{ id: number, name: string }>
    }

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
    }

}

export const addPost = (postText: string ) => {
    debugger
    const newPost: PostType = {
        id: new Date().getTime(),
        message: postText != null ? postText:'----',
        likesCount: 0
    }
    State.profilePage.postsData.push(newPost);
    renderTree(State)
}


export default State;
