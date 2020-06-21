import React from 'react'
import styled from 'styled-components'

import logoImage from '../assets/TechTonic-LogoOnly.png'


const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #121212;
    padding: 2rem;
`

const Logo = styled.img`
    height: 8rem;
    width: 8rem;
`

const Name = styled.p`
    font-size: 6rem;
    font-family: 'Teko';
    line-height: 6rem
`


const Header = () => {
    return (
        <StyledHeader>
            <Logo src={logoImage} alt='Tech Tonic Logo' />
            <Name > TECH TONIC </Name>
        </StyledHeader>
    )
}



export default Header;
