import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Detail from '../src/components/Detail/Detail';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route} from 'react-router-dom'



const ele = <HashRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/detail/:mod/:item" component={Detail} />
    </div>
  </HashRouter>

ReactDOM.render(ele, document.getElementById('root'));
registerServiceWorker();
