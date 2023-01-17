import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const API_Skill ="https://virvit.mydevpartner.website/vvapi/v1/skill/";

const initialState = {
    skillData : [],
    loading :true,
    error :""
}

export const profileSlice = createSlice({
    name:"skill",
    initialState,
    reducers:{
        getSkill:(state,action)=>{
            console.log(action.payload,"acttooooooo")
            state.skillData = action.payload;

        },
        getSkillError : (state,action)=>{
            state.error= action.payload;
        }
    }

});

export const getskillAsync = () => async(dispatch)=>{
    try{
        const response = await axios.get(API_Skill);
        console.log(response.data.results,"skill responcessss")
        dispatch(getSkill(response.data.results))

    }catch(err){
        console.log(err,"errrororor")
    }
}


export const {getSkill,getSkillError} = profileSlice.actions;
export default profileSlice.reducer;