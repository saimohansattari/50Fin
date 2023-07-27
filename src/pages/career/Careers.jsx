import React from 'react'
import './style.css'
import careerImage from './career.svg'

function Careers() {
  const Strings = {
    WELCOME_MESSAGE : 'Careers Page hello SMS'
  }
  return (
    <div>{Strings.WELCOME_MESSAGE}
    <div className="content">
        <div className="careers">
            <div className="careers-img">
              <img src={careerImage} alt="" />
            </div>
            <div className="careers-text">
              <div className="heading">
                <h1>Join Our <span>TEAM</span></h1>
              </div>
              <div className="sub-heading"><p>Revolutionizing Indian Fintech, One Product at a time</p></div><br />
              <div className="discription"> <p>Join our team and be part of an innovative and inclusive workplace where your skills, ideas, and growth are valued.</p> </div><br /><br />
              <div className="button">
                <a href='https://wellfound.com/company/50fintech/jobs' target='_blank'>Apply Now</a>
              </div>
            </div>
            
          </div>
    </div>
      
    </div>
  )
}

export default Careers