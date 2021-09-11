import { rerenderEntireTree } from "../render";

let state = {
    propfilePage: {
        postsData: [
            { id: 1, message: "Hi, how are you", likesCount: 5 },
            { id: 2, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", likesCount: 10 },
        ]
    },
    messengerPage: {
        dialogsData: [
            { id: 1, name: "Dimych" },
            { id: 2, name: "Sasha" },
            { id: 3, name: "Viktor" },
            { id: 4, name: "Lena" },
            { id: 5, name: "Misha" },
            { id: 6, name: "Egor" },
            { id: 7, name: "Sveta" },
        ],
        messagesData: [
            { id: 1, message: "Hi !!!" },
            { id: 2, message: "How are you ?" },
            { id: 4, message: "Yo" },
            { id: 3, message: "Yo yo" },
            { id: 5, message: "Yo yo yo" },
        ]
    }

}

export let addPost = (post) => {
    debugger
    let newPost = {
        id: 3,
        message: post,
        likesCount: 0
    };
    state.propfilePage.postsData.push(newPost)
    rerenderEntireTree(state);
}

export default state;