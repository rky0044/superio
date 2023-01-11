import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    msg:"",
    user:"",
    token:"",
    loding:false,
    error:"",
    device_id:""
}

export const signInUser = createAsyncThunk('signinuser',async(body)=>{
    const res = await fetch("https://virvit.mydevpartner.website/vvapi/v1/login/",{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(body)
    })
    return await res.json();
})

const authSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addToken:(state,action)=>{
            state.token=localStorage.getItem("token")
        },
        addUser:(state,action)=>{
            state.user=localStorage.getItem("user")
        },
        logout:(state,action)=>{
            state.token=null;
            localStorage.clear()
        }

    },
    extraReducers:{
        //***********login*********** */
        [signInUser.pending]:(state,action)=>{
            state.loding=true;
           
        },
        [signInUser.fulfilled]:(state,{payload:{error,msg,token,user,device_id}})=>{
            state.loading=false;
            if(error){
                state.error=error;
            }else{
                state.msg=msg;
                state.token=token;
                state.user=user;
                state.device_id=device_id;

                localStorage.setItem('msg',msg);
                localStorage.setItem('user',JSON.stringify(user));
                localStorage.setItem('token',token);


            }
           
        },
        [signInUser.rejected]:(state,action)=>{
            state.loading=true;
        }



    }
});

export const{addToken,addUser,logout}=authSlice.actions;

export default authSlice.reducer;