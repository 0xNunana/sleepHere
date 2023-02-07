import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items:[],

}

export const roomSlice= createSlice({
    name:"room",
    initialState,
    reducers:{
        addRoom:(state, action)=>{
        state.items=[...state.items,action.payload]
        },
        removeRoom:(state,action)=>{}
    }
})

export const{addRoom, removeRoom} = roomSlice.actions;
export const selectRoom=(state)=>state.room.items;

export default  roomSlice.reducer