import styled from "@emotion/styled"
import { Link } from "react-router-dom"

const HomeContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 100vw;
    position: relative;
`
const H1 = styled.h1`
    font-size: 4.5rem;
    font-weight: 800;
    text-align: center;
    width: 40rem;
    color: black;
    z-index: 1;
    :hover{
        background: radial-gradient(circle at 0% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    @media (max-width: 768px){
        font-size: 2.5rem;
        width: 20rem;
    }
`
const Button = styled(Link)`
    background-color: #3A78F2;
    padding: 1rem 3rem;
    border-radius: 15px;
    color: white;
    text-decoration: none;
    z-index: 1;
    transition: transform .2s;
    :hover{
        transform: scale(1.1);
    }
`

const Home = () => {
    return (
        <HomeContainer>
            <H1>Welcome to Product App</H1>
            <Button to={"/product"}>View Products</Button>
        </HomeContainer>
    )
}

export default Home