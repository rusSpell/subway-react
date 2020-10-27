const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS_CART': {
            const currentProductsItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];
            const newItems = {
                ...state.items,
                [action.payload.id]: {

                    items: currentProductsItems,
                    totalPrice: getTotalPrice(currentProductsItems),
                }
            };

            const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0)
            const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0)
            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        case 'REMOVE_CART_ITEM':
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalCount = newItems[action.payload].items.length
            delete newItems[action.payload]
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            };

        case 'CLEAR_CART':
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0
            };

        default:
            return state;
    }
};
export default cart;