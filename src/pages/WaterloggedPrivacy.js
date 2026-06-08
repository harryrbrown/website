import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default class WaterloggedPrivacy extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="title">
                    <h1>
                        <span className="gradienttext">Privacy Policy</span>
                    </h1>
                    <h3>Waterlogged</h3>
                </div>

                <p><em>Last updated: 2024-08-17</em></p>

                <h2>Introduction</h2>
                <p>
                    Harry Brown, hrb116 ("we," "our," or "us") operates the Waterlogged Wear OS application (the "App").
                    This Privacy Policy explains how we collect, use, share, and protect information in relation to our App.
                    By using the App, you agree to the collection and use of information in accordance with this policy.
                </p>

                <h2>1. Information We Collect</h2>
                <p>We may store the following types of information:</p>
                <ul>
                    <li>
                        <strong>Access and Refresh Tokens:</strong> After users authenticate their Fitbit account using OAuth (PKCE),
                        we store the access and refresh tokens on the user's device. These tokens are necessary to connect to the
                        Fitbit API and enable the App's functionality.
                    </li>
                </ul>

                <h2>2. How We Use the Information</h2>
                <p>We use the information we store to:</p>
                <ul>
                    <li>Provide and maintain the App's functionality, specifically the connection to Fitbit APIs.</li>
                    <li>Authenticate user requests and retrieve data from the Fitbit API using the stored tokens.</li>
                </ul>

                <h2>3. Sharing of Information</h2>
                <p>
                    We do not sell, trade, or otherwise transfer your personal information, including access and refresh tokens,
                    to outside parties. The tokens never leave the Wear OS device.
                </p>
                <p>
                    <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response
                    to valid requests by public authorities.
                </p>

                <h2>4. Security</h2>
                <p>
                    We take reasonable measures to protect your information, including access and refresh tokens, from unauthorized
                    access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic
                    storage is 100% secure, and we cannot guarantee absolute security.
                </p>

                <h2>5. Data Retention</h2>
                <p>
                    We will retain your information, specifically the access and refresh tokens, only for as long as necessary to
                    fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>

                <h2>6. Your Rights</h2>
                <p>
                    Depending on your location, you may have certain rights regarding your personal information, such as the right
                    to access, correct, or delete your information. To exercise these rights, please contact us at{' '}
                    <a href="mailto:me@hrb116.uk">me@hrb116.uk</a>.
                </p>

                <h2>7. Children's Privacy</h2>
                <p>
                    The App is not intended for use by children under the age of 13, and we do not knowingly collect personal
                    information from children. If we become aware that we have inadvertently collected personal information from
                    a child under 13, we will take steps to delete it.
                </p>

                <h2>8. Changes to This Privacy Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the
                    "Last updated" date will be revised accordingly. Your continued use of the App after any changes constitutes
                    your acceptance of the new Privacy Policy.
                </p>

                <h2>9. Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
                <p>
                    Harry Brown<br />
                    <a href="mailto:me@hrb116.uk">me@hrb116.uk</a>
                </p>

                <br />
                <p><Link to="/projects/waterlogged">&larr; Back to Waterlogged</Link></p>
                <br />
            </div>
        );
    }
}
