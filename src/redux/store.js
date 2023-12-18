import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./service/api/authApi";
import userTokenSlice from "./service/slice/userTokenSlice";
import { postApi } from "./service/api/postApi";
import { userApi } from "./service/api/userApi";

export const store = configureStore({
  reducer: {
    userToken: userTokenSlice,
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      postApi.middleware,
      userApi.middleware
    ),
});
