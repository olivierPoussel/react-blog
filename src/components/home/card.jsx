import React from 'react'

export default function Card({article}) {
    return (
        <div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
            <div className="card-header">{article.title}</div>
            <div className="card-body">
                <h4 className="card-title">{article.category.label}</h4>
                <p className="card-text">{article.content}</p>
            </div>
        </div>
    )
}
