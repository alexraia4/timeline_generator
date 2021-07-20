import { Component } from 'react';
import {BrowserRouter, HashRouter} from "react-router-dom"
import routes from './routes.js';
import './css/app.css';

const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

class App extends Component{
  render() {
    return (
      <div className = "app">
        <Router>
          {routes}
        </Router>
      </div>
      
    )
  }
    
}

export default App;
