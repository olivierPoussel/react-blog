import React from 'react'

export default function MenuLi(props) {
    return (
        <li className="nav-item">
            <a className="nav-link" href="#">{props.nom}</a>
        </li>
    )
}
