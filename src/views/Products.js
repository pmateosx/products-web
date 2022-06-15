import ProductCard from "../components/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchAllProducts } from "../store/features/products/productsListSlice"
import styled from "@emotion/styled"


const CardContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
`

const ProductView = () => {
    const { products }  = useSelector(state => state.productsList);
    const dispatch = useDispatch()

    useEffect(()=>{
       dispatch(fetchAllProducts()) 
    },[dispatch] )

    return (
        <CardContainer>
        {products.length > 0 ? (products.map((item, index) => (
            <ProductCard
                key={item._id} 
                name={item.name} 
                description={item.description} 
                image={item.image} 
                price={item.price} 
                used={item.used}
            />
        ))) : 'Not products yet'}
        </CardContainer>
    )
}

export default ProductView