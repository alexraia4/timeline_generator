import { Component } from 'react';
import {HashRouter, Link} from "react-router-dom"
import routes from './routes.js';

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
