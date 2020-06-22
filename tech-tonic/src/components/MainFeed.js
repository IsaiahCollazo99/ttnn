import React, { useEffect, useState } from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import defaultQueries from "./dictionary/defaultQueries";
import axios from 'axios';
import SearchBar from './SearchBar';
import UserFilter from './UserFilter';
import "../css/refresh.css"
import Status from './Status';

const MainFeed = () => {
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
        // debugger
        const statusList = [];
        let i = 0
        for(i; i < statuses.length; i++ ) {
            const status = statuses[i];
            if(i < statusLimit ) {
                statusList.push(
                    <Status status={status} />
                )
            } 
            else{
                break
            }
        }
        if (i>99){
                statusList.push(
                <>
                <hr></hr>
                 <br></br>
                <p>You reach to the end of search results.</p>
                 <br></br>
                </>
                )    
            }
        return statusList;
    }

    const statusList = getStatusList();

    const onQueryDelete = ( e ) => {
        const query = e.currentTarget.parentElement.title;
        const newUserQueries = {...userQueries};
        delete newUserQueries[query];
        setUserQueries(newUserQueries);
    }

    return (
        <>
            <SearchBar handleSearch={handleSearch} />
            <UserFilter userQueries={userQueries} onQueryDelete={onQueryDelete} />
            <button onClick={getTweets} name="refresh button" className="refresh"><i class="fa fa-refresh"></i></button>
            <div className="feedPage">
                {statusList}
            </div>
        </>
    )
}


export default MainFeed
