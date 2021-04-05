import React from 'react';
import {Row} from 'antd';
import {EditOutlined,ClearOutlined} from '@ant-design/icons'; 
import { Genre } from '../../models/genre.model';
import moment from 'moment';
import TdSkeleton from '../common/skeletons/td.skeleton';
interface propsIn {
  genres:Genre[],
  loading:boolean,
  editModelShow:(data:Genre)=>void,
}

const GenreList:React.FC<propsIn>= (props) => {

  const {
    genres,
    editModelShow,
    loading
  } = props;

  return(
    <>
      {/* // author's table */}
      <Row gutter={[16,16]} className="section-break-1">
        <div className="MWD-table-container">
          <table className="MWD-table">
            <thead>
              <tr>
                <th>SN</th>
                <th>Name</th>
                <th>Slug</th>
                <th>Created at</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { loading?
                <TdSkeleton cols={5} items={10}/>
                :genres && genres.length?
                genres.map((genre,index)=>(
                  <tr key={genre.id}>
                    <td>{index+1}</td>
                    <td>{genre?.name || ''}</td>
                    <td>{genre?.slug || ''}</td>
                    <td>
                      {
                        moment(genre?.createdAt).format('YYYY-MM-DD') 
                        || ''
                      }
                    </td>
                    <td>
                      <button className="btn btn-mwd--sm" onClick={()=>editModelShow(genre)}>
                      <EditOutlined />Edit
                      </button>
                      <button className="btn btn-mwd--sm">
                      <ClearOutlined />Trash
                      </button>
                    </td>
                  </tr>
                )):
                <tr>
                  <td colSpan={5} className="text-center">
                    Sorry no genres found!!
                  </td>
                </tr>
              }
              
              
            </tbody>
            
          </table>
        </div>
        
      </Row>
      {/* end author's table */}
    </>
  );
}

export default GenreList;