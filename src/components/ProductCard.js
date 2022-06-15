import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { FiX, FiAlertCircle } from "react-icons/fi";
import { doDeleteProduct } from "../store/features/products/productsListSlice";
import { useDispatch } from "react-redux";

const Card = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    margin: 1rem;
    width: 20rem;
    height: 27rem;
    max-height: 27rem;
    background-color: white;
    box-shadow: 1px 2px 25px 0px rgba(0,0,0,0.1);
    border-radius: 30px;
`
const Image = styled.div`
    border-radius: 20px;
    width: 100%;
    height: 310px;
    overflow: hidden;
    border: 1px solid #E1E1E1;
    margin-bottom: 1rem;
    img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
  }
`
const Title = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    color: black;
    width: 100%;
    margin: 0;
`
const Price = styled.h3`
    font-size: 3rem;
    font-weight: 500;
    color: #E1E1E1;
    width: 100%;
    text-align: right;
    margin: 0;
    small {
        font-size: 1.5rem;
        margin: 0;
    }
`
const Description = styled.p`
    margin: 0.5rem 0;
    height: 80px;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`
const Section = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    margin-top: 1rem;
`
const Button = styled(Link)`
    background-color: #3A78F2;
    padding: 1rem 3rem;
    border-radius: 15px;
    text-decoration: none;
    color: white;
    transition: transform .2s;

    :hover{
        transform: scale(1.1);
    }
`
const Close = styled.i`
    position: absolute;
    top: 40px; 
    right: 40px; 
    border-radius: 50%;
    padding: 0.5rem;
    font-size: 0.5rem;
    background-color: #E1E1E1;

    :hover{
        cursor: pointer;
    }
`
const Used = styled.div`
    position: absolute;
    top: 41px; 
    right: 70px; 
    background-color: #E1E1E1;
    font-size: 0.5rem;
    border-radius: 10px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
`

const ProductCard = ({name, description, price, used, image, id}) => {
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(doDeleteProduct(id))
    }
    return(
        <Card>
            {used && (
                <Used><FiAlertCircle/>Used</Used>
            )}
            <Close onClick={()=> handleDelete(id)}><FiX/></Close>
            <Image>
                <img src={image} alt={name}/>
            </Image>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <Section>
                <Button to={`/products/${id}`}>View</Button>
                <Price>{price}<small>€</small></Price>
            </Section>
           
        </Card>
    )
}

export default ProductCard