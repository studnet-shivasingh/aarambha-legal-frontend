import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import PracticeAreas from "./components/PracticeAreas";
import Contact from "./components/Contact";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import CaseResults from "./components/CaseResults";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

import AuthPage from "./components/Auth/AuthPage";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login"; // keep import for future routes (not used in homepage)

function HomePage() {
  return (
    <div className="min-h-screen bg-brandBlack text-white font-sans">
      <Navbar />
      
      <main className="pt-16 space-y-0">

        <Hero />
        <About />
        <PracticeAreas />
        <WhyUs />
        <Testimonials />
        <CaseResults />
        <Contact />
      </main>

      <Footer />
      <ScrollToTopButton/>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* LANDING PAGE */}
      <Route path="/" element={<HomePage />} />

      {/* AUTH PAGE */}
      <Route path="/auth" element={<AuthPage />} />

      {/* LOGIN PAGE */}
      <Route path="/login" element={<Login />} />

      {/* DASHBOARD PRIVATE ROUTE */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      {/* WRONG URL REDIRECT */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}




