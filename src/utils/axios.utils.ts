import axios from 'axios';
import {API_URL} from '../constant/app.config';
import {getLocalStorage} from '../utils/localstorage.utils';
import store from '../store/store';
import {clearLoginState} from '../store/actionsReducer/authActionReducer';

export const basehttp  = (multipart:boolean = false) => {

  const token = getLocalStorage('token');

  const header = {
    'Accept':'*/*',
    'Authorization':token?'Bearer '+token.toString():'',
    'access-control-allow-origin': '*'
  }
  const multipartHeader = {
    ...header,
    'content-type':'multipart/form-data',
  };

  const normalHeader = {
    ...header,
    'content-type':'application/json',
  }

  const instance = axios.create({
    headers:multipart?multipartHeader:normalHeader,
    baseURL:API_URL
  })

  instance.interceptors.response.use((response)=>{
    return response;
  },(error)=>{
    if(error.response.status === 401){
      const errorData = error.response.data.data;
      if(errorData){
        const {message} = errorData;
        if (message === "unauthenticated"){
          localStorage.clear();
          store.dispatch(clearLoginState());
        }
      }
    }
    return Promise.reject(error);
  });

  return instance;
}