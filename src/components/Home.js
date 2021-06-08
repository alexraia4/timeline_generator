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
        axios.get('/timeline/readall')
        .then(timelines => {
            this.setState({timelines: timelines.data});
        })
    }

    
    render() {
        console.log("state", this.state.timelines);
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
