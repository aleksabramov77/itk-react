let ADD_POST = 'ADD_POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
  postsData: [
    {id: 1, message: "Hi, how are you", likesCount: 5},
    {id: 2, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", likesCount: 10},
  ],
  newPostText: ''
}
const profilePageReducer = (state = initialState, action) => {
  // debugger

  switch (action.type) {

    case ADD_POST:
      let newPost = {
        id: state.postsData.length + 1, //id counter imitation
        message: state.newPostText,
        likesCount: state.postsData.length + 1  //likes counter imitation
      };
      return {
        ...state,
        postsData: [ ...state.postsData, newPost ],
        newPostText: ''
      };

    case UPDATE_NEW_POST_TEXT:
      console.log('newPostText: ' + action.newPostText);
      return {
        ...state,
        newPostText: action.newPostText
      };

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = newPostText => ({
  type: UPDATE_NEW_POST_TEXT,
  newPostText
});

export default profilePageReducer;
