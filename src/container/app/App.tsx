import React from 'react'
import {Switch,withRouter} from 'react-router-dom'

import {
AsyncLogin,
AsyncDashboard,
AsyncAuthor,
} from './asyncComponents'

import PublicRoute from '../../routes/public'
import PublicLayout from '../../layouts/public';// public layout
import PrivateRoute from '../../routes/private' // private route
import PrivateLayout from '../../layouts/private' // private layout

function App(){
  return(
    <>
    <Switch>
      <PublicRoute path='/login' exact layout={PublicLayout} component={AsyncLogin}/>
      <PrivateRoute path='/' exact layout={PrivateLayout} component={AsyncDashboard}/>
      <PrivateRoute path='/authors' exact layout={PrivateLayout} component={AsyncAuthor}/>
    </Switch>
    </>
  )
}

export default withRouter(App);
