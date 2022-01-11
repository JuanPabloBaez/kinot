import { createSlice } from '@reduxjs/toolkit'

export const LangSlice = createSlice({
  name: 'lang',
  initialState: {
    value: "eng",
  },
  reducers: {
    update: (state, action)=> {state.value=action.payload}
    //action.payload
    },
})

// Action creators are generated for each case reducer function
export const { update } = LangSlice.actions

export default LangSlice.reducer