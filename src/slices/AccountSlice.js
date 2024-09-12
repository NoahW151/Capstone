import { createSlice } from "@reduxjs/toolkit";


//All  necessary account details are stored in this slice


const initialState = {
  id: 0,
  cartId: 0,
  username: "",
  lastName: "",
  email: "",
  token: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setId: (state, { payload }) => {
      state.id = payload.id;
    },
    updateUsername: (state, {payload}) => {
        state.username = payload.username;
    },
    setLastName: (state, {payload}) => {
        state.lastName = payload.lastName;
    },
    setEmail: (state, {payload}) => {
        state.email = payload.email;
    },
    setToken: (state, {payload}) => {
        state.token = payload.token;
    },
    setCartId: (state, {payload}) => {
      state.cartId = payload.cartId;
    }
  },
});

export const { setId, setEmail, updateUsername, setLastName, setToken, setCartId } = accountSlice.actions;


export default accountSlice.reducer;
