import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '05f0dc87-f93b-4a11-b796-0fb78655f73d'
    }
})

export const usersAPI = {
    getUsers: (usersOnPage = 10, currentPage = 1) =>
        instance.get(`users?count=${usersOnPage}&page=${currentPage}`),
    unfollowUser: userId =>
        instance.delete(`follow/${userId}`),
    followUser: userId =>
        instance.post(`follow/${userId}`, {}),
    getProfile (userId, authId) {
        console.warn('Obsolete method" Please profileAPI object')
        return profileAPI.getProfile(userId, authId) // Для сохранения backward compatibility ставляем возможность использовать запросы сюда
    }
}

export const profileAPI = {
    getProfile: userId =>
        instance.get(`profile/${userId}`),
    getUserStatus: userId =>
        instance.get(`profile/status/${userId}`),
    updateUserStatus: status =>
        instance.put(`profile/status`, { status: status }),
    updatePhoto: photo => {
        let formData = new FormData();
        formData.append("image", photo);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const authAPI = {
    me: () =>
        instance.get(`auth/me`),
    logIn: (email, password, rememberMe = false) =>
        instance.post(`auth/login`, { email, password, rememberMe }),
    logOut: () =>
        instance.delete(`auth/login`),
}




