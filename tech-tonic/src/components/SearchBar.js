import React from 'react'
import "../css/search.css"
import { useInput } from "../util/useInput";


const SearchBar =()=>{
    const search = useInput("")

    const handleSubmit=(e)=>{
        if(search.value[0]==="#"){ //starting # hashtag search
            console.log(search.value.slice(1))
        }else{ //else search keyword
            console.log(search.value)
        }
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
