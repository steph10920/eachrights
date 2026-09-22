import { Link } from "react-router-dom";

const ABOUT_LINKS = [
  { name: "Who we are", path: "/about" },
  { name: "Leadership", path: "/about/team" },
  { name: "Our team", path: "/about/team" },
  { name: "Strategic plan", path: "/resources" },
];

const WORK_LINKS = [
  { name: "Programmes", path: "/our-work" },
  { name: "Universal Periodic Review", path: "/processes/universal-periodic-review" },
  { name: "Publications", path: "/resources" },
];

const CONNECT_LINKS = [
  { name: "Contact us", path: "/contact" },
  { name: "Facebook", path: "https://www.facebook.com/EACHRights", external: true },
  { name: "LinkedIn", path: "https://www.linkedin.com/company/100748351/", external: true },
  { name: "Instagram", path: "https://www.instagram.com/eachrights/", external: true },
  { name: "X(twitter)", path: "https://x.com/EACHRights", external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-paper py-7 font-sans text-ink">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4">

          {/* Organisation */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 font-display text-lg font-semibold">
              EACH<span className="text-forest">Rights</span>
            </div>

            <p className="mb-1 text-xs text-gray-500">
              The East African Centre for Human Rights
            </p>

            <p className="text-xs leading-4.5 text-gray-500">
              Apartment N5, Nine Planets Apartments
              <br />
              Kabarnet Road, Nairobi
              <br />
              P.O. Box 19494–00100
            </p>
          </div>

          {/* About */}
          <div>
            <h5 className="mb-2 text-xs font-semibold text-gray-500">
              ABOUT
            </h5>

            <ul className="space-y-1">
              {ABOUT_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-xs text-ink transition-colors hover:text-forest"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Work */}
          <div>
            <h5 className="mb-2 text-xs font-semibold text-gray-500">
              Our work
            </h5>

            <ul className="space-y-1">
              {WORK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-xs text-ink transition-colors hover:text-forest"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h5 className="mb-2 text-xs font-semibold text-gray-500">
              Connect
            </h5>

            <ul className="space-y-1">
              {CONNECT_LINKS.map((link) =>
                link.external ? (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-ink transition-colors hover:text-forest"
                    >
                      {link.name}
                    </a>
                  </li>
                ) : (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-xs text-ink transition-colors hover:text-forest"
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-forest/10 pt-4 text-[10px] text-gray-500">
          <span>
            © 2026 The East African Centre for Human Rights (EACHRights).
            All rights reserved.
          </span>

          <span className="flex gap-3">
            <a href="#" className="hover:text-forest">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-forest">
              Terms
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
}
