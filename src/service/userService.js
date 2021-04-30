import axios from "axios"
import { getInStore, JWT, removeInStore, setInStore, USER_KEY } from "./store"


export const setUserLocalStorage = (data) => {
    setInStore(USER_KEY ,data.user)
    setInStore(JWT ,data.jwt)
}

export const isConnected = () => {

    const user = getInStore(USER_KEY)
    if(user) {
        if(user.id) {
            axios.defaults.headers['Authorization'] = 'Bearer ' + getInStore(JWT)

            return true
        }
    }

    return false
}

export const logout = () => {
    removeInStore(USER_KEY)
    removeInStore(JWT)
}