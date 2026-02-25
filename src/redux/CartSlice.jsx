import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // each item: { id, name, price, quantity }
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to cart
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === newItem.id
      );

      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 });
        state.totalQuantity += 1;
      }
    },

    // Remove item from cart
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    // Update quantity (increase or decrease)
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity += amount;
        state.totalQuantity += amount;

        if (item.quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
