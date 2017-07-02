import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Detail from '../src/components/Detail/Detail';
import registerServiceWorker from './registerServiceWorker';
import { renderRoutes } from 'react-router-config'


import './index.css';
import {
  BrowserRouter
} from 'react-router-dom'


const Root = ({ route }) => (
  <div>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
)

const routes = [
  { component: Root,
    routes: [
      { path: '/',
        exact: true,
        component: App
      }, {
        path: '/detail',
        component: Detail
      }
    ]
  }
]


ReactDOM.render(
    <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
