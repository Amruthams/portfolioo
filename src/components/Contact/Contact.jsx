import React from 'react'
import './Contact.css'

const Contact = () => {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "23d07262-ac61-4b63-b313-a9ce4cf3d4e3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get In Touch</h1>
      </div>

      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's talk</h1>
          <p>I'm open to taking on new projects and would love to collaborate. Feel free to reach out with any ideas or tasks you'd like me to work on—I'm available anytime!</p>

          <div className="contact-details">
          <div className="contact-detail">
            <img src="https://i.postimg.cc/zBd4cwmd/icons8-email-48-2.png" alt="" />
            <p>amruthams@gmail.com</p>

          </div>
          <div className="contact-detail">
            <img src="https://i.postimg.cc/yxG4kmvJ/icons8-call-32.png" alt="" />
            <p>+91 623784830</p>
            
          </div>
          <div className="contact-detail">
            <img src="https://i.postimg.cc/jdWYB1Sy/icons8-location-50.png" alt="" />
            <p>Malappuram,Kerala</p>

            
          </div>
        </div>
        </div>


        <div className='contact-rght'>
          <form onSubmit={onSubmit} className='contact-right'>
            
            <input type="text" placeholder='Your Name'  name='name' required/>
            <input type="email" placeholder='Your Email' name='email' required/>
            <textarea name="message" rows={5} placeholder='Your Message' required></textarea>
  
            <button type='submit' className='contact-submit'> Submit</button>
  
            
          </form>
        </div>

        
      </div>
      
    </div>
  )
}

export default Contact
