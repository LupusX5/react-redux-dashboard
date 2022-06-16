import { createSlice } from "@reduxjs/toolkit";

const dashboardMainSlice = createSlice({
    name: 'dashboardMainSlice',
    initialState: {
        currentUserAction: 1,
    },
    reducers: {
        setCurrentUserAction(state, action) {
            state.currentUserAction = action.payload;
        }
    }
})

export default dashboardMainSlice.reducer;

export const {setCurrentUserAction} = dashboardMainSlice.actions;