import React from 'react';


const DecorTitle = (
    {title, more}:
    {
        title: string, 
        more?: string
    }
) => {
    return (
        <div className="custom_title__wrapper">
            <h2 className="title">{title}</h2>
            <p>{more}</p>
        </div>
    )
}

export default DecorTitle