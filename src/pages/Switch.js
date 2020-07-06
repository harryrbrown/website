import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';


export default class Switch extends React.Component{
  render(){
    return (
        <div class="main">
            <div class="title">
                <h1>
                    <span class="gradienttext" style={{background: "linear-gradient(#26547C, #333)"}}>Add me on</span>
                    <br></br>&nbsp;
                    <span class="gradienttext" style={{background: "linear-gradient(#E01A4F, #EF626C)"}}>Switch!</span>
                </h1>
                <br></br>
            </div>
            <div>
                <p>SW-5987-3282-4303</p>
            </div>
        </div>
    );
  }
}