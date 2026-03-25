import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Navbar from "./segments/Navbar";
import App from "./App.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Footer from "./segments/Footer";

import SkillAcademy from "./pages/SkillAcademy";
import StepCareers from "./pages/StepCareers";
import SageConsulting from "./pages/SageConsulting";
import AnabiSolutions from "./pages/AnabiSolutions";
import WingsOverseas from "./pages/WingsOverseas";
import ShapeSolutions from "./pages/ShapeSolutions";
import Gallery from "./pages/Gallery";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <App />
              <Footer />
              
            </>
          }
        />
        {/* ✅ ADD THESE HERE (FIXED) */}
        <Route
          path="/privacy-policy"
          element={
            <>
              <PrivacyPolicy />
              <Footer />
            </>
          }
        />

        <Route
          path="/terms"
          element={
            <>
              <Terms />
              <Footer />
            </>
          }
        />

        {/* Gallery (No Footer) */}
        <Route path="/gallery" element={<Gallery />} />

        {/* Service Pages */}
        <Route
          path="/skill-academy"
          element={
            <>
              <SkillAcademy />
              <Footer />
            </>
          }
        />

        <Route
          path="/step-careers"
          element={
            <>
              <StepCareers />
              <Footer />
            </>
          }
        />

        <Route
          path="/sage-consulting"
          element={
            <>
              <SageConsulting />
              <Footer />
            </>
          }
        />

        <Route
          path="/anabi-solutions"
          element={
            <>
              <AnabiSolutions />
              <Footer />
            </>
          }
        />

        <Route
          path="/wings-overseas"
          element={
            <>
              <WingsOverseas />
              <Footer />
            </>
          }
        />

        <Route
          path="/shape-solutions"
          element={
            <>
              <ShapeSolutions />
              <Footer />
            </>
          }
        />

      </Routes>

    </BrowserRouter>
  </StrictMode>
);