import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../css/timeline.css';


class Home extends Component {
    
    constructor() {
        super();
        this.state = {
          timeline: {},
          events: [],
          yearsToRender: 0
        };
       
    }
    
    componentDidMount() {
        
        axios.get(`/timeline/readone/${this.props.match.params.tid}`)
        .then(timeline => {
            this.setState({timeline: timeline.data[0]});
        })

        axios.get(`/event/readall/${this.props.match.params.tid}`)
        .then(events => {
            this.setState({events: events.data});
        })
        
    }


    render() {

        return (
            <div className = "timelineComp">
                <div className = "topRow">
                    <Link to = {"/home"}>Back</Link>
                    <p>{this.state.timeline.name}</p>
                    <Link to = {"/home"}>Add Event</Link>
                </div>
                
            </div>
            
        )
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps)(Home);
