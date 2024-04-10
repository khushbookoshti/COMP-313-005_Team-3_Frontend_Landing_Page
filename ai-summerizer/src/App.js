import './App.css';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// App Component: This is the root component of the website.
// It serves as the main entry point and renders all other components, representing different sections of the website.
function App() {
  return (
    <div className="App">
      {/* Home Section */}
      <Home />
      {/* About Section */}
      <About/>
      {/* Work Section */}
      <Work/>
      {/* Testimonials Section */}
      <Testimonials/>
      {/* Contact Section */}
      <Contact/>
      {/* Footer Section */}
      <Footer/>
    </div>
  );
}

export default App;
