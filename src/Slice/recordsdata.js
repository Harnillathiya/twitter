import { createSlice } from '@reduxjs/toolkit'

export const recordsdata = createSlice({
  name: 'record',
  initialState: {
    rdata: 0,
  },
  reducers: {
   inc: (state) => {
    state.rdata += 1
  },
  },
})

// Action creators are generated for each case reducer function
export const { inc } = recordsdata.actions

export default recordsdata.reducer