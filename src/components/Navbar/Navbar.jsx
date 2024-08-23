import React ,{ useState } from 'react'
import './Navbar.css'
// import logo from '../../assets/logo.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const [menu,setMenu]=useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (section) => {
    setMenu(section);
    setIsMenuOpen(false);
  };

  

  // Function to handle the "Connect Me" button click
  const handleConnectMeClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close the menu after clicking Connect Me
  };


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  // const [theme, setTheme] = useState('dark');

  // // Update the body's class based on the theme
  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme]);

  // // Function to toggle the theme
  // const toggleTheme = () => {
  //   setTheme(theme === 'light' ? 'dark' : 'light');
  // };
  return (


    <div className="navbar">
      <div className="navbar-left">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        
        <h1>Portfolio</h1>
        
      </div>
      <ul   className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
        <li className={menu === "about" ? "selected" : ""}>
          <a href="#home" onClick={() => handleMenuClick("about")}>About</a>
        </li>
        <li className={menu === "skills" ? "selected" : ""}>
          <a href="#skills" onClick={() => handleMenuClick("skills")}>Skills</a>
        </li>
        <li className={menu === "projects" ? "selected" : ""}>
          <a href="#project" onClick={() => handleMenuClick("projects")}>Projects</a>
        </li>
        <li className={menu === "education" ? "selected" : ""}>
          <a href="#education" onClick={() => handleMenuClick("education")}>Education</a>
        </li>

        <li>
          <div className="nav-connect-mobile" onClick={handleConnectMeClick}>Connect Me</div>
        </li>
      </ul>
      {/* <div className="navbar-right">
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </button>
      </div> */}

      <div className='nav-right'>
        <div className='nav-connect' onClick={handleConnectMeClick}> Connect Me</div></div>
        {/* <img src="https://i.postimg.cc/MKx67w4G/icons8-menu-100.png" alt="" className='menu-bar' /> */}

        <img
          src="https://i.postimg.cc/MKx67w4G/icons8-menu-100.png"
          alt="menu bar"
          className="menu-bar"
          onClick={toggleMenu}
        />

    </div>
    
  )
}

export default Navbar
