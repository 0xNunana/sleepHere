import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    item:[]

}

export const roomSlice= createSlice({
    name:"room",
    initialState,
    reducers:{
        addRoom:(state,action)=>{},
        removeRoom:(state,action)=>{}
    }
})
export const{addRoom,removeRoom} = roomSlice.actions;
export const selectRoom=(state)=>state.room.item;

export default  roomSlice.reducer