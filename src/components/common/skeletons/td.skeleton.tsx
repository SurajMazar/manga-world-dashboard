import React from 'react';
import {Skeleton} from 'antd';

interface props{
  cols:number,
  items:number,
}

const TdSkeleton:React.FC<props> = props=>{
  const {cols,items} = props;
  return(
    <>
    {Array.from(Array(items),(e,i)=>(
      <tr key={i}>
        {Array.from(Array(cols),(e,i)=>(
          <td key={i}> 
            <Skeleton active paragraph={false}/>
          </td>
        ))}
      </tr>
    ))}
    </>
  );
}

export default TdSkeleton;