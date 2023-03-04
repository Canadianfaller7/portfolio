import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Contact, Footer, Nav, Header, Projects, NotFound } from './components/index';
import './App.css';


const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Header />
        <Routes>
          <Route 
            path="/react-portfolio" 
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
  );
}

export default App;