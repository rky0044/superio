import { configureStore } from "@reduxjs/toolkit";
import getUser from "../features/login/loginSlice";

export const store = configureStore({
    reducer:{
        logedUser:getUser
    }
})