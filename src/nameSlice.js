import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
    name: "name",
    initialState: {
        value: ""
    },
    reducers: {
        change: (state, action) => {
            state.value = action.payload;
        }
    }
});
export const {change} = nameSlice.actions;
export default nameSlice.reducer;