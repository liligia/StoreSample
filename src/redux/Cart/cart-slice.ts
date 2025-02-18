import { createSlice } from "@reduxjs/toolkit"
import { Product } from "../../data/products"

interface CartState {
    cart: Product[]
}

const initialState:CartState = {
    cart: [],
}

export const cartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        addProduct: (state, action) => {
            state.cart = [
                ...state.cart,
                action.payload,
            ]
        },
        removeProduct: (state,action) => {
            const productToRemove = action.payload
            const newCart = state.cart.filter(product => product.id !== productToRemove.id)
    
            state.cart = newCart
        },
    }
})

export const {addProduct, removeProduct} = cartSlice.actions