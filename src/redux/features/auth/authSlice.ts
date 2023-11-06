import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface state {
  loading: boolean;
  isLoggedIn: boolean;
  user?:
    | {
        displayName: string;
        photoUrl: string;
        email: string;
      }
    | object;
}

const initialState: state = {
  loading: true,
  isLoggedIn: false,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedInUser: (state, action: PayloadAction<object>) => {
      state.user = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setLoadingState: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoggedInUser, setLoadingState, setLoggedIn } =
  authSlice.actions;

export default authSlice.reducer;
