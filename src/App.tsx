import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";
import Experience from "./components/Experience";
import AlgorithmShowcase from "./components/Algorithms";
import NeuralNetworkViz from "./components/algorithms/NeuralNetworkViz";
import FourierTransformViz from "./components/algorithms/FourierDrawing";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return <div className="pt-6 md:pt-0 ">{children}</div>;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/About"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/Contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Algorithms" element={<AlgorithmShowcase />} />
          <Route
            path="/algorithms/neural-network"
            element={<NeuralNetworkViz />}
          />
          <Route
            path="/algorithms/fourier-transform"
            element={
              <PageWrapper>
                <FourierTransformViz />
              </PageWrapper>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
