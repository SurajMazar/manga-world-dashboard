import {createSlice} from '@reduxjs/toolkit';
import Chapter from '../../models/chapter.model';

interface chapterState{
  chapters:Array<Chapter>,
  loadingChapter:boolean,
  errors:{} | undefined,
  uploading:boolean,
}


const initialState:chapterState = {
  chapters:[],
  loadingChapter:false,
  errors:undefined,
  uploading:false,
}


const chapterSlice = createSlice({
  name:'chapter',
  initialState:initialState,
  reducers:{
    
    /**Fetch chapter actions */

    fetchChapterRequest(state){
      state.loadingChapter=true;
    },

    fetchChapterSuccess(state,action){
      state.loadingChapter = false;
      state.chapters = action.payload;
    },

    fetchChapterFail(state,action){
      state.loadingChapter = false;
      state.errors = action.payload;
    },

    /** End fetch chapter actions */

    /** Upload chapter */
    uploadChapterRequest(state){
      state.uploading=true;
    },

    uploadChapterSuccess(state,action){
      state.uploading = false;
      state.chapters = [action.payload].concat(state.chapters);
    },

    uploadChapterFail(state,action){
      state.uploading = false;
      state.errors = action.payload;
    },
    /** End upload chapter */
  }
})

export const {
  /**Fetch chapter actions */
  fetchChapterRequest,
  fetchChapterFail,
  fetchChapterSuccess,
  /**End Fetch chapter actions */

  /** Upload chapter */
  uploadChapterFail,
  uploadChapterRequest,
  uploadChapterSuccess,
  /** End upload chapter */
} = chapterSlice.actions;

export default chapterSlice.reducer;