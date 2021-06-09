import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../css/timeline.css';


class Home extends Component {
    
    constructor() {
        super();
        this.state = {
          timeline: {},
          events: [],
          yearsToRender: []
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
            
        })
        
    }

    createMasterLine(years, events) {

    }


    render() {


        const masterLine = this.state.yearsToRender.map((year, index) => {
            
            
            /////loops through all events to check if event year matches
            for (let k = 0; k < this.state.events.length; k++) {
                if (year === this.state.events[k].year) {
                    return (
                        <div key = { index }>
                            <p>{year}</p>
                            <p>{this.state.events[k].name}</p>
                            <p>- {this.state.events[k].content}</p>
                        </div>
                    );
                }
            }
            
            ///return default if year has no events
            return (
                <div key = { index } className = "specificYear">
                    <p>{year}</p>
                </div>
            );
            
        });
        
        return (
            <div className = "timelineComp">
                <div className = "topRow">
                    <Link to = {"/home"}>Back</Link>
                    <p>{this.state.timeline.name}</p>
                    <Link to = {`/createnewevent/${this.state.timeline.timeline_id}`}>Add Event</Link>
                </div>

                <div className = "masterLine">
                    {masterLine}
                </div>
                
            </div>
            
        )
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps)(Home);
