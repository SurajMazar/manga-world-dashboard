import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


interface Props{
  loading:boolean,
  title:string,
  icon?:any,
}

const LoadingButton:React.FC<Props>= props =>{

  const {
    loading,
    title,
    icon:Icon,
  } = props;

  const antIcon = <LoadingOutlined style={{ fontSize: 24, color:"#fff"}} spin />;

  return(
    <button className="btn btn-mwd" 
      disabled={loading} type='submit'>
      {
      loading?
      <Spin indicator={antIcon} />:
      Icon?
        <Icon/>:""
      }
      {title}
    </button>
  );
}

export default LoadingButton;