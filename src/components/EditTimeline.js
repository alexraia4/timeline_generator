import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../css/edittimeline.css';

class EditTimeline extends Component {
    
    constructor() {
        super();
        this.state = {
          name: "",
          startDate: 0,
          endDate: null,
        };
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        axios.get(`/timeline/readone/${this.props.match.params.tid}`)
        .then(timeline => {
            const {name, start_year, end_year} = timeline.data[0];
            this.setState({name: name, startDate: start_year, endDate: end_year})
        })
    }


    update() {
        const {name, startDate, endDate} = this.state;
        const tid = this.props.match.params.tid
        
        axios.put(`/timeline/update/${tid}`, {name, startDate, endDate})
        .then(user => {
                this.props.history.push("/home");
        })
        
    }
    
    render() {
        
        return (
            <div className = "editTimeline">
                <div>
                    <p>Name:</p>
                    <input type = "text" onChange = {e => this.setState({name: e.target.value})} value = {`${this.state.name}`}/>
                </div>
                
                <div>
                    <p>Start Year:</p>
                    <input type = "text" onChange = {e => this.setState({startDate: e.target.value})} value = {`${this.state.startDate}`}/>
                </div>
                
                <div>
                    <p>End Year:</p>
                    <input type = "text" placeholder="optional" onChange = {e => this.setState({endDate: e.target.value})} />
                </div>
                
                <div className = "editTimeline_buttons">
                    <button onClick = {this.update} className = "editTimeline_button">Update</button>
                    <Link to = {"/home"}><button className = "editTimeline_button">Back</button></Link>
                </div>
                
                
            </div>
            
        )
    }
}


export default EditTimeline;
