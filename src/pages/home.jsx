import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/home/card'
import { getAllArticles } from '../service/ApiService'

export default function Home() {
    const [post, setpost] = useState([])
    useEffect(async () => {
        const data = await getAllArticles()
        if(data) {
            setpost(data)
        }
    }, [])

    return (
        <>
            <main className="container">
                <h1>Mon blog</h1>
                {post.map((post) => <Link key={post.id} to={{pathname:'/articles/'+post.id,state: {article: post}}}><Card article={post} /></Link>)}
            </main>
        </>
    )
}
