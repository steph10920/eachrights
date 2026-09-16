
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Resources from "./pages/Resources";
import Gallery from "./pages/Gallery";
import Opportunities from "./pages/Opportunities";
import Donors from "./pages/Donors";
import Contact from "./pages/Contact";

// Programmes
import EducationJustice from "./pages/programmes/EducationJustice";
import GenderJustice from "./pages/programmes/GenderJustice";
import HealthJustice from "./pages/programmes/HealthJustice";
import EnvironmentalClimateJustice from "./pages/programmes/EnvironmentalClimateJustice";
import EconomicJustice from "./pages/programmes/EconomicJustice";
import BusinessHumanRights from "./pages/programmes/BusinessHumanRights";
import TheoryOfChange from "./pages/programmes/TheoryOfChange";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/donors" element={<Donors />} />
        <Route path="/contact" element={<Contact />} />

        {/* Our Work / Programmes */}
        <Route
          path="/our-work/programmes/education-justice"
          element={<EducationJustice />}
        />

        <Route
          path="/our-work/programmes/gender-justice"
          element={<GenderJustice />}
        />

        <Route
          path="/our-work/programmes/health-justice"
          element={<HealthJustice />}
        />

        <Route
          path="/our-work/programmes/environmental-climate-justice"
          element={<EnvironmentalClimateJustice />}
        />

        <Route
          path="/our-work/programmes/economic-justice"
          element={<EconomicJustice />}
        />

        <Route
          path="/our-work/programmes/business-human-rights"
          element={<BusinessHumanRights />}
        />

        <Route
          path="/our-work/programmes/theory-of-change"
          element={<TheoryOfChange />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
