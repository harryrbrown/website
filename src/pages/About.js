import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';


export default class About extends React.Component{
  render(){
    return (
        <div class="main">
            <div class="title">
                <h1>
                    <span class="gradienttext" style={{background: "linear-gradient(#26547C, #333)"}}>About</span>
                </h1>
                <br></br>
            </div>
            <div>
                <p>I'm Harry, a software engineer, part-time designer, and 2020 graduate from Imperial College London.</p>
                <p>I live near Saffron Walden, Essex, but you can find a map of places I have visited <Link to="/travel">here</Link>.</p>
            </div>
        </div>
    );
  }
}