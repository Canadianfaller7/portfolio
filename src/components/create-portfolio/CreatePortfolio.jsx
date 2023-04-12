import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {About, Contact, Footer, Nav, Header, Projects, Resume, NotFound} from "../index";
import {useState} from "react";

const Create = () => {
  const [currentPage, setCurrentPage] = useState();

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Router basename="/portfolio">
      <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        <Header />
        <Routes>
          <Route path='/' exact element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Create;
