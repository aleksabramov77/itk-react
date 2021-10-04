import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '05f0dc87-f93b-4a11-b796-0fb78655f73d'
    }
})

export const usersAPI = {
    getUsers (usersOnPage = 10, currentPage = 1) {
        return instance.get(`users?count=${usersOnPage}&page=${currentPage}`)
    },
    unfollowUser (userId) {
        return instance.delete(`follow/${userId}`)
    },
    followUser (userId) {
        return instance.post(`follow/${userId}`, {})
    },
    getProfile (userId, authId) {
        console.warn('Obsolete method" Please profileAPI object')
        return profileAPI.getProfile(userId, authId) // Для сохранения backward compatibility ставляем возможность использовать запросы сюда
    }

}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/${userId}`)
    },
    getUserStatus (userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus (status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    },
    authLogIn (email, password, rememberMe=false, captcha=true) {
        return instance.post(`auth/login`, {
            email: email,
            password: password,
            rememberMe: rememberMe,
            captcha: captcha
        })
    },
}




