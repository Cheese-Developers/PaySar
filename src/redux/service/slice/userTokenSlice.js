import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  token: null,
};

export const userTokenSlice = createSlice({
  name: "userToken",
  initialState,
  reducers: {
    addUserToken: (state, { payload }) => {
      state.token = payload;
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 15);
      Cookies.set("token", state.token, { expires: expirationDate });
    },
    removeUserToken: (state) => {
      state.token = null;
      Cookies.remove("token");
    },
  },
});

export const { addUserToken, removeUserToken } = userTokenSlice.actions;

export default userTokenSlice.reducer;
