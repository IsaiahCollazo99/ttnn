import React, { useEffect, useState } from 'react';
import defaultQueries from "./dictionary/defaultQueries";
import axios from 'axios';
import SearchBar from './SearchBar';
import Message from "./Message"

const MainFeed = () => {
    const [ statuses, setStatuses ] = useState([]);
    const [ userQueries, setUserQueries ] = useState({});

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
            setStatuses(res.data.statuses);
            // debugger
        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch = ( search ) => {
        if(!userQueries[search]) {
            const newUserQueries = {...userQueries};
            newUserQueries[search] = search;
            setUserQueries({...newUserQueries});
            // debugger;
        } else {
            debugger;
        }
    }

    useEffect(() => {
        getTweets();
    }, [ userQueries ])

    const handleProfClicked =(e)=>{
        window.open(e, "_blank")
        //status.user.entities.url["urls"][0].url
    }
    const statusList = statuses.map(status => {
        debugger
        return (
            <div className="status" key={status.id}>
                <div className="user-profile" onClick={()=>handleProfClicked(`https://twitter.com/${status.user.screen_name}`)}>
                 <img src={status.user.profile_image_url} alt="user-Profile-Img"/> 
                 {status.user.name}
                 @{status.user.screen_name}
                </div>
                <div className="message" >
                <Message text={status.full_text} id={status.id_str} />
    
                <p>
                {status.created_at.slice(0,19)}
                </p> <i class="fa fa-refresh">{status.retweet_count}</i> <i class="fa fa-heart">{status.favorite_count}</i>
                
                <br></br>
                </div>
            </div>
        )
    })

    

    return (
        <>
            <SearchBar handleSearch={handleSearch}/>
            <div>
                <p>Feed Page</p>
                {statusList}
            </div>
        </>
    )
}


export default MainFeed
