import DeviceOrientation from 'react-device-orientation';
import React from 'react';

import './home.css';

var i_alpha = null;
var i_beta = null;
var i_gamma = null;

const Background = () => (
    <DeviceOrientation>
        {({ absolute, alpha, beta, gamma }) => (
        <div>
            <div>
                {(() => {
                    if (alpha == null) {
                        return (
                            <div className="imgBgShell">
                                <div class="imgBg"></div>
                            </div>
                            
                        )
                    } else {
                        if (i_alpha == null || i_alpha == 0) {
                            i_alpha = alpha;
                            i_beta = beta;
                            i_gamma = gamma;
                        }

                        var diff_g = (gamma - i_gamma) * -0.4;
                        var diff_a = (alpha - i_alpha) * -0.4;
                        var diff_b = (beta - i_beta)  * -0.4;

                        diff_b = Math.max(Math.min(diff_b, 30), -30);
                        diff_g = Math.max(Math.min(diff_g, 30), -30);

                        return (
                            <div className="imgBgShell">
                                <div class="imgBg" style={{transform: `translateX(${diff_g}px) translateY(${diff_b}px) scale(1.1)`}}></div>
                            </div>
                        )
                    }
                })()}
            </div>
        </div>
        )}
    </DeviceOrientation>
)


export default class Home extends React.Component{
  render(){
    return (
        <div>
            <Background/>
            {/* <DeviceOrientation>
                {({ absolute, alpha, beta, gamma }) => (
                <div>
                    {`Absolute: ${absolute}`}
                    {`Alpha: ${alpha}`}
                    {`Beta: ${beta}`}
                    {`Gamma: ${gamma}`}
                </div>
                )}
            </DeviceOrientation> */}
            {/* <div class="imgBg"></div>  */}
            
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
        </div>
        
    );
  }
}