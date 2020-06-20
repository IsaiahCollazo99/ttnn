import React, { useEffect, useState } from 'react';
import defaultQueries from "./dictionary/defaultQueries";
import axios from 'axios';
import SearchBar from './SearchBar';

const MainFeed = () => {
    const [ statuses, setStatuses ] = useState([]);
    const [ userQueries, setUserQueries ] = useState({});

    const objectLength = ( object ) => {
        return Object.keys(object).length;
    }
    
    const getTweets = async () => {
        try {
            const dictionary = objectLength(userQueries) ? userQueries : defaultQueries;
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

            let encodedQuery = encodeURIComponent(query);
            
            let res = await axios.get(`/api/tweets?search=${encodedQuery}`);
            setStatuses(res.data.statuses);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTweets();
    }, [])

    const statusList = statuses.map(status => {
        return (
            <div className="status">
                {status.text}
            </div>
        )
    })

    return (
        <>
            <SearchBar />
            <div>
                <p>Feed Page</p>
                {statusList}
            </div>
        </>
    )
}


export default MainFeed
