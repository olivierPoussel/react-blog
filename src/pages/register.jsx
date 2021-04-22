import React, { useState } from 'react'
import InputLabel from '../components/form/inputLabel'

export default function Register() {
    const [credentials, setCredentials] = useState({email: '', pwd: ''})

    const handleChange =  (event) => {
        console.log(event)
        const value = event.currentTarget.value
        const name = event.currentTarget.name

        setCredentials({...credentials, [name]: value})
    }
    return (
        <form>
            <InputLabel name="email" value={credentials.email} change={handleChange} type="Email" label="Email" placeholder="votre adresse email"/>
            <InputLabel name="pwd" value={credentials.pwd} change={handleChange} type="password" label="Mot de passe" placeholder="votre mot de passe"/>
            <button className="btn btn-primary mb-3">Inscription</button>
        </form>
    )
}
