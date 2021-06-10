import React, { Component } from 'react';
import axios from 'axios';

class DeleteTimeLine extends Component {
    
    constructor() {
        super();
        this.state = {
         
        };
        this.deleteTimeline = this.deleteTimeline.bind(this);
        this.goBackToHome = this.goBackToHome.bind(this);
    }


    deleteTimeline() {
        axios.delete(`/timeline/delete/${this.props.match.params.tid}`)
        .then(thing => {
            this.props.history.push("/home");
        })
    }

    goBackToHome() {
        this.props.history.push("/home")
    }
    
    
    render() {

        
        
        return (
            <div className = "deleteTimeline">
                <h2>Are you sure you want to delete this timeline????</h2>
                <button onClick = {this.deleteTimeline}>Yes, Proceed</button>
                <button onClick = {this.goBackToHome}>Cancel</button>
            </div>
            
        )
    }
}


export default DeleteTimeLine;
