import React from 'react'
import "../css/search.css"
import { useInput } from "../util/useInput";

const SearchBar = ({ handleSearch })=>{

    const search = useInput("")

    const handleSubmit = ( e ) => {
        e.preventDefault();
        handleSearch(search.value);
    }

        return (
            <div>
                <form className="search" onSubmit={handleSubmit}>
                    <button type="submit"><i className="fa fa-search"></i></button>
                    <input type="search" placeholder="#hashtag or keyword" {...search} required></input>
                </form>
            </div>
        )
    }

export default SearchBar
