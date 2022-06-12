import React from "react";
import LandingPage from "./pages/LandingPage";
import SearchDetails from "./pages/SearchDetails";
import StellproCare from "./pages/StellproCare";
import Blogs from "./pages/Blogs";
import Assessments from "./pages/Assessments";
import ScreeningPage from "./pages/ScreeningPage";
import Autism from "./pages/Autism";
import Specialists from "./pages/Specialists";
import BlogDetails from "./pages/BlogDetails";
import Occupationaltherapy from "./blogs/Occupationaltherapy";
import ADHD from "./blogs/ADHD";
import AfterADHD from "./blogs/AfterADHD";
import ManageADHD from "./blogs/ManageADHD";
import SignofADHD from "./blogs/SignofADHD";
import TipsADHD from "./blogs/TipsADHD";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import VideoOnDemand from "./pages/VideoOnDemand";
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
          <Route
            exact
            path="/blogs/occupationaltherapy"
            element={<Occupationaltherapy />}
          />
          <Route exact path="/blogs/adhd" element={<ADHD />} />
          <Route exact path="/blogs/afteradhd" element={<AfterADHD />} />
          <Route exact path="/blogs/manageadhd" element={<ManageADHD />} />
          <Route exact path="/blogs/signsofadhd" element={<SignofADHD />} />
          <Route exact path="/blogs/tipsadhd" element={<TipsADHD />} />
          <Route exact path="/assessments" element={<Assessments />} />
          <Route exact path="/screening" element={<ScreeningPage />} />
          <Route exact path="/autism" element={<Autism />} />
          <Route exact path="/specialists" element={<Specialists />} />
          <Route exact path="/blogdetails" element={<BlogDetails />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/videoondemand" element={<VideoOnDemand />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
