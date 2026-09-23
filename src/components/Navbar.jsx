import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import logo from "../assets/logo.jpeg";

/* =========================================================
   MAIN NAVIGATION
========================================================= */

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Resources", path: "/resources" },
  { name: "Gallery", path: "/gallery" },
  { name: "Opportunities", path: "/opportunities" },
  { name: "Donors", path: "/donors" },
  { name: "Contact", path: "/contact" },
];

const programmeLinks = [
  { name: "Education Justice Programme", path: "/our-work/programmes/education-justice" },
  { name: "Gender Justice Programme", path: "/our-work/programmes/gender-justice" },
  { name: "Health Justice Programme", path: "/our-work/programmes/health-justice" },
  { name: "Environmental & Climate Justice Programme", path: "/our-work/programmes/environmental-climate-justice" },
  { name: "Economic Justice, Business and Human Rights Programme", path: "/our-work/programmes/economic-justice" },
  { name: "Theory of Change", path: "/our-work/programmes/theory-of-change" },
];

const processLinks = [
  { name: "Universal Periodic Review", path: "/processes/universal-periodic-review" },
];

// External destination — opens in a new tab rather than being routed
// through React Router, since it lives on a separate site entirely.
const srhrAdvocacyLink = {
  name: "SRHR Advocacy",
  description: "Visit our dedicated SRHR advocacy portal",
  url: "https://eachrights.github.io/srhr/",
};

function navLinkClasses({ isActive }) {
  return `relative text-sm font-semibold transition ${
    isActive ? "text-forest" : "text-ink/70 hover:text-forest"
  } after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-[#8DC63F] after:transition-all ${
    isActive ? "after:w-full" : "after:w-0"
  }`;
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const [mobileProgrammesOpen, setMobileProgrammesOpen] = useState(false);
  const [mobileProcessesOpen, setMobileProcessesOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileWorkOpen(false);
    setMobileProgrammesOpen(false);
    setMobileProcessesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        {/* LOGO */}
        <Link to="/" onClick={closeMobileMenu} className="shrink-0">
          <img src={logo} alt="EACHRights" className="h-13 w-auto object-contain" />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>

          {/* OUR WORK — hover flyout, not itself a link */}
          <div className="group/work relative">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-semibold text-ink/70 transition group-hover/work:text-forest"
              aria-haspopup="true"
            >
              Our Work
              <ChevronDown size={16} className="transition group-hover/work:rotate-180" />
            </button>

            <div className="invisible absolute left-0 top-full w-[420px] pt-3 opacity-0 transition duration-150 group-hover/work:visible group-hover/work:opacity-100">
              <div className="border border-forest/10 bg-white p-2 shadow-xl">
                {/* PROGRAMMES flyout */}
                <div className="group/prog relative">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left transition hover:bg-forest-light/60"
                    aria-haspopup="true"
                  >
                    <div>
                      <p className="text-sm font-semibold text-forest">Programmes</p>
                      <p className="mt-0.5 text-xs leading-snug text-ink/55">
                        Our thematic programmes and areas of intervention
                      </p>
                    </div>
                    <ChevronRight size={16} className="mt-0.5 shrink-0 text-forest-dark/50" />
                  </button>

                  <div className="invisible absolute left-full top-0 w-80 pl-3 opacity-0 transition duration-150 group-hover/prog:visible group-hover/prog:opacity-100">
                    <div className="border border-forest/10 bg-white p-2 shadow-xl">
                      {programmeLinks.map((programme) => (
                        <Link
                          key={programme.path}
                          to={programme.path}
                          className="flex items-center justify-between gap-3 px-3 py-2.5 text-sm text-ink/75 transition hover:bg-forest-light/60 hover:text-forest"
                        >
                          <span>{programme.name}</span>
                          <ChevronRight size={14} className="shrink-0 text-forest-dark/40" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* PROCESSES flyout */}
                <div className="group/proc relative">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left transition hover:bg-forest-light/60"
                    aria-haspopup="true"
                  >
                    <div>
                      <p className="text-sm font-semibold text-forest">Processes</p>
                      <p className="mt-0.5 text-xs leading-snug text-ink/55">
                        How we work to advance human rights and justice
                      </p>
                    </div>
                    <ChevronRight size={16} className="mt-0.5 shrink-0 text-forest-dark/50" />
                  </button>

                  <div className="invisible absolute left-full top-0 w-80 pl-3 opacity-0 transition duration-150 group-hover/proc:visible group-hover/proc:opacity-100">
                    <div className="border border-forest/10 bg-white p-2 shadow-xl">
                      {processLinks.map((process) => (
                        <Link
                          key={process.path}
                          to={process.path}
                          className="flex items-center justify-between gap-3 px-3 py-2.5 text-sm text-ink/75 transition hover:bg-forest-light/60 hover:text-forest"
                        >
                          <span>{process.name}</span>
                          <ChevronRight size={14} className="shrink-0 text-forest-dark/40" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SRHR ADVOCACY — external site, opens in a new tab */}
                <a
                  href={srhrAdvocacyLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left transition hover:bg-forest-light/60"
                >
                  <div>
                    <p className="text-sm font-semibold text-forest">{srhrAdvocacyLink.name}</p>
                    <p className="mt-0.5 text-xs leading-snug text-ink/55">
                      {srhrAdvocacyLink.description}
                    </p>
                  </div>
                  <ExternalLink size={16} className="mt-0.5 shrink-0 text-forest-dark/50" />
                </a>
              </div>
            </div>
          </div>

          {navLinks.slice(2).map((link) => (
            <NavLink key={link.path} to={link.path} className={navLinkClasses}>
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="bg-[#8DC63F] px-5 py-2.5 text-sm font-bold text-forest transition hover:brightness-105"
          >
            Get Involved
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="text-forest md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {mobileMenuOpen && (
        <div className="border-t border-forest/10 bg-paper px-6 py-4 md:hidden">
          <div className="flex flex-col divide-y divide-forest/10">
            <NavLink
              to="/"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `py-3 text-sm font-semibold ${isActive ? "text-forest" : "text-ink/70"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `py-3 text-sm font-semibold ${isActive ? "text-forest" : "text-ink/70"}`
              }
            >
              About
            </NavLink>

            {/* OUR WORK ACCORDION */}
            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between py-3 text-sm font-semibold text-ink/70"
                onClick={() => setMobileWorkOpen(!mobileWorkOpen)}
                aria-expanded={mobileWorkOpen}
              >
                Our Work
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${mobileWorkOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileWorkOpen && (
                <div className="pb-2 pl-3">
                  {/* PROGRAMMES ACCORDION */}
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-2.5 text-sm font-semibold text-forest"
                    onClick={() => setMobileProgrammesOpen(!mobileProgrammesOpen)}
                    aria-expanded={mobileProgrammesOpen}
                  >
                    Programmes
                    <ChevronRight
                      size={16}
                      className={`transition-transform duration-200 ${mobileProgrammesOpen ? "rotate-90" : ""}`}
                    />
                  </button>

                  {mobileProgrammesOpen && (
                    <div className="flex flex-col pb-1 pl-3">
                      {programmeLinks.map((programme) => (
                        <Link
                          key={programme.path}
                          to={programme.path}
                          onClick={closeMobileMenu}
                          className="flex items-center justify-between py-2 text-sm text-ink/65"
                        >
                          <span>{programme.name}</span>
                          <ChevronRight size={14} className="shrink-0 text-forest-dark/40" />
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* PROCESSES ACCORDION */}
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-2.5 text-sm font-semibold text-forest"
                    onClick={() => setMobileProcessesOpen(!mobileProcessesOpen)}
                    aria-expanded={mobileProcessesOpen}
                  >
                    Processes
                    <ChevronRight
                      size={16}
                      className={`transition-transform duration-200 ${mobileProcessesOpen ? "rotate-90" : ""}`}
                    />
                  </button>

                  {mobileProcessesOpen && (
                    <div className="flex flex-col pb-1 pl-3">
                      {processLinks.map((process) => (
                        <Link
                          key={process.path}
                          to={process.path}
                          onClick={closeMobileMenu}
                          className="flex items-center justify-between py-2 text-sm text-ink/65"
                        >
                          <span>{process.name}</span>
                          <ChevronRight size={14} className="shrink-0 text-forest-dark/40" />
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* SRHR ADVOCACY — external site, opens in a new tab */}
                  <a
                    href={srhrAdvocacyLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="flex w-full items-center justify-between py-2.5 text-sm font-semibold text-forest"
                  >
                    {srhrAdvocacyLink.name}
                    <ExternalLink size={16} className="shrink-0 text-forest-dark/40" />
                  </a>
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `py-3 text-sm font-semibold ${isActive ? "text-forest" : "text-ink/70"}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="mt-4 block bg-[#8DC63F] px-5 py-3 text-center text-sm font-bold text-forest transition hover:brightness-105"
          >
            Get Involved
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
