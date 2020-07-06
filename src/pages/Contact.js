import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';


export default class Contact extends React.Component{
  render(){
    return (
        <div class="main">
            <div class="title">
                <h1>
                    <span class="gradienttext" style={{background: "linear-gradient(#26547C, #333)"}}>Contact</span>
                </h1>
                <br></br>
            </div>
            <div>
                <p>Please get in touch with me via the social media buttons 🙂</p>
            </div>
        </div>
    );
  }
}