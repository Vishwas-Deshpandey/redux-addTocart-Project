const initialState = {
    totalItems: 0,
    cartItem: [],
    cartTotal: 0,
    shippingCharge: 100,
    totalPayment: 0,
    // qty: 1
}


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const { id, imgUrl, product, productDescription, price } = action.payload;
            // const amtCart = state.cartTotal + price
            // state.totalItems += 1;
            const ExistingProduct = state.cartItem.find((c) => c.id === id);

            if (ExistingProduct) {
                let updatedCart = state.cartItem.map((currItem) => {
                    if (currItem.id === id) {
                        let y = currItem.qty += 1
                        let amt = currItem.price * y
                        return {
                            ...currItem,
                            qty: y,
                            newPrice: amt
                        }
                    } else {
                        return currItem
                    }
                })
                const totalPrices = state.cartItem.reduce((amt, cart) => amt + cart.newPrice, 0)

                return {
                    ...state,
                    cartItem: updatedCart,
                    cartTotal: totalPrices + price,
                    // shippingCharge
                    totalPayment: totalPrices + price + state.shippingCharge,
                    totalItems:state.totalItems += 1
                }
            }
            else {

                const totalPrices = state.cartItem.reduce((amt, cart) => amt + cart.newPrice, 0)


                return {
                    ...state,
                    // totalItems: state.totalItems + 1,

                    cartItem: [
                        ...state.cartItem,
                        {
                            id,
                            imgUrl,
                            product,
                            productDescription,
                            price,
                            qty: 1,
                            newPrice: price
                        }
                    ],
                    cartTotal: totalPrices + price,
                    // shippingCharge
                    totalPayment: totalPrices + price + state.shippingCharge,
                    totalItems:state.totalItems += 1
                }
            }





        case 'INC_QTY':

            let incCartItemQty = state.cartItem.map((c) => {
                if (c.id === action.incCart) {
                    const newQty = c.qty + 1
                    const newPrice = c.price * newQty
                    return {
                        ...c,
                        qty: newQty,
                        newPrice
                    }
                }
                return c
            })

            const incAmount = incCartItemQty.reduce((amt, cart) => amt + cart.newPrice, 0)

            return {
                ...state,
                cartItem: incCartItemQty,
                cartTotal: incAmount,
                totalPayment: incAmount + state.shippingCharge,
                totalItems:state.totalItems += 1
            }

        case 'DEC_QTY':

            const decCartItemQty = state.cartItem.map((c) => {
                if (c.id === action.decCart) {
                    const newQty = c.qty - 1
                    const newPrice = c.price * newQty
                    return {
                        ...c,
                        qty: newQty,
                        newPrice
                    }
                }
                return c
            })

            const decAmount = decCartItemQty.reduce((amt, cart) => amt + cart.newPrice, 0)


            return {
                ...state,
                cartItem: decCartItemQty,
                cartTotal: decAmount,
                totalPayment: decAmount + state.shippingCharge,
                totalItems:state.totalItems -= 1
            }


        case 'REMOVE_ITEM':

            const updatedCart = state.cartItem.filter((c) => c.id !== action.id);

            const filterPrice = state.cartItem.find((p) => p.id === action.id);
            const updatedPrice = state.cartTotal - filterPrice.newPrice


            return {
                ...state,
                totalItems: state.totalItems -= filterPrice.qty,
                cartItem: updatedCart,
                cartTotal: updatedPrice,
                // shippingCharge: updatedCart.length <= 0 ? state.shippingCharge = 0 : state.shippingCharge,
                totalPayment: updatedCart.length <= 0 ? 0 : updatedPrice + state.shippingCharge
            }

        case 'REMOVE_ALL':
            return {
                ...state,
                totalItems: state.totalItems = 0,
                cartItem: state.cartItem = [],
                cartTotal: state.cartTotal = 0,

                totalPayment: state.totalPayment = 0,
                qty: state.qty = 0
            }




        default:
            return state
    }
}

