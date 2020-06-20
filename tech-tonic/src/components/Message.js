import React, { Component } from 'react'

const Message =({text,id})=> {
    // debugger

    const handleProfClicked =(e)=>{
        window.open(`https://twitter.com/i/web/status/${e}`, "_blank")
    }
    const textOnly = ()=>{
 
        if(text.slice(text.length-23, text.length-10) === "https://t.co/"){
            return (text.slice(0,text.length-24))
        }else{
            return text
        }
    }
        return (
            <div onClick={(e)=>handleProfClicked(id)}>
                    {textOnly()}
            </div>
        )
    }


export default Message
