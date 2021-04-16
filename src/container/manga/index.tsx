import React from 'react';
import {Link} from 'react-router-dom';
import {Row} from 'antd'; 
import {PlusCircleOutlined,ClearOutlined} from '@ant-design/icons';

const Manga:React.FC = (props) =>{
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