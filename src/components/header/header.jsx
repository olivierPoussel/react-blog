import React from 'react'
import MenuLi from './menuLi'

export default function Header() {
    const menu = [
        "Home",
        "Features",
        "Pricing",
        "About",
    ]

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Bog</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                    {menu.map(nom => <MenuLi nom={nom} />)}
                </ul>
            </div>
        </nav>
    )
}
