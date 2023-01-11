import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: "",
    token: "",
    loding: false,
    error: ""

}

export const loginUser = createAsyncThunk('user', async (body) => {
    const res = await fetch("https://virvit.mydevpartner.website/vvapi/v1/login/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    })
    return await res.json();



})

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addToken:(state,action)=>{
            state.token=localStorage.getItem("token")
        },
        addUser:(state,action)=>{
            state.user=localStorage.getItem("user")

        }


    },
    extraReducers: {
        //***********login*********** */
        [loginUser.pending]:(state,action)=>{
            state.loding=true
        },
        [loginUser.fulfilled]:(state,payload)=>{
           console.log(payload,"pplllloooadd")
            state.loding=false;
               state.token=payload.payload.token;
               state.user = payload.payload;
               localStorage.setItem("token",JSON.stringify(payload.payload.token));
               localStorage.setItem("user",JSON.stringify(payload.payload));


        },
        [loginUser.rejected]:(state,action)=>{
            state.loding=true
        },



    }
});

export const { addToken, addUser } = authSlice.actions;

export default authSlice.reducer;