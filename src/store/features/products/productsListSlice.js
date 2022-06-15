import { createSlice } from '@reduxjs/toolkit';
import { listProducts } from '../../../services/ProductService';

const initialState = {
  products: [],
};

const productsListSlice = createSlice({
  name: 'productsList',
  initialState,
  reducers: {
    getItemsList: (state, action) => {
      state.products = action.payload;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.productsListItem = state.productsListItem.filter((item) => item.id !== itemId);
    },
  },
});

// console.log(cartSlice);
export const { removeItem, getItemsList } =
productsListSlice.actions;

export const fetchAllProducts = () => (dispatch) => {
  listProducts()
    .then((response) => {
      dispatch(getItemsList(response))
    })
    .catch((error) => console.log(error))
}
export default productsListSlice.reducer;
