import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/AccountSlice";

export const store = configureStore({
    reducer: {
        account: accountReducer
    }
});