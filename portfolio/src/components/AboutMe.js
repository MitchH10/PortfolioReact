import React from "react";
import './AboutMe.css';


export default function AboutMe() {
    return (
        <div>
            <div className="caption v-middle text-center">
                <h1 className="cd-headline clip"><span className="blc">I&#39;m |</span><span className="cd-words-wrapper"><b className="is-visible">A Designer.</b><b>A Developer.</b><b>A Creative.</b><b>An Engineer.</b></span></h1>
            </div>
            <div className="card">
                <img src="./img/ProfilePic.jpg" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Who I am?</h2>
                    <p className="card-text">
                        I'm a Software Engineer from San Antonio, Texas. I have a strong curiousity for how the world works, and a big love for
                        computer programming and problem solving. I appreciate efficiency and elegant solutions. I enjoy things in life and the beautiful details of the world.
                        I'm a true software craftsman.
                    </p>
                    <h2 className="card-title">My Story</h2>
                    <p>
                        I started programming at a very young age. I learned Javascript when I was 11 years old, and have been learning
                        and growing as a developer ever since. My curiosity for programming has never stopped and allowed me to pursue
                        personal projects and a greater understanding of computers and their programs. In highschool, I joined my local robotics team.
                        That experience solidified my dream of becoming a software engineer and a great computer programmer.
                    </p>
                    <h3 className="card-title">
                        My Career Journey
                    </h3>
                    <p>
                        Since starting my journey in programming at a young age, I have never stopped learning.
                        Having looked at, played with, examined, contructed, destructed, and experienced so much code over the years, I have
                        created a great familiarity with code. After learning a few programming languages at a young age (Javascript, Python, Logo),
                        I then started taking formal classes in highschool and college. I have built up over a decade of experience with code.
                    </p>
                    <h3 className="card-title">My Life Outside The Workspace</h3>
                    <p>
                        I'm an empath and enjoy spending time with others. I have a passion for nature and a fascination with plants and hiking.
                        I am big car guy and also love anime. I love to teach others and volunteered for many years with my highschool robotics team
                        as a mentor to the kids and a way to give back to the team that treated me so well. I love food and with that comes my affinity for cooking.
                    </p>
                </div>
            </div>
        </div>
    );
};