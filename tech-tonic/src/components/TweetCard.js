import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    background-color: #282828;
`


const TweetCard = ({status}) => {
    return (
        <Card>
            <UserHeader className="user-profile" onClick={()=>handleProfClicked(`https://twitter.com/${status.user.screen_name}`)}>
                <img src={status.user.profile_image_url} alt="user-Profile-Img"/> 
                {status.user.name}
                @{status.user.screen_name}
            </UserHeader>
            <ContentWrapper>
                <Message text={status.full_text} id={status.id_str} />
                <p>{status.created_at.slice(0,19)}</p> 
                <i className="fa fa-refresh">{status.retweet_count}</i> <i class="fa fa-heart">{status.favorite_count}</i>
            </ContentWrapper>
        </Card>
    )
}

export default TweetCard;
