import React, { useEffect, useState } from 'react';
import { fullStackPool } from "./dictionary/fullStackPool";
import axios from 'axios';
import Message from "./Message"

const MainFeed = () => {
    const [ statuses, setStatuses ] = useState([]);
    
    const getTweets = async () => {
        try {
            let res = await axios.get("/api/tweets?search=javascript");
            setStatuses(res.data.statuses);
            // debugger
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTweets();
    }, [])

    const handleProfClicked =(e)=>{
        window.open(e, "_blank")
        //status.user.entities.url["urls"][0].url
    }
    const statusList = statuses.map(status => {
        // debugger
        return (
            <div className="status" key={status.id}>
                <div className="user-profile" onClick={(e)=>handleProfClicked(status.user.url)}>
                 <img src={status.user.profile_image_url} alt="user-Profile-Img"/> 
                 {status.user.name}
                 @{status.user.screen_name}
                </div>
                <div className="message" >
                <Message text={status.full_text} id={status.id_str} />
    
                <p>
                {status.created_at.slice(0,19)}
                </p>
                <br></br>
                </div>
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
