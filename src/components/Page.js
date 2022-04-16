import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") return <Home />;
    if (currentPage === "Projects") return <Projects />;
    if (currentPage === "Resume") return <Resume />;
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </>
  );
}
