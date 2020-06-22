import React, { useEffect, useState } from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import defaultQueries from "./dictionary/defaultQueries";
import axios from 'axios';
import SearchBar from './SearchBar';
import Message from "./Message"
import UserFilter from './UserFilter';



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

    const handleProfClicked =(e)=>{
        window.open(e, "_blank")
    }

    const getStatusList = () => {
        // debugger
        const statusList = [];
        let i = 0
        for(i; i < statuses.length; i++ ) {
            const status = statuses[i];
            if(i < statusLimit ) {
                statusList.push(
                    <div status={status} key={status.id}>
                        <div className="user-profile" onClick={()=>handleProfClicked(`https://twitter.com/${status.user.screen_name}`)}>
                            <img src={status.user.profile_image_url} alt="user-Profile-Img"/> 
                            {status.user.name}
                            @{status.user.screen_name}
                        </div>
                        <div className="message" >
                            <Message text={status.full_text} id={status.id_str} />
            
                            <p>
                                {status.created_at.slice(0,19)}
                            </p> <i className="fa fa-refresh">{status.retweet_count}</i> <i class="fa fa-heart">{status.favorite_count}</i>
                            <br/>
                        </div>
                    </div>
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
                <p>End of Search Results</p>
                 <br></br>
                </>
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
        <>
            <SearchBar handleSearch={handleSearch} handleRefresh={getTweets} />
            <UserFilter userQueries={userQueries} onQueryDelete={onQueryDelete}/>
            <div className="feedPage">
                {statusList}
            </div>
        </>
    )
}


export default MainFeed
