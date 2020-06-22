import React from 'react'
import styled from 'styled-components'

import { mediaQueries } from '../App'

import logoImage from '../assets/TechTonic-LogoOnly.png'


const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #121212;
    padding: 1rem;
`

const Logo = styled.img`
    height: 8rem;
    width: 8rem;
`

const Name = styled.p`
    padding-top: 1rem;
    font-size: 8rem;
    font-family: 'Teko';
    line-height: 8rem;
    &:hover {
        color: #E63E62;
        cursor: pointer;
    };
    &:focus {
        outline: none;
    };
    ${ (props) => props.tablet && mediaQueries[props.tablet](
    `
        font-size: 5rem;
        line-height: 5rem
    `
    )}
};
`


const Header = () => {
    
    const handleScrollToTop = () => {
            window.scrollTo({top: 0, behavior: 'smooth'});     
    }
    

    return (
        <StyledHeader>
            <Logo src={logoImage} alt='Tech Tonic Logo' />
            <Name onClick={handleScrollToTop} tablet="tablet"> TECH TONIC </Name>
        </StyledHeader>
    )
}



export default Header;
