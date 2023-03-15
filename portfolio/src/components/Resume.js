import React from "react";
import './Resume.css'
export default function Resume() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">My Skills</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3">
                                <h3>Languages</h3>
                                <ul>
                                    <li>Java</li>
                                    <li>C++</li>
                                    <li>Visual Basic</li>
                                    <li>C#</li>
                                    <li>Python</li>
                                    <li>Lua</li>
                                    <li>G</li>
                                    <li>Logo</li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <h3>Scripts, Query, & Markup Languages</h3>
                                <ul>
                                    <li>Javascript</li>
                                    <li>SQL</li>
                                    <li>Powershell</li>
                                    <li>GraphQL</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JSON</li>
                                    <li>AutoHotkey</li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                    <h3>Frameworks</h3>
                                    <ul>
                                        <li>Express</li>
                                    </ul>
                                    <h3>Source Control</h3>
                                    <ul>
                                        <li>Git</li>
                                    </ul>
                                    <h3>Libraries</h3>
                                    <ul>
                                        <li>React</li>
                                        <li>Redux</li>
                                        <li>Sequelize</li>
                                    </ul>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                    <h3>Databases</h3>
                                    <ul>
                                        <li>MySQL</li>
                                        <li>MongoDB</li>
                                        <li>Mongoose</li>
                                        <li>IndexedDB</li>
                                        <li>NoSQL</li>
                                    </ul>
                                    <h3>Deployments</h3>
                                    <ul>
                                        <li>Heroku</li>
                                        <li>AWS</li>
                                        <li>Kubernetes</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p>Download my <a href="./pdf/ResumeMarch23.pdf">resume</a>.</p>
            <iframe height='900px'
                    src="https://docs.google.com/document/d/e/2PACX-1vSmkNT42GL_sSJP4uapOQVx9i35uqE6LhWny51sFirxdSEtwMBc8CJNFAFD1zzhW46Lo-uSmJZr2AlL/pub?embedded=true">
            <p>Your browser does not support iframes.</p>
        </iframe>
        </div>
    );
}