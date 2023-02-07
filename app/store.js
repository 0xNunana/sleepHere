import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "../slices/roomslice";

export const store = configureStore({
    reducer: {
        room: roomReducer,
    }

})
    