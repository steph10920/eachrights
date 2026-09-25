import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowUpRight,
  GraduationCap,
  Scale,
  HeartPulse,
  Leaf,
  BriefcaseBusiness,
  ShieldCheck,
  Globe2,
  Search,
  Megaphone,
  Users,
  Gavel,
  FileText,
} from "lucide-react";

import CountUp from "../components/CountUp.jsx";

import hero1 from "../assets/hero/hero-1.png";
import hero2 from "../assets/hero/hero-2.png";
import hero3 from "../assets/hero/hero-3.png";

import impact1 from "../assets/impact/impact-1.png";
import impact2 from "../assets/impact/impact-2.png";
import impact3 from "../assets/impact/impact-3.png";
import impact4 from "../assets/impact/impact-4.png";
import impact5 from "../assets/impact/impact-5.png";
import impact6 from "../assets/impact/impact-6.png";

import commitmentImage from "../assets/videos/evidence.png";
import educationJusticeImage from "../assets/videos/rightsintoaction.png";

// ============================================================
// STRATEGIC PLAN PDF
// ============================================================
// Bundled the same way Publications.jsx links its PDFs: imported
// as a static asset so Vite resolves it to a real, hashed URL at
// build time instead of relying on a /documents/... path in public/.
import strategicPlan2026 from "../assets/publications/STRATEGIC PLAN 2026-2030.pdf";
import strategicPlan2026Thumb from "../assets/publication-thumbs/STRATEGIC PLAN 2026-2030.png";

/* =========================================================
   CONTENT
========================================================= */

const HERO_INTERVAL = 5000;
const SRHR_PORTAL_URL = "https://eachrights.github.io/srhr/";

const heroSlides = [
  {
    label: "Advancing human rights since 2010",
    title: "Rights, realized",
    highlight: "Not just recognized",
    description:
      "EACHRights works to promote, protect and advance Economic, Social and Cultural Rights across East Africa.",
    image: hero1,
  },
  {
    label: "Communities at the centre",
    title: "Dignity begins",
    highlight: "with equal opportunity",
    description:
      "We work with vulnerable and marginalized communities to build an environment where people can claim their rights and live with dignity.",
    image: hero2,
  },
  {
    label: "Evidence into action",
    title: "Research becomes",
    highlight: "action for justice",
    description:
      "Through research, advocacy, capacity building and public interest litigation, we turn human rights principles into action.",
    image: hero3,
  },
];

/* Taken from the goal statement. */
const focusAreas = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "Enabling communities to fully realize their right to education.",
  },
  {
    icon: HeartPulse,
    title: "Health",
    text: "Enabling communities to fully realize their right to health.",
  },
  {
    icon: Scale,
    title: "Gender and economic equality",
    text: "Challenging gender and economic inequalities.",
  },
  {
    icon: Leaf,
    title: "Environment and climate",
    text: "Reducing the impact of environmental and climate change vulnerabilities.",
  },
];

/*
|--------------------------------------------------------------------------
| PROGRAMMES
|--------------------------------------------------------------------------
| Institutional Growth and Sustainability has no dedicated photo yet, so
| `image` is left unset for it — the preview panel below falls back to a
| solid background when a programme has no image. Add an
| `../assets/impact/impact-7.png` (or similar) and set it here once one
| exists.
*/

const programmes = [
  {
    title: "Education Justice",
    description:
      "Advancing equitable access to quality education and strengthening the right to learn.",
    icon: GraduationCap,
    image: impact1,
    link: "/programmes/education-justice",
  },
  {
    title: "Gender Justice",
    description:
      "Promoting gender equality, dignity and protection for women, girls and vulnerable groups.",
    icon: Scale,
    image: impact2,
    link: "/programmes/gender-justice",
  },
  {
    title: "Health Justice",
    description:
      "Advocating for equitable access to health and the realization of the right to health.",
    icon: HeartPulse,
    image: impact3,
    link: "/programmes/health-justice",
  },
  {
    title: "Environmental & Climate Justice",
    description:
      "Supporting communities to address environmental challenges and climate-related injustices.",
    icon: Leaf,
    image: impact4,
    link: "/programmes/environmental-climate-justice",
  },
  {
    title: "Economic Justice, Business and Human Rights",
    description:
      "Advancing economic and social rights for vulnerable and marginalized communities.",
    icon: BriefcaseBusiness,
    image: impact5,
    link: "/programmes/economic-justice",
  },
  {
    title: "Universal Periodic Review",
    description:
      "Our engagement with the UN's Universal Periodic Review mechanism to advance human rights accountability.",
    icon: Globe2,
    image: impact6,
    link: "/processes/universal-periodic-review",
  },
  {
    title: "Institutional Growth and Sustainability",
    description:
      "Strengthening our organisational capacity, governance and resource base to sustain long-term impact.",
    icon: ShieldCheck,
    link: "/programmes/institutional-growth-sustainability",
  },
];

const impactStats = [
  { value: 120, suffix: "+", label: "Research initiatives" },
  { value: 4500, suffix: "+", label: "Networking, collaboration and partnerships" },
  { value: 32, suffix: "", label: "Social movement and grassroots initiatives" },
  { value: 67, suffix: "%", label: "Training and capacity building" },
  { value: 67, suffix: "%", label: "Lobbying and advocacy" },
  { value: 67, suffix: "%", label: "Community and public awareness" },
];

const approaches = [
  {
    title: "Research",
    description:
      "Generating evidence and knowledge to understand rights challenges and inform action.",
    icon: Search,
  },
  {
    title: "Advocacy",
    description:
      "Influencing policies, institutions and decision-makers to advance human rights.",
    icon: Megaphone,
  },
  {
    title: "Capacity building",
    description:
      "Strengthening communities and partners with knowledge, skills and tools for action.",
    icon: Users,
  },
  {
    title: "Public interest litigation",
    description:
      "Using strategic legal action to protect rights and seek justice.",
    icon: Gavel,
  },
];

const regions = [
  {
    country: "Kenya",
    description:
      "Home base for our national advocacy, research and litigation work.",
  },
  {
    country: "Uganda",
    description:
      "Partnerships supporting community-level rights education and monitoring.",
  },
  {
    country: "Tanzania",
    description:
      "Cross-border research and coalition work on shared regional challenges.",
  },
];

/* Add new platforms here; the section lays them out automatically. */
const platforms = [
  {
    type: "Portal",
    title: "SRHR Portal",
    description:
      "Explore EACHRights' Sexual and Reproductive Health and Rights portal.",
    icon: HeartPulse,
    url: SRHR_PORTAL_URL,
    /* Optional: shows a live, non-interactive preview of the site in the card. */
    preview: SRHR_PORTAL_URL,
  },
];

const preloadSources = [
  ...heroSlides.map((s) => s.image),
  ...programmes.map((p) => p.image).filter(Boolean),
];

/* =========================================================
   HOOKS
========================================================= */

/** Auto-advancing slider; pauses on request and restarts on manual change. */
function useSlider(total, paused) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(
      () => setCurrent((prev) => (prev + 1) % total),
      HERO_INTERVAL
    );
    return () => clearInterval(id);
  }, [total, paused, current]);

  return [current, setCurrent];
}

function useScrolledPast(offset = 500) {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const onScroll = () => setPassed(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return passed;
}

function usePreload(sources) {
  useEffect(() => {
    sources.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [sources]);
}

/* =========================================================
   SHARED
========================================================= */

const SECTION = "px-6 py-24 sm:px-8 lg:px-12 lg:py-28";
const CONTAINER = "mx-auto max-w-7xl";

function SectionHeading({ title, children, light = false }) {
  return (
    <div className="max-w-3xl">
      <h2
        className={`font-display text-4xl font-bold leading-tight sm:text-5xl ${
          light ? "text-white" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {children && (
        <p
          className={`mt-5 max-w-2xl text-lg leading-8 ${
            light ? "text-white/70" : "text-ink/65"
          }`}
        >
          {children}
        </p>
      )}
    </div>
  );
}

function Fade({ children, keyId, reduce, className = "" }) {
  return (
    <motion.div
      key={keyId}
      initial={{ opacity: reduce ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: reduce ? 1 : 0 }}
      transition={{ duration: reduce ? 0 : 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   SECTIONS
========================================================= */

/** Full-bleed hero: images play as a background slideshow behind the message. */
function Hero() {
  const reduce = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [current, setCurrent] = useSlider(heroSlides.length, paused);
  const slide = heroSlides[current];
  const total = heroSlides.length;

  return (
    <header
      className="relative isolate min-h-[460px] overflow-hidden bg-forest-dark text-white lg:min-h-[540px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Background slideshow */}
      <AnimatePresence initial={false}>
        <motion.img
          key={current}
          src={slide.image}
          alt=""
          aria-hidden="true"
          initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: reduce ? 1 : 0 }}
          transition={{
            opacity: { duration: reduce ? 0 : 1.2 },
            scale: { duration: reduce ? 0 : HERO_INTERVAL / 1000 + 1.2, ease: "linear" },
          }}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* Legibility overlays */}
      <div className="absolute inset-0 -z-10 bg-black/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* Message */}
      <div className="mx-auto flex min-h-[460px] max-w-7xl flex-col items-start justify-center gap-8 px-6 pb-24 pt-14 sm:px-8 lg:min-h-[540px] lg:px-12">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait" initial={false}>
            <Fade keyId={current} reduce={reduce}>
              <p className="flex items-center gap-3 text-sm font-semibold text-white/80">
                <span className="h-px w-10 bg-[#8DC63F]" />
                {slide.label}
              </p>

              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                {slide.title}
                <span className="block text-white/65">{slide.highlight}</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
                {slide.description}
              </p>
            </Fade>
          </AnimatePresence>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              to="/what-we-do"
              className="inline-flex items-center gap-2 bg-[#8DC63F] px-6 py-3.5 text-sm font-bold text-forest transition hover:brightness-105"
            >
              Explore our work
              <ArrowRight size={17} />
            </Link>
            <Link
              to="/who-we-are/our-story"
              className="inline-flex items-center gap-2 border border-white/60 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-forest"
            >
              Our story
            </Link>
          </div>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 pb-8 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            {heroSlides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Show slide ${index + 1}: ${item.label}`}
                aria-current={current === index ? "true" : undefined}
                className="group py-3"
              >
                <span
                  className={`block h-1 transition-all duration-500 ${
                    current === index
                      ? "w-14 bg-[#8DC63F]"
                      : "w-7 bg-white/40 group-hover:bg-white"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setCurrent((current - 1 + total) % total)}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center border border-white/40 bg-black/20 text-white backdrop-blur-sm transition hover:border-[#8DC63F] hover:text-[#8DC63F]"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => setCurrent((current + 1) % total)}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center border border-white/40 bg-black/20 text-white backdrop-blur-sm transition hover:border-[#8DC63F] hover:text-[#8DC63F]"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

/** External platforms and tools. Driven by the `platforms` array above. */
function Platforms() {
  return (
    <section
      aria-labelledby="platforms-title"
      className="bg-white px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className={CONTAINER}>
        <div className="max-w-2xl">
          <span className="block h-1 w-14 bg-[#8DC63F]" />
          <h2
            id="platforms-title"
            className="mt-5 font-display text-4xl font-bold leading-tight text-forest sm:text-5xl"
          >
            Platforms and tools
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-8 text-ink/65">
            Online portals and resources from EACHRights.
          </p>
        </div>

        <ul className="mt-12 grid gap-8">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            const host = new URL(platform.url).host;

            return (
              <li
                key={platform.title}
                className="grid overflow-hidden border border-forest/15 bg-paper lg:grid-cols-[1.15fr_0.85fr]"
              >
                {/* Preview inside a browser-style frame */}
                <div className="bg-forest-light p-5 sm:p-8">
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="block bg-white shadow-xl ring-1 ring-forest/15"
                  >
                    <span className="flex items-center gap-3 border-b border-forest/10 bg-white px-4 py-2.5">
                      <span className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-forest/20" />
                        <span className="h-2.5 w-2.5 rounded-full bg-forest/20" />
                        <span className="h-2.5 w-2.5 rounded-full bg-forest/20" />
                      </span>
                      <span className="truncate bg-forest-light px-3 py-1 text-xs text-forest/70">
                        {host}
                      </span>
                    </span>

                    {platform.preview ? (
                      <span className="relative block aspect-[16/10] overflow-hidden bg-white">
                        {/* Site rendered at 3x size, scaled down to fit the frame */}
                        <iframe
                          src={platform.preview}
                          title=""
                          tabIndex={-1}
                          loading="lazy"
                          className="pointer-events-none absolute left-0 top-0 h-[300%] w-[300%] origin-top-left scale-[0.3333] border-0"
                        />
                      </span>
                    ) : null}
                  </a>
                </div>

                {/* Details */}
                <div className="flex flex-col justify-center border-t-4 border-[#8DC63F] p-8 lg:border-l lg:border-t-0 lg:p-12">
                  <span className="flex h-12 w-12 items-center justify-center bg-forest-light">
                    <Icon size={24} strokeWidth={1.7} className="text-forest" />
                  </span>

                  <p className="mt-6 text-sm font-semibold text-forest/60">
                    {platform.type}
                  </p>
                  <h3 className="mt-1 font-display text-3xl font-bold leading-tight text-forest">
                    {platform.title}
                  </h3>
                  <p className="mt-4 max-w-sm leading-7 text-ink/70">
                    {platform.description}
                  </p>

                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 self-start bg-forest px-6 py-3.5 text-sm font-bold text-white transition hover:bg-forest-dark"
                  >
                    Open the portal
                    <ArrowUpRight size={17} />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section
      aria-labelledby="intro-title"
      className="bg-paper px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className={`${CONTAINER} grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20`}>
        <div>
          <span className="block h-1 w-14 bg-[#8DC63F]" />
          <h2
            id="intro-title"
            className="mt-5 font-display text-4xl font-bold leading-tight text-forest sm:text-5xl"
          >
            Who we are
          </h2>
        </div>

        <div className="max-w-3xl">
          <p className="font-display text-2xl font-bold leading-snug text-forest sm:text-3xl">
            The East African Centre for Human Rights promotes, protects and
            advances Economic, Social and Cultural Rights.
          </p>

          <p className="mt-6 text-lg leading-8 text-ink/70">
            EACHRights is a non-partisan regional non-governmental organisation
            working with vulnerable and marginalized communities. Through
            research, advocacy, capacity building and public interest
            litigation, we work to build an environment where people can claim
            their rights and live with dignity.
          </p>

          <Link
            to="/who-we-are/our-story"
            className="mt-8 inline-flex items-center gap-2 bg-forest px-6 py-3.5 text-sm font-bold text-white transition hover:bg-forest-dark"
          >
            Read our story
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Short excerpt from the Strategic Plan 2026-2030, linking through to the full document. */
function StrategicPlanHighlight() {
  return (
    <section
      aria-labelledby="strategic-plan-title"
      className="bg-forest px-6 py-20 text-white sm:px-8 lg:px-12 lg:py-24"
    >
      <div
        className={`${CONTAINER} grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-16`}
      >
        <span className="flex h-16 w-16 shrink-0 items-center justify-center bg-white/10">
          <FileText size={30} strokeWidth={1.6} className="text-[#8DC63F]" />
        </span>

        <div>
          <p className="flex items-center gap-3 text-sm font-semibold text-white/70">
            <span className="h-px w-10 bg-[#8DC63F]" />
            Strategic Plan 2026 &ndash; 2030
          </p>

          <h2
            id="strategic-plan-title"
            className="mt-4 font-display text-3xl font-bold italic leading-snug sm:text-4xl"
          >
            &ldquo;A just society that respects and upholds human rights and
            inherent dignity.&rdquo;
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-white/75">
            Our vision anchors a five-year plan built around seven strategic
            focus areas &mdash; from gender and education justice to
            institutional sustainability &mdash; developed through a
            participatory process with our staff and stakeholders.
          </p>

          <a
            href={strategicPlan2026}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 bg-[#8DC63F] px-6 py-3.5 text-sm font-bold text-forest transition hover:brightness-105"
          >
            Read the full Strategic Plan
            <ArrowUpRight size={17} />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function FocusAreas() {
  return (
    <section className={`bg-white ${SECTION}`} aria-labelledby="focus-title">
      <div className={`${CONTAINER} grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}>
        <div>
          <h2
            id="focus-title"
            className="font-display text-4xl font-bold leading-tight text-forest sm:text-5xl"
          >
            Where we focus our efforts
          </h2>
          <p className="mt-5 max-w-md text-lg leading-8 text-ink/65">
            Four areas where we help communities claim their rights.
          </p>
        </div>

        <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div key={area.title} className="flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-forest-light">
                  <Icon size={23} strokeWidth={1.7} className="text-forest" />
                </span>
                <div>
                  <dt className="font-display text-xl font-bold text-forest">
                    {area.title}
                  </dt>
                  <dd className="mt-2 leading-7 text-ink/65">{area.text}</dd>
                </div>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

/** Programme explorer: choose from the list, preview on the right (large screens). */
function Programmes() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const selected = programmes[active];

  return (
    <section className={`bg-forest-light ${SECTION}`}>
      <div className={CONTAINER}>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading title="Seven Strategic Focus Areas, One commitment to justice">
            Our programmes address the structural barriers that prevent
            communities from fully realizing their rights.
          </SectionHeading>
          <Link
            to="/what-we-do"
            className="inline-flex shrink-0 items-center gap-2 font-bold text-forest transition hover:text-forest-dark"
          >
            View all our work
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <ul className="divide-y divide-forest/15 border-y border-forest/15">
            {programmes.map((programme, index) => {
              const Icon = programme.icon;
              const isActive = index === active;

              return (
                <li key={programme.title}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    aria-expanded={isActive}
                    className={`flex w-full items-center gap-4 border-l-4 px-5 py-5 text-left transition ${
                      isActive
                        ? "border-[#8DC63F] bg-white"
                        : "border-transparent hover:bg-white/60"
                    }`}
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.7}
                      className={isActive ? "text-[#8DC63F]" : "text-forest/50"}
                    />
                    <span className="font-display text-xl font-bold text-forest sm:text-2xl">
                      {programme.title}
                    </span>
                  </button>

                  {isActive && (
                    <div className="bg-white px-5 pb-6 pl-[68px]">
                      <p className="max-w-md leading-7 text-ink/70">
                        {programme.description}
                      </p>
                      <Link
                        to={programme.link}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-forest underline decoration-[#8DC63F] decoration-2 underline-offset-4"
                      >
                        Explore programme
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="relative hidden min-h-[520px] overflow-hidden bg-forest lg:block">
            <AnimatePresence initial={false}>
              {selected.image ? (
                <motion.img
                  key={selected.title}
                  src={selected.image}
                  alt=""
                  aria-hidden="true"
                  initial={{ opacity: reduce ? 1 : 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: reduce ? 1 : 0 }}
                  transition={{ duration: reduce ? 0 : 0.5 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <motion.div
                  key={selected.title}
                  initial={{ opacity: reduce ? 1 : 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: reduce ? 1 : 0 }}
                  transition={{ duration: reduce ? 0 : 0.5 }}
                  className="absolute inset-0 h-full w-full bg-forest-dark"
                />
              )}
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8 pt-24">
              <p className="font-display text-2xl font-bold text-white">
                {selected.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="bg-forest px-6 py-14 text-white sm:px-8 lg:px-12 lg:py-16">
      <div className={CONTAINER}>
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end md:gap-10">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            Evidence of work, Stories of change
          </h2>
          <p className="max-w-md leading-7 text-white/70">
            Our work connects evidence, communities, institutions and
            decision-makers to advance social and economic rights.
          </p>
        </div>

        <dl className="mt-8 grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-white/15 py-5 sm:pr-6 lg:[&:not(:nth-child(3n+1))]:border-l lg:[&:not(:nth-child(3n+1))]:pl-6"
            >
              <dd className="font-display text-3xl font-bold text-[#8DC63F] sm:text-4xl">
                <CountUp end={stat.value} duration={2} separator="," />
                {stat.suffix}
              </dd>
              <dt className="mt-1 max-w-xs text-sm leading-6 text-white/75">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className={`bg-paper ${SECTION}`}>
      <div className={CONTAINER}>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading title="Evidence. Advocacy. Action.">
            We combine knowledge, community power, institutional engagement and
            strategic legal action to advance human rights.
          </SectionHeading>
          <Link
            to="/how-we-work"
            className="inline-flex shrink-0 items-center gap-2 font-bold text-forest transition hover:text-forest-dark"
          >
            How we work
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {approaches.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="border-t-4 border-[#8DC63F] pt-6">
                <Icon size={30} strokeWidth={1.6} className="text-forest" />
                <h3 className="mt-5 font-display text-2xl font-bold text-forest">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-ink/65">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Founding story and Theory of Change, each anchored by a static image. */
function StoryAndChange() {
  return (
    <section className="bg-white">
      <div className={`${CONTAINER} grid lg:grid-cols-2`}>
        <div className="flex flex-col justify-center px-6 py-20 sm:px-8 lg:px-12">
          <h2 className="font-display text-3xl font-bold leading-tight text-forest sm:text-4xl">
            A decade-plus of turning rights into action
          </h2>
          <p className="mt-5 max-w-lg leading-8 text-ink/70">
            Since 2010, our work has been rooted in the belief that dignity,
            equality and justice must be made real in people&apos;s daily lives.
          </p>
          <Link
            to="/who-we-are/our-story"
            className="mt-7 inline-flex items-center gap-2 self-start bg-forest px-6 py-3.5 text-sm font-bold text-white transition hover:brightness-110"
          >
            Read our story
            <ArrowRight size={17} />
          </Link>
        </div>
        <img
          src={commitmentImage}
          alt=""
          aria-hidden="true"
          className="aspect-video h-full w-full object-cover lg:aspect-auto"
        />
      </div>

      <div className={`${CONTAINER} grid lg:grid-cols-2`}>
        <img
          src={educationJusticeImage}
          alt=""
          aria-hidden="true"
          className="order-2 aspect-video h-full w-full object-cover lg:order-1 lg:aspect-auto"
        />
        <div className="order-1 flex flex-col justify-center px-6 py-20 sm:px-8 lg:order-2 lg:px-12">
          <h2 className="font-display text-3xl font-bold leading-tight text-forest sm:text-4xl">
            From evidence to lasting change
          </h2>
          <p className="mt-5 max-w-lg leading-8 text-ink/70">
            Our Theory of Change connects the work we do today with the more
            just and equitable society we seek to build.
          </p>
          <Link
            to="/programmes/theory-of-change"
            className="mt-7 inline-flex items-center gap-2 self-start border border-forest px-6 py-3.5 text-sm font-bold text-forest transition hover:bg-forest hover:text-white"
          >
            Explore our Theory of Change
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhereWeWork() {
  return (
    <section className={`bg-paper ${SECTION}`}>
      <div className={CONTAINER}>
        <SectionHeading title="East African in scope Community-rooted in practice" />

        <div className="mt-14 grid gap-px bg-forest/15 md:grid-cols-3">
          {regions.map((region) => (
            <article key={region.country} className="bg-paper py-8 md:px-8 md:first:pl-0">
              <h3 className="font-display text-4xl font-bold text-forest">
                {region.country}
              </h3>
              <p className="mt-4 max-w-xs leading-7 text-ink/65">
                {region.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScrollToTop({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-forest text-white shadow-xl transition hover:bg-forest-dark"
        >
          <ArrowUp size={19} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function Home() {
  const showScrollTop = useScrolledPast();
  usePreload(preloadSources);

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Helmet>
        <title>
          EACHRights | Advancing Human Rights & Social Justice in East Africa
        </title>
        <meta
          name="description"
          content="EACHRights promotes and protects Economic, Social and Cultural Rights for vulnerable and marginalized communities across East Africa."
        />
      </Helmet>

      <Hero />

      <main>
        <Platforms />
        <Introduction />
        <StrategicPlanHighlight />
        <FocusAreas />
        <Programmes />
        <Impact />
        <Approach />
        <StoryAndChange />
        <WhereWeWork />
      </main>

      <ScrollToTop visible={showScrollTop} />
    </div>
  );
}
