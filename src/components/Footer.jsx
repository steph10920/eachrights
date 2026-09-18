const ABOUT_LINKS = ["Who we are", "Leadership", "Our team", "Strategic plan"];
const WORK_LINKS = [
  "Programmes",
  "Universal Periodic Review",
  "Publications",
  "News",
];
const CONNECT_LINKS = ["Contact us", "Facebook", "LinkedIn", "Instagram"];

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
              About
            </h5>

            <ul className="space-y-1">
              {ABOUT_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs text-ink transition-colors hover:text-forest"
                  >
                    {link}
                  </a>
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
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs text-ink transition-colors hover:text-forest"
                  >
                    {link}
                  </a>
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
              {CONNECT_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs text-ink transition-colors hover:text-forest"
                  >
                    {link}
                  </a>
                </li>
              ))}
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
            <a href="#" className="hover:text-forest">
              Safeguarding
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
}
