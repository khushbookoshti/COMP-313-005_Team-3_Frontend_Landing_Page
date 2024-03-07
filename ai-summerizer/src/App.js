
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
//import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <Home />
     
     <About/>
     <Work/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
