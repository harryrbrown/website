import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

import linkedin from './../img/052-linkedin.svg';
import github from './../img/032-github.svg';
import twitter from './../img/096-twitter.svg';
import spotify from './../img/082-spotify.svg';
import _switch from './../img/switch.svg';

export default class Contact extends React.Component{
  render(){
    return (
        <div class="main">
            <div class="title">
                <h1>
                    <span class="gradienttext">Contact</span>
                </h1>
                <br></br>
            </div>
            <div>
                <p>Please get in touch with me via the social media buttons 🙂</p>
            </div><br/><br/>
            <div>
                <a href="https://www.linkedin.com/in/hryrbrn"><img className="socialIcon" src={linkedin} /></a>
                <a href="https://www.github.com/harryrbrown"><img className="socialIcon" src={github} /></a>
                <a href="https://www.twitter.com/hryrbrn"><img className="socialIcon" src={twitter} /></a>
                <a href="https://open.spotify.com/user/21ttlagltvoefrfidydhporzy?si=lN9Qq27STW6V_jDSY_9Jkg"><img className="socialIcon" src={spotify}/></a>
                <Link to="/switch"><img className="socialIcon" src={_switch} /></Link><br/><br/>
            </div>
        </div>
    );
  }
}