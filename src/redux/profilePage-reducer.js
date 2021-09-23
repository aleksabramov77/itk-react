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
  let stateCopy

  switch (action.type) {

    case ADD_POST:
      let newPost = {
        id: state.postsData.length + 1, //id counter imitation
        message: state.newPostText,
        likesCount: state.postsData.length + 1  //likes counter imitation
      };
      stateCopy = {
        ...state,
        postsData: [ ...state.postsData, newPost ],
        newPostText: ''
      }
      stateCopy.postsData = [...state.postsData]
      stateCopy.postsData.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;

    case UPDATE_NEW_POST_TEXT:
      stateCopy = {
        ...state,
        newPostText: action.newPostText
      }
      console.log(stateCopy.newPostText);
      return stateCopy;

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = newText => ({
  type: UPDATE_NEW_POST_TEXT,
  newPostText: newText
});

export default profilePageReducer;
