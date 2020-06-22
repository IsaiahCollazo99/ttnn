import React, { useState } from 'react'

import styled from 'styled-components'

const StyledSearchBar = styled.div`
    position: sticky;
    display: flex;
    top: 10rem;
    flex-direction: row;
    justify-content: center;
    background-color: #121212;
    padding: 1rem;
    width: 100%;
`

const StyledForm = styled.form`
    display: flex;
    flex: 1;
    background-color: #121212;
`

const StyledInput = styled.input`
    flex: 1;
    font-size: 2rem;
    line-height: 2rem;
    border-radius: 1rem;
    border: 2px solid #121212;
    text-align: center;
    margin-right: 1rem;
    &:hover {
        border: ${ (props) => props.hover ? '2px solid #4BBFF8' : null };
        box-shadow: 0 0 2px 2px #4BBFF8;
    }
    &:focus {
        outline: none;
        border: 2px solid #4BBFF8;
        box-shadow: 0 0 2px 2px #4BBFF8;
    }
    font-family: 'Teko'
`

const StyledButton = styled.button`
    height: 4rem;
    width: 4rem;
    background-color: #E63E62;
    border-radius: 1rem;
    font-size: 2rem;
    color: white;
    border: 2px solid #121212;
    &:hover {
        cursor:pointer;
        color: #4BBFF8;
        border: ${ (props) => props.hover ? '2px solid #4BBFF8' : null }
    };
    &:focus {
        outline: none;
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
                <StyledButton hover onClick={handleRefresh} name="refresh button"><i className="fa fa-refresh"></i></StyledButton>
            </StyledSearchBar>
        )
    }

export default SearchBar
