import React from 'react'
import styled from 'styled-components'

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
    font-size: 6rem;
    font-family: 'Teko';
    line-height: 6rem;
    &:hover {
        color: #E63E62;
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`


const Header = () => {
    
    const handleScrollToTop = () => {
            window.scrollTo({top: 0, behavior: 'smooth'});     
    }
    

    return (
        <StyledHeader>
            <Logo src={logoImage} alt='Tech Tonic Logo' />
            <Name onClick={handleScrollToTop}> TECH TONIC </Name>
        </StyledHeader>
    )
}



export default Header;
