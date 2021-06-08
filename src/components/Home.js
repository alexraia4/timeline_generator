import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Home extends Component {
    
    constructor() {
        super();
        this.state = {
          timelines: []
        };
      }

    componentDidMount(){
        axios.get('http://localhost:3001/timeline/readall')
        .then(timelines => {
            //this.setState = {timelines: timelines};
            console.log(timelines);
        })
    }
    
    
    render() {
        return (
            <div className = "home">
                <header>
                    <p>Have fun creating, {this.props.user.username}</p>
                </header>
                <p>My Timelines</p>
                <div className = "homePageTimelines">

                </div>
                <button>Create a New Timeline</button>
                <button>Logout</button>
                
            </div>
            
        )
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps)(Home);
