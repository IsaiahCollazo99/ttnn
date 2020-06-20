import React, { useEffect, useState } from 'react';
import defaultQueries from "./dictionary/defaultQueries";
import axios from 'axios';
import SearchBar from './SearchBar';

const MainFeed = () => {
    const [ statuses, setStatuses ] = useState([]);
    const [ userQueries, setUserQueries ] = useState({});
    const [ dictionary, setDictionary ] = useState({});
    
    const getTweets = async () => {
        try {
            let res = await axios.get("/api/tweets?search=javascript");
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
