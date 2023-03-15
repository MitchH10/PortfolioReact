import React, {useEffect} from "react";
import './AboutMe.css';
import { Typewriter } from 'react-simple-typewriter';

export default function AboutMe() {
    return (
        <div>
            <h1 className="typer">
                {<Typewriter 
                words={['I am a developer.', 'I am a creator.', 'I am a craftsman.', 'I am an engineer.']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000} />}
            </h1>
            <div className="card">
                <img src="./img/ProfilePic.jpg" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Who I Am</h2>
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
                        Having looked at, played with, examined, constructed, destructed, and experienced so much code over the years, I have
                        created a great familiarity with code. After learning a few programming languages at a young age (Javascript, Python, Logo),
                        I then started taking formal classes in highschool and college. I have built up over a decade of experience with code and I am very excited to put those skills to use.
                    </p>
                    <h3 className="card-title">My Life Outside The Workspace</h3>
                    <p>
                        I'm an empath and enjoy spending time with others. I have a passion for nature and a fascination with plants and hiking.
                        I am big car guy and also love anime. I love to teach others and I volunteered for many years with my highschool robotics team
                        as a mentor to the kids as a way to give back to the team that treated me so well. I love food and with that comes my affinity for cooking. I also love to learn and I am always interested in trying new things.
                    </p>
                </div>
            </div>
        </div>
    );
};