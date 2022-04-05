import React from "react";
import LandingPage from "./pages/LandingPage";
import SearchDetails from "./pages/SearchDetails";
import StellproCare from "./pages/StellproCare";
import Blogs from "./pages/Blogs";
import Assessments from "./pages/Assessments";
import ScreeningPage from "./pages/ScreeningPage";
import Autism from "./pages/Autism";
import Specialists from "./pages/Specialists";
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
          <Route exact path="/assessments" element={<Assessments />} />
          <Route exact path="/screening" element={<ScreeningPage />} />
          <Route exact path="/autism" element={<Autism />} />
          <Route exact path="/specialists" element={<Specialists />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
