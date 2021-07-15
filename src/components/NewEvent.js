import React, { useState } from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import "../css/newevent.css";

function NewEvent(props) {

      const history = useHistory();
      const [name, setName] = useState("")
      const [year, setYear] = useState(0)
      const [content, setContent] = useState("")

      const create = () => {
            const {tid} = props.match.params;
            axios.post(`/event/create/${tid}`, {name, content, year})
            .then(thing => {
                  history.push(`/timeline/${tid}`);
            })
      }

      return (
            <div className = "newEvent">

                  <div>
                        <p>Name:</p>
                        <input type = "text" onChange = {e => setName(e.target.value)}/>
                  </div>
                
                  <div>
                        <p>Year:</p>
                        <input type = "text" onChange = {e => setYear(e.target.value)}/>
                  </div>
                
                  <div>
                        <p>Context:</p>
                        <input type = "text" onChange = {e => setContent(e.target.value)}/>
                  </div>
                
                  <div className = "newEvent_buttons">
                        <button onClick = {create} className = "newEvent_button">Create</button>
                        <Link to = {`/timeline/${props.match.params.tid}`}><button className = "newEvent_button">Back</button></Link>
                  </div>
                
            </div>      
      )
}

export default NewEvent;
