import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  token: '',
  photo: '',
  
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.photo = action.payload.photo;
    },

    setSignOutState: (state) => {
      state.name = null;
      state.token = null;
      state.photo = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserToken = (state) => state.user.token;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
