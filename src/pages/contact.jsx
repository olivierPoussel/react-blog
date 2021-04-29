import axios from 'axios'
import React, { useState } from 'react'
import InputLabel from '../components/form/inputLabel'
import { contactApi } from '../service/ApiService'

export default function Contact(props) {
    const [contact, setcontact] = useState({email: '', message: ''})
    const handleChange =  (event) => {
        console.log(event)
        const value = event.currentTarget.value
        const name = event.currentTarget.name

        setcontact({...contact, [name]: value})
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('contact !')
        //ajax
        const result = await contactApi(contact)
        // console.log(result, typeof result)
        if(result && result.data) {
            props.history.push('/')
        }
    }
    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center flex-wrap my-5">
            <h2 className="mb-3">Contact</h2>
            <InputLabel change={handleChange} name="email" label="Email" type="email" value={contact.email} />
            <textarea onChange={handleChange} value={contact.message} name="message" id="message" cols="30" rows="10"></textarea>
            <button className="btn btn-primary btn-sm my-3" style={{width: 150}}>Envoyer</button>
        </form>
    )
}
