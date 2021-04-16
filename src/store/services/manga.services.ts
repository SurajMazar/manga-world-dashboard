import { Dispatch } from 'redux';
import { basehttp } from '../../utils/axios.utils';
import {

  fetchMangaFail,
  fetchMangaRequest,
  fetchMangaSuccess,


  createMangaRequest,
  createMangaSuccess,
  createMangaFail

} from '../actionsReducer/manga.actionreducer';


export const loadMangas = () =>{
  return async(dispatch:Dispatch) =>{
    dispatch(fetchMangaRequest());
    try{
      let response = await basehttp().get('api/administration/mangas');
      const data = response.data.data;
      const payload ={
        mangas:data.mangas,
        pageMeta:data.pageMeta
      }
      // let data = {
      //   mangas:response.data.data.mangas || [],
      //   pageMeta:response.data.date.pageMeta || {}
      // };
      dispatch(fetchMangaSuccess(payload));

      console.log(payload)
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
    }catch(e){
      if(e.response.data){
        dispatch(createMangaFail(e.response.data));
      }else{
        dispatch(createMangaFail("Server error"));
      }
    }
  }
}