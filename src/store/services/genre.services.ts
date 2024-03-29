import { message } from "antd";
import {
  genreFetchFail,
  genreFetchSuccess,
  genrefetchRequest,

  genreCreateEditFail,
  genreCreateEditRequest,
  genreCreateSuccess,
  genreUpdateSuccess,
  
} from '../actionsReducer/genre.actionreducer';
import { basehttp } from "../../utils/axios.utils";
import {paramsUrl} from '../../utils/common.utils';
import { Dispatch } from "redux";

interface params{
  page:number
}

export const fetchGenres = (params:params) =>{
  return async (dispatch:Dispatch) => {
    dispatch(genrefetchRequest());
    try{
      let url = 'api/administration/genres/';
      url = paramsUrl(url,params);
      const response = await basehttp().get(url);
      dispatch(genreFetchSuccess(response?.data?.data));
    }catch(e){
      console.log(e);
      message.error("Some errors occurred during fetching genres");
      dispatch(genreFetchFail(e.response.data));
    }
  }
}

export const createGenre = (formData:FormData, closeModal:()=>void|null) =>{
  return async (dispatch:Dispatch) =>{
    dispatch(genreCreateEditRequest());
    try{
      const response = await basehttp().post('api/administration/genres/store',formData);
      dispatch(genreCreateSuccess(response.data.data));
      if(closeModal){
        closeModal();
      } 
      message.success("Genre created sucessfully");
    }catch(e){
      dispatch(genreCreateEditFail(e.response));
    }
  }
}


export const updateGenre = (formData:FormData, id:number|undefined ,closeModal:()=>void|null) =>{
  return async (dispatch:Dispatch) =>{
    dispatch(genreCreateEditRequest());
    try{
      const response = await basehttp().put('api/administration/genres/update/'+id,formData);
      dispatch(genreUpdateSuccess(response.data.data));
      if(closeModal){
        closeModal();
      } 
      message.success("Genre updated sucessfully");
    }catch(e){
      dispatch(genreCreateEditFail(e.response));
    }
  }
}