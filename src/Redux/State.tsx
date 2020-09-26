export type StoreType = {
    _State: StateType
    UpdateNewPostText: (text: string) => void
    addPost: (text: string) => void
    _renderTree: () => void
    subscribe: (callback: (fn: any) => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}


type AddPostActionType = {
    type: 'ADD-POST',
    postText: string
}
type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT',
    text: string
}


export type ActionsTypes =
    AddPostActionType | UpdateNewPostTextType


const store: StoreType = {

    _State: {

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

    },
    _renderTree() {
        console.log('hello bro')
    },
    UpdateNewPostText(text: string) {

        this._State.profilePage.newPostText = text
        this._renderTree()
    },
    addPost(postText: string) {

        const newPost: PostType = {
            id: new Date().getTime(),
            message: postText != null ? postText : '----',
            likesCount: 0
        }
        this._State.profilePage.postsData.push(newPost);
        this._State.profilePage.newPostText = ''
        this._renderTree()
    },
    subscribe(callback: any) {
        this._renderTree = callback
    },
    getState() {
        debugger
        return this._State;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {

            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText != null ? action.postText : '----',
                likesCount: 0
            }
            this._State.profilePage.postsData.push(newPost);
            this._State.profilePage.newPostText = ''
            this._renderTree()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {

            this._State.profilePage.newPostText = action.text
            this._renderTree()
        }
    }
}


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


export default store;
