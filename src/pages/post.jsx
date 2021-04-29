import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getArticleById } from '../service/ApiService'

export default function Post({match, location,...rest}) {
    const defaultArticle = {
        id: 0,
        title: "title",
        content: "content",
        author: "author"

    }
    console.log(match)
    console.log(location)
    const [article, setArticle] = useState(false)
    useEffect(async () => {
        if(location.state && location.state.article) {
            setArticle(location.state.article)
        }else {
            const data = await getArticleById(match.params.id)
            setArticle(data)
        }
    }, [])
    return article ?(
        <section>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <p>{article.author}</p>
        </section>
    ) : (<h1>En cours de chargement</h1>)
}
