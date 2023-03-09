import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Contact, Footer, Nav, Header, Projects, NotFound } from './components/index';

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
            path="/react-portfolio/projects" 
            element={<Projects />}
          />
          <Route 
            path="/react-portfolio/contact" 
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