import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendUserData = createAsyncThunk(
    'postuser/sendUserData',
    async ({
        name,
        email,
        phone,
        position_id,
        dataImg
    }, { rejectWithValue }) => {
        try {
            const token = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/token`)

            if (token.status != 200) {
                throw new Error("Token error")
            }
            console.log(token)
            //console.log(token.data.token)
            const data = new FormData();
            data.append("name", name);
            data.append("email", email);
            data.append("phone", phone);
            data.append("position_id", position_id);
            data.append("photo", dataImg);
            //const data = { name, email, phone, position_id, photo }
            // const res = await axios.post(`https://frontend-test-assignment-api.abz.agency/api/v1/users`,
            //     data,
            //     {
            //         headers: {
            //             "Content-Type": "multipart/form-data",
            //             "Token": token.data.token,
            //         },
            //     })
            const res = await axios({
                method: "post",
                url: "https://frontend-test-assignment-api.abz.agency/api/v1/users",
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Token": token.data.token,
                },
                data: data,
            })
            console.log(res)

            if (res.status != 201) {
                throw new Error("Post error")
            }
            return res.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const initialState = {
    success: false,
    loading: 'idle',
    error: null,
}

const postuserSlice = createSlice({
    name: 'postuser',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [sendUserData.pending]: (state) => {
            state.loading = 'pending';
            state.error = null;
        },
        [sendUserData.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.loading = 'fulfilled';
            state.success = action.payload.success;
        },
        [sendUserData.rejected]: (state, action) => {
            state.loading = 'rejected';
            state.error = action.payload;
        },
    }
})

export default postuserSlice.reducer