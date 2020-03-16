import axios from 'axios';

export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const ADD_TO_CART= 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

function fetchProductsPending () {
  return {
    type: FETCH_PRODUCTS_PENDING
  }
}

function fetchProductsSuccess (data) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    data: data
  }
}

function fetchProductsError (error) {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error: error
  }
}

export function fetchProducts () {
  return function(dispatch) {
    dispatch(fetchProductsPending())
    return axios.get("https://www.amiiboapi.com/api/amiibo")
      .then(({ data }) => {
        dispatch(fetchProductsSuccess(data));
      })
      .catch(error => {
        dispatch(fetchProductsError(error))
      })
  };
}


export function addToCart (data) {
  return {
    type: ADD_TO_CART,
    data: data
  }
}

export function deleteFromCart (data) {
  return {
    type: DELETE_FROM_CART,
    data: data
  }
}
