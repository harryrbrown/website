import DeviceOrientation from 'react-device-orientation';
import React from 'react';
import { Popover } from 'antd';

import newyork from './../img/new_york.jpg';
import holborn from './../img/holborn.jpg';
import singapore from './../img/singapore.jpg';
import shanghai from './../img/shanghai.jpg';
import kensington from './../img/kensington.jpg';
import sapporo from './../img/sapporo.jpg';
import camera from './../img/camera_circle.svg';

import './home.css';

var i_alpha = null;
var i_beta = null;
var i_gamma = null;
var diff_g = null;
var diff_b = null;

const Background = ({style}) => (
    <DeviceOrientation>
        {({ absolute, alpha, beta, gamma }) => (
        <div>
            <div>
                {(() => {
                    if (alpha == null) {
                        return (
                            <div className="imgBgShell">
                                <div class="imgBg" style={style}></div>
                            </div>
                            
                        )
                    } else {
                        if (i_alpha == null || i_alpha == 0) {
                            i_alpha = alpha;
                            i_beta = beta;
                            i_gamma = gamma;

                            return (
                                <div className="imgBgShell">
                                    <div class="imgBg" style={style}></div>
                                </div>
                            );
                        }
                        else {
                            if (i_beta < 0) {
                                if (beta > i_beta + 180) {
                                    diff_b = beta - i_beta - 360;
                                } else {
                                    diff_b = beta - i_beta;
                                }
                            } else {
                                if (beta < i_beta - 180) {
                                    diff_b = beta - i_beta + 360;
                                } else {
                                    diff_b = beta - i_beta;
                                }
                            }

                            diff_b *= 0.4;
                            diff_g = (gamma - i_gamma) * -0.4;
                            // var diff_a = (alpha - i_alpha) * -0.4;
                            // var diff_b = (beta - i_beta)  * -0.4;
    
                            diff_b = Math.max(Math.min(diff_b, 30), -30);
                            // diff_g = Math.max(Math.min(diff_g, 30), -30);
    
                            return (
                                <div className="imgBgShell">
                                    <div class="imgBg" style={style} style={{transform: `translateX(${0}px) translateY(${diff_b}px) scale(1.1)`,...style}}></div>
                                </div>
                            )
                        }

                    }
                })()}
            </div>
        </div>
        )}
    </DeviceOrientation>
)


export default class Home extends React.Component{
    componentWillMount() {
        const images = [newyork, holborn, singapore, shanghai, kensington];
        const titles = ["World Trade Center", "Holborn", "Gardens by the Bay", "Pudong", "Kensington"]
        const contents = [(<div><p>🇺🇸 New York City, USA</p><p>📷 Google Pixel 2 XL</p></div>), (<div><p>🇬🇧 London, UK</p><p>📷 Google Pixel 2 XL</p></div>), 
                            (<div><p>🇸🇬 Singapore</p><p>📷 Google Pixel 2 XL</p></div>), (<div><p>🇨🇳 Shanghai, CN</p><p>📷 Google Pixel 2 XL</p></div>),
                            (<div><p>🇬🇧 London, UK</p><p>📷 Google Pixel 2 XL</p></div>)]
        const index = Math.floor(Math.random() * images.length);
        const backgroundImg = images[index];

        var bgPosY = ``;
        if (index == 2) { bgPosY = `75%`; }
        else if (index == 3) { bgPosY = `20%`; }
        else { bgPosY = `60%`; }

        this.setState({
            imgBg: {
                backgroundImage: `url(${backgroundImg})`,
                backgroundPositionY: bgPosY
            },
            title: titles[index],
            content: contents[index]
        })
    }

    render() {
        return (
            <div>
                <Background style={this.state.imgBg}/>
                
                <div class="main">
                    <div class="title">
                        <h1>
                            <span class="gradienttext" style={{background: "linear-gradient(#26547C, #333)"}}>Harry</span>
                            <br></br>&nbsp;
                            <span class="gradienttext" style={{background: "linear-gradient(#E01A4F, #EF626C)"}}>Brown</span>
                        </h1>
                        <br></br>
                        
                    </div>
                </div>

                <Popover className="cameraPopover" placement="rightBottom" title={this.state.title} content={this.state.content}><img src={camera}></img></Popover>
                
            </div>
            
        );
    }
}