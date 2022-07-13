import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosition = createAsyncThunk(
    'positions/getPosition',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
            //console.log("ful", res.data)
            if (res.status != 200) {
                throw new Error("Position error")
            }
            return res.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const initialState = {
    positions: [],
    loading: 'idle',
    error: null,
}

const positionsSlice = createSlice({
    name: 'positions',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [getPosition.pending]: (state) => {
            state.loading = 'pending';
            state.error = null;
        },
        [getPosition.fulfilled]: (state, action) => {
            state.loading = 'fulfilled';
            state.positions = [...action.payload.positions]
        },
        [getPosition.rejected]: (state, action) => {
            state.loading = 'rejected';
            state.error = action.payload;
        },
    }
})

export default positionsSlice.reducer