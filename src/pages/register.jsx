import axios from 'axios'
import React, { useState } from 'react'
import InputLabel from '../components/form/inputLabel'

export default function Register(props) {
    console.log(props)
    const [credentials, setCredentials] = useState({email: '', pwd: ''})

    const handleChange =  (event) => {
        console.log(event)
        const value = event.currentTarget.value
        const name = event.currentTarget.name

        setCredentials({...credentials, [name]: value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit !')
        //ajax
        const url = 'http://localhost:3004/users'
        const result = axios.post(url, credentials)
        result.then(
            (response) => {
                console.log(response)
                const data = response.data
                const stringData = JSON.stringify(data)
                const localStorage = window.localStorage
                localStorage.setItem('user', stringData)
                props.history.push('/')
            }
            )
    }
    return (
        <form onSubmit={handleSubmit}>
            <InputLabel name="email" value={credentials.email} change={handleChange} type="Email" label="Email" placeholder="votre adresse email"/>
            <InputLabel name="pwd" value={credentials.pwd} change={handleChange} type="password" label="Mot de passe" placeholder="votre mot de passe"/>
            <button className="btn btn-primary mb-3">Inscription</button>
        </form>
    )
}
