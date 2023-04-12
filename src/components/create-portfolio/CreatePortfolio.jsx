import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {About, Contact, Footer, Nav, Header, Projects, Resume, NotFound} from "../index";
import {useState} from "react";

const Create = () => {
  const [currentPage, setCurrentPage] = useState();

  // const pageRoute = () => {
  //   if (currentPage === "About") {
  //     return <Route exact path='/' element={<About />} />;
  //   }
  //   if (currentPage === "Projects") {
  //     return <Route path='/projects' element={<Projects />} />;
  //   }
  //   if (currentPage === "Contact") {
  //     return <Route path='/contact' element={<Contact />} />;
  //   }
  //   if (currentPage === "Resume") {
  //     return <Route path='
  //     #resume' element={<Resume />} />;
  //   }
  //   <Route path='*' element={<NotFound />} />;
  // };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Router>
      <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        <Header />
        <Routes>
          <Route path='/' exact element={<About />} />
          <Route path='/projects' exact element={<Projects />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/resume' exact element={<Resume />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Create;
