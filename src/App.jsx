import './App.css';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import MySkills from './components/MySkills';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <AboutMe />
      <MySkills />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
