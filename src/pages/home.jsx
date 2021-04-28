import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {
    const [post, setpost] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3004/posts')
            .then((response) => { setpost(response.data) })
            .catch((error) => { console.log(error); })
    }, [])

    return (
        <>
            <main className="container">
                <h1>Mon blog</h1>
                {post.map((post) => <h2 key={post.id}>{post.title}</h2>)}
            </main>
        </>
    )
}
