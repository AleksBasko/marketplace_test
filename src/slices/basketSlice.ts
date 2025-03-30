import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ItemInterface } from 'types/item.types.ts';

type BasketProduct = Pick<
    ItemInterface,
    'image' | 'title' | 'description'
> & {};

interface BasketState {
    products: BasketProduct[];
}

const initialState: BasketState = {
    products: [],
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<BasketProduct>) => {
            state.products.push(action.payload);
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(
                (product) => product.title !== action.payload,
            );
        },
    },
});

export const { addProduct, removeProduct } = basketSlice.actions;
export default basketSlice.reducer;
