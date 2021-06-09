import { Component } from 'react';
import {HashRouter} from "react-router-dom"
import routes from './routes.js';
import './css/app.css';

class App extends Component{
  render() {
    return (
      <div className = "App">
        <HashRouter>
          {routes}
        </HashRouter>
      </div>
      
    )
  }
    
}

export default App;
