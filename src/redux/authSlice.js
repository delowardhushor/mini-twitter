import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token:null,
  user:{},
}

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    UpdateAuth:(state, actions) => {
      state.user = actions.payload.user
      state.token = actions.payload.token
    },
    ResetAuth:(state, actions) => {
      state.token = null
      state.user = {}
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  UpdateAuth,
  ResetAuth
} = userSlice.actions

export default userSlice.reducer