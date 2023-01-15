import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import LibraryPage from "../../pages/LibraryPage";
import MovieFormPage from "../../pages/MovieFormPage";

const Section = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/library' element={<LibraryPage />} />
        <Route path='/form' element={<MovieFormPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default Section;
