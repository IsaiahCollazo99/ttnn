import React from 'react'

const Message =({ text, id })=> {
    const textOnly = () => {
        if(text.slice(text.length-23, text.length-10) === "https://t.co/"){
            return (text.slice(0,text.length-24))
        }else{
            return text
        }
    }

    const textRemovedLink = textOnly();
        return (
            <a href={`https://twitter.com/i/web/status/${id}`}>
                    {textRemovedLink}
            </a>
        )
    }


export default Message
