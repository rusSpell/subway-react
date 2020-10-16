import axios from 'axios';

export const fetchProducts = () => (dispatch) => {
    axios.get('http://localhost:3001/sandwiches').then(({ data }) => {
        dispatch(setProducts(data));
    });
};

export const setProducts = (items) => ({
    type: 'SET_PRODUCTS',
    payload: items
});
