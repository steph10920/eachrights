const ABOUT_LINKS = ["Who we are", "Leadership", "Our team", "Strategic plan"];
const WORK_LINKS = ["Programmes", "Universal Periodic Review", "Publications", "News"];
const CONNECT_LINKS = ["Contact us", "Facebook", "LinkedIn", "Instagram"];

export default function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-paper py-16 pt-14 font-sans text-ink">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-8 sm:gap-9 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-3.5 font-display text-xl font-semibold">
              EACH<span className="text-forest">Rights</span>
            </div>
            <p className="mb-1.5 text-sm text-gray-500">
              The East African Centre for Human Rights
            </p>
            <p className="text-sm text-gray-500">
              Apartment N5, Nine Planets Apartments
              <br />
              Kabarnet Road, Nairobi
              <br />
              P.O. Box 19494–00100
            </p>
          </div>

          <div>
            <h5 className="mb-4 text-sm font-medium text-gray-500">About</h5>
            <ul className="flex flex-col gap-2.5">
              {ABOUT_LINKS.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm hover:text-forest">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-sm font-medium text-gray-500">Our work</h5>
            <ul className="flex flex-col gap-2.5">
              {WORK_LINKS.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm hover:text-forest">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-sm font-medium text-gray-500">Connect</h5>
            <ul className="flex flex-col gap-2.5">
              {CONNECT_LINKS.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm hover:text-forest">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap justify-between gap-3 border-t border-forest/10 pt-6 text-xs text-gray-500">
          <span>© 2026 The East African Centre for Human Rights (EACHRights). All rights reserved.</span>
          <span>Privacy Policy · Terms · Safeguarding</span>
        </div>
      </div>
    </footer>
  );
}
