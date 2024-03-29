import { createSlice } from "@redux/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: "student",
    },
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;