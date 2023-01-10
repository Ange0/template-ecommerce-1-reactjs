import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css';
import Home from './Pages/Home';
import Shopping from './Pages/Shopping';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/shopping'>
              <Shopping />
            </Route>
            <Route>
              <div>Error 404</div>
            </Route>
          </Switch>
      </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
