import React, { useState } from 'react'
import "../css/search.css"

const SearchBar = ({ handleSearch })=>{
    const [ search, setSearch ] = useState("");

    const handleSubmit = ( e ) => {
        e.preventDefault();
        handleSearch(search);
        setSearch("");
    }

    const handleChange = ( e ) => {
        setSearch(e.target.value);
    }

    const searchObj = {
        onChange: handleChange,
        value: search
    }

        return (
            <div>
                <form className="search" onSubmit={handleSubmit}>
                    <button type="submit"><i className="fa-search"></i></button>
                    <input type="search" placeholder="#hashtag or keyword" {...searchObj} required />
                </form>
            </div>
        )
    }

export default SearchBar
