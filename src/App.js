
import './App.css';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Projects/Project';
import Skill from './components/Skills/Skills';

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <Skill/>
      <Project/>
      <Education/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
