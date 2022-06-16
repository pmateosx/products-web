import styled from "@emotion/styled"
import { FiUploadCloud } from "react-icons/fi"
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct, updateProduct } from "../services/ProductService";


const NewProductContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100vw;
`
const Form = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: 1px solid rgb(228, 228, 228);
    color: rgb(118, 118, 118);
    font-size: 1rem;
    padding-left: 10px;
    margin-top:0.5rem;
`
const File = styled.input`
    display: none;
`
const Label = styled.label`
    display: flex;
    align-items: center;
    background-color: #BFBFBF;
    color: white;
    width: 100%;
    height: 43px;
    border-radius: 7px;
    font-size: 1.1rem;
    padding-left: 20px;
    gap: 1rem;
    cursor: pointer;
    margin-top: 2.2rem;
    `
const Group = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
const InputWrapper = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    input{
        width: 80%;
    }
`
const RadialInput = styled.input`
    cursor: pointer;
`

const RadialLabel = styled.label`
    cursor: pointer;
`
const RadialGroup = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
`
const SubmitButton = styled.button`
    margin-top: 2rem;
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: #3A78F2;
    color: white;
    width: 100%;
    height: 43px;
    border-radius: 7px;
    font-size: 1.1rem;
    cursor: pointer;
    border: none;
    transition: transform .2s;

    :hover{
        transform: scale(1.01);
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0.5rem;
    height: 96px;
    width: 100%;
`
const ErrorMessage = styled.small`
    color: red;
    margin: 0.2rem 0;
`
const schema = yup.object({
    name: yup.string().required('Name is required'),
    description: yup.string().required('Description is required'),
    price: yup.number().typeError('You must specify a number').required('Amount is required'),
    used: yup.boolean().required('Check a box'),
  }).required();

const EditProduct = () => {
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const { id } = useParams();
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProduct(id)
          .then(product => {
            setProduct(product)
            setValue('name', product.name)
            setValue('description', product.description)
            setValue('price', product.price)
            setValue('image', product.image)
        })
          .catch(error => {
            console.log(error)
            navigate('/product')
        })
      },[id, navigate])

    const {handleSubmit, register, formState:{ errors }, setValue } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        const bodyFormData = new FormData()
      
        const { image, ...rest } = data
 
        Object.keys(rest).forEach(key => {
          bodyFormData.append(key, rest[key])
        })
      
        if (image[0]) {
          bodyFormData.append("image", image[0])
        }
    
        if (!rest) {
            setError(true)
          } else {
            updateProduct(product._id, bodyFormData)
              .then((productUpdated) => {navigate("/product")
                console.log(productUpdated)
            })
              .catch(err => setError(err?.response?.data?.errors))
          }
      }

    return ( 
        <NewProductContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h2>Edit your product</h2>
                <Container>
                    <label>Product Name</label>
                    <Input {...register('name')}/>
                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                </Container>
                <Container>
                    <label>Description</label>
                    <Input {...register('description')}/>
                    {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
                </Container>
                <Group>
                    <InputWrapper>
                        <label> Price </label>
                        <Input type="number" {...register('price')} min="0" max="99999"/>
                        {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
                    </InputWrapper>
                    <Container>
                        <Label>
                            <FiUploadCloud />
                            Select Image
                            <File type="file" {...register('image')}/>
                        </Label>
                    </Container>
                </Group>
                <RadialGroup>
                    <label>Is a used product?</label>
                    <div>
                        <RadialLabel><RadialInput {...register('used')} type="radio" name="used" value="true" /> Yes! </RadialLabel>
                        <RadialLabel><RadialInput {...register('used')} type="radio" name="used" value="false"/> Nope! </RadialLabel>
                    </div>
                </RadialGroup>
                        {errors.used && <ErrorMessage>Check one box</ErrorMessage>}
            <SubmitButton>Edit</SubmitButton>
            </Form>
            {error && <ErrorMessage>Something has gone wrong, try again.</ErrorMessage>}
        </NewProductContainer>
    )
}

export default EditProduct