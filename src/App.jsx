import './App.css';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import MySkills from './components/MySkills';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <AboutMe />
      <MySkills />
    </div>
  );
}

export default App;
