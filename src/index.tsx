import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './container/app/App';
// import reportWebVitals from './reportWebVitals'
// styles
import 'antd/dist/antd.css'
import './assets/scss/index.scss'
// router imports
import {Router} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import history from './utils/history'
// store imports
import {Provider} from 'react-redux'
import store from './store/store'

ReactDOM.render(
  <Suspense fallback={()=>(<h1>'Loading')</h1>)}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router history={history}>
          <App />
        </Router>
      </ConnectedRouter>
    </Provider>
  </Suspense>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
