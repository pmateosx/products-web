import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

const Nav = styled.nav`
    position: fixed;
    height: 3rem;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    z-index: 10;
`
const Logo = styled.div`
    padding: 0 2rem;
`
const LinkLogo = styled(NavLink)`
            font-size: 1rem;
        text-decoration: none;
        color: black;
`

const Ul = styled.ul`
    list-style: none;
`
const StyledLink = styled(NavLink)`
        text-decoration: none;
        color: black;
        float: left;
        margin-right: 1rem;
`

const Navbar = () => {
    const [error, setError] = useState(false)
    
    return(
        <Nav>
            <Logo>
                <LinkLogo to='/'>
                    Logo
                </LinkLogo>
            </Logo>
            <Ul>
                <StyledLink to='/product'>Products</StyledLink>
                <StyledLink to='/new-product'>Add Products</StyledLink>
             {/*    <NavLink>Add Product</NavLink> */}
            </Ul>
        </Nav>
    )
}

export default Navbar