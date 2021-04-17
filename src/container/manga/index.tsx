import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Row} from 'antd'; 
import {PlusCircleOutlined,ClearOutlined} from '@ant-design/icons';
import {useDispatch, useSelector,} from 'react-redux';
import {loadMangas, removeEM} from '../../store/services/manga.services';
import Mg from '../../models/manga.model';
import {pagemeta} from "../../models/pagemeta.model";
import MangaList from './manga-list';
import Pagination from '../../components/common/pagination';
import params from "../../models/params.model";

interface state{
  manga:{
    mangas:Mg[],
    loadingManga:boolean,
    mangasPageMeta:pagemeta
  }
}

const Manga:React.FC = (props) =>{
  const dispatch = useDispatch();

  // redux state
  const state = useSelector((state:state)=>{
    const {manga} = state;
    return manga;
  });

  const {loadingManga,mangas,mangasPageMeta} = state;
  // end redux state()

  // function to fetch mangas
  const lM = (page:number = 1) =>{
    const mangaParams:params={
      page:page,
    };
    dispatch(loadMangas(mangaParams))
  }

  // clear edit mode
  const clearEditedManga =  () =>{
    dispatch(removeEM());
  }


  // default on load
  useEffect(() => {
    lM();
  },[dispatch]);// eslint-disable-line


  return(
    <div className="section-container-2">
      <Row>
        <Link to="/mangas/create" onClick={clearEditedManga}>
          <button className="btn btn-mwd">
          <PlusCircleOutlined/>
            Add Manga
          </button>
        </Link>
        <Link to="/mangas/create">
          <button className="btn btn-mwd">
          <ClearOutlined/>
            trash
          </button>
        </Link>
      </Row>

      <div className="section-break-2">
        <Pagination pageMeta={mangasPageMeta} paginate={lM}/>
        <MangaList mangas={mangas} loading={loadingManga}/>
        <Pagination pageMeta={mangasPageMeta} paginate={lM}/>
      </div>
    </div>
  );
}

export default Manga;