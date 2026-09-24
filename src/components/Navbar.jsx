import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import logo from "../assets/logo.jpeg";

/* =========================================================
   MAIN NAVIGATION
========================================================= */

const whoWeAreLinks = [
  { name: "Our Story", path: "/who-we-are/our-story" },
  { name: "Strategic Plan", path: "/who-we-are/strategic-plan" },
  { name: "Meet Our Team", path: "/who-we-are/team" },
];

const navLinks = [
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
  const [mobileWhoWeAreOpen, setMobileWhoWeAreOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const [mobileProgrammesOpen, setMobileProgrammesOpen] = useState(false);
  const [mobileProcessesOpen, setMobileProcessesOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileWhoWeAreOpen(false);
    setMobileWorkOpen(false);
    setMobileProgrammesOpen(false);
    setMobileProcessesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        {/* LOGO — doubles as the Home link */}
        <NavLink
          to="/"
          end
          onClick={closeMobileMenu}
          aria-label="Home"
          className={({ isActive }) =>
            `shrink-0 transition ${isActive ? "opacity-100" : "opacity-90 hover:opacity-100"}`
          }
        >
          <img src={logo} alt="EACHRights" className="h-13 w-auto object-contain" />
        </NavLink>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-8 md:flex">
          {/* WHO WE ARE — hover flyout, not itself a link */}
          <div className="group/who relative">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-semibold text-ink/70 transition group-hover/who:text-forest"
              aria-haspopup="true"
            >
              Who We Are
              <ChevronDown size={16} className="transition group-hover/who:rotate-180" />
            </button>

            <div className="invisible absolute left-0 top-full w-64 pt-3 opacity-0 transition duration-150 group-hover/who:visible group-hover/who:opacity-100">
              <div className="border border-forest/10 bg-white p-2 shadow-xl">
                {whoWeAreLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center justify-between gap-3 px-3 py-2.5 text-sm text-ink/75 transition hover:bg-forest-light/60 hover:text-forest"
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={14} className="shrink-0 text-forest-dark/40" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

        {/* HOW WE WORK — direct navigation link */}
        <NavLink
          to="/how-we-work"
          className={navLinkClasses}
        >
          How We Work
        </NavLink>

          {navLinks.map((link) => (
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
            {/* WHO WE ARE ACCORDION */}
            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between py-3 text-sm font-semibold text-ink/70"
                onClick={() => setMobileWhoWeAreOpen(!mobileWhoWeAreOpen)}
                aria-expanded={mobileWhoWeAreOpen}
              >
                Who We Are
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${mobileWhoWeAreOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileWhoWeAreOpen && (
                <div className="flex flex-col pb-2 pl-3">
                  {whoWeAreLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={closeMobileMenu}
                      className="flex items-center justify-between py-2 text-sm text-ink/65"
                    >
                      <span>{link.name}</span>
                      <ChevronRight size={14} className="shrink-0 text-forest-dark/40" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

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

            {navLinks.map((link) => (
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
