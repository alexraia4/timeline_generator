import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../css/newtimeline.css';

class NewTimeline extends Component {
    
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

                <div>
                    <p>Name:</p>
                    <input type = "text" onChange = {e => this.setState({name: e.target.value})}/>
                </div>
                
                <div>
                    <p>Start Year:</p>
                    <input type = "text" onChange = {e => this.setState({startDate: e.target.value})}/>
                </div>
                
                <div>
                    <p>End Year:</p>
                    <input type = "text" placeholder="optional" onChange = {e => this.setState({endDate: e.target.value})}/>
                </div>
                
                <div className = "newTimeline_buttons">
                    <button onClick = {this.create} className = "newTimeline_button">Create</button>
                    <Link to = {"/home"} ><button className = "newTimeline_button">Back</button></Link>
                </div>
                
                
            </div>
            
        )
    }
}


export default NewTimeline;
