import React, { useEffect, useState } from 'react';
import { fullStackPool } from "./dictionary/fullStackPool";
import axios from 'axios';

const MainFeed = () => {
    const [ statuses, setStatuses ] = useState([]);
    
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
        <div>
            <p>Feed Page</p>
            {statusList}
        </div>
    )
}


export default MainFeed
