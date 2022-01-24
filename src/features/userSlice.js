import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user', // name of the Slice in the state
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login : (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  }
});
// alowing acces to login and logout action from outside of the store/userSlice
// pushing action ===> store userSlice
export const { login, logout } = userSlice.actions;

// selectors :  help get back the value resulting from a previously pushed action 
export const selectUser = state => state.user.user

export default userSlice.reducer;
