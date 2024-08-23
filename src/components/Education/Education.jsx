import React from 'react'
import './Education.css'

const Education = () => {
    return (
        <div id='education' className='education'>
            <div className="education-section">
                <h2 className="section-title">Education</h2>
                <div className="education-cards">
                    <div className="education-card">
                        <div className="card-content">
                            <div className='icon'>
                                {/* <img src="https://i.postimg.cc/3rnYDNFM/icons8-react-native-48.png" alt="" /> */}
                                <h3>KMCT COLLEGE OF ENGINEERING</h3>
                            </div>
                            <p>Master's In Computer Application</p>
                            <p1>KTU University, 2021 - 2023</p1>
                            <p>CGPA: 7.93/10</p>
                        </div>
                    </div>
                    <div className="education-card">
                        <div className="card-content">
                            <div className='icon'>
                                {/* <img src="https://i.postimg.cc/90Y2NHf2/mtc-fotor-bg-remover-20240815213645.png" alt="" /> */}
                                <h3>MAR THOMA COLLEGE CHUNGATHARA</h3>
                            </div>
                            <p>BSc. Computer Science</p>
                            <p1>University of Calicut, 2018 - 2021</p1>
                            <p>Percentage: 63.5 %</p>
                        </div>
                    </div>
                    <div className="education-card">
                        <div className="card-content">

                            <h3>Higher Secondary Education</h3>
                            <p>Science Stream</p>
                            <p1>CHSS Pothukal, 2016 - 2018</p1>
                            <p>Percentage: 87%</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Education
