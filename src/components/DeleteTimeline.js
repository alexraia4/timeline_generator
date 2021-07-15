import React from 'react';
import axios from 'axios';
import "../css/deletetimeline.css";

function DeleteTimeLine(props) {


      const deleteTimeline = () => {
            axios.delete(`/timeline/delete/${props.match.params.tid}`)
            .then(thing => {
                  props.history.push("/home");
            })
      }

      const goBackToHome = () => {
            props.history.push("/home")
      }

      return (
            <div className = "deleteTimeline">
                  <h2 className = "deleteTimeline_areYouSure">Are you sure you want to delete this timeline????</h2>
                  <div className = "deleteTimeline_buttons">
                        <button onClick = {deleteTimeline} className = "deleteTimeline_button">Yes, Proceed</button>
                        <button onClick = {goBackToHome} className = "deleteTimeline_button">Cancel</button>
                  </div>
            </div>
      )
}

export default DeleteTimeLine;
