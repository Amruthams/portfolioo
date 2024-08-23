import React, { useEffect } from 'react'
import './Skills.css'


const Skill = () => {


  useEffect(() => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    window.scrollTo(0, window.pageYOffset - navbarHeight);
  }, []);


  return (
    <div id='skills' className='skill'>

      <div className="skill-title">
        <h1>Skills</h1>
        <p>Here are some of my skills. I am always learning and improving, with the goal of continually<br /> enhancing my abilities and contributing effectively to any team I work with.</p>
      </div>

      <div className="skill-section">

        <div class="skill-card">
          <h2>Frontend</h2>
          <div class="skills-grid">
            <div class="skill-item">
              <img src="https://i.postimg.cc/3rnYDNFM/icons8-react-native-48.png" alt="React Js" />
              <span>React Js</span>
            </div>
            <div class="skill-item">
              <img src="https://i.postimg.cc/P5mtJ46y/icons8-html-48-1.png" alt="Redux" />
              <span>HTML</span>
            </div>
            <div class="skill-item">
              <img src="https://i.postimg.cc/htbrSXdw/icons8-css-48.png" alt="Redux" />
              <span>CSS</span>
            </div>
            <div class="skill-item">
              <img src="https://i.postimg.cc/N0CRMmfN/icons8-bootstrap-48.png" alt="Redux" />
              <span>BOOTSTRAP</span>
            </div>
            <div class="skill-item">
              <img src="https://i.postimg.cc/brD7Mxd4/icons8-javascript-48.png" alt="Redux" />
              <span>JAVASCRIPT</span>
            </div>
            
          </div>
        </div>

        <div class="skill-card">
          <h2>Backend</h2>
          <div class="skills-grid">
          <div class="skill-item">
              <img src="https://i.postimg.cc/GhSQtW7P/icons8-nodejs-32-1.png" alt="Redux" />
              <span>Node JS</span>
            </div>
            <div class="skill-item">
              <img src="https://i.postimg.cc/G28rww5M/icons8-mongo-db-48.png" alt="Redux" />
              <span>MongoDB</span>
            </div>
            <div class="skill-item">
              <img src="https://i.postimg.cc/zG8JLQyB/icons8-express-js-48.png" alt="Redux" />
              <span>Express Js</span>
            </div>
            
            
          </div>
        </div>


        

        <div class="skill-card">
          <h2>Other</h2>
          <div class="skills-grid">
            <div class="skill-item">
              <img src="https://i.postimg.cc/4dJtBP2N/icons8-vs-code-48.png" alt="React Js" />
              <span>VS Code</span>
            </div>
            <div class="skill-item">
              <img src="https://i.postimg.cc/8zZjTGZD/icons8-github-30-2.png" alt="Redux" />
              <span>GitHub</span>
            </div>
            
          </div>
        </div>

      </div>


    </div>
  )
}

export default Skill
