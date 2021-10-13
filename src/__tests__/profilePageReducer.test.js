import profilePageReducer, { addPost, deletePost } from '../redux/profilePageReducer'

    // 1. test data
    let action = addPost('TEST TEXT')
    let state = {
        postsData: [
            { id: 1, message: 'Hi, how are you', likesCount: 5 },
            { id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likesCount: 10 },
        ]
    }

it('length of posts should be incremented', () => {
    // 2. action
    let newState = profilePageReducer(state, action)
     // 3. expectation
    expect(newState.postsData.length).toBe(3)
})
it('message of new post should be correct', () => {
    let newState = profilePageReducer(state, action)
    expect(newState.postsData[2].message).toBe('TEST TEXT')
})
it('after deleting length of postsData should be decremented', () => {
    let action = deletePost(1)
    let newState = profilePageReducer(state, action)
    expect(newState.postsData.length).toBe(1)
})
it('after deleting length of postsData should`t be decremented if id incorrect', () => {
    let action = deletePost(55)
    let newState = profilePageReducer(state, action)
    expect(newState.postsData.length).toBe(2)
})

