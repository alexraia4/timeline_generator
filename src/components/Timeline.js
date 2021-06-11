import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../css/timeline.css';

import '../css/stupidfix.css';




class Timeline extends Component {
    
    constructor() {
        super();
        this.state = {
          timeline: {},
          events: [],
          yearsToRender: [],
          masterLine: []
        };
       
    }
    
    componentDidMount() {
        
        axios.get(`/timeline/readone/${this.props.match.params.tid}`)
        .then(timeline => {
            this.setState({timeline: timeline.data[0]});
        })

        axios.get(`/event/readall/${this.props.match.params.tid}`)
        .then(events => {
            
            let ly = 0;
            if (this.state.timeline.end_year) {
                ly = this.state.timeline.end_year
            }
            else {
                ly = new Date().getFullYear()
            }
           
            
            let fy = this.state.timeline.start_year;
            let howManyLoops = ly - fy;
            let arr = [];
    
            for (let i = 0; i <= howManyLoops; i++ ) {
                arr.push(fy);
                fy++;
            }
            this.setState({events: events.data, yearsToRender: arr});
            

            this.createMasterLine(arr, events.data);
        })
        
    }

    createMasterLine(years, events) {
        let masterLine = [];
        years.forEach(year => {
            let yearObj = {year, events: []};
            events.forEach(event => {
                if (event.year === year) {
                    yearObj.events.push(event);
                }
            });
            masterLine.push(yearObj);

        });

        this.setState({masterLine: masterLine})
    }
        
        
        


    render() {

//        THE QUICK FIX
/////////////////////////////////////////////
        const masterLine = this.state.yearsToRender.map((year, index) => {
            
            
            /////loops through all events to check if event year matches
            for (let k = 0; k < this.state.events.length; k++) {
                if (year === this.state.events[k].year) {
                    return (
                        <div key = { index } className = "specificYear">
                            <h2>{year}</h2>
                            <p className = "specificEvent_title">{this.state.events[k].name}</p>
                            <p>- {this.state.events[k].content}</p>
                        </div>
                    );
                }
            }
            
            ///return default if year has no events
            return (
                <div key = { index } className = "specificYear">
                    <h2>{year}</h2>
                </div>
            );
            
        });
///////////////////////////////////////


        return (
            <div className = "timelineComp">
                <div className = "topRow">
                    <Link to = {"/home"}><button className = "timeline_button">Back</button></Link>
                    <p className = "timelineComp_title">{this.state.timeline.name}</p>
                    <Link to = {`/createnewevent/${this.state.timeline.timeline_id}`}><button className = "timeline_button">Add Event</button></Link>
                </div>

                <div className = "masterLine">
                    {masterLine}
                </div>
                
            </div>
            
        )
    }
}

export default Timeline;