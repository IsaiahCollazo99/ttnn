import React from 'react'
import "../css/search.css"
import {useHistory} from "react-router-dom"
import { useInput } from "../util/useInput";
import axios from "axios"

const SearchBar =()=>{

    const history = useHistory()
    const search = useInput("")

    const handleSubmit=(e)=>{
        e.preventdefault()
        if(search.value[0]==="#"){ //starting # hashtag search
            console.log(search.value.slice(1))
        }else{ //else search keyword
            console.log(search.value)
        }
        history.push("/results")
    }

        return (
            <div>
                <form className="search" onSubmit={handleSubmit}>
                <button type="submit"><i className="fa-search"></i></button>
                <input type="text" placeholder="#hashtag or keyword" name="search" {...search} required></input>
                </form>
            </div>
        )
    }

export default SearchBar
