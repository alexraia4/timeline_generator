import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
            <div className = "EditTimeline">

                <p>Name:</p>
                <input type = "text" onChange = {e => this.setState({name: e.target.value})} value = {`${this.state.name}`}/>
                
                <p>Start Year:</p>
                <input type = "text" onChange = {e => this.setState({startDate: e.target.value})} value = {`${this.state.startDate}`}/>

                <p>End Year:</p>
                <input type = "text" placeholder="optional" onChange = {e => this.setState({endDate: e.target.value})} />

                <button onClick = {this.update}>Update</button>
                <Link to = {"/home"}>Back</Link>
                
            </div>
            
        )
    }
}


export default EditTimeline;
