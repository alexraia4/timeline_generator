import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom'
import '../css/home.css'

function Home () {



      // let history = useHistory()
      // const [timelines, setTimelines] = useState([])

      // useEffect(() => {
      //       axios.get('/timeline/readall')
      //       .then(timelines => {
      //             this.setState({timelines: timelines.data});
      //       })
      // }, [])

      // const logout = () => {
      //       axios.get('/auth/logout')
      //       .then(thing => {
      //             history.push("/")
      //       })       
      // }

      // const timelineLinks = this.state.timelines.map((timeline, i) => (
      //       <div className = "home_timeline" key = { i }>
      //             <Link to = {`/timeline/${timeline.timeline_id}`}> <p>-{timeline.name}</p> </Link>
      //             <div className = "home_buttons">
      //                   <Link to = {`/edittimeline/${timeline.timeline_id}`}><button className = "home_button">Edit</button></Link>
      //                   <Link to = {`/deletetimeline/${timeline.timeline_id}`}><button className = "home_button">Delete</button></Link>
      //             </div>
      //       </div>
      // )
        
      // return (
      //       <div className = "home">
      //             <header>
      //                   <p>Have fun creating, {this.props.user.username}</p>
      //             </header>
      //             <p className = "home_myTimelines">My Timelines:</p>
      //             <div className = "home_timelines">
      //                   {timelineLinks}
      //             </div>
      //             <div className = "home_bottomButtons">
      //                   <Link to = {"/createnewtimeline"}><button className = "home_bottomButton">Create</button></Link>
      //                   <Link to = {"/timeline/2"}><button className = "home_bottomButton">World History</button></Link>
      //                   <button onClick = {this.logout} className = "home_bottomButton">Logout</button>
      //             </div>
      //       </div>
      // );

}
export default Home;
