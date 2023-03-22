import React from "react";
import './Portfolio.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Portfolio(){
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="main">My Portfolio</h1>
                        <p class="lead">A collection of my projects</p>
                    </div>
                </div>
            <div className="container-fluid caro">
                
                    <div class="title">
                        <h1 class="pawtitle">Pawfriends</h1>
                        <p class="lead">A crowd-sourced pet adoption platform</p>
                    </div>
                
                <Carousel >
                    <div>
                        <img alt="Paw Friends Home" src="./img/carousel/PawFriend1.png" />
                        <a href="https://petadoption231.herokuapp.com/" target="_blank" rel="noopener noreferrer"><p className="legend">Paw Friends Home</p></a>
                    </div>
                    <div>
                        <img alt="Paw Friends Login" src="./img/carousel/Paw2.png" />
                        <a href="https://petadoption231.herokuapp.com/" target="_blank" rel="noopener noreferrer"><p className="legend">Paw Friends Login</p></a>
                    </div>
                    <div>
                        <img alt="Paw Friends Main Page" src="./img/carousel/Paw3.png" />
                        <a href="https://petadoption231.herokuapp.com/" target="_blank" rel="noopener noreferrer"><p className="legend">Paw Friends Main Page</p></a>
                    </div>
                    <div>
                        <img alt="Paw Friends Profile Page" src="./img/carousel/Paw4.png" />
                        <a href="https://petadoption231.herokuapp.com/" target="_blank" rel="noopener noreferrer"><p className="legend">Paw Friends Profile Page</p></a>
                    </div>
                    <div>
                        <img alt="Paw Friends Form" src="./img/carousel/Paw5.png" />
                        <a href="https://petadoption231.herokuapp.com/" target="_blank" rel="noopener noreferrer"><p className="legend">Paw Friends Form</p></a>
                    </div>
                    <div>
                        <img alt="About Us Page" src="./img/carousel/Paw6.png" />
                        <a href="https://petadoption231.herokuapp.com/" target="_blank" rel="noopener noreferrer"><p className="legend">About Us Page</p></a>
                    </div>
                </Carousel>
                <div className="description">
                    <a className="btn btn-primary centerb" data-toggle="collapse" href="#collapseMain" role="button">
                        Description
                    </a>
                    <a className="btn btn-primary centerb" href="https://petadoption231.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        View Application
                    </a>
                    <a className="btn btn-primary centerb" href="https://github.com/calebcarnett/pawfriends" target="_blank" rel="noopener noreferrer">
                        View Github
                    </a>
                    <div className="collapse" id="collapseMain">
                        <div className="card card-body ">
                        This is a complete full stack application. This application utilizes a REST api using a MySQL database and an Express server. Users can log in or create a profile
                        to share a pet they would like to find a home for. Pet information and a picture are saved to the database and able to be deleted by the creator. This project was
                        created by a team of four, including myself, with a two week deadline.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid list">
                        <div className="row align-items-center">
                            <div className="col-sm-6 col-lg-4">
                                <div className="card portcard">
                                    <img className="card-img-top imglist" src="./img/PortList/NPS-Locator.png" alt="Image of National Park Locator"></img>
                                    <div className="card-body">
                                        <h4 className="card-title">National Park Locator</h4>
                                        <p className="card-text">A roadtrip planner for visiting national parks.</p>
                                        <a className="btn btn-primary centerb" data-toggle="collapse" href="#collapse1" role="button">
                                            Description
                                        </a>
                                        <a className="btn btn-primary centerb" href="https://rdalby2002.github.io/national-park-locator/" target="_blank" rel="noopener noreferrer">
                                            View Application
                                        </a>
                                        <a className="btn btn-primary centerb" href="https://github.com/rdalby2002/national-park-locator" target="_blank" rel="noopener noreferrer">
                                            View Github
                                        </a>
                                        <div className="collapse" id="collapse1">
                                            <div className="card card-body ">
                                                This application merges the NPS api and the Google Maps api to give information about the parks by state
                                                 and also shows the routes. This application was made using only HTML, CSS, and Javascript. This application
                                                 was created by our group of three developers and had a two week deadline.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card portcard">
                                    <img className="card-img-top imglist" src="./img/PortList/JATE.png" alt="Image of Jate"></img>
                                    <div className="card-body">
                                        <h4 className="card-title">J.A.T.E.</h4>
                                        <p className="card-text">Just Another Text Editor but as a PWA.</p>
                                        <a className="btn btn-primary centerb" data-toggle="collapse" href="#collapse2" role="button">
                                            Description
                                        </a>
                                        <a className="btn btn-primary centerb" href="https://jate-mitchh10.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                            View Application
                                        </a>
                                        <a className="btn btn-primary centerb" href="https://github.com/MitchH10/JATE" target="_blank" rel="noopener noreferrer">
                                            View Github
                                        </a>
                                        <div className="collapse" id="collapse2">
                                            <div className="card card-body ">
                                                This is a basic text editor adapted to use PWA industry standards to make an application that works offline, and able to be downloaded. This application uses 
                                                an express server as well as a client built with the latest webpack bundling tools to make it a PWA and for performance.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card portcard">
                                    <img className="card-img-top imglist" src="./img/PortList/BankGif.gif" alt="Image of Android Checkbook"></img>
                                    <div className="card-body">
                                        <h4 className="card-title">Android Checkbook</h4>
                                        <p className="card-text">A simple checkbook Android application for keeping track of transactions offline.</p>
                                        <a className="btn btn-primary centerb" data-toggle="collapse" href="#collapse3" role="button">
                                            Description
                                        </a>
                                        <a className="btn btn-primary centerb" href="https://github.com/MitchH10/BankingApp" target="_blank" rel="noopener noreferrer">
                                            View Github
                                        </a>
                                        <div className="collapse" id="collapse3">
                                            <div className="card card-body ">
                                                The idea for this application is to be a check booking app to track transactions. This would be a substitute to the current banking apps that collect
                                                large amounts of data and require you to log in with your banking information. This is an Android APK development and a place I use to brush up on my
                                                Java skills and branch out into app development. I plan to add transaction tracking using a built in database.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card portcard">
                                    <img className="card-img-top imglist" src="./img/PortList/TechBlog.png" alt="Image of Blog site"></img>
                                    <div className="card-body">
                                        <h4 className="card-title">Simple Blog</h4>
                                        <p className="card-text">This is a simple blog site using a REST api and login verification.</p>
                                        <a className="btn btn-primary centerb" data-toggle="collapse" href="#collapse4" role="button">
                                            Description
                                        </a>
                                        <a className="btn btn-primary centerb" href="https://github.com/MitchH10/Tech-Blog" target="_blank" rel="noopener noreferrer">
                                            View Github
                                        </a>
                                        <div className="collapse" id="collapse4">
                                            <div className="card card-body ">
                                                This application utilizes MySQL and Sequelize to create a Tech Blog. User login information, post information, and comments are all saved to the database.
                                                This application merges the front end, using Handlebars.js, to the backend express server.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card portcard">
                                    <img className="card-img-top imglist" src="./img/PortList/Password.png" alt="Image of Password Generator"></img>
                                    <div className="card-body">
                                        <h4 className="card-title">Password Generator</h4>
                                        <p className="card-text">A simple generator for creating new and unique passwords to fit any criteria given.</p>
                                        <a className="btn btn-primary centerb" data-toggle="collapse" href="#collapse5" role="button">
                                            Description
                                        </a>
                                        <a className="btn btn-primary centerb" href="https://mitchh10.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer">
                                            View Application
                                        </a>
                                        <a className="btn btn-primary centerb" href="https://github.com/MitchH10/Password-Generator" target="_blank" rel="noopener noreferrer">
                                            View Github
                                        </a>
                                        <div className="collapse" id="collapse5">
                                            <div className="card card-body ">
                                                This password generator uses arrays to generate a password with each character having an equally likely chance of being picked. After inputing the criteria, a pasword is generated.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card portcard">
                                    <img className="card-img-top imglist" src="./img/PortList/SQL.png" alt="Image of SQL Employee Database"></img>
                                    <div className="card-body">
                                        <h4 className="card-title">SQL Node Employee Database</h4>
                                        <p className="card-text">Simple MySQL database for storing and accessing employee information.</p>
                                        <a className="btn btn-primary centerb" data-toggle="collapse" href="#collapse6" role="button">
                                            Description
                                        </a>
                                        <a className="btn btn-primary centerb" href="https://github.com/MitchH10/Employe-Database-SQL" target="_blank" rel="noopener noreferrer">
                                            View Github
                                        </a>
                                        <div className="collapse" id="collapse6">
                                            <div className="card card-body ">
                                            This application is a command-line applicaton utilizing Node and MySQL12. This application keeps track of employees, roles, and departments of a company. 
                                            Add employees, add roles, add departments and keep track of everything.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
}
