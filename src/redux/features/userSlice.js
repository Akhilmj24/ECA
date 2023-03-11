import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    loading: false,
    user: [],
    error: ""

}

export const getUsers = createAsyncThunk("user/getusers", () => {
    return axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => res.data)
})

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.loading = true

        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
            state.error = ""

        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.loading = false
            state.user = []
            state.error = action.error.message
        })

    }

})

export default userSlice.reducer