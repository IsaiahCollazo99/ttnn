import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
    display: flex;
    height: 5rem;
    margin: 1rem;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

const Logo = styled.img`

`

const Name = styled.h1`
    font-size: 6rem;
    font-family: 'Teko';
    text-align: justify;
`

const Header = () => {
    return (
        <StyledHeader>
            <Logo src='../../public/assets/TechTonic-LogoOnly.png' alt='Tech Tonic Logo' />
            <Name> TECH TONIC </Name>
        </StyledHeader>
    )
}



export default Header;
