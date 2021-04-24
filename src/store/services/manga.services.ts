import { Dispatch } from 'redux';
import { basehttp } from '../../utils/axios.utils';
import {
  
  fetchMangaFail,
  fetchMangaRequest,
  fetchMangaSuccess,
  
  createMangaRequest,
  createMangaSuccess,
  createMangaFail,
  
  setEditingManga,
  removeEditingManga,
  
  updateMangaRequest,
  updateMangaSuccess,
  updateMangaFail
  
} from '../actionsReducer/manga.actionreducer';
import history from "../../utils/history";
import {message} from "antd";
import MangaModel from "../../models/manga.model";
import params from "../../models/params.model";
import {paramsUrl} from "../../utils/common.utils";


export const loadMangas = (params:params) =>{

  return async(dispatch:Dispatch) =>{
    dispatch(fetchMangaRequest());
    try{
      let url = 'api/administration/mangas';
      url = paramsUrl(url,params);
      let response = await basehttp().get(url);
      const data = response.data.data;
      const payload ={
        mangas:data.mangas,
        pageMeta:data.pageMeta
      }
      dispatch(fetchMangaSuccess(payload));
      // console.log(payload)
    }catch(e){
      if(e?.response?.data){
        dispatch(fetchMangaFail(e.response.data));
      }
      dispatch(fetchMangaFail('error occured'));
    }
  }
}


export const createManga = (formdata:FormData) =>{
  return async(dispatch:Dispatch) => {
    dispatch(createMangaRequest());
    try{
      const response =  await basehttp().post('/api/administration/mangas/store',formdata);
      dispatch(createMangaSuccess(response.data.data));
      message.success("New manga created successfully!")
      history.push('/mangas');
    }catch(e){
      if(e && e.response && e.response.data){
        dispatch(createMangaFail(e.response.data));
      }else{
        dispatch(createMangaFail("Server error"));
      }
      message.error("Some problem has occurred while creating the manga!");
    }
  }
}


export const setEM = (manga:MangaModel) =>{
  return (dispatch:Dispatch) =>{
    dispatch(setEditingManga(manga));
  }
}

export const removeEM = () =>{
  return (dispatch:Dispatch) => {
    dispatch(removeEditingManga());
  }
}


export const updateManga = (formData:FormData,id:number)=>{
  return async (dispatch:Dispatch) =>{
    dispatch(updateMangaRequest());
    try{
      const response = await basehttp().put(`api/administration/mangas/update/${id}`,formData);
      dispatch(updateMangaSuccess(response.data.data));
      message.success("Updated successfully!")
    }catch (e) {
      if(e && e.response && e.response.data){
        dispatch(updateMangaFail(e.response.data));
      }else{
        dispatch(updateMangaFail("Server error"));
      }
      message.error("Some problem has occurred while updating the manga!");
    }
  }
}