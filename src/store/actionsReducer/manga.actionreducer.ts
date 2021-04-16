import {createSlice} from '@reduxjs/toolkit';
import Manga from '../../models/manga.model';

interface state{
  loadingManga:boolean,
  manga:Manga[]|undefined,
  errorMangas:{}|undefined
}

const initialState:state = {
  loadingManga:false,
  manga:[],
  errorMangas:undefined
}

const mangaSlice = createSlice({
  name:'manga',
  initialState:initialState,
  reducers:{

    // create manga
    createMangaRequest(state){
      state.loadingManga = true;
    },
    
    createMangaSuccess(state,action){
      state.loadingManga =false;
      state.manga = [action.payload].concat(state.manga);
    },

    createMangaFail(state,action){
      state.loadingManga = false;
      state.errorMangas = action.payload;
    }
    // end create manga

  }
});


export const {
  //create manga actions
  createMangaFail,
  createMangaRequest,
  createMangaSuccess
} = mangaSlice.actions;


export default mangaSlice.reducer; 