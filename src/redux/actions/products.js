import axios from 'axios';

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
});

export const fetchProducts = (category, sortBy) => (dispatch) => {
    console.log(category, sortBy);
    dispatch(setLoaded(false));
    axios.get(`http://localhost:3001/sandwiches?${
        category !== null ? `category=${category}` : ''
        }&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
        dispatch(setProducts(data));
    });
};

export const setProducts = (items) => ({
    type: 'SET_PRODUCTS',
    payload: items
});
