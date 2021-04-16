import { Dispatch } from 'redux';
import {
  loginFail,
  loginRequest,
  loginSuccess,

  fetchProfileRequest,
  fetchProfileSuccess,
  fetchProfileFail,

  clearLoginState
} from '../actionsReducer/authActionReducer';

import {basehttp} from '../../utils/axios.utils';
import {setLocalstorage} from '../../utils/localstorage.utils';
import { message } from 'antd';
import {push} from 'connected-react-router'


export const login = (formData:FormData)=> {
  return async (dispatch:Dispatch) =>{
    dispatch(loginRequest());
    try{
      const response = await basehttp().post('api/administration/auth/login',formData);
      const data = response.data?.data;
  
      const {role,name:username} = data?.user;
      if(role){
        const {name} = role;
        if(name.toLowerCase() === 'admin'){
          dispatch(loginSuccess(data));
          setLocalstorage('token', data?.token);
          message.success('Welcome to dashboard ' + username);
          dispatch(push('/'));
        }else{
          dispatch(loginFail({message:'Sorry but you are not an administrator'}));
          message.error('Sorry but you are not an administrator');
        }
      }
    }catch(e){
      if(e.response){
        const error = e?.response?.data?.data;
        dispatch(loginFail(error));
        message.error(error?.errors)
      }
    }
  }
}


export const fetchAuthProfile = () =>{
  return async(dispatch:Dispatch)=>{
    dispatch(fetchProfileRequest());
    try{
      const response = await basehttp().get('api/administration/auth/profile');
      const data = response?.data?.data?.profile;
      dispatch(fetchProfileSuccess(data));
    }catch(e){
      if(e.response.data){
        dispatch(fetchProfileFail(e.response.data));
      }
    }
  }
}

export const logout = () =>{
  return (dispatch:Dispatch)=>{
    dispatch(clearLoginState());
    localStorage.clear();
    message.success('Logout Successfully');
  }
}

