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
                                    <p>Java</p>
                                    <p>C++</p>
                                    <p>Visual Basic</p>
                                    <p>C#</p>
                                    <p>Python</p>
                                    <p>Lua</p>
                                    <p>G</p>
                                    <p>Logo</p>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <h3>Scripts, Query, & Markup Languages</h3>
                                <ul>
                                    <p>Javascript</p>
                                    <p>SQL</p>
                                    <p>Powershell</p>
                                    <p>GraphQL</p>
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>JSON</p>
                                    <p>AutoHotkey</p>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                    <h3>Frameworks</h3>
                                    <ul>
                                        <p>Express</p>
                                    </ul>
                                    <h3>Source Control</h3>
                                    <ul>
                                        <p>Git</p>
                                    </ul>
                                    <h3>Libraries</h3>
                                    <ul>
                                        <p>React</p>
                                        <p>Redux</p>
                                        <p>Sequepze</p>
                                    </ul>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                    <h3>Databases</h3>
                                    <ul>
                                        <p>MySQL</p>
                                        <p>MongoDB</p>
                                        <p>Mongoose</p>
                                        <p>IndexedDB</p>
                                        <p>NoSQL</p>
                                    </ul>
                                    <h3>Deployments</h3>
                                    <ul>
                                        <p>Heroku</p>
                                        <p>AWS</p>
                                        <p>Kubernetes</p>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="download" >Download my <a href="./pdf/ResumeMarch23.pdf" download>resume</a>.</p>
            <iframe height='900px'
                    src="https://docs.google.com/document/d/e/2PACX-1vSmkNT42GL_sSJP4uapOQVx9i35uqE6LhWny51sFirxdSEtwMBc8CJNFAFD1zzhW46Lo-uSmJZr2AlL/pub?embedded=true">
            <p>Your browser does not support iframes.</p>
        </iframe>
        </div>
    );
}