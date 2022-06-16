import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

const Nav = styled.nav`
    position: fixed;
    height: 4rem;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    z-index: 10;
    box-shadow: 0px 1px 36px 0px rgba(0,0,0,0.02) 
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
                <StyledLink to='/new-product'>Add Products</StyledLink>
             {/*    <NavLink>Add Product</NavLink> */}
            </Ul>
        </Nav>
    )
}

export default Navbar