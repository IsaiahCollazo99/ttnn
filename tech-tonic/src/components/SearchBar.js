import React, { useState } from 'react'
import "../css/search.css"

import styled from 'styled-components'

const StyledSearchBar = styled.div`
    position: sticky;
    top: 10rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #121212;
    padding: 2rem;
`

const StyledForm = styled.form`
    display: flex;
    flex: 1;
    background-color: #121212;
`

const StyledInput = styled.input`
    flex: 1;
    font-size: 1.5rem;
    line-height: 2rem;
    border-radius: 1rem;
    border: 2px solid #121212;
    text-align: center;
    & :hover {
        border: ${ (props) => props.hover ? '2px solid #4BBFF8' : null}
    }
`

const StyledButton = styled.button`
    height: 4rem;
    width: 4rem;
    background-color: #E63E62;
    border-radius: 1rem;
    font-size: 2rem;
    color: white;
    border: 2px solid #121212;
    & :hover {
        cursor:pointer;
        border: ${ (props) => props.hover ? '2px solid #4BBFF8' : null}
    }
`

const SearchBar = ({ handleSearch, handleRefresh })=>{
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
            <StyledSearchBar>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledInput hover type="search" placeholder="#hashtag or keyword" {...searchObj} required />
                    <StyledButton hover type="submit"><i className="fa fa-search"></i></StyledButton>
                </StyledForm>
                <StyledButton hover onClick={handleRefresh} name="refresh button"><i class="fa fa-refresh"></i></StyledButton>
            </StyledSearchBar>
        )
    }

export default SearchBar
