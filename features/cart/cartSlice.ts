import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CartState {
  items: CartItems[];
  totalQty: number;
}

interface CartItems {
  id: number;
  price: number;
  quantity: number;
  name: string;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQty: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItems>) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item: any) => item.id === newItem.id
      );
      state.totalQty = state.totalQty + newItem.quantity;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.totalPrice,
          name: newItem.name,
        });
      } else {
        existingItem.quantity = existingItem.quantity + newItem.quantity;
        existingItem.totalPrice = existingItem.totalPrice + newItem.totalPrice;
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      const id = action.payload;
      const itemToRemove = state.items.find((item) => id === item.id);
      state.items = state.items.filter((item) => item.id !== id);
      state.totalQty = state.totalQty - itemToRemove?.quantity!;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
