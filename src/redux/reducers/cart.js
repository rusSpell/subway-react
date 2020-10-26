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
            const items = Object.values(newItems).map(obj => obj.items)
            const allProducts =[].concat.apply([], items)
            const totalPrice = getTotalPrice(allProducts)
            return {
                ...state,
                items: newItems,
                totalCount: allProducts.length,
                totalPrice,
            };
        }

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