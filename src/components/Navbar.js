import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

const Nav = styled.nav`
    position: fixed;
    height: 3rem;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
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
    return(
        <Nav>
            <Logo>
                <LinkLogo to='/'>
                    Logo
                </LinkLogo>
            </Logo>
            <Ul>
                <StyledLink to='/product'>Products</StyledLink>
                <StyledLink to='/newproduct'>Add Products</StyledLink>
             {/*    <NavLink>Add Product</NavLink> */}
            </Ul>
        </Nav>
    )
}

export default Navbar