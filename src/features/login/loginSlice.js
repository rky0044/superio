import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");
const API_URL = "https://virvit.mydevpartner.website/vvapi/v1/login/";




const initialState = {
    user:"",
    loading:true,
    error:""
}

export const loginslice = createSlice({
    name:"user",
    initialState,
    reducers:{
        getUser:(state,action)=>{
            state.user = action.payload;
        }
    }
});

export const getUserAsync = (user)=> async(dispatch)=>{
    try{
        const response = await axios.post(API_URL);
        dispatch(getUser(response.data));

    }catch (err) {
        throw new Error(err);
      }
}

export const {getUser} = loginslice.actions;
export const showUser = (state) => state.user;

export default loginslice.reducer;