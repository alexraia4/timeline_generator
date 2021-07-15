import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import '../css/edittimeline.css';

function EditTimeline (props) {

      let history = useHistory()
      const [name, setName] = useState("")
      const [startYear, setStartYear] = useState(0)
      const [endYear, setEndYear] = useState(null)
    

      useEffect(() => {
            axios.get(`/timeline/readone/${props.match.params.tid}`)
            .then(timeline => {
                  const {name, start_year, end_year} = timeline.data[0];
                  setName(name)
                  setStartYear(start_year)
                  setEndYear(end_year)
            })
      }, [])


      const update = () => {
            const tid = props.match.params.tid
            axios.put(`/timeline/update/${tid}`, {name, startYear, endYear})
            .then(thing => {
                  history.push("/home");
            })
      }
           
      return (
            <div className = "editTimeline">
                  <div>
                        <p>Name:</p>
                        <input type = "text" onChange = {e => setName(e.target.value)} value = {`${name}`}/>
                  </div>
                
                  <div>
                        <p>Start Year:</p>
                        <input type = "text" onChange = {e => setStartYear(e.target.value)} value = {`${startYear}`}/>
                  </div>

                  <div>
                        <p>End Year:</p>
                        <input type = "text" placeholder="optional" onChange = {e => setEndYear(e.target.value)} value = {`${endYear}`}/>
                  </div>
                
                  <div className = "editTimeline_buttons">
                        <button onClick = {update} className = "editTimeline_button">Update</button>
                        <Link to = {"/home"}><button className = "editTimeline_button">Back</button></Link>
                  </div>
            </div>
      )
}

export default EditTimeline;
