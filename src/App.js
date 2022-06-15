import { Route, Routes } from 'react-router-dom';
import styled from "@emotion/styled";
import Navbar from "./components/Navbar";
import ProductView from './views/Products';
import Home from './views/Home';
import NewProduct from './views/NewProduct';

const AppContainer = styled.main`
  padding-top: 5rem;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #FAFBFB;
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
          <Route path='/update-product' element={<NewProduct/>}/>
        </Routes>
      </AppContainer>
    </>
  );
}

export default App;
