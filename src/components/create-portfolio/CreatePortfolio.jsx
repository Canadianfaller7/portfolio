import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Contact, Footer, Nav, Header, Projects, Resume, NotFound } from '../index';
import { useState } from 'react';

const Create = () => {

  const [currentPage, setCurrentPage] = useState("About")

  const pageRoute = () => {
    if(currentPage === "About") {
      return(
        <Route 
          path="/react-portfolio" 
          element={<About />}
        />
      ) 
    }
    if(currentPage === "Projects") {
      return(
        <Route 
          path="/react-portfolio/projects" 
          element={<Projects />}
        />
      ) 
    }
    if(currentPage === "Contact") {
      return(
        <Route 
          path="/react-portfolio/contact" 
          element={<Contact />}
        />
      ) 
    }
    if(currentPage === "Resume") {
      return(
        <Route 
          path="/react-portfolio/resume" 
          element={<Resume />}
        />
      ) 
    }
    if(currentPage === "Null") {
      return(
        <Route 
          path="*" 
          element={<NotFound />}
        />
      ) 
    }
  }
  
  const handlePageChange = (page) => setCurrentPage(page);
  

  return (
    <Router>
      <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
        <Header />
        <Routes>
          {pageRoute()}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default Create;