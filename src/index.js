import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Detail from '../src/components/Detail/Detail';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route} from 'react-router-dom'
import './index.css';



const ele = <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/detail" component={Detail} />
    </div>
  </BrowserRouter>

ReactDOM.render(ele, document.getElementById('root'));
registerServiceWorker();
