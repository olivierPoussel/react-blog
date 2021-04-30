import axios from "axios";

export const STRAPI = 'http://localhost:1337/'
const JSON_SERVER = 'http://localhost:3004/'
const BASE_URL = JSON_SERVER


export async function contactApi(contact) {
    const url = BASE_URL + 'contacts'
    const result = await axios.post(url, contact)

    return result;
}

export async function getAllArticles() {
    const response = await axios.get(STRAPI + 'articles')

    return response.data
}

export async function loginApi(email, pwd) {
    // const url = BASE_URL + `users?email=${email}&pwd=${pwd}`
    // const result = await axios.get(url)
    const url = STRAPI + 'auth/local'
    const data = {
        identifier: email,
        password: pwd
    }
    const result = await axios.post(url, data)

    if(result.data && result.data.jwt) {
        axios.defaults.headers['Authorization'] = 'Bearer ' + result.data.jwt
    }

    return result.data
}

export async function getArticleById(id) {
    const result = await axios.get(STRAPI + 'articles/' + id)

    return result.data
}

export async function registerApi(data) {
    // const url = BASE_URL + 'users'
    const url = STRAPI + 'auth/local/register'
    const dataStrapi = {
        username: 'Strapi user',
        email: data.email,
        password: data.pwd,
    }
    // const result = await axios.post(url, data)
    try {
        const result = await axios.post(url, dataStrapi)

        return result.data
    } catch (error) {
        console.log(error);
    }
}