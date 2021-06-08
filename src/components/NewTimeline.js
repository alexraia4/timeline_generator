import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends Component {
    
    constructor() {
        super();
        this.state = {
          name: "",
          startDate: 0,
          endDate: null,
        };
        this.create = this.create.bind(this);
    }

    create() {
        const {name, startDate, endDate} = this.state;
        axios.post('/timeline/create', {name, startDate, endDate})
        .then(user => {
                this.props.history.push("/home");
        })
    }
    
    render() {
        
        return (
            <div className = "newTimeline">

                <p>Name:</p>
                <input type = "text" onChange = {e => this.setState({name: e.target.value})}/>
                
                <p>Start Year:</p>
                <input type = "text" onChange = {e => this.setState({startDate: e.target.value})}/>

                <p>End Year:</p>
                <input type = "text" placeholder="optional" onChange = {e => this.setState({endDate: e.target.value})}/>

                <button onClick = {this.create}>Create</button>
                <Link to = {"/home"}>Back</Link>
                
            </div>
            
        )
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps)(Home);
