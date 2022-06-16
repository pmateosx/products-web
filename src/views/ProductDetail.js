import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../services/ProductService";
import { FiAlertCircle } from "react-icons/fi";

const DetailContainer = styled.section`
    display: flex;
    justify-content: center;
    min-width: 100vw;
    min-height: 100vh;
    margin-bottom: 4rem;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`
const Section = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 40%;
    @media (max-width: 768px) {
        width: 90%;
    }
`
const H2 = styled.h2`
    font-size: 2rem;
    width: 100%;
    text-align: left;
`
const ProductImage = styled.img`
    width: 100%;
    border-radius: 15px;
    @media (max-width: 768px) {
        height: auto;
    }
`
const SectionText = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 20rem;
    margin-left: 1.5rem;
    padding-top: 4rem;
    @media (max-width: 768px) {
        width: 90%;
    }
`
const Description = styled.p`
    font-size: 1rem;
    color: gray;
    margin-top: 0;
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
const Used = styled.div`
    background-color: #E1E1E1;
    font-size: 0.5rem;
    border-radius: 10px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    margin-top: -1rem;
    margin-bottom: 1rem;
`
const EditButton = styled(Link)`
    position: absolute;
    text-decoration: none;
    color: white;
    background-color: #3A78F2;
    padding: 0.5rem 2rem;
    font-size: 0.5rem;
    border-radius: 10px;
    bottom: 20px;
    right: 10px;
    transition: transform .2s;
    :hover{
        transform: scale(1.1);
    }
`
const Group = styled.div`
    position: relative;
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: -5rem;
    }
`

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProduct(id)
          .then(product => setProduct(product))
          .catch(error => {
            console.log(error)
            navigate('/product')
        })
      },[id, navigate])

    return (
      <DetailContainer>
        <Section>
            <H2>Product Detail</H2>
            <Group>
                <ProductImage src={product.image}/>
                <EditButton to={`/update-product/${product._id}`}>Edit</EditButton>
            </Group>
        </Section>
        <SectionText>
            <H2>{product.name}</H2>
            {product.used && (
                <Used><FiAlertCircle/>Used</Used>
            )}
            <Description>{product.description}</Description>
            <div>
                <Price>{product.price} <small>€</small></Price>
            </div>
        </SectionText>
      </DetailContainer>
    )
}

export default ProductDetail