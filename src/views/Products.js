import ProductCard from "../components/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchAllProducts } from "../store/features/products/productsListSlice"
const ProductView = () => {
    const { products }  = useSelector(state => state.productsList);
    const dispatch = useDispatch()

    useEffect(()=>{
       dispatch(fetchAllProducts()) 
    },[dispatch] )

    return (
        <div>
        {products.length > 0 ? (products.map((item, index) => (
            <div key={index}>
                {item.name}
            </div>
        ))) : 'No products'}
            <ProductCard/>
        </div>
    )
}

export default ProductView