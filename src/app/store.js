import { configureStore } from "@reduxjs/toolkit";
import getUser from "../features/login/loginSlice";
import  getSkill  from "../features/login/profileSlice";

export const store = configureStore({
    reducer:{
        logedUser:getUser,
        userSkill:getSkill
    }
})