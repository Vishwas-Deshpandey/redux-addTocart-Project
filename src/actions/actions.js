export const loading = () => {
    return{
        type:'STOP_LOADING'
    }
}

export const addToCart = (product) => {
    return{
        type:'ADD_TO_CART',
        payload:product
    }
}

export const totalPrice = () => {
    return{
        type:'TOTAL_PRICE',
    }
}

export const removeItem = (productId) => {
    return{
        type:'REMOVE_ITEM',
        id:productId
    }
}

export const clearAllCart = (id) => {
    return{
        type:'REMOVE_ALL',
        decCart:id
    }
}

export const incQty = (id) => {
    return{
        type:'INC_QTY',
        incCart:id
    }
}

export const decQty = (id) => {
    return{
        type:'DEC_QTY',
        decCart:id
    }
}