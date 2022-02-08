import { createSlice } from '@reduxjs/toolkit';


export const productSlice = createSlice({
  name: 'productInfo', // name of the Slice in the state
  initialState: {
    productInfo: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getProdInfo_Act : (state, action) => {
      state.productInfo = action.payload;
    },
    eraseProductInfo: (state) => {
      state.productInfo = null;
    }
  }
});
// alowing acces to login and logout action from outside of the store/userSlice
// pushing action ===> store userSlice
export const { getProdInfo_Act, eraseProductInfo } = productSlice.actions;

// selectors :  help get back the value resulting from a previously pushed action 
export const selectProduct = state => state.productInfo.productInfo

export default productSlice.reducer;
