import React from 'react'
import {Route} from 'react-router-dom'

interface PLinterface{
  layout:React.FC,
  component:any,
  path:string,
  exact:any,
}

const PrivateLayout:React.FC<PLinterface> = props =>{

  const {
    layout:Layout,
    component:RouterComponent,
    path,
    exact
  } = props

  return(
    <>
    <Route path={path} {...exact} render={()=>(
      <Layout>
        <RouterComponent/>
      </Layout>
    )}/>
    </>
  )
}

export default PrivateLayout