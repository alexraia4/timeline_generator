import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../css/home.css';

class Home extends Component {
    
    constructor() {
        super();
        this.state = {
          timelines: []
        };
        this.logout = this.logout.bind(this);
    }

    componentDidMount(){
        axios.get('/timeline/readall')
        .then(timelines => {
            this.setState({timelines: timelines.data});
        })
    }

    logout() {
        axios.get('/auth/logout')
        .then(thing => {
            this.props.history.push("/");
        })       
    }

    
    
    render() {

        const timelineLinks = this.state.timelines.map((timeline, i) => (
            <div className = "home_timeline" key = { i }>
                <Link to = {`/timeline/${timeline.timeline_id}`}> <p>-{timeline.name}</p> </Link>
                <div className = "home_buttons">
                    <Link to = {`/edittimeline/${timeline.timeline_id}`}><button className = "home_button">Edit</button></Link>
                    <Link to = {`/deletetimeline/${timeline.timeline_id}`}><button className = "home_button">Delete</button></Link>
                </div>
            </div>
        ));
        
        return (
            <div className = "home">
                <header>
                    <p>Have fun creating, {this.props.user.username}</p>
                </header>
                <p className = "home_myTimelines">My Timelines:</p>
                <div className = "home_timelines">
                    {timelineLinks}
                </div>
                <div className = "home_bottomButtons">
                    <Link to = {"/createnewtimeline"}><button className = "home_bottomButton">Create</button></Link>
                    <Link to = {"/timeline/2"}><button className = "home_bottomButton">World History</button></Link>
                    <button onClick = {this.logout} className = "home_bottomButton">Logout</button>
                </div>
                
                
            </div>
            
        )
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps)(Home);
