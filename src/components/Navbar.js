import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"
import { FiPlus } from "react-icons/fi";


const Nav = styled.nav`
    position: fixed;
    height: 4rem;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    z-index: 10;
    box-shadow: 0px 1px 36px 0px rgba(0,0,0,0.04); 
    overflow-x: hidden;
    max-width: 100vw;
    @media (max-width: 768px){
        justify-content: space-evenly;
    }
`
const Logo = styled.div`
    padding: 0 2rem;
`
const LinkLogo = styled(NavLink)`
    font-size: 1rem;
    text-decoration: none;
    color: black;
    img{
        width: 9rem;
    }
`
const Ul = styled.ul`
    list-style: none;
    @media (max-width: 768px){
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
    }
`
const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-weight: 500;
    float: left;
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    :hover {
        background-color: #e2e2e2;
        border-radius: 15px;
        color: #494949;
    }
    @media(max-width: 768px){
        margin-right: 0;
    }
`
const StyledLinkAdd = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-weight: 500;
    float: left;
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    :hover {
        background-color: #e2e2e2;
        border-radius: 15px;
        color: #494949;
    }
    @media(max-width: 768px){
        display: none;
    }
`
const StyledLinkAddMobile = styled(NavLink)`
    display: none;
    text-decoration: none;
    color: black;
    font-weight: 500;
    padding: 0.5rem 0.5rem;
    :hover {
        background-color: #e2e2e2;
        border-radius: 50%;
        color: #494949;
    }
    @media(max-width: 768px){
        display: inline;
    }
`

const Navbar = () => {
    return(
        <Nav>
            <Logo>
                <LinkLogo to='/'>
                    <img alt="Logo" src="https://res.cloudinary.com/dfbloaduq/image/upload/v1655377195/products-images/lixrqztyjszltyhqdrsl.png"/>
                </LinkLogo>
            </Logo>
            <Ul>
                <StyledLink to='/product'>Products</StyledLink>
                <StyledLinkAdd to='/new-product'>Add Products</StyledLinkAdd>
                <StyledLinkAddMobile to='/new-product'><FiPlus/></StyledLinkAddMobile>
            </Ul>
        </Nav>
    )
}

export default Navbar