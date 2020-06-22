import React from 'react';
import styled from 'styled-components'

const FilterBar = styled.div`
    position: sticky;
    top: 16rem;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-contents: flex-start;
    background-color: #121212;
    padding: 1rem 0 1rem 0
`

const FilterItem = styled.div`
    background-color: #E63E62;
    font-family: 'Teko';
    border: 2px solid white;
    border-radius: 1rem;
    padding: 1rem;
    font-size: 2rem;
    cursor: pointer;
    margin: 1rem;
    & > span {
        font-size: 2rem;
        margin-left: 1rem;
    }
    &:hover,&:focus,&:active {
            border: 2px solid #4BBFF8;
            box-shadow: 0 0 2px 2px #4BBFF8;
            & > span {
                color: #4BBFF8;
            }
        };
`


const UserFilter = ({ userQueries, onQueryDelete }) => {

    const displayUserQueries = () => {
        const userQueriesList = [];
        for(let key in userQueries) {
            const value = userQueries[key];
            userQueriesList.push(
                <FilterItem title={value} key={key} onClick={onQueryDelete}>
                    {value.toUpperCase()} <span>X</span>
                </FilterItem>)
        }
        return userQueriesList;
    }

    const userQueriesList = displayUserQueries();
    
    return (
        <FilterBar >
            {userQueriesList}
        </FilterBar>
    )
}

export default UserFilter;