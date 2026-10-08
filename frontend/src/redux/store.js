import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import cartReducer from "./GeneralSlice.js";
import wishlistReducer from "./wishlistSlice.js";
import storage from "redux-persist/lib/storage";

// 1. Combine all reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
});

// 2. Persist config
const persistConfig = {
  key: "testing",
  storage,
};

// 3. Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // redux-persist ke liye ye zaroori hai
    }),
});

// 5. Persistor export
export const persistor = persistStore(store);
