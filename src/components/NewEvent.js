import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
            <div className = "newTimeline">

                <p>Name:</p>
                <input type = "text" onChange = {e => this.setState({name: e.target.value})}/>
                
                <p>Year:</p>
                <input type = "text" onChange = {e => this.setState({year: e.target.value})}/>

                <p>Context:</p>
                <input type = "text" onChange = {e => this.setState({content: e.target.value})}/>

                <button onClick = {this.create}>Create</button>
                <Link to = {"/home"}>Back</Link>
                
            </div>
            
        )
    }
}

export default NewEvent;
