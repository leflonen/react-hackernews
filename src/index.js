import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Poster from './components/Poster';
import './index.css';


ReactDOM.render(
    <Router>
        <div className='container'>
            <Switch>
                <Route path='/poster/:by' component={Poster} />
                <Route path='/' component={App}/>
                <App />
            </Switch>
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
