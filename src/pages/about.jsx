import React from 'react'
import aboutStyle from './about.module.css'

export default function About() {
    return (
        <section className={aboutStyle.about}>
            <h1>A props</h1>
            <p className={aboutStyle.aboutSize}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam odio sapiente cum debitis veniam blanditiis ipsam impedit atque vitae, ab corporis possimus. Labore laudantium placeat voluptates. Animi repellendus sed sequi.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam odio sapiente cum debitis veniam blanditiis ipsam impedit atque vitae, ab corporis possimus. Labore laudantium placeat voluptates. Animi repellendus sed sequi.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam odio sapiente cum debitis veniam blanditiis ipsam impedit atque vitae, ab corporis possimus. Labore laudantium placeat voluptates. Animi repellendus sed sequi.</p>
        </section>
    )
}
