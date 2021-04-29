import { getInStore, removeInStore, setInStore, USER_KEY } from "./store"


export const setUserLocalStorage = (user) => {
    setInStore(USER_KEY ,user)
}

export const isConnected = () => {

    const user = getInStore(USER_KEY)
    if(user) {
        if(user.id) {
            return true
        }
    }

    return false
}

export const logout = () => {
    removeInStore(USER_KEY)
}