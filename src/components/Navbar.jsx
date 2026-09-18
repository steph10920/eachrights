import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const [mobileProgrammesOpen, setMobileProgrammesOpen] = useState(false);
  const [mobileProcessesOpen, setMobileProcessesOpen] = useState(false);

  // =========================================================
  // MAIN NAVIGATION
  // =========================================================

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resources", path: "/resources" },
    { name: "Gallery", path: "/gallery" },
    { name: "Opportunities", path: "/opportunities" },
    { name: "Donors", path: "/donors" },
    { name: "Contact", path: "/contact" },
  ];

  // =========================================================
  // PROGRAMMES
  // =========================================================

  const programmeLinks = [
    {
      name: "Education Justice Programme",
      path: "/our-work/programmes/education-justice",
    },
    {
      name: "Gender Justice Programme",
      path: "/our-work/programmes/gender-justice",
    },
    {
      name: "Health Justice Programme",
      path: "/our-work/programmes/health-justice",
    },
    {
      name: "Environmental & Climate Justice Programme",
      path: "/our-work/programmes/environmental-climate-justice",
    },
    {
      name: "Economic Justice",
      path: "/our-work/programmes/economic-justice",
    },
    {
      name: "Business and Human Rights Programme",
      path: "/our-work/programmes/business-human-rights",
    },
    {
      name: "Theory of Change",
      path: "/our-work/programmes/theory-of-change",
    },
  ];

  // =========================================================
  // PROCESSES
  // =========================================================

  const processLinks = [
    {
      name: "Universal Periodic Review",
      path: "/processes/universal-periodic-review",
    },
  ];

  // =========================================================
  // CLOSE MOBILE MENU
  // =========================================================

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileWorkOpen(false);
    setMobileProgrammesOpen(false);
    setMobileProcessesOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* =====================================================
            LOGO
        ===================================================== */}

        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMobileMenu}
        >
          <img
            src={logo}
            alt="EACH Rights"
            className="navbar-logo-image"
          />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <nav className="desktop-nav">

          {/* HOME */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </NavLink>

          {/* ABOUT */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </NavLink>

          {/* =================================================
              OUR WORK
          ================================================= */}

          <div className="nav-dropdown">

            {/* IMPORTANT:
                Our Work is NOT a link.
                It is only a dropdown trigger.
            */}

            <button
              type="button"
              className="nav-link dropdown-trigger"
              aria-haspopup="true"
            >
              <span>Our Work</span>
              <ChevronDown size={16} />
            </button>

            {/* =================================================
                OUR WORK DROPDOWN
            ================================================= */}

            <div className="dropdown-menu our-work-menu">
              <div className="dropdown-menu-panel">

              {/* PROGRAMMES */}
              <div className="nested-dropdown">

                <button
                  type="button"
                  className="dropdown-item programme-trigger"
                  aria-haspopup="true"
                >
                  <div className="dropdown-item-content">

                    <span className="dropdown-item-title">
                      Programmes
                    </span>

                    <span className="dropdown-item-description">
                      Our thematic programmes and areas of intervention
                    </span>

                  </div>

                  <ChevronRight
                    size={17}
                    className="nested-arrow"
                  />
                </button>

                {/* =================================================
                    PROGRAMMES SUBMENU
                ================================================= */}

                <div className="nested-menu">
                  <div className="nested-menu-panel">

                  {programmeLinks.map((programme) => (
                    <Link
                      key={programme.path}
                      to={programme.path}
                      className="nested-menu-item"
                    >
                      <span>{programme.name}</span>
                      <ChevronRight size={15} />
                    </Link>
                  ))}

                  </div>
                </div>

              </div>

              {/* =================================================
                  PROCESSES
              ================================================= */}

              <div className="nested-dropdown">

                <button
                  type="button"
                  className="dropdown-item processes-trigger"
                  aria-haspopup="true"
                >
                  <div className="dropdown-item-content">

                    <span className="dropdown-item-title">
                      Processes
                    </span>

                    <span className="dropdown-item-description">
                      How we work to advance human rights and justice
                    </span>

                  </div>

                  <ChevronRight
                    size={17}
                    className="nested-arrow"
                  />
                </button>

                {/* =================================================
                    PROCESSES SUBMENU
                ================================================= */}

                <div className="nested-menu">
                  <div className="nested-menu-panel">

                  {processLinks.map((process) => (
                    <Link
                      key={process.path}
                      to={process.path}
                      className="nested-menu-item"
                    >
                      <span>{process.name}</span>
                      <ChevronRight size={15} />
                    </Link>
                  ))}

                  </div>
                </div>

              </div>

              </div>
            </div>

          </div>

          {/* =================================================
              OTHER NAVIGATION LINKS
          ================================================= */}

          {navLinks.slice(2).map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* GET INVOLVED */}
          <Link
            to="/contact"
            className="nav-button"
          >
            Get Involved
          </Link>

        </nav>

        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() =>
            setMobileMenuOpen(!mobileMenuOpen)
          }
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      {mobileMenuOpen && (
        <div className="mobile-nav">

          {/* HOME */}
          <NavLink
            to="/"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link active"
                : "mobile-nav-link"
            }
          >
            Home
          </NavLink>

          {/* ABOUT */}
          <NavLink
            to="/about"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link active"
                : "mobile-nav-link"
            }
          >
            About
          </NavLink>

          {/* =================================================
              OUR WORK
          ================================================= */}

          <div className="mobile-dropdown">

            {/* Our Work is NOT a link */}
            <button
              type="button"
              className="mobile-nav-link mobile-dropdown-button"
              onClick={() =>
                setMobileWorkOpen(!mobileWorkOpen)
              }
              aria-expanded={mobileWorkOpen}
            >
              <span>Our Work</span>

              <ChevronDown
                size={18}
                className={
                  mobileWorkOpen
                    ? "rotate-180"
                    : ""
                }
              />
            </button>

            {/* =================================================
                MOBILE OUR WORK CONTENT
            ================================================= */}

            {mobileWorkOpen && (
              <div className="mobile-dropdown-menu">

                {/* =================================================
                    PROGRAMMES
                ================================================= */}

                <div className="mobile-nested-dropdown">

                  <button
                    type="button"
                    className="mobile-dropdown-item mobile-programmes-button"
                    onClick={() =>
                      setMobileProgrammesOpen(
                        !mobileProgrammesOpen
                      )
                    }
                    aria-expanded={mobileProgrammesOpen}
                  >
                    <span>Programmes</span>

                    <ChevronRight
                      size={17}
                      className={
                        mobileProgrammesOpen
                          ? "rotate-90"
                          : ""
                      }
                    />
                  </button>

                  {/* =================================================
                      PROGRAMME PAGES
                  ================================================= */}

                  {mobileProgrammesOpen && (
                    <div className="mobile-programmes-menu">

                      {programmeLinks.map((programme) => (
                        <Link
                          key={programme.path}
                          to={programme.path}
                          onClick={closeMobileMenu}
                          className="mobile-programme-item"
                        >
                          <span>
                            {programme.name}
                          </span>

                          <ChevronRight size={14} />
                        </Link>
                      ))}

                    </div>
                  )}

                </div>

                {/* =================================================
                    PROCESSES
                ================================================= */}

                <div className="mobile-nested-dropdown">

                  <button
                    type="button"
                    className="mobile-dropdown-item mobile-processes-button"
                    onClick={() =>
                      setMobileProcessesOpen(
                        !mobileProcessesOpen
                      )
                    }
                    aria-expanded={mobileProcessesOpen}
                  >
                    <span>Processes</span>

                    <ChevronRight
                      size={17}
                      className={
                        mobileProcessesOpen
                          ? "rotate-90"
                          : ""
                      }
                    />
                  </button>

                  {/* =================================================
                      PROCESS PAGES
                  ================================================= */}

                  {mobileProcessesOpen && (
                    <div className="mobile-programmes-menu">

                      {processLinks.map((process) => (
                        <Link
                          key={process.path}
                          to={process.path}
                          onClick={closeMobileMenu}
                          className="mobile-programme-item"
                        >
                          <span>
                            {process.name}
                          </span>

                          <ChevronRight size={14} />
                        </Link>
                      ))}

                    </div>
                  )}

                </div>

              </div>
            )}

          </div>

          {/* =================================================
              OTHER NAVIGATION LINKS
          ================================================= */}

          {navLinks.slice(2).map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link active"
                  : "mobile-nav-link"
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* GET INVOLVED */}
          <Link
            to="/contact"
            className="mobile-nav-button"
            onClick={closeMobileMenu}
          >
            Get Involved
          </Link>

        </div>
      )}
    </header>
  );
}

export default Navbar;
