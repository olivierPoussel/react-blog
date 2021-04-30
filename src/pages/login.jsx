import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../App'
import InputLabel from '../components/form/inputLabel'
import { loginApi } from '../service/ApiService'
import { formHandleChange } from "../service/formService"
import { setUserLocalStorage } from '../service/userService'

export default function Login(props) {
    const [login, setLogin] = useState({ email: '', pwd: '' })
    const [error, seterror] = useState(false)
    const context = useContext(AuthContext)

    const handleChange = (event) => {
        formHandleChange(event, login, setLogin)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = await loginApi(login.email, login.pwd)
        console.log(data)
        // if (data.length > 0) {
        if (data) {
            //enregister le user dans le localStorage
            setUserLocalStorage(data)
            seterror(false)
            context.setConnected(true)
            props.history.push('/')
        } else {
            //error
            seterror(true)
            context.setConnected(false)
        }
    }
    return (
        <div>
            <h1>Connexion</h1>
            {
                error && (
                    <div className="alert alert-dismissible alert-danger ">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Oh snap!</strong> <a href="#" className="alert-link">Change a few things up</a> and try submitting again.
                    </div>
                )
            }

            <form onSubmit={handleSubmit}>
                <InputLabel change={handleChange} value={login.email} type="email" label="Email" name="email" placeholder="Votre email" />
                <InputLabel change={handleChange} value={login.pwd} type="password" label="Mot de passe" name="pwd" placeholder="Votre mot de passe" />
                <button className="btn btn-primary my-3">Connexion</button>
            </form>
        </div>
    )
}
