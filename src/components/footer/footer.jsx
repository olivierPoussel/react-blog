import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { formHandleChange } from '../../service/formService'
import {STRAPI} from '../../service/ApiService'

export default function Footer() {
    const [email, setemail] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post(STRAPI+ 'newsletters', email)
        .then((response) => console.log(response))
        .catch((error) => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
        })
    }
    const handleChange = (event) => {
        formHandleChange(event, email, setemail)
    }
    return (
        <footer className="bg-secondary d-flex">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link className="nav-link" to="/">lien vers qch</Link></li>
                <li><Link className="nav-link" to="/">lien vers qch</Link></li>
                <li><Link className="nav-link" to="/">lien vers qch</Link></li>
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" onChange={handleChange}/>
                <button type="submit" className="btn btn-secondary mx-3">Inscription</button>
            </form>
        </footer>
    )
}
