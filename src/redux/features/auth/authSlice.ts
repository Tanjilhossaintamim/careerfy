import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  displayName: string | null;
  photoUrl: string;
  email: string | null;
}
interface state {
  loading: boolean;
  isLoggedIn: boolean;
  user?: User | Record<string, never>;
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
    setLoggedInUser: (
      state,
      action: PayloadAction<User | Record<string, never>>
    ) => {
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
