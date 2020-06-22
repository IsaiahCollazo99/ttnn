import React, { useEffect, useState } from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import defaultQueries from "./dictionary/defaultQueries";
import axios from 'axios';
import styled from 'styled-components'

import SearchBar from './SearchBar';
import UserFilter from './UserFilter';
import Status from './Status';

const MainFeed = styled.div`
    height: 100%
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: #121212;
`

const SearchResultEnd = styled.p`
    font-family: 'Teko';
    font-size: 3rem;
    font-weight: 700;
    color: #E63E62;
    margin: 2rem;
    background-color: #121212;
`

const Error = styled.div`
    font-family: 'Teko';
    font-size: 3rem;
    font-weight: 700;
    color: #E63E62;
    margin: 2rem;
    background-color: #121212;
    text-align: center;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
`

const SearchFeed = () => {
    const [ statuses, setStatuses ] = useState([]);
    const [ userQueries, setUserQueries ] = useState({});
    const [ statusLimit, setStatusLimit ] = useState(15);

    const objectLength = ( object ) => {
        return Object.keys(object).length;
    }

    const createQuery = ( dictionary ) => {
        let query = "";
            
        for(let key in dictionary) {
            const value = dictionary[key];
            if(value) {
                let queryEnd;
                if(objectLength(userQueries)) {
                    queryEnd = objectLength(userQueries) > 1 ? `${value} OR ` : value;
                } else {
                    queryEnd = `${value} OR `;
                }
                query += queryEnd;
            } else {
                continue;
            }
        }

        let queryEnd = query.slice(-4);
        if(queryEnd === " OR ") {
            query = query.slice(0, -4);
        }

        return query;
    }
    
    const getTweets = async ( ) => {
        try {
            const dictionary = objectLength(userQueries) ? userQueries : defaultQueries;
            
            const query = createQuery(dictionary);

            let encodedQuery = encodeURIComponent(query);
            
            let res = await axios.get(`/api/tweets?search=${encodedQuery}`);
            // debugger
            setStatuses(res.data.statuses);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch = ( search ) => {
        if(!userQueries[search]) {
            const newUserQueries = {...userQueries};
            newUserQueries[search] = search;
            setUserQueries({...newUserQueries});
        } else {
            // display error
        }
    }

    const handleScrollBottom = () => {
        // debugger
        setStatusLimit(statusLimit + 15);
    }

    useBottomScrollListener(handleScrollBottom);

    useEffect(() => {
        getTweets();
    }, [ userQueries ])

    const getStatusList = () => {
        const statusList = [];
        let i = 0
        for( i ; i < statuses.length; i++ ) {
            const status = statuses[i];
            if(i < statusLimit ) {
                statusList.push(
                    <Status status={status} key={status.id}/>
                )
            } 
            else{
                break
            }
        }
        if (i>=99){
                statusList.push(
                    <SearchResultEnd key={i}>End of Search Results.</SearchResultEnd>
                )    
            }
        return statusList;
    }

    const statusList = getStatusList();

    const onQueryDelete = ( e ) => {
        const query = e.currentTarget.title;
        const newUserQueries = {...userQueries};
        delete newUserQueries[query];
        setUserQueries(newUserQueries);
    }

    return (
        <MainFeed>
            <SearchBar handleSearch={handleSearch} getTweets={getTweets} />
            <UserFilter userQueries={userQueries} onQueryDelete={onQueryDelete} />
            {statusList}
            { !statusList.length ? <Error>NO SEARCH RESULTS</Error> : null}
        </MainFeed>
    )
}


export default SearchFeed
