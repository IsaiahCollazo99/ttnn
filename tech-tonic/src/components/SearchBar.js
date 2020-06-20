import React, { Component } from 'react'
import "../css/search.css"

const SearchBar =()=>{

        return (
            <div>
                <form>
                <button type="submit"><i className="search"></i></button>
                <input type="text" placeholder="Search for #hashtag or keyword" name="search"></input>
                </form>
            </div>
        )
    }

export default SearchBar
