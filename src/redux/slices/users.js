import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (_, { getState, rejectWithValue }) => {
        try {
            const { page } = getState().users
            const res = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page + 1}&count=10`)
            //console.log("ful", res)
            if (res.status != 200) {
                throw new Error("Users error")
            }
            return res
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const initialState = {
    users: [],
    loading: 'idle',
    error: null,
    page: 0,
    total_pages: 0
}

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [getUsers.pending]: (state) => {
            state.loading = 'pending';
            state.error = null;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.loading = 'fulfilled';
            state.users = [...state.users, ...action.payload.data.users];
            state.page = state.page + 1;
            state.total_pages = action.payload.data.total_pages;
        },
        [getUsers.rejected]: (state, action) => {
            state.loading = 'rejected';
            state.error = action.payload;
        },
    }
})

export default usersSlice.reducer