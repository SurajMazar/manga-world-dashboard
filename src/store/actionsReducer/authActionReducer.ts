import {createSlice} from '@reduxjs/toolkit'

interface authReducer{
  token:string,
  user:{},
  authenticated:boolean,
  authLoading:boolean,
  authError:{}
}

const initialState:authReducer = {
  token:'',
  user:{},
  authenticated:false,
  authLoading:false,
  authError:{}
}

const authSlice = createSlice({
  name:"auth",
  initialState:initialState,
  reducers:{
    //login request
    loginRequest(state){
      state.authLoading=true
    },

    loginSuccess(state,action){
      state.authLoading=false
      state.authenticated=true
      state.token=action.payload
    },

    loginFail(state,action){
      state.authLoading=false
      state.authError=action.payload
    }

  }
})


export const {
  // login actions
  loginRequest,
  loginSuccess,
  loginFail
  // end login actions
} = authSlice.actions

export default authSlice.reducer