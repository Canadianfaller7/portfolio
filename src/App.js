import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import Projects from './components/work/Work';
import NotFound from './components/notFound/NotFound';
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={<About />}
          />
          <Route 
            path="/projects" 
            element={<Projects />}
          />
          <Route 
            path="/contact" 
            element={<Contact />}
          />
          <Route 
            path="*"
            element={<NotFound />}
          />
        </Routes>
        <Footer />
      </div>
  </Router>
  )
}

export default App;