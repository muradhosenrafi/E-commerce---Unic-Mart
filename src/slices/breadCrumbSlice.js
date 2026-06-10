import { createSlice } from '@reduxjs/toolkit'

export const breadCrumbSlice = createSlice({
  name: 'breads',
  initialState: {
  currentValue:"",
  previouseValue:"",
  },
  reducers: {
    addbreadcrumb: (state,action) => {
     

state.previouseValue=state.currentValue
state.currentValue=action.payload


    },
   

  },
})




export const { addbreadcrumb } = breadCrumbSlice.actions

export default breadCrumbSlice.reducer