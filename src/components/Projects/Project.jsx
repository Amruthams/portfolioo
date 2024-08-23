import React from 'react'
import './Project.css'

const Project = () => {
    return (
        <div id='project' className='project'>

           <div className='each-project'>
                <div className="project-title">
                    <h1>Projects</h1>
                    <p>Here are some of my projects. </p>
                </div>
    
                <div className='p-cards'>
                    
    
    
                    <div className='project-card'>
                        <div className='projects-details'>
                            <img src="" alt="" />
                            <div className='lang'>
                                <span>hhhh</span>
                            </div>
                            <div className='about'></div>
                            <button className='button'>view</button>
                        </div>
                    </div>

                    <div className='project-card'>
                        <div className='projects-details'>
                            <img src="" alt="" />
                            <div className='lang'>
                                <span>hhhh</span>
                            </div>
                            <div className='about'></div>
                            <button className='button'>view</button>
                        </div>
                    </div>

                    <div className='project-card'>
                        <div className='projects-details'>
                            <img src="" alt="" />
                            <div className='lang'>
                                <span>hhhh</span>
                            </div>
                            <div className='about'></div>
                            <button className='button'>view</button>
                        </div>
                    </div>

                    {/* <div className='project-card'>
                        <div className='projects-details'>
                            <img src="" alt="" />
                            <div className='lang'>
                                <span>hhhh</span>
                            </div>
                            <div className='about'>
                                notes
                            </div>
                            <button className='button'>view</button>
                        </div>
                    </div> */}
                </div>
           </div>

           <div className='show-button'>
            <p>Show More</p>
            <img src="https://i.postimg.cc/sgwPST50/icons8-arrow-30-1.png" alt="" />
           </div>

        </div>
    )
}

export default Project
