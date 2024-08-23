import React from 'react'
import './Home.css'
import profile from '../../assets/pp.png'
import Typing from 'react-typing-effect';

const Home = () => {
    return (
        <div id='home' className='home'>

            <div className="section section-left">
                <h1>Hi, I'm  <br /> <span> AMRUTHA MS </span> </h1>
                <p><span>I am a </span>
                    <Typing className='typing'
                        text={['Frontend Developer', 'React Js Developer']}
                        speed={200}
                        eraseDelay={500}
                        typingDelay={500}
                    />
                </p>

                <p1>
                    I'm a motivated and flexible person who loves to learn and take on new challenges.
                    I'm dedicated to doing my best work and always stay positive,
                    ready to make a difference and achieve great things.
                </p1>

                <div className='home-action'>
                    {/* <div className="home-git" >GitHub </div> */}
                    <a href='https://github.com/Amruthams/' target='_blank' rel='noopener noreferrer' className="home-git">
                        GitHub
                    </a>
                    {/* <div className="home-resume">My Resume</div> */}
                    <a href='https://drive.google.com/file/d/16MqdsJSx1dhgEonvpA1GqEluiJS166-p/view?usp=drive_link' target='_blank' rel='noopener noreferrer' className="home-resume">
                        My Resume
                    </a>
                </div>
            </div>
            <div className="section section-right">
                <div className='container'>
                    <div className='shape'>
                        <img src={profile} alt="" />
                        {/* <img src='https://i.postimg.cc/yNxBqYBM/pp-9bb2a3e6ad1c0a2e6c1a-removebg-preview.png' alt="" /> */}
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Home
