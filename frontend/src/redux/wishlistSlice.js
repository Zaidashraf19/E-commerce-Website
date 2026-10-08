import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: [],
};

const findKey = (itemOrId) => {
  if (typeof itemOrId === "string") return itemOrId;
  return itemOrId?._id ?? itemOrId?.id ?? itemOrId?.productId;
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const payload = action.payload;
      const key = findKey(payload);

      const exists = state.wishlistItems.find((x) => findKey(x) === key);
      if (!exists) {
        state.wishlistItems.push({
          _id: key,
          name: payload.productName || payload.name,
          price: Number(payload.price) || 0,
          discountedPrice: Number(payload.discountedPrice) || 0,
        });
      }
    },

    removeFromWishlist: (state, action) => {
      const id = findKey(action.payload);
      state.wishlistItems = state.wishlistItems.filter(
        (x) => findKey(x) !== id
      );
    },

    clearWishlist: (state) => {
      state.wishlistItems = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
