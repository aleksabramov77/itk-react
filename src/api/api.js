import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '05f0dc87-f93b-4a11-b796-0fb78655f73d'
    }
})

// export const getUsers = (currentPage = 1, usersOnPage = 10) => {
//     return instance.get(`users?count=${usersOnPage}&page=${currentPage}`)
//         .then(response => response.data)
// }

export const usersAPI = {
    getUsers (usersOnPage = 10, currentPage = 1) {
        return instance.get(`users?count=${usersOnPage}&page=${currentPage}`)
            .then(response => response.data)
    },
    unfollowUser (userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    followUser (userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => response.data)
    },

}
export const authAPI = {
    me () {
        // debugger
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    authLogIn (email, password, rememberMe=false, captcha=true) {
        return instance.post(`auth/login`, {
            email: email,
            password: password,
            rememberMe: rememberMe,
            captcha: captcha
        })
            .then(response => response.data)
    },
}

export const profileAPI = {
    getProfile (userId, authId) {
        return instance.get(`profile/${userId ? userId : authId}`)
            .then(response => response.data)
    }
}


