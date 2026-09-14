const COLORS = {
  ink: "#17241F",
  paper: "#EFEEE6",
  gold: "#C99A3C",
  ash: "#6B6459",
  hairline: "rgba(23,36,31,0.14)",
};

const ABOUT_LINKS = ["Who we are", "Leadership", "Our team", "Strategic plan"];
const WORK_LINKS = ["Programmes", "Universal Periodic Review", "Publications", "News"];
const CONNECT_LINKS = ["Contact us", "Facebook", "LinkedIn", "Instagram"];

export default function Footer() {
  return (
    <footer
      className="py-16 pt-14 ex-sans"
      style={{ borderTop: `1px solid ${COLORS.hairline}`, background: COLORS.paper, color: COLORS.ink }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-9">
          <div className="col-span-2 md:col-span-1">
            <div className="ex-serif text-xl font-semibold mb-3.5">
              EACH<span style={{ color: COLORS.gold }}>Rights</span>
            </div>
            <p className="text-sm mb-1.5" style={{ color: COLORS.ash }}>
              The East African Centre for Human Rights
            </p>
            <p className="text-sm" style={{ color: COLORS.ash }}>
              Apartment N5, Nine Planets Apartments
              <br />
              Kabarnet Road, Nairobi
              <br />
              P.O. Box 19494–00100
            </p>
          </div>

          <div>
            <h5 className="text-sm font-medium mb-4" style={{ color: COLORS.ash }}>
              About
            </h5>
            <ul className="flex flex-col gap-2.5">
              {ABOUT_LINKS.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-medium mb-4" style={{ color: COLORS.ash }}>
              Our work
            </h5>
            <ul className="flex flex-col gap-2.5">
              {WORK_LINKS.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-medium mb-4" style={{ color: COLORS.ash }}>
              Connect
            </h5>
            <ul className="flex flex-col gap-2.5">
              {CONNECT_LINKS.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-14 pt-6 flex flex-wrap justify-between gap-3 text-xs"
          style={{ borderTop: `1px solid ${COLORS.hairline}`, color: COLORS.ash }}
        >
          <span>© 2026 The East African Centre for Human Rights (EACHRights). All rights reserved.</span>
          <span>Privacy Policy · Terms · Safeguarding</span>
        </div>
      </div>
    </footer>
  );
}
