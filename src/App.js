import React from "react";
import LandingPage from "./pages/LandingPage";
import SearchDetails from "./pages/SearchDetails";
import StellproCare from "./pages/StellproCare";
import Blogs from "./pages/Blogs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/searchdetails" element={<SearchDetails />} />
          <Route exact path="care" element={<StellproCare />} />
          <Route exact path="/blogs" element={<Blogs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
