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
<<<<<<< HEAD
                    <button type="submit"><i className="fa-search"></i></button>
                    <input type="search" placeholder="#hashtag or keyword" {...searchObj} required />
=======
                    <button type="submit"><i className="fa fa-search"></i></button>
                    <input type="search" placeholder="#hashtag or keyword" {...search} required></input>
>>>>>>> 85c4898439cc517147986ac879e9c57faa97c043
                </form>
            </div>
        )
    }

export default SearchBar
