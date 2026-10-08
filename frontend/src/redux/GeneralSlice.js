import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const findKey = (itemOrId) => {
  if (typeof itemOrId === "string") return itemOrId;
  return itemOrId?._id ?? itemOrId?.id ?? itemOrId?.productId;
};

const getItemPrice = (item) => {
  return item.discountedPrice && Number(item.discountedPrice) > 0
    ? Number(item.discountedPrice)
    : Number(item.price);
};

// ✅ Helper function to recalc totals
const recalcTotals = (state) => {
  state.totalQuantity = state.cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  state.totalPrice = state.cartItems.reduce(
    (sum, item) => sum + getItemPrice(item) * item.quantity,
    0
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const payload = action.payload;
      const key = findKey(payload);
      const addQty = Number(payload.quantity || 1);

      const existing = state.cartItems.find((x) => findKey(x) === key);

      if (existing) {
        existing.quantity += addQty;
      } else {
        state.cartItems.push({
          _id: key,
          name: payload.productName || payload.name,
          price: Number(payload.price) || 0,
          discountedPrice: Number(payload.discountedPrice) || 0,
          quantity: addQty,
        });
      }

      recalcTotals(state); // ✅ Recalculate after update
    },

    removeFromCart: (state, action) => {
      const id = findKey(action.payload);
      state.cartItems = state.cartItems.filter((x) => findKey(x) !== id);

      recalcTotals(state); // ✅
    },

    increaseQuantity: (state, action) => {
      const id = findKey(action.payload);
      const item = state.cartItems.find((x) => findKey(x) === id);
      if (item) item.quantity += 1;

      recalcTotals(state); // ✅
    },

    decreaseQuantity: (state, action) => {
      const id = findKey(action.payload);
      const item = state.cartItems.find((x) => findKey(x) === id);

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter((x) => findKey(x) !== id);
        }
      }

      recalcTotals(state); // ✅
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
