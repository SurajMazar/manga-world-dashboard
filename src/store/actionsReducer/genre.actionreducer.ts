import {createSlice} from '@reduxjs/toolkit';
import {Genre} from '../../models/genre.model';
import {updateObjectInArray} from '../../utils/common.utils';
interface state{
  genres:Genre[],
  loadingGenre:boolean,
  genreErrors:{},
  genrePageMeta:{},

  createEditLoading:boolean,
  createEditError:{}|null
}

const initialState:state = {
  genres:[],
  loadingGenre:false,
  genreErrors:{},
  genrePageMeta:{},

  createEditLoading:false,
  createEditError:null
}  

const GenreSlice = createSlice({
  name:'genres',
  initialState:initialState,
  reducers:{
    // fetch req
    genrefetchRequest(state){
      state.loadingGenre = true;
    },

    // fetching success
    genreFetchSuccess(state,actions){
      state.loadingGenre = false;
      state.genres = actions.payload.genres;
      state.genrePageMeta = actions.payload.pageMeta;
    },

    genreFetchFail(state,actions){
      state.loadingGenre = false;
      state.genreErrors = actions.payload;
    },


    // create edit request 
    genreCreateEditRequest(state){
      state.createEditLoading = true;
    },

    genreCreateSuccess(state,actions){
      state.createEditLoading = false;
      state.genres = [actions.payload].concat(state.genres);
    },

    genreUpdateSuccess(state,actions){
      state.createEditLoading = false;
      const genres = updateObjectInArray(state.genres,actions.payload);
      state.genres = genres
    },

    genreCreateEditFail(state,actions){
      state.createEditLoading = false;
      state.createEditError = actions.payload;
    }

  }
});


export const {
genrefetchRequest,
genreFetchSuccess,
genreFetchFail,

genreCreateEditRequest,
genreCreateEditFail,
genreCreateSuccess,
genreUpdateSuccess,

} = GenreSlice.actions;


export default GenreSlice.reducer;