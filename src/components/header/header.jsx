import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { isConnected, logout } from '../../service/userService'
import MenuLi from './menuLi'
import {AuthContext} from '../../App'

export default function Header() {
    const menu = [
        {nom: "Home", url: "/"},
        {nom: "Contact", url: "/contact"},
        {nom: "A propos", url: "/about"},
        {nom: "Private", url: "/profil"},
    ]

    const context = useContext(AuthContext)
    
    if(!context.isConnected) {
        menu.push({nom: "Connexion", url: "/login"})
        menu.push({nom: "Inscription", url: "/register"})
    }

    const onLogout = (event) => {
        event.preventDefault()
        logout()
        context.setConnected(false)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Bog</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                    {menu.map((linkData, index) => <MenuLi key={index} nom={linkData.nom} url={linkData.url} />)}
                    {isConnected() && (<li className="nav-item"><a className="nav-link" href="#" onClick={onLogout}>Déconnexion</a></li>)}
                </ul>
            </div>
        </nav>
    )
}
