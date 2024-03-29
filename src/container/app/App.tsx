import React from 'react'
import {Switch,withRouter} from 'react-router-dom'

import Login from '../Login';
import Dashboard from '../Dashboard';
import Author from '../Author';
import Genre from '../Genre';

//manga components
import Manga from '../manga';
import MangaCreateEdit from '../manga/CreateEdit';

import PublicRoute from '../../routes/public'
import PublicLayout from '../../layouts/public';// public layout
import PrivateRoute from '../../routes/private' // private route
import PrivateLayout from '../../layouts/private' // private layout

function App(){
  return(
    <>
    <Switch>
      <PublicRoute path='/login' exact layout={PublicLayout} component={Login}/>
      <PrivateRoute path='/' exact layout={PrivateLayout} component={Dashboard}/>
      <PrivateRoute path='/authors' exact layout={PrivateLayout} component={Author}/>
      <PrivateRoute path='/genres' exact layout={PrivateLayout} component={Genre}/>
      <PrivateRoute path='/mangas' exact layout={PrivateLayout} component={Manga}/>
      <PrivateRoute path="/mangas/create" exact layout={PrivateLayout} 
      component={MangaCreateEdit}/>
      <PrivateRoute path="/mangas/edit" exact layout={PrivateLayout} 
      component={MangaCreateEdit}/>
    </Switch>
    </>
  )
}

export default withRouter(App);
