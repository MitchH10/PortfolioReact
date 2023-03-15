import React, { useState } from 'react';
import './Navbar.css'
import AboutMe from './AboutMe';
import Footer from './Footer';
import Resume from './Resume';
import Contact from './Contact';
import Portfolio
 from './Portfolio';
// Here we destructure our props into their own distinct variables
export default function Navbar() {
  const [page, setPage] = useState("About Me");

  const handleClick = (e) => {
    const {target} = e;
    setPage(target.textContent);
  };

  return (
    <div>
        <nav className="navbar navbar-expand-lg py-3 navbar-dark shadow-sm">
          <div className="container">
            <a href="/" className="navbar-brand">
              <span className="font-weight-bold">Mitchell Harper</span>
            </a>

            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>

            <div id="navbarSupportedContent" className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                {page === "About Me" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>About Me</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>About Me</a></li>)}
                {page === "Portfolio" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>Portfolio</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>Portfolio</a></li>)}
                {page === "Contact" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>Contact</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>Contact</a></li>)}
                {page === "Resume" ? (<li className="nav-item active"><a className="nav-link" onClick={handleClick}>Resume</a></li>) : (<li className="nav-item"><a className="nav-link" onClick={handleClick}>Resume</a></li>)}
              </ul>
            </div>
          </div>
        </nav>
        {
        {
          'About Me': <AboutMe />,
          'Portfolio': <Portfolio />,
          'Contact': <Contact />,
          'Resume': <Resume />
        }[page]
      }
        <Footer />
    </div>
  );
}
