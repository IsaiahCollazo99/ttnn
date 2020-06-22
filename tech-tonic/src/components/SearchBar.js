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
            <form className="search" onSubmit={handleSubmit}>
                <button type="submit"><i className="fa fa-search"></i></button>
                <input type="search" placeholder="#hashtag or keyword" {...searchObj} required />
            </form>
        )
    }

export default SearchBar
