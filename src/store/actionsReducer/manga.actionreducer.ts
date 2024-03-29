import {createSlice} from '@reduxjs/toolkit';
import Manga from '../../models/manga.model';
import {updateObjectInArray} from "../../utils/common.utils";

interface state {
  loadingManga: boolean,
  mangas: Manga[] | undefined,
  errorMangas: {} | undefined,
  mangasPageMeta: {} | undefined,
  editedManga: Manga | undefined,
}

const initialState: state = {
  loadingManga: false,
  mangas: [],
  errorMangas: undefined,
  mangasPageMeta: {},
  editedManga: undefined,
}

const mangaSlice = createSlice({
  name: 'manga',
  initialState: initialState,
  reducers: {
    
    fetchMangaRequest(state) {
      state.loadingManga = true;
    },
    
    
    fetchMangaSuccess(state, action) {
      state.loadingManga = false;
      state.mangas = action.payload.mangas;
      state.mangasPageMeta = action.payload.pageMeta;
    },
    
    fetchMangaFail(state, action) {
      state.loadingManga = false;
      state.errorMangas = action.payload;
    },
    
    // create manga
    createMangaRequest(state) {
      state.loadingManga = true;
    },
    
    createMangaSuccess(state, action) {
      state.loadingManga = false;
      state.mangas = [action.payload].concat(state.mangas);
    },
    
    createMangaFail(state, action) {
      state.loadingManga = false;
      state.errorMangas = action.payload;
    },
    // end create manga
    
    
    // edit manga actions
    setEditingManga(state, action) {
      state.editedManga = action.payload;
    },
    
    removeEditingManga(state) {
      state.editedManga = undefined;
    },
    // end edit manga actions
    
    updateMangaRequest(state) {
      state.loadingManga = true;
    },
    
    updateMangaSuccess(state, action) {
      state.mangas = updateObjectInArray(state.mangas, action.payload);
      state.loadingManga = false;
    },
    
    updateMangaFail(state, action) {
      state.loadingManga = false;
      state.errorMangas = action.payload;
    }
    
  }
});


export const {
  
  //fetch al mangas
  fetchMangaFail,
  fetchMangaRequest,
  fetchMangaSuccess,
  
  //create manga actions
  createMangaFail,
  createMangaRequest,
  createMangaSuccess,
  
  // current editing
  setEditingManga,
  removeEditingManga,
  
  //updating
  updateMangaRequest,
  updateMangaSuccess,
  updateMangaFail
} = mangaSlice.actions;


export default mangaSlice.reducer; 