import { createSlice } from "@reduxjs/toolkit";
// const axios = require("axios");
import axios from "axios"; 
const API_URL = "https://virvit.mydevpartner.website/vvapi/v1/login/";




const initialState = {
    userData:"",
    loading:true,
    error:""
}

export const loginslice = createSlice({
    name:"user",
    initialState,
    reducers:{
        getUser:(state,action)=>{
            state.userData = action.payload;
        },
        getUserLoginError:(state,action)=>{
            console.log(action, 'error action ');
            state.error = action.payload;
        }
    }
});

export const getUserAsync = (data)=> async(dispatch)=>{
    try{
        const response = await axios.post(API_URL,data);
        console.log(response, '11111111111');
        dispatch(getUser(response.data));
    }catch (err) {
        console.log(err, 'errrrr');
        dispatch(getUserLoginError(err.response ? err.response.data : err.message));
        // throw new Error(err);
      }
}

export const {getUser, getUserLoginError} = loginslice.actions;
export default loginslice.reducer;