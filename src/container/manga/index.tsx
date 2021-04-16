import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Row} from 'antd'; 
import {PlusCircleOutlined,ClearOutlined} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import {loadMangas} from '../../store/services/manga.services';



const Manga:React.FC = (props) =>{
  const dispatch = useDispatch();

  const lM = () =>{
    dispatch(loadMangas())
  }

  useEffect(() => {
    lM();
  });// eslint-disable-line


  return(
    <div className="section-container-2">
      <Row>
        <Link to="/mangas/create">
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
        here goes the
      </div>
    </div>
  );
}

export default Manga;