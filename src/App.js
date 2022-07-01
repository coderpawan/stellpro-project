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
import GiftedChild from "./blogs/GiftedChild";
import SpecialSchools from "./blogs/SpecialSchools";
import VirtualAutism from "./blogs/VirtualAutism";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import AboutUs from "./pages/AboutUs";
import VideoOnDemand from "./pages/VideoOnDemand";
import Community from "./pages/Community";
import AbaTreatment from "./blogs/AbaTreatment";
import Babies from "./blogs/Babies";
import MildAutism from "./blogs/MildAutism";
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
          <Route
            exact
            path="/blogs/virtualautism"
            element={<VirtualAutism />}
          />
          <Route exact path="/blogs/giftedchild" element={<GiftedChild />} />
          <Route
            exact
            path="/blogs/specialschools"
            element={<SpecialSchools />}
          />
          <Route exact path="/blogs/aba" element={<AbaTreatment />} />
          <Route exact path="/blogs/babies" element={<Babies />} />
          <Route exact path="/blogs/mildautism" element={<MildAutism />} />
          <Route exact path="/assessments" element={<Assessments />} />
          <Route exact path="/screening" element={<ScreeningPage />} />
          <Route exact path="/autism" element={<Autism />} />
          <Route exact path="/specialists" element={<Specialists />} />
          <Route exact path="/blogdetails" element={<BlogDetails />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/videoondemand" element={<VideoOnDemand />} />
          <Route exact path="/community" element={<Community />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
