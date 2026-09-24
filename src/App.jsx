import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import HowWeWork from "./pages/HowWeWork";
import Resources from "./pages/Resources";
import Gallery from "./pages/Gallery";
import Opportunities from "./pages/Opportunities";
import Donors from "./pages/Donors";
import Contact from "./pages/Contact";

// Who We Are
import OurStory from "./pages/whoweare/OurStory";
import StrategicPlan from "./pages/whoweare/StrategicPlan";
import OurTeam from "./pages/whoweare/OurTeam";

// What We Do
import WhatweDo from "./pages/Whatwedo";

// Programmes
import EducationJustice from "./pages/programmes/EducationJustice";
import GenderJustice from "./pages/programmes/GenderJustice";
import HealthJustice from "./pages/programmes/HealthJustice";
import EnvironmentalClimateJustice from "./pages/programmes/EnvironmentalClimateJustice";
import EconomicJustice from "./pages/programmes/EconomicJustice";
import TheoryOfChange from "./pages/programmes/TheoryOfChange";

// Processes
import UniversalPeriodicReview from "./pages/processes/UniversalPeriodicReview";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/donors" element={<Donors />} />
        <Route path="/contact" element={<Contact />} />

        {/* Who We Are */}
        <Route path="/who-we-are/our-story" element={<OurStory />} />
        <Route
          path="/who-we-are/strategic-plan"
          element={<StrategicPlan />}
        />
        <Route path="/who-we-are/team" element={<OurTeam />} />

        {/* What We Do */}
        <Route path="/what-we-do" element={<WhatweDo />} />

        {/* Programmes */}
        <Route
          path="/programmes/education-justice"
          element={<EducationJustice />}
        />
        <Route
          path="/programmes/gender-justice"
          element={<GenderJustice />}
        />
        <Route
          path="/programmes/health-justice"
          element={<HealthJustice />}
        />
        <Route
          path="/programmes/environmental-climate-justice"
          element={<EnvironmentalClimateJustice />}
        />
        <Route
          path="/programmes/economic-justice"
          element={<EconomicJustice />}
        />
        <Route
          path="/programmes/theory-of-change"
          element={<TheoryOfChange />}
        />

        {/* Processes */}
        <Route
          path="/processes/universal-periodic-review"
          element={<UniversalPeriodicReview />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;