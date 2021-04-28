export const USER_KEY = 'user'

export const setUserLocalStorage = (user) => {
    const stringData = JSON.stringify(user)
    const localStorage = window.localStorage
    localStorage.setItem(USER_KEY, stringData)
}

export const isConnected = () => {
    
    const localStorage = window.localStorage
    const userString = localStorage.getItem(USER_KEY)
    if(userString) {
        const user = JSON.parse(userString)
        if(user.id) {
            return true
        }
    }

    return false
}

export const logout = () => {
    const localStorage = window.localStorage
    localStorage.removeItem(USER_KEY)
}