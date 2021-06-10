import React, { Component } from 'react';
import axios from 'axios';
import "../css/deletetimeline.css";

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
                <h2 className = "deleteTimeline_areYouSure">Are you sure you want to delete this timeline????</h2>
                <div className = "deleteTimeline_buttons">
                    <button onClick = {this.deleteTimeline} className = "deleteTimeline_button">Yes, Proceed</button>
                    <button onClick = {this.goBackToHome} className = "deleteTimeline_button">Cancel</button>
                </div>
                
            </div>
            
        )
    }
}


export default DeleteTimeLine;
