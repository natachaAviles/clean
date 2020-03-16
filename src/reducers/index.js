import { 
  FETCH_PRODUCTS_PENDING, 
  FETCH_PRODUCTS_SUCCESS, 
  FETCH_PRODUCTS_ERROR, 
  ADD_TO_CART,
  DELETE_FROM_CART
} 
from '../actions';

const initialState = {
  pending: false,
  products: [],
  error: null,
  addedProducts: []
}

export function rootReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        pending: false,
        products: action.data.amiibo
      }
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case ADD_TO_CART:
      return {
        ...state,
        addedProducts: [...state.addedProducts, action.data]
      }
    case DELETE_FROM_CART: 
      return {
        ...state,
        addedProducts: state.addedProducts.filter(product => action.data!== product.name),
      }
    default:
      return state;
  }
}

export default rootReducer

export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;