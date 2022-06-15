import { createSlice } from '@reduxjs/toolkit';
import { deleteProduct, listProducts } from '../../../services/ProductService';

const initialState = {
  products: [],
};

const productsListSlice = createSlice({
  name: 'productsList',
  initialState,
  reducers: {
    getItemsList: (state, action) => {
      state.products = action.payload;
    }
  },
});

export const { removeItem, getItemsList } =
productsListSlice.actions;

export const fetchAllProducts = () => (dispatch) => {
  listProducts()
    .then((response) => {
      dispatch(getItemsList(response))
    })
    .catch((error) => console.log(error))
}

export const doDeleteProduct = (id) => (dispatch) => {
  deleteProduct(id)
    .then(() => {
      dispatch(fetchAllProducts())
    })
    .catch((error) => console.log(error))
}

export default productsListSlice.reducer;
