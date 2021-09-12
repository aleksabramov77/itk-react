let rerenderEntireTree = () => {
    console.log('State is changed');
};

let state = {
    propfilePage: {
        postsData: [
            { id: 1, message: "Hi, how are you", likesCount: 5 },
            { id: 2, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", likesCount: 10 },
        ],
        newPostText: ''
    },
    messengerPage: {
        dialogsData: [
            { id: 1, name: "Dimych" },
            { id: 2, name: "Sasha" },
            { id: 3, name: "Viktor" },
            { id: 4, name: "Lena" },
            { id: 5, name: "Misha" },
            { id: 6, name: "Egor" },
            { id: 7, name: "Sveta" }
        ],
        messagesData: [
            { id: 1, message: "Hi !!!" },
            { id: 2, message: "How are you ?" },
            { id: 4, message: "Yo" },
            { id: 3, message: "Yo yo" },
            { id: 5, message: "Yo yo yo" }
        ],
        newMessageText: ''
    }
}

window.state = state;

export const addPost = () => {
    // debugger
    let newPost = {
        id: state.propfilePage.postsData.length + 1,
        message: state.propfilePage.newPostText,
        likesCount: state.propfilePage.postsData.length + 1
    };
    state.propfilePage.postsData.push(newPost)
    state.propfilePage.newPostText = '' 
    rerenderEntireTree(state);
}

export const addMessage = () => {
    // debugger
    let newMessage = {
        id: state.messengerPage.messagesData.length + 1,
        message: state.messengerPage.newMessageText,
    };
    state.messengerPage.messagesData.push(newMessage);
    state.messengerPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const onChangePost = (newPostText) => {
    // debugger
    state.propfilePage.newPostText = newPostText;
    // console.log('From state newPostText  ' + state.propfilePage.newPostText)
    rerenderEntireTree(state);
}

export const onChangeMessage = (newMessageText) => {
    // debugger
    state.messengerPage.newMessageText = newMessageText;
    // console.log('From state newMessageText  ' + state.messengerPage.newMessageText)
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;