import React from "react";
import LandingPage from "./pages/LandingPage";
import SearchDetails from "./pages/SearchDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/searchdetails" element={<SearchDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
