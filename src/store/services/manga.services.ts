import { Dispatch } from 'redux';
import { basehttp } from '../../utils/axios.utils';
import {
  createMangaRequest,
  createMangaSuccess,
  createMangaFail

} from '../actionsReducer/manga.actionreducer';


export const createManga = (formdata:FormData) =>{
  return async(dispatch:Dispatch) => {
    dispatch(createMangaRequest());
    try{
      const response =  await basehttp(true).post('/api/administration/mangas/store',formdata);
      dispatch(createMangaSuccess(response.data.data));
    }catch(e){
      if(e.response.data){
        dispatch(createMangaFail(e.response.data));
      }else{
        dispatch(createMangaFail("Server error"));
      }
    }
  }
}