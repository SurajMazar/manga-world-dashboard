import React from 'react';
import Loader from '../../assets/images/loader-primary.gif';


interface props{
  size?:number
}

const LoaderPrimary:React.FC<props> = props =>{


  const {size} = props;

  return(
    <>
      <img src={Loader} alt="O" 
        style={{width:`${size?size:20}px`}}
      />
    </>
  );
}

export default LoaderPrimary;