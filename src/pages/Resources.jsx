import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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

import publicationsHero from "../assets/publications/publications-hero.png";

// ============================================================
// PUBLICATION PDFs
// ============================================================

import strategicPlan2026 from "../assets/publications/STRATEGIC PLAN 2026-2030.pdf";
import educationSchools from "../assets/publications/Build Us More Schools (Full Version).pdf";
import surveyReport from "../assets/publications/EACHRights Perception Survey Report.pdf";
import strategicPlan2023 from "../assets/publications/EACHRights Trust Strategic Plan 4 (2019-2023).pdf";
import strategicPlan2011 from "../assets/publications/EACHRights_Trust_Strategic_Plan_2011-2012.pdf";
import annualReport2020 from "../assets/publications/EACHRights-Annual-Report-2020.pdf";
import ssnfgm from "../assets/publications/Shifts in Social Norms Around FGMC in Garissa County.pdf";

// ============================================================
// PUBLICATION THUMBNAILS
// ============================================================

import strategicPlan2026Thumb from "../assets/publication-thumbs/STRATEGIC PLAN 2026-2030.png";
import educationSchoolsThumb from "../assets/publication-thumbs/Build Us More Schools (Full Version).png";
import surveyReportThumb from "../assets/publication-thumbs/EACHRights Perception Survey Report.png";
import strategicPlan2023Thumb from "../assets/publication-thumbs/EACHRights Trust Strategic Plan 4 (2019-2023).png";
import strategicPlan2011Thumb from "../assets/publication-thumbs/EACHRights_Trust_Strategic_Plan_2011-2012.png";
import annualReport2020Thumb from "../assets/publication-thumbs/EACHRights-Annual-Report-2020.png";
import ssnfgmThumb from "../assets/publication-thumbs/Shifts in Social Norms Around FGMC in Garissa County.png";

// ============================================================
// PUBLICATION THUMBNAIL COMPONENT
// ============================================================

function PublicationThumb({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className="flex h-full w-full items-center justify-center bg-forest-soft"
        aria-label="Publication preview unavailable"
      >
        <FileText
          size={34}
          className="text-forest/40"
          strokeWidth={1.5}
        />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-gray-50">
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-forest-soft">
          <FileText
            size={34}
            className="text-forest/30"
            strokeWidth={1.5}
          />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

// ============================================================
// PUBLICATIONS DATA
// ============================================================

const publications = [
  {
    title: "Strategic Plan 2026–2030",
    category: "Strategy & Planning",
    year: "2026",
    description:
      "EACHRights Strategic Plan 2026–2030 provides a five-year roadmap for advancing human rights, dignity and social justice, with a focus on vulnerable and marginalized communities.",
    pdf: strategicPlan2026,
    thumb: strategicPlan2026Thumb,
  },

  {
    title: "Build Us More Schools!",
    category: "Programme Publications",
    year: "2024",
    description:
      "A research report examining the need for quality, free public schools in Mabatini and Ngei Wards in Mathare, Nairobi, highlighting community voices and calls for improved access to education.",
    pdf: educationSchools,
    thumb: educationSchoolsThumb,
  },

  {
    title: "EACHRights Perception Survey Report",
    category: "Programme Publications",
    year: "2011",
    description:
      "A survey exploring public awareness and understanding of economic, social and cultural rights among government actors, civil society and communities in selected areas of Nairobi.",
    pdf: surveyReport,
    thumb: surveyReportThumb,
  },

  {
    title: "Strategic Plan 2019–2023",
    category: "Strategy & Planning",
    year: "2019",
    description:
      "EACHRights' fourth strategic plan focused on strengthening advocacy, capacity building, knowledge management, partnerships and institutional development to advance economic, social and cultural rights.",
    pdf: strategicPlan2023,
    thumb: strategicPlan2023Thumb,
  },

  {
    title: "Strategic Plan 2011–2012",
    category: "Strategy & Planning",
    year: "2011",
    description:
      "EACHRights' first strategic plan established the organisation's direction for promoting human rights, with particular emphasis on economic, social and cultural rights and social justice.",
    pdf: strategicPlan2011,
    thumb: strategicPlan2011Thumb,
  },

  {
    title: "EACHRights Annual Report 2020",
    category: "Annual Reports",
    year: "2020",
    description:
      "The 2020 annual report highlights EACHRights' work in child rights advocacy, education, prevention of harmful practices, Universal Periodic Review engagement and partnerships during the COVID-19 period.",
    pdf: annualReport2020,
    thumb: annualReport2020Thumb,
  },

  {
    title: "Shifts in Social Norms Around FGM/C in Garissa County",
    category: "Programme Publications",
    year: "2025",
    description:
      "A 2025 study examining changing social norms around FGM/C in Garissa County and highlighting the role of community dialogue, youth engagement, religious leaders and education.",
    pdf: ssnfgm,
    thumb: ssnfgmThumb,
  },
];

// ============================================================
// FILTER CATEGORIES
// ============================================================

const categories = [
  "All",
  "Annual Reports",
  "Programme Publications",
  "Strategy & Planning",
];

// Sort newest publications first.
const publicationsByYear = [...publications].sort(
  (a, b) => Number(b.year) - Number(a.year)
);

// Publications featured in the hero carousel.
const heroPublications = publicationsByYear.slice(0, 4);

const HERO_PUB_INTERVAL = 5000;

// ============================================================
// EXTERNAL RESOURCE
// ============================================================

const srhrAdvocacyLink = {
  name: "SRHR Advocacy Portal",
  url: "https://eachrights.github.io/srhr/",
};

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function Publications() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentHeroPub, setCurrentHeroPub] = useState(0);

  const heroPubTimerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // ----------------------------------------------------------
  // HERO CAROUSEL
  // ----------------------------------------------------------

  const startHeroPubTimer = () => {
    clearInterval(heroPubTimerRef.current);

    heroPubTimerRef.current = setInterval(() => {
      setCurrentHeroPub(
        (previous) =>
          (previous + 1) % heroPublications.length
      );
    }, HERO_PUB_INTERVAL);
  };

  useEffect(() => {
    startHeroPubTimer();

    return () => {
      clearInterval(heroPubTimerRef.current);
    };
  }, []);

  const goToHeroPub = (index) => {
    setCurrentHeroPub(index);
    startHeroPubTimer();
  };

  const goToPreviousHeroPub = () => {
    goToHeroPub(
      (currentHeroPub - 1 + heroPublications.length) %
        heroPublications.length
    );
  };

  const goToNextHeroPub = () => {
    goToHeroPub(
      (currentHeroPub + 1) % heroPublications.length
    );
  };

  const activeHeroPub = heroPublications[currentHeroPub];

  // ----------------------------------------------------------
  // HERO ANIMATION
  // ----------------------------------------------------------

  const heroPubMotion = prefersReducedMotion
    ? {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 1 },
        transition: { duration: 0 },
      }
    : {
        initial: {
          opacity: 0,
          scale: 1.03,
        },
        animate: {
          opacity: 1,
          scale: 1,
        },
        exit: {
          opacity: 0,
          scale: 0.98,
        },
        transition: {
          duration: 0.55,
          ease: "easeInOut",
        },
      };

  // ----------------------------------------------------------
  // SEARCH + CATEGORY FILTER
  // ----------------------------------------------------------

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredPublications = publicationsByYear.filter(
    (publication) => {
      const matchesCategory =
        activeCategory === "All" ||
        publication.category === activeCategory;

      const searchableText = `
        ${publication.title}
        ${publication.description}
        ${publication.category}
        ${publication.year}
      `.toLowerCase();

      const matchesSearch =
        normalizedSearch === "" ||
        searchableText.includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    }
  );

  // ----------------------------------------------------------
  // RENDER
  // ----------------------------------------------------------

  return (
    <main className="bg-white font-sans text-ink">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative isolate overflow-hidden bg-forest text-black">

        {/* Background image */}

        <img
          src={publicationsHero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        {/* Decorative circles */}

        <div
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -bottom-36 -left-36 h-80 w-80 rounded-full border border-white/10"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12 lg:py-10">

          {/* Back link */}

          <a
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium text-black/70 transition hover:text-black"
          >
            <ArrowLeft size={16} />
            Resources
          </a>

          <div className="mt-5 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            {/* HERO CONTENT */}

            <div className="max-w-2xl">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <BookOpen
                  size={20}
                  strokeWidth={1.7}
                />
              </div>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
                Resources
              </p>

              <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Publications
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-black text-bold sm:text-base">
                Explore research, reports, strategic documents and
                programme publications produced by EACHRights to
                advance human rights, social justice and human
                dignity.
              </p>

            </div>

            {/* HERO RESOURCES */}

            <div className="mx-auto flex w-full max-w-lg flex-wrap justify-center gap-5">

              {/* PUBLICATION CAROUSEL */}

              <div className="w-full max-w-[210px]">

                <div className="group relative bg-white p-2 shadow-xl">

                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-50">

                    <AnimatePresence
                      initial={false}
                      mode="sync"
                    >
                      <motion.div
                        key={activeHeroPub.title}
                        {...heroPubMotion}
                        className="absolute inset-0"
                      >
                        <PublicationThumb
                          src={activeHeroPub.thumb}
                          alt={`${activeHeroPub.title} publication cover`}
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Previous */}

                    <button
                      type="button"
                      onClick={goToPreviousHeroPub}
                      aria-label="Previous featured publication"
                      className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-forest/10 bg-white/95 text-forest opacity-0 shadow-sm transition hover:bg-white focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-forest group-hover:opacity-100"
                    >
                      <ArrowLeft size={14} />
                    </button>

                    {/* Next */}

                    <button
                      type="button"
                      onClick={goToNextHeroPub}
                      aria-label="Next featured publication"
                      className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-forest/10 bg-white/95 text-forest opacity-0 shadow-sm transition hover:bg-white focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-forest group-hover:opacity-100"
                    >
                      <ArrowRight size={14} />
                    </button>

                  </div>

                  <div className="p-3">

                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-forest/60">
                      {activeHeroPub.category}
                    </p>

                    <h2 className="mt-1 text-xs font-bold leading-snug text-forest">
                      {activeHeroPub.title}
                    </h2>

                    <p className="mt-1 text-[10px] text-gray-500">
                      {activeHeroPub.year}
                    </p>

                  </div>

                </div>

                {/* Carousel indicators */}

                <div
                  className="mt-3 flex justify-center gap-2"
                  aria-label="Featured publications"
                >
                  {heroPublications.map(
                    (publication, index) => (
                      <button
                        key={publication.title}
                        type="button"
                        onClick={() =>
                          goToHeroPub(index)
                        }
                        aria-label={`Show ${publication.title}`}
                        aria-current={
                          currentHeroPub === index
                            ? "true"
                            : undefined
                        }
                        className="group/dot flex items-center justify-center p-1"
                      >
                        <span
                          className={`block h-1.5 rounded-full transition-all duration-300 ${
                            currentHeroPub === index
                              ? "w-6 bg-accent"
                              : "w-1.5 bg-black/20 group-hover/dot:bg-black/40"
                          }`}
                        />
                      </button>
                    )
                  )}
                </div>

              </div>

              {/* SRHR PORTAL */}

              <a
                href={srhrAdvocacyLink.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open SRHR Advocacy Portal in a new tab"
                className="group block w-full max-w-[210px] bg-white p-2 shadow-xl transition hover:-translate-y-1"
              >

                <div className="relative aspect-[3/4] w-full overflow-hidden bg-forest-soft">

                  <iframe
                    src={srhrAdvocacyLink.url}
                    title="SRHR Advocacy Portal preview"
                    tabIndex={-1}
                    loading="lazy"
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 top-0 h-[300%] w-[300%] origin-top-left scale-[0.3333] border-0"
                  />

                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/5 to-transparent"
                    aria-hidden="true"
                  />

                  <div className="pointer-events-none absolute bottom-2 left-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-forest shadow-sm">
                    <ExternalLink
                      size={14}
                      strokeWidth={1.9}
                    />
                  </div>

                </div>

                <div className="p-3">

                  <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-forest/60">
                    External Resource
                  </p>

                  <h2 className="mt-1 flex items-center gap-1 text-xs font-bold leading-snug text-forest">
                    {srhrAdvocacyLink.name}

                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </h2>

                </div>

              </a>

            </div>

          </div>

        </div>

        {/* Angled bottom edge */}

        <div
          className="absolute bottom-0 left-0 h-6 w-full bg-white"
          style={{
            clipPath:
              "polygon(0 100%, 100% 0, 100% 100%)",
          }}
          aria-hidden="true"
        />

      </section>


      {/* ======================================================
          PUBLICATIONS SECTION
      ====================================================== */}

      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADER + SEARCH */}

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <span className="block h-1 w-14 bg-forest" />

              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Browse the archive
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-ink/60">
                Search or filter by category to find what you need.
              </p>

            </div>

            {/* SEARCH */}

            <div className="relative w-full lg:max-w-sm">

              <Search
                size={18}
                aria-hidden="true"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="search"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                placeholder="Search publications..."
                aria-label="Search publications"
                className="w-full border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-forest focus:ring-2 focus:ring-forest/10"
              />

            </div>

          </div>

          {/* CATEGORY FILTERS */}

          <div className="mt-10 flex flex-wrap gap-2">

            {categories.map((category) => {

              const isActive =
                activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  aria-pressed={isActive}
                  className={`px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "bg-forest text-white shadow-sm"
                      : "bg-forest-soft text-forest hover:bg-forest/10"
                  }`}
                >
                  {category}
                </button>
              );
            })}

          </div>

          {/* RESULTS COUNT */}

          <div className="mt-8 text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-forest">
              {filteredPublications.length}
            </span>{" "}
            {filteredPublications.length === 1
              ? "publication"
              : "publications"}
          </div>

          {/* PUBLICATION GRID */}

          {filteredPublications.length > 0 ? (

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {filteredPublications.map(
                (publication, index) => (

                  <motion.article
                    key={publication.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: Math.min(
                        index * 0.04,
                        0.2
                      ),
                    }}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >

                    {/* THUMBNAIL */}

                    <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-gray-100">

                      <PublicationThumb
                        src={publication.thumb}
                        alt={`${publication.title} publication cover`}
                      />

                      <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-gray-600 shadow-sm">
                        PDF
                      </span>

                    </div>

                    {/* CONTENT */}

                    <div className="flex flex-1 flex-col p-5">

                      {/* CATEGORY */}

                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-forest">
                        {publication.category}
                      </p>

                      {/* TITLE */}

                      <h3 className="mt-2 line-clamp-2 text-sm font-bold leading-snug text-ink">
                        {publication.title}
                      </h3>

                      {/* YEAR */}

                      <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-500">

                        <CalendarDays
                          size={13}
                          aria-hidden="true"
                        />

                        <span>
                          Published {publication.year}
                        </span>

                      </div>

                      {/* DESCRIPTION */}

                      <p className="mt-3 line-clamp-4 flex-1 text-xs leading-5 text-gray-600">
                        {publication.description}
                      </p>

                      {/* ACTIONS */}

                      <div className="mt-5 flex flex-wrap gap-2 border-t border-gray-100 pt-4">

                        <a
                          href={publication.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-forest px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-forest-dark focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
                        >
                          <ExternalLink size={13} />
                          View
                        </a>

                        <a
                          href={publication.pdf}
                          download
                          className="inline-flex items-center gap-1.5 rounded-lg border border-forest/20 px-3.5 py-2 text-xs font-semibold text-forest transition hover:bg-forest-soft focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
                        >
                          <Download size={13} />
                          Download
                        </a>

                      </div>

                    </div>

                  </motion.article>

                )
              )}

            </div>

          ) : (

            /* EMPTY STATE */

            <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-16 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest-soft">

                <FileText
                  size={28}
                  className="text-forest/60"
                />

              </div>

              <h3 className="mt-5 text-xl font-bold text-ink">
                No publications found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                We couldn't find publications matching
                your search or selected category. Try
                another search term or choose a different
                category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                }}
                className="mt-5 rounded-lg bg-forest px-4 py-2 text-sm font-semibold text-white transition hover:bg-forest-dark"
              >
                Clear filters
              </button>

            </div>

          )}

        </div>

      </section>

      {/* ======================================================
          ACCESS INFORMATION
      ====================================================== */}

      <section className="bg-forest-soft px-6 py-16 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-5xl">

          <div className="border border-forest/10 bg-white p-8 shadow-sm sm:p-10">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-forest text-white">
                <Download size={23} />
              </div>

              <div>

                <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
                  Access our publications
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
                  Our publications provide research, evidence,
                  programme information and institutional
                  knowledge that contribute to discussions on
                  human rights, social justice and sustainable
                  development.
                </p>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
                  Publications are available in PDF format for
                  online viewing and download.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
