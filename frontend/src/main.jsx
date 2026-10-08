import { createRoot } from "react-dom/client";
import "./main.css";
import MainRoute from "./routes/index.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "../src/redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainRoute />
    </PersistGate>
  </Provider>
);
