import React from 'react';
import '../css/status.css';

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
        } else return fullText;
    }

    const textOnly = removeLink();
    
    return (
        <div className="status" key={id}>
            <a href={`https://twitter.com/i/web/status/${id}`} target="_blank" rel="noopener noreferrer">
            <div className="user">
                <a href={`https://twitter.com/${user.screen_name}`} target="_blank" rel="noopener noreferrer">
                    <img src={profilePicture} alt={`${user.name}`}/> 

                    <div className="usersNames">
                        <p className="userName">{user.name}</p>
                        <p className="userScreenName">@{user.screen_name}</p>
                    </div>
                </a>
            </div>


            <div className="statusInfo" >
                <p className="statusText">{textOnly}</p>

                <p className="createdAtDate">
                    {createdAtCondensed}
                </p> 
                
                <div className="statusActivity">
                    <i className="fa fa-refresh">
                        <p>{retweetCount}</p>
                    </i> 

                    <i className="fa fa-heart">
                        <p>{favoriteCount}</p>
                    </i>
                </div>
            </div>
            </a>
        </div>
        )
}

export default Status;