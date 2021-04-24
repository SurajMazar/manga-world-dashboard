import React, { useCallback, useEffect, useState } from 'react';
import {Row} from 'antd';
import {
  PlusCircleOutlined,
  ClearOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import GenreList from '../../components/Genre/genre-list';
import {fetchGenres} from '../../store/services/genre.services';
import { Genre as genre} from '../../models/genre.model';
import {pagemeta} from '../../models/pagemeta.model';
import CreateEditModal from '../../components/Genre/CreateEditModal';
import Pagination from '../../components/common/pagination';

interface state{
  genre:{
    genres:genre[],
    loadingGenre:boolean,
    genrePageMeta:pagemeta
  }
}

const Genre:React.FC = () =>{


/**
 * Redux state
 */
const dispatch = useDispatch(); // dispatch hook

const state = useSelector((state:state)=>{
  const {genre}  = state;
  return genre;
});

// state
const {
  genrePageMeta,
  genres,loadingGenre} = state;
// end state


const loadGenre = useCallback((page:number = 1) => { // fetch latest release
  const params = {
    page:page
  }
  dispatch(fetchGenres(params));
}, [dispatch]);
/**
 * end redux states 
*/

//fetch genre
useEffect(()=>{
  // if(!genres.length){
    loadGenre();
  // }
},[dispatch]); //eslint-disable-line


// model states

const [showModal,setShowModal] = useState<boolean>(false);
const [editMode,setEditMode] = useState<boolean>(false);
const [editData,setEditData] = useState<genre|null>(null)

const createModelShow = () => {
  setEditMode(false);
  setEditData(null);
  setShowModal(true);
}

const closeModal = () =>{
  setEditMode(false);
  setEditData(null);
  setShowModal(false);
}


const editModelShow  = (data:genre) =>{
  setEditData(data);
  setShowModal(true);
  setEditMode(true);
}
// end model state


return(
  <section className="section-container-2">

    <Row gutter={[16,16]}>
      <button className="btn btn-mwd" onClick={createModelShow}>
        <PlusCircleOutlined /> Add genre
      </button>
      <button className="btn btn-mwd">
        <ClearOutlined />Trash
      </button>
    </Row>

    <GenreList
      genres={genres}
      loading={loadingGenre}
      editModelShow={editModelShow}
    />

    <Pagination
      paginate = {loadGenre}
      pageMeta = {genrePageMeta}
      />

    <CreateEditModal
      data={editData}
      editMode={editMode}
      showModal={showModal}
      closeModal={closeModal}
    />
  </section>
);
}

export default Genre;