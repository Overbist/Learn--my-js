import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = { value: 10 }

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    inc: (state) => {
      state.value = state.value + 1
    },
    dec: (state) => {
      state.value = state.value - 1
    },
    rnd: (state, action) => {
      state.value = action.payload
    },
  },
})

const { actions, reducer } = counterSlice

export const { inc, dec, rnd } = actions
export default reducer
