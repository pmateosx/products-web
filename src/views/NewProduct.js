import styled from "@emotion/styled"
import { FiUploadCloud } from "react-icons/fi"

const NewProductContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
`
const Form = styled.form`
    width: 50%;
`
const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: 1px solid rgb(228, 228, 228);
    color: rgb(118, 118, 118);
    font-size: 1.5rem;
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
    `
const Group = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 104%;
    margin-top:0.5rem;

    Input {
        width: 80%;
    }
`
const InputWrapper = styled.div `
    display: flex;
    flex-direction: column;
`
const RadialInput = styled.input`
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

const NewProduct = () => {
    return ( 
        <NewProductContainer>
            <Form>
                <h2>Create your product</h2>
                <label>Product Name</label>
                <Input/>
                <label>Description</label>
                <Input/>
                <Group>
                    <InputWrapper>
                        <label> Price </label>
                        <Input type="number"/>
                    </InputWrapper>
                    <Label>
                        <FiUploadCloud />
                        Select Image
                        <File type="file"/>
                    </Label>
                </Group>
                <RadialGroup>
                <label>Is a used product?</label>
                    <div>
                        <label><RadialInput type="radio" name="used" value="true" /> Yes! </label>
                        <label><RadialInput type="radio" name="used" value="false"/> Nope! </label>
                    </div>
                </RadialGroup>
            <SubmitButton>Create</SubmitButton>
            </Form>
        </NewProductContainer>
    )
}

export default NewProduct