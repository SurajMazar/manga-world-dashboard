import {createSlice} from '@reduxjs/toolkit'
import {getLocalStorage} from '../../utils/localstorage.utils';
interface authReducer{
  token:string|null,
  user:{}|null,
  authenticated:boolean,
  authLoading:boolean,
  authError:{}|null,

  loadingUser:Boolean,
  userError:{}|null,
}

const token = getLocalStorage('token');

const initialState:authReducer = {
  token:token? token : null,
  authenticated:token?true:false,
  authLoading:false,
  authError:null,

  // user profile
  user:null,
  loadingUser:false,
  userError:null
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
      state.token=action.payload?.token
      state.user = action.payload?.user
    },

    loginFail(state,action){
      state.authLoading=false
      state.authError=action.payload
    },

    clearLoginState(state){
      state.authenticated=false
      state.authLoading=false
      state.token=null
      state.user={}
      state.loadingUser=false
      state.userError={}
    },

    fetchProfileRequest(state){
      state.loadingUser = true
    },

    fetchProfileSuccess(state,action){
      state.loadingUser = false
      state.user = action.payload
    },

    fetchProfileFail(state,action){
      state.loadingUser = false
      state.userError = action.payload
    },


  }
})


export const {
  // login actions
  loginRequest,
  loginSuccess,
  loginFail,
  clearLoginState,
  // end login actions

  //user profile
  fetchProfileRequest,
  fetchProfileFail,
  fetchProfileSuccess
} = authSlice.actions

export default authSlice.reducer