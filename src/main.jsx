import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { checkAuthStatus } from "./redux/authSlice";
import store from "./redux/store";
import "./index.css";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";

store.dispatch(checkAuthStatus());

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
    </StrictMode>
  </Provider>
);
