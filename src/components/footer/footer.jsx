import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-secondary">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link className="nav-link" to="/">lien vers qch</Link></li>
                <li><Link className="nav-link" to="/">lien vers qch</Link></li>
                <li><Link className="nav-link" to="/">lien vers qch</Link></li>
            </ul>
        </footer>
    )
}
