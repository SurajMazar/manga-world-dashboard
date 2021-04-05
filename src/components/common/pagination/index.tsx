import React from 'react';
import { pagemeta } from '../../../models/pagemeta.model';
import {DoubleRightOutlined,DoubleLeftOutlined} from '@ant-design/icons';

interface props{
  paginate:(page:number)=>void,
  pageMeta:pagemeta
}

const Pagination:React.FC<props> = props =>{
  const {
    paginate,
    pageMeta,
  } = props;

  const {perPage,total,currentPage} = pageMeta;

  const calculateTotalPages = () =>{
    const exactValue =  total/perPage;
    const floorValue = Math.floor(exactValue);
    if(exactValue>floorValue){
      return floorValue+1;
    }
    return floorValue;
  }

  const pages = calculateTotalPages(); // number of pages

  return(
    <>
    {
      pages && pages>1?
      <div className="section-break-1">
        <ul className="mw-backend-pagination">
          {
            currentPage !== 1?
            <li onClick={()=>paginate(currentPage-1)} >
              <DoubleLeftOutlined/> Pre
            </li>:""
          }
          
          {Array.from(Array(pages),(e,i)=>(
            <li key={i} onClick={()=>paginate(i+1)} className={i+1 === currentPage? 'active' : '' }>
              {i+1}
            </li>
          ))}

          {
            currentPage !== pages?
            <li onClick={()=>paginate(currentPage+1)} >
              Next <DoubleRightOutlined/>
            </li>:""
          }
        </ul>
      </div>
      :''
    }
    </>
  );
}

export default Pagination;