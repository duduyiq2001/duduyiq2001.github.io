import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're not on home page, navigate to home first then scroll
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav
      className="fixed w-full bg-opacity-90 backdrop-blur-lg z-50"
      style={{ background: "linear-gradient(45deg, #0a0a0f, #1a1a2f)" }}
    >
      {/* On larger screens, items are in a row. On mobile, they become a column */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="text-2xl font-bold hover:opacity-80 transition-opacity duration-300"
            style={{
              color: "#ff1b6b",
              textShadow: "0 0 5px #ff1b6b",
            }}
          >
            &lt;/&gt;
          </button>

          {/* Navigation items - flex-wrap allows items to wrap on smaller screens */}
          <div className="flex flex-wrap gap-4 md:gap-8 items-center">
            <button
              onClick={() => navigate("/")}
              className="text-white hover:text-neon-pink transition-colors duration-300"
            >
              Home
            </button>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white hover:text-neon-pink transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-white hover:text-neon-pink transition-colors duration-300"
            >
              Skills
            </button>
            <NavLink href="#algorithms">Cool Algorithm Visualizations</NavLink>
            <NavLink href="#contact">Contact</NavLink>

            <a
              href="https://buymeacoffee.com/duyiqundean"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-pink hover:text-white transition-colors duration-300 border-b border-neon-pink/50 hover:border-white"
            >
              Buy Me a Coffee
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Separate NavLink component for reusability
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="hover:text-pink-500 transition-colors duration-300 text-white"
    >
      {children}
    </a>
  );
};

export default Navbar;
