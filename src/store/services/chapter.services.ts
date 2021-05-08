import { message } from 'antd';
import { Dispatch } from 'redux';
import { basehttp } from '../../utils/axios.utils';
import {
  uploadChapterRequest,
  uploadChapterSuccess,
  uploadChapterFail,
} from '../actionsReducer/chapter.actionreducer';

export const createChapter = (formData:FormData) =>{
  return async (dispatch:Dispatch)=>{
    dispatch(uploadChapterRequest());
    try{
      const response = await basehttp().post('api/administration/chapters/store',formData);
      dispatch(uploadChapterSuccess(response.data.data));
      message.success('Chapter added successfully!')
    }catch(e){
      if(e && e.response && e.response.data){
        dispatch(uploadChapterFail(e.response.data))
      }else{
        dispatch(uploadChapterFail('error'))
      }
      message.error('Something went wrong!')
    }
  }
}