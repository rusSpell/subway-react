export const addProductsToCart = (productObj) => ({
    type: 'ADD_PRODUCTS_CART',
    payload: productObj
});

export const clearCart = () => ({
    type: 'CLEAR_CART'
});

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id
});

export const incCartItem = (id) => ({
    type: 'INCREMENT_CART_ITEM',
    payload: id
});

export const decCartItem = (id) => ({
    type: 'DECREMENT_CART_ITEM',
    payload: id
});

