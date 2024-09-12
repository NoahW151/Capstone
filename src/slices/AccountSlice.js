import { createSlice } from "@reduxjs/toolkit";

/**
 * Each transaction is recorded as an object with the following properties.
 * @typedef Account
 * @property {"setId"|"updateUsername"|"setLastName"|"setEmail"|} type
 */


const initialState = {
  id: 0,
  username: "",
  lastName: "",
  email: "",
  token: ""
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
    }
  },
});

export const { setId, setEmail, updateUsername, setLastName, setToken } = accountSlice.actions;


export default accountSlice.reducer;
