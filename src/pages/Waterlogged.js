import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import './waterlogged.css';

import waterloggedIcon from './../img/waterlogged.png';

const screenshots = [
    "https://github.com/user-attachments/assets/cbc37687-f856-4fd1-9c7f-0dbc7d1f1cd2",
    "https://github.com/user-attachments/assets/b42a7d3c-5395-40f4-a3bd-4e6e0fe1b490",
    "https://github.com/user-attachments/assets/3ec67227-d43f-44d5-a485-fa47669554fe",
    "https://github.com/user-attachments/assets/9c71db4a-d39c-4b58-b37e-1155c2b33133",
    "https://github.com/user-attachments/assets/8c2fbc1d-1e44-4a79-881b-0a2331ce1db1",
];

export default class Waterlogged extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="wl-header">
                    <img src={waterloggedIcon} alt="Waterlogged icon" className="wl-icon" />
                    <div className="title">
                        <h1>
                            <span className="gradienttext">Waterlogged</span>
                        </h1>
                    </div>
                </div>

                <p className="wl-tagline">
                    A Wear OS tile for quick and easy water intake logging to Fitbit, straight from your wrist.
                </p>

                <a
                    href="https://play.google.com/store/apps/details?id=com.hrb116.waterlogged"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://github.com/user-attachments/assets/15f732f9-54d4-44fa-9d3a-7dbde8691fde"
                        alt="Get it on Google Play"
                        className="wl-play-badge"
                    />
                </a>

                <div className="wl-screenshots">
                    {screenshots.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`Waterlogged screenshot ${i + 1}`}
                            className="wl-screenshot"
                        />
                    ))}
                </div>

                <h2 className="wl-section-title">Features</h2>
                <ul className="wl-features">
                    <li>Authenticates with Fitbit via OAuth 2.0 PKCE through your paired phone</li>
                    <li>Three quick-tap buttons to log a glass (250 ml / 8 oz), bottle (500 ml / 16 oz), or large bottle (750 ml / 24 oz)</li>
                    <li>Customisable preset amounts in the companion app</li>
                    <li>Progress bar around the tile shows your progress towards your daily water goal</li>
                </ul>

                <h2 className="wl-section-title">Requirements</h2>
                <ul className="wl-features">
                    <li>Wear OS device paired to a phone</li>
                    <li>Fitbit account</li>
                </ul>

                <h2 className="wl-section-title">Privacy &amp; Security</h2>
                <p>
                    The app does not store your Fitbit account information. The only data saved on-device are your access tokens,
                    required to maintain the connection with Fitbit's APIs. These tokens never leave your device.
                    Read the full <Link to="/projects/waterlogged/privacy">Privacy Policy</Link>.
                </p>

                <br />
            </div>
        );
    }
}
