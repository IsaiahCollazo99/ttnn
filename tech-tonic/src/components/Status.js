import React from 'react';
import Message from "./Message"

const Status = ({ status }) => {
    const { 
        user, 
        full_text: fullText,
        id_str: id,
        created_at: createdAt,
        retweet_count: retweetCount,
        favorite_count: favoriteCount
    } = status;

    const {
        profile_image_url: profilePicture,
    } = user;

    const createdAtCondensed = createdAt.slice(0, 19);

    const removeLink = () => {
        const textEnd = fullText.slice(fullText.length - 23, fullText.length - 10)
        if (textEnd === "https://t.co/") {
            const onlyText = fullText.slice(0, fullText.length - 24)
            return onlyText;
        }
    }

    const textOnly = removeLink();
    
    return (
        <div className="status" key={id}>
            <div className="user">
                <img src={profilePicture} alt={`${user.name} Picture`}/> 

                <div className="usersNames">
                    <a href={`https://twitter.com/${user.screen_name}`} target="_blank">
                        {user.name}
                    </a>
                    <p className="userScreenName">@{user.screen_name}</p>
                </div>

            </div>
            <div className="statusText" >
                <a href={`https://twitter.com/i/web/status/${id}`}>
                    {textOnly}
                </a>

                <p className="createdAtDate">
                    {createdAtCondensed}
                </p> 
                
                <div className="statusActivity">
                    <i className="fa fa-refresh">
                        {status.retweet_count}
                    </i> 

                    <i class="fa fa-heart">
                        {status.favorite_count}
                    </i>
                </div>

                
                
            
                <br/>
            </div>
        </div>
    )
}

export default Status;