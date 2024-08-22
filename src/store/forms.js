import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : localStorage.getItem('count') || null,
    sessionCount : localStorage.getItem('totalCount') || null   
}
console.log('Initial totalCount:', initialState.sessionCount);
const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addCount(state, action) {
            state.count = action.payload
        },
        addSessionCount(state, action){
            state.sessionCount = action.payload
            localStorage.setItem('totalCount', action.payload)
            console.log('Updated totalCount:', localStorage.getItem('totalCount'));
        },
        removeCount(state){
            state.count = null
        },
        removeSessionCount(state){
            state.sessionCount = null
            localStorage.removeItem('totalCount')
        }
    }
})
export const {addCount, removeCount, addSessionCount, removeSessionCount} = formSlice.actions
export default formSlice.reducer;