import React from 'react';
import {Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

interface PLinterface{
  layout:React.FC,
  component:any,
  path:string,
  exact:any,
}

interface state{
  auth:{
    authenticated:boolean
  }
}

const PrivateLayout:React.FC<PLinterface> = props =>{

  const {
    layout:Layout,
    component:RouterComponent,
    path,
    exact,
    
  } = props

  const authenticated = useSelector((state:state)=>state.auth.authenticated)

  return(
    <>
    <Route path={path} {...exact} render={()=>(
      <>
      {authenticated?
        <Layout>
        <RouterComponent/>
        </Layout>
      :
      <Redirect to='/login'/>
      }
      
      </>
    )}/>
    </>
  )
}

export default PrivateLayout