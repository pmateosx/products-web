import { Route, Routes } from 'react-router-dom';
import styled from "@emotion/styled";
import Navbar from "./components/Navbar";
import ProductView from './views/Products';
import Home from './views/Home';
import NewProduct from './views/NewProduct';
import ProductDetail from './views/ProductDetail';
import EditProduct from './views/EditProduct';
import { Toaster } from 'react-hot-toast';

const AppContainer = styled.main`
  padding-top: 5rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #FAFBFB;
  overflow-x: hidden;
  max-width: 100vw;
`

function App() {
  return (
    <>
      <Navbar/>
      <AppContainer>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<ProductView/>}/>
          <Route path='/new-product' element={<NewProduct/>}/>
          <Route path='/update-product/:id' element={<EditProduct/>}/>
          <Route path='/product/:id' element={<ProductDetail/>}/>
        </Routes>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
      </AppContainer>
    </>
  );
}

export default App;
