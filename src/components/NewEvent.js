import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import "../css/newevent.css";

class NewEvent extends Component {
    
    constructor() {
        super();
        this.state = {
          name: "",
          year: 0,
          content: "",
        };
        this.create = this.create.bind(this);
    }

    create() {
        const {name, year, content} = this.state;
        const {tid} = this.props.match.params;
        
        axios.post(`/event/create/${tid}`, {name, content, year})
        .then(thing => {
            this.props.history.push(`/timeline/${tid}`);
        })
        
    }
    
    render() {
        
        return (
            <div className = "newEvent">

                <div>
                    <p>Name:</p>
                    <input type = "text" onChange = {e => this.setState({name: e.target.value})}/>
                </div>
                
                <div>
                    <p>Year:</p>
                    <input type = "text" onChange = {e => this.setState({year: e.target.value})}/>
                </div>
                
                <div>
                    <p>Context:</p>
                    <input type = "text" onChange = {e => this.setState({content: e.target.value})}/>
                </div>
                
                <div className = "newEvent_buttons">
                    <button onClick = {this.create} className = "newEvent_button">Create</button>
                    <Link to = {`/timeline/${this.props.match.params.tid}`}><button className = "newEvent_button">Back</button></Link>
                </div>
                
                
            </div>
            
        )
    }
}

export default NewEvent;
