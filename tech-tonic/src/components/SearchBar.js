import React from 'react'
import "../css/search.css"
import { useInput } from "../util/useInput";


const SearchBar =()=>{
    const search = useInput("")

    const handleSubmit=(e)=>{
                
    }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                <button type="submit"><i className="search"></i></button>
                <input type="text" placeholder="#hashtag or keyword" name="search" {...search}></input>
                </form>
            </div>
        )
    }

export default SearchBar
