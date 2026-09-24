import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FileText,
  Download,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  BookOpen,
  Search,
} from "lucide-react";

// PDFs — used only as the download/view targets, never parsed in the browser
import strategicPlan2026 from "../assets/publications/STRATEGIC PLAN 2026-2030.pdf";
import educationSchools from "../assets/publications/Build Us More Schools (Full Version).pdf";
import surveyReport from "../assets/publications/EACHRights Perception Survey Report.pdf";
import strategicPlan2023 from "../assets/publications/EACHRights Trust Strategic Plan 4 (2019-2023).pdf";
import strategicPlan2011 from "../assets/publications/EACHRights_Trust_Strategic_Plan_2011-2012.pdf";
import annualReport2020 from "../assets/publications/EACHRights-Annual-Report-2020.pdf";
import ssnfgm from "../assets/publications/Shifts in Social Norms Around FGMC in Garissa County.pdf";

// Thumbnails — pre-rendered page-1 images (see scripts/generate-pdf-thumbnails.mjs)
// Run `npm run generate:thumbnails` after adding or replacing a PDF above.
import strategicPlan2026Thumb from "../assets/publication-thumbs/STRATEGIC PLAN 2026-2030.png";
import educationSchoolsThumb from "../assets/publication-thumbs/Build Us More Schools (Full Version).png";
import surveyReportThumb from "../assets/publication-thumbs/EACHRights Perception Survey Report.png";
import strategicPlan2023Thumb from "../assets/publication-thumbs/EACHRights Trust Strategic Plan 4 (2019-2023).png";
import strategicPlan2011Thumb from "../assets/publication-thumbs/EACHRights_Trust_Strategic_Plan_2011-2012.png";
import annualReport2020Thumb from "../assets/publication-thumbs/EACHRights-Annual-Report-2020.png";
import ssnfgmThumb from "../assets/publication-thumbs/Shifts in Social Norms Around FGMC in Garissa County.png";

/* =========================================================
   PUBLICATION THUMBNAIL
   A plain, lazily-loaded <img> pointing at a pre-rendered
   page-1 image. No PDF is parsed in the browser: the image
   is generated once at build time by
   scripts/generate-pdf-thumbnails.mjs. Falls back to a
   document icon if the image is missing or fails to load.
========================================================= */
function PublicationThumb({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-forest-soft">
        <FileText size={32} className="text-forest/40" strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full bg-gray-50">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-forest-soft">
          <FileText size={32} className="text-forest/30" strokeWidth={1.5} />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

const publications = [
  {
    title: "Strategic PlaN 2026-2030",
    category: "Strategy & Planning",
    year: "2026",
    description:
      "EACHRights Strategic Plan 2026-2030 is a 5-year roadmap to create a just society that upholds human rights and dignity.Its mission is to protect social and economic rights for vulnerable and marginalized communities, focusing on health, education, gender equality, and climate change.",
    pdf: strategicPlan2026,
    thumb: strategicPlan2026Thumb,
  },
  {
    title: "Build Us More Schools (Full Version)",
    category: "Programme Publications",
    year: "2026",
    description:
      "'Build Us More Schools!' - June 2024 research report on the lack of quality free public schools in Mabatini & Ngei Wards, Mathare, Nairobi.Community voices calling on the government to build more public schools.",
    pdf: educationSchools,
    thumb: educationSchoolsThumb,
  },
  {
    title: "EACHRights Perception Survey Report",
    category: "Programme Publications",
    year: "2026",
    description:
      "A 2011 survey by EACHRights on how well Kenyans (govt, NGOs, public in Kibera, Kawangware, Jericho) understand ECOSOC rights - finds awareness is low, civil/political rights get more attention than economic/social rights, and most people don't know how to claim ECOSOC rights.",
    pdf: surveyReport,
    thumb: surveyReportThumb,
  },
  {
    title: "EACHRights Trust Strategic Plan 4 (2019-2023)",
    category: "Strategy & Planning",
    year: "2023",
    description:
      "Strategic Plan 2019-2023 - EACHRights 4th plan.Goal: A society that respects human rights & dignity.Focused on 5 pillars: ECOSOC rights advocacy, capacity building, knowledge management, partnerships, and institutional growth to promote ECOSOC rights for vulnerable groups in Kenya, Uganda & Tanzania.",
    pdf: strategicPlan2023,
    thumb: strategicPlan2023Thumb,
  },
  {
    title: "EACHRights_Trust_Strategic_Plan_2011-2012",
    category: "Strategy & Planning",
    year: "2012",
    description:
      "First-ever EACHRights plan (2011).Vision: To be the leading human rights org in East Africa.Mission: Promote human rights with focus on economic, social & cultural rights for social justice.Goals: 1) Build visibility nationally/regionally/internationally 2) Institutional strengthening & capacity building.",
    pdf: strategicPlan2011,
    thumb: strategicPlan2011Thumb,
  },
  {
    title: "EACHRights-Annual-Report-2020",
    category: "Annual Reports",
    year: "2020",
    description:
      "Annual Report 2020 - EACHRights first ever annual report.Despite COVID-19, delivered on Strategic Plan 2019-2023: child rights advocacy, education barazas in Homa Bay, #TunzaWatotoWetu campaign on teen pregnancies/FGM, UPR reports, ACERWC engagement, and partnerships with U of Stirling, GI-ESCR, ERIKS & OSF.",
    pdf: annualReport2020,
    thumb: annualReport2020Thumb,
  },
  {
    title: "Shifts in Social Norms Around FGMC in Garissa County",
    category: "Programme Publications",
    year: "2025",
    description:
      "July 2025 Study: Shifts in Social Norms on FGM/C in Garissa County.16 FGDs found FGM/C still widespread due to beliefs on purity/marriageability, but shifting from severe Type III (Pharaonic) to Type I (Sunna) and medicalized cuts. Older generations defend it; younger, educated urban youth increasingly oppose. Recommends community dialogue, youth advocacy, religious engagement.",
    pdf: ssnfgm,
    thumb: ssnfgmThumb,
  },
];

const categories = [
  "All",
  "Annual Reports",
  "Programme Publications",
  "Strategy & Planning",
];

// Newest first. Sorted once here so adding a publication above, in any
// order, is enough — no need to also re-order the array by hand.
const publicationsByYear = [...publications].sort(
  (a, b) => Number(b.year) - Number(a.year)
);

// A handful of the most current publications to rotate through in the
// hero. Keeping this short (not the whole list) keeps the carousel quick
// to cycle.
const heroPublications = publicationsByYear.slice(0, 4);

const HERO_PUB_INTERVAL = 5000;

export default function Publications() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentHeroPub, setCurrentHeroPub] = useState(0);
  const heroPubTimerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const startHeroPubTimer = () => {
    clearInterval(heroPubTimerRef.current);
    heroPubTimerRef.current = setInterval(() => {
      setCurrentHeroPub((prev) => (prev + 1) % heroPublications.length);
    }, HERO_PUB_INTERVAL);
  };

  useEffect(() => {
    startHeroPubTimer();
    return () => clearInterval(heroPubTimerRef.current);
  }, []);

  const goToHeroPub = (index) => {
    setCurrentHeroPub(index);
    startHeroPubTimer();
  };
  const prevHeroPub = () =>
    goToHeroPub((currentHeroPub - 1 + heroPublications.length) % heroPublications.length);
  const nextHeroPub = () => goToHeroPub((currentHeroPub + 1) % heroPublications.length);

  const activeHeroPub = heroPublications[currentHeroPub];

  const heroPubMotion = prefersReducedMotion
    ? {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 1 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0, scale: 1.04 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.98 },
        transition: { duration: 0.6, ease: "easeInOut" },
      };

  const filteredPublications = publicationsByYear.filter((publication) => {
    const matchesCategory =
      activeCategory === "All" ||
      publication.category === activeCategory;

    const matchesSearch =
      publication.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      publication.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-white font-sans text-ink">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-forest text-white">

        <div
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -bottom-36 -left-36 h-80 w-80 rounded-full border border-white/10"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-10">

          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Resources
          </Link>

          <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            <div className="max-w-3xl">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <BookOpen size={18} strokeWidth={1.7} />
              </div>

              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Resources
              </p>

              <h1 className="mt-2 text-2xl font-bold leading-[1.1] tracking-tight sm:text-3xl lg:text-4xl">
                Publications
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">
                Explore publications, reports and programme documents produced
                by EACHRights to advance human rights, justice and human dignity.
              </p>

            </div>

            {/* PDF PREVIEW CAROUSEL */}
            <div className="mx-auto w-full max-w-[200px]">
              <div className="group relative bg-white p-2 shadow-xl">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-50">
                  <AnimatePresence initial={false} mode="sync">
                    <motion.div key={currentHeroPub} {...heroPubMotion} className="absolute inset-0">
                      <PublicationThumb
                        src={activeHeroPub.thumb}
                        alt={activeHeroPub.title}
                      />
                    </motion.div>
                  </AnimatePresence>

                  <button
                    type="button"
                    onClick={prevHeroPub}
                    aria-label="Previous publication"
                    className="absolute left-1.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center border border-forest/10 bg-white/90 text-forest opacity-0 shadow-sm transition hover:bg-white group-hover:opacity-100"
                  >
                    <ArrowLeft size={13} />
                  </button>

                  <button
                    type="button"
                    onClick={nextHeroPub}
                    aria-label="Next publication"
                    className="absolute right-1.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center border border-forest/10 bg-white/90 text-forest opacity-0 shadow-sm transition hover:bg-white group-hover:opacity-100"
                  >
                    <ArrowRight size={13} />
                  </button>
                </div>

                <div className="p-2.5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-forest/60">
                    {activeHeroPub.category}
                  </p>
                  <h3 className="mt-1 text-xs font-bold leading-snug text-forest">
                    {activeHeroPub.title}
                  </h3>
                </div>
              </div>

              <div className="mt-2 flex justify-center gap-2">
                {heroPublications.map((publication, index) => (
                  <button
                    key={publication.title}
                    type="button"
                    onClick={() => goToHeroPub(index)}
                    aria-label={`Go to publication ${index + 1}`}
                    className="group/dot flex items-center justify-center p-1"
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all duration-300 ${
                        currentHeroPub === index ? "w-6 bg-accent" : "w-1.5 bg-white/30 group-hover/dot:bg-white/60"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 h-6 w-full bg-white"
          style={{
            clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
          }}
          aria-hidden="true"
        />

      </section>


      {/* =====================================================
          PUBLICATIONS
      ===================================================== */}

      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

        <div className="mx-auto max-w-7xl">

          {/* SEARCH */}

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                Knowledge Resources
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Our Publications
              </h2>

              <div className="mt-4 h-1 w-16 rounded-full bg-forest" />
            </div>

            <div className="relative w-full lg:max-w-sm">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="search"
                placeholder="Search publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/10"
              />

            </div>

          </div>


          {/* CATEGORY FILTER */}

          <div className="mt-10 flex flex-wrap gap-2">

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-forest text-white"
                    : "bg-forest-soft text-forest hover:bg-forest/10"
                }`}
              >
                {category}
              </button>
            ))}

          </div>


          {/* PUBLICATION GRID */}

          {filteredPublications.length > 0 ? (

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {filteredPublications.map((publication, index) => (

                <motion.article
                  key={publication.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* PDF PAGE-1 PREVIEW */}

                  <div className="relative aspect-[16/10] w-full border-b border-gray-100">
                    <PublicationThumb
                      src={publication.thumb}
                      alt={publication.title}
                    />

                    <span className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-gray-600 shadow-sm">
                      PDF
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-4">

                    {/* CATEGORY */}

                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-forest">
                      {publication.category}
                    </p>


                    {/* TITLE */}

                    <h3 className="mt-1.5 line-clamp-2 text-sm font-bold leading-snug text-ink">
                      {publication.title}
                    </h3>


                    {/* DATE */}

                    <div className="mt-2 flex items-center gap-1.5 text-xs text-gray-500">

                      <CalendarDays size={13} />

                      <span>{publication.year}</span>

                    </div>


                    {/* DESCRIPTION */}

                    <p className="mt-2.5 line-clamp-3 flex-1 text-xs leading-5 text-gray-600">
                      {publication.description}
                    </p>


                    {/* ACTIONS */}

                    <div className="mt-4 flex flex-wrap gap-2 border-t border-gray-100 pt-3">

                      <a
                        href={publication.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-forest px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-forest-dark"
                      >
                        <ExternalLink size={13} />
                        View
                      </a>

                      <a
                        href={publication.pdf}
                        download
                        className="inline-flex items-center gap-1.5 rounded-lg border border-forest/20 px-3 py-1.5 text-xs font-semibold text-forest transition hover:bg-forest-soft"
                      >
                        <Download size={13} />
                        Download
                      </a>

                    </div>

                  </div>

                </motion.article>

              ))}

            </div>

          ) : (

            <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-16 text-center">

              <FileText
                size={40}
                className="mx-auto text-gray-400"
              />

              <h3 className="mt-5 text-xl font-bold text-ink">
                No publications found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try another search term or publication category.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          DOWNLOAD INFORMATION
      ===================================================== */}

      <section className="bg-forest-soft px-6 py-16 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-5xl">

          <div className="rounded-2xl border border-forest/10 bg-white p-8 sm:p-10">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-forest text-white">
                <Download size={23} />
              </div>

              <div>

                <h2 className="text-xl font-bold text-ink sm:text-2xl">
                  Access our publications
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
                  Our publications provide research, evidence, programme
                  information and knowledge that contribute to discussions on
                  human rights, social justice and sustainable development.
                  Publications are available in PDF format for viewing and
                  download.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-forest px-6 py-20 text-center text-white sm:px-8 lg:px-12">

        <div className="mx-auto max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Stay Connected
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Looking for more resources?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Explore our other resources or get in touch with EACHRights for
            more information about our work.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              to="/resources"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-forest transition hover:bg-forest-light"
            >
              All Resources
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
