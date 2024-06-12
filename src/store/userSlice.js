import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: {
      _id: '',
      email: '',
      name: '',
      phoneNumber: ''
    },
    isAuth: false,
  },
  reducers: {
    
  }
})

export const { userData } = userSlice.actions;

export default userSlice.reducer;