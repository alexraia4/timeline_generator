import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
            <Link to = {`/timeline/${timeline.timeline_id}`} key = { i }> <p>-{timeline.name}</p> </Link> 
        )

        );
        
        return (
            <div className = "home">
                <header>
                    <p>Have fun creating, {this.props.user.username}</p>
                </header>
                <p>My Timelines</p>
                <div className = "homePageTimelines">
                    {timelineLinks}
                </div>
                <Link to = {"/createnewtimeline"}>Create</Link>
                <button onClick = {this.logout}>Logout</button>
                
            </div>
            
        )
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps)(Home);
