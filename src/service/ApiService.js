import axios from "axios";

const BASE_URL = 'http://localhost:3004/'


export async function contactApi(contact) {
    const url = BASE_URL+'contacts'
    const result = await axios.post(url, contact)

    return result;
}

export async function getAllArticles() {
    const response =  await axios.get(BASE_URL+'posts')

    return response.data
}

export async function loginApi(email, pwd) {
    const url = BASE_URL + `users?email=${email}&pwd=${pwd}`
    const result = await axios.get(url)

    return result.data
}

export async function getArticleById(id) {
    const result = await axios.get(BASE_URL + 'posts/'+ id)
    
    return result.data
}

export async function registerApi(data) {
    const url = BASE_URL + 'users'
    const result = await axios.post(url, data)

    return result.data    
}