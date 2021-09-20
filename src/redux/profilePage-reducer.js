let ADD_POST = 'ADD_POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
  postsData: [
    {id: 1, message: "Hi, how are you", likesCount: 5},
    {id: 2, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", likesCount: 10},
  ],
  newPostText: ''
}
const profilePageReducer = (state=initialState, action) => {
  // debugger
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.postsData.length + 1,
        message: state.newPostText,
        likesCount: state.postsData.length + 1
      };
      state.postsData.push(newPost);
      state.newPostText = '';
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newPostText;
      console.log(state.newPostText);
      return state;

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newPostText: newText
});

export default profilePageReducer;
