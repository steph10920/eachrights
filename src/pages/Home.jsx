import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

import hero1 from "../assets/hero/hero-1.jpg";
import hero2 from "../assets/hero/hero-2.jpg";
import hero3 from "../assets/hero/hero-3.jpg";

import impact1 from "../assets/impact/impact-1.jpg";
import impact2 from "../assets/impact/impact-2.jpg";
import impact3 from "../assets/impact/impact-3.jpg";
import impact4 from "../assets/impact/impact-4.jpg";

import commitmentVideo from "../assets/videos/commitment.mp4";
import educationJusticeVideo from "../assets/videos/education-justice.mp4";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Scale,
  GraduationCap,
  HeartPulse,
  Leaf,
  BriefcaseBusiness,
  Building2,
  Users,
  Globe2,
  Search,
  Megaphone,
  Gavel,
  Handshake,
  ShieldCheck,
  Landmark,
} from "lucide-react";

import { Helmet } from "react-helmet-async";
import CountUp from "../components/CountUp.jsx";

const focusAreas = [
  {
    title: "Education Justice",
    description: "Advancing equitable access to quality education and strengthening the right to learn.",
    icon: GraduationCap,
    link: "/our-work/programmes/education-justice",
    video: educationJusticeVideo,
  },
  {
    title: "Gender Justice",
    description: "Promoting gender equality, dignity and protection for women, girls and vulnerable groups.",
    icon: Scale,
    link: "/our-work/programmes/gender-justice",
  },
  {
    title: "Health Justice",
    description: "Advocating for equitable access to health and the realization of the right to health.",
    icon: HeartPulse,
    link: "/our-work/programmes/health-justice",
  },
  {
    title: "Environmental & Climate Justice",
    description: "Supporting communities to address environmental challenges and climate-related injustices.",
    icon: Leaf,
    link: "/our-work/programmes/environmental-climate-justice",
  },
  {
    title: "Economic Justice",
    description: "Advancing economic and social rights for vulnerable and marginalized communities.",
    icon: BriefcaseBusiness,
    link: "/our-work/programmes/economic-justice",
  },
  {
    title: "Business & Human Rights",
    description: "Promoting responsible business practices and respect for human rights.",
    icon: Building2,
    link: "/our-work/programmes/business-human-rights",
  },
];

// This sequence reflects EACHRights' actual working method, in order —
// numbering is meaningful here, not decoration.
const approaches = [
  { title: "Research", description: "Generating evidence and knowledge to understand rights challenges and inform action.", icon: Search },
  { title: "Advocacy", description: "Influencing policies, institutions and decision-makers to advance human rights.", icon: Megaphone },
  { title: "Capacity building", description: "Strengthening communities and partners with knowledge, skills and tools for action.", icon: Users },
  { title: "Public interest litigation", description: "Using strategic legal action to protect rights and seek justice.", icon: Gavel },
];

// TODO: confirm these one-line descriptions with the programmes team —
// drafted here to give each country a distinct role rather than a repeated card.
const regions = [
  { country: "Kenya", icon: Landmark, description: "Home base for our national advocacy, research and litigation work." },
  { country: "Uganda", icon: Globe2, description: "Partnerships supporting community-level rights education and monitoring." },
  { country: "Tanzania", icon: Globe2, description: "Cross-border research and coalition work on shared regional challenges." },
];

const heroSlides = [
  {
    label: "Advancing human rights since 2010",
    title: "Rights, realized —",
    highlight: "not just recognized.",
    description: "EACHRights works to promote, protect and advance Economic, Social and Cultural Rights across East Africa.",
    image: hero1,
  },
  {
    label: "Communities at the centre",
    title: "Dignity begins",
    highlight: "with equal opportunity.",
    description: "We work with vulnerable and marginalized communities to build an environment where people can claim their rights and live with dignity.",
    image: hero2,
  },
  {
    label: "Evidence into action",
    title: "Research becomes",
    highlight: "policy that holds.",
    description: "Through research, advocacy, capacity building and public interest litigation, we turn human rights principles into action.",
    image: hero3,
  },
];

/* NOTE: impact figures (volunteers, learners, projects, satisfaction) below
   are placeholders carried over from the previous draft — swap in verified
   numbers from the programmes team before this goes live. */
const impactStats = [
  { value: 120, suffix: "+", label: "Volunteers engaged" },
  { value: 4500, suffix: "", label: "Learners reached", separator: "," },
  { value: 32, suffix: "", label: "Projects funded" },
  { value: 98, suffix: "%", label: "Community satisfaction" },
];

const impactImages = [
  { image: impact1, caption: "Community impact", title: "Creating change through action." },
  { image: impact2, caption: "Empowering communities", title: "Putting rights into practice." },
  { image: impact3, caption: "Building opportunities", title: "Strengthening communities." },
  { image: impact4, caption: "Advancing justice", title: "Working together for lasting change." },
];

const HERO_INTERVAL = 6000;
const IMPACT_INTERVAL = 5000;

function IconBox({ icon: Icon, large = false }) {
  return (
    <div className={`flex items-center justify-center rounded-full bg-[#8DC63F]/10 text-[#8DC63F] ${large ? "h-16 w-16" : "h-14 w-14"}`}>
      <Icon size={large ? 30 : 26} strokeWidth={1.7} />
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImpactImage, setCurrentImpactImage] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const heroTimerRef = useRef(null);
  const impactTimerRef = useRef(null);

  // --- Hero slider: auto-advance + manual controls that reset the timer ---
  const startHeroTimer = useCallback(() => {
    clearInterval(heroTimerRef.current);
    heroTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, HERO_INTERVAL);
  }, []);

  useEffect(() => {
    startHeroTimer();
    return () => clearInterval(heroTimerRef.current);
  }, [startHeroTimer]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    startHeroTimer();
  };
  const prevSlide = () => goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => goToSlide((currentSlide + 1) % heroSlides.length);

  // --- Impact carousel: auto-advance + manual controls that reset the timer ---
  const startImpactTimer = useCallback(() => {
    clearInterval(impactTimerRef.current);
    impactTimerRef.current = setInterval(() => {
      setCurrentImpactImage((prev) => (prev + 1) % impactImages.length);
    }, IMPACT_INTERVAL);
  }, []);

  useEffect(() => {
    startImpactTimer();
    return () => clearInterval(impactTimerRef.current);
  }, [startImpactTimer]);

  const goToImpactImage = (index) => {
    setCurrentImpactImage(index);
    startImpactTimer();
  };
  const prevImpactImage = () =>
    goToImpactImage((currentImpactImage - 1 + impactImages.length) % impactImages.length);
  const nextImpactImage = () => goToImpactImage((currentImpactImage + 1) % impactImages.length);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Preload every hero/impact image up front so the transition never shows
  // a blank frame while the browser is still fetching the next photo.
  useEffect(() => {
    [...heroSlides.map((s) => s.image), ...impactImages.map((i) => i.image)].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const slide = heroSlides[currentSlide];
  const impactSlide = impactImages[currentImpactImage];

  const [featuredArea, ...secondaryAreas] = focusAreas;
  const FeaturedIcon = featuredArea.icon;

  // Hero: a true slide, not a crossfade. The outgoing and incoming photos
  // stay edge-to-edge the whole time, so no background colour ever shows
  // through mid-transition — it reads as one picture physically pushing
  // the next one off-screen.
  const heroImageMotion = prefersReducedMotion
    ? {
        initial: { x: "0%" },
        animate: { x: "0%" },
        exit: { x: "0%" },
        transition: { duration: 0 },
      }
    : {
        initial: { x: "100%" },
        animate: { x: "0%" },
        exit: { x: "-100%" },
        transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] },
      };

  const heroTextMotion = prefersReducedMotion
    ? { initial: { opacity: 1, x: 0 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 1, x: 0 }, transition: { duration: 0 } }
    : {
        initial: { opacity: 0, x: -24 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -16 },
        transition: { duration: 0.5, delay: 0.25 },
      };

  const impactImageMotion = prefersReducedMotion
    ? {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 1 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.7, ease: "easeInOut" },
      };

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Helmet>
        <title>EACHRights | Advancing Human Rights & Social Justice in East Africa</title>
        <meta
          name="description"
          content="EACHRights is a non-partisan regional NGO advancing Economic, Social and Cultural Rights for vulnerable and marginalized communities across East Africa."
        />
      </Helmet>

      {/* HERO — single photograph at a time, sliding edge-to-edge */}
      <header className="relative h-[58vh] min-h-[460px] max-h-[600px] overflow-hidden bg-forest-dark text-paper">
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence initial={false} mode="sync">
            <motion.img
              key={currentSlide}
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 h-full w-full object-cover"
              {...heroImageMotion}
            />
          </AnimatePresence>
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={currentSlide} {...heroTextMotion} className="max-w-2xl">
              <span className="inline-block border-l-2 border-[#8DC63F] pl-3 text-sm font-medium text-white/80">
                {slide.label}
              </span>

              <h1 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                {slide.title}
                <span className="block text-[#8DC63F]">{slide.highlight}</span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base">{slide.description}</p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/our-work"
                  className="inline-flex items-center gap-2 bg-[#8DC63F] px-6 py-3 text-sm font-bold text-forest shadow-lg transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  Explore our work
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-white bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-forest"
                >
                  Get involved
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/35 bg-black/20 text-white backdrop-blur-md transition hover:border-[#8DC63F] hover:bg-black/40 hover:text-[#8DC63F] sm:flex lg:left-6"
          aria-label="Previous slide"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/35 bg-black/20 text-white backdrop-blur-md transition hover:border-[#8DC63F] hover:bg-black/40 hover:text-[#8DC63F] sm:flex lg:right-6"
          aria-label="Next slide"
        >
          <ArrowRight size={18} />
        </button>

        <div className="absolute bottom-6 left-6 z-30 flex items-center gap-3 sm:left-8">
          {heroSlides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="group flex items-center gap-2"
            >
              <span
                className={`block h-1 transition-all duration-500 ${
                  currentSlide === index ? "w-10 bg-[#8DC63F]" : "w-5 bg-white/45 group-hover:bg-white/80"
                }`}
              />
            </button>
          ))}
        </div>
      </header>

      <main>
        {/* WHO WE ARE — the founding year does the work a decorative badge
            would otherwise do: it's real content, not filler. */}
        <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:py-28 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-forest-dark/70">Who we are</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-forest sm:text-5xl font-display">
              Human rights, made real in daily life.
            </h2>
            <p className="mt-6 text-base leading-8 text-ink/75">
              The East African Centre for Human Rights (EACHRights) is a non-partisan regional non-governmental organisation. We work to promote, protect and advance Economic, Social and Cultural Rights for vulnerable and marginalized communities.
            </p>
            <p className="mt-4 text-base leading-8 text-ink/75">
              Our work spans Kenya, Uganda and Tanzania, focused on building an environment where people can claim their rights and live with dignity — not just where rights exist on paper.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/about" className="bg-forest px-6 py-3 font-semibold text-paper shadow transition hover:brightness-110">
                About EACHRights
              </Link>
              <Link to="/contact" className="border-2 border-forest px-6 py-3 font-semibold text-forest transition hover:bg-forest/5">
                Contact us
              </Link>
            </div>
          </div>

          <div>
            <video
              src={commitmentVideo}
              autoPlay
              muted
              loop
              playsInline
              className="h-80 w-full object-cover sm:h-96"
            />
            <div className="mt-6 flex items-start gap-5 border-t border-forest/15 pt-6">
              <span className="shrink-0 font-display text-4xl font-bold text-forest-dark">2010</span>
              <p className="text-sm leading-6 text-ink/65">
                <ShieldCheck size={15} className="mb-0.5 mr-1 inline text-[#8DC63F]" />
                The year EACHRights was founded — the starting point for the research, advocacy and litigation that follow.
              </p>
            </div>
          </div>
        </section>

        {/* OUR IMPACT — figures as a ledger, not a grid of cards */}
        <section className="bg-forest px-6 py-16 text-paper">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl font-display">
                Measurable outcomes, real communities.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-paper/70">
                For more than a decade, EACHRights has worked with communities, institutions and partners to advance Economic, Social and Cultural Rights across East Africa.
              </p>
            </div>

            <div className="mt-9 grid items-center gap-10 lg:grid-cols-2">
              <div className="grid grid-cols-2 divide-x divide-y divide-paper/15 border border-paper/15 sm:divide-y-0">
                {impactStats.map((stat) => (
                  <div key={stat.label} className="px-5 py-6">
                    <div className="font-display text-2xl font-bold text-[#8DC63F] sm:text-3xl">
                      <CountUp end={stat.value} duration={2} separator={stat.separator || ""} />
                      {stat.suffix}
                    </div>
                    <p className="mt-1.5 text-sm text-paper/65">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="relative">
                <div className="group relative overflow-hidden bg-forest-dark">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <AnimatePresence initial={false} mode="sync">
                      <motion.img
                        key={currentImpactImage}
                        src={impactSlide.image}
                        alt={impactSlide.title}
                        className="absolute inset-0 h-full w-full object-cover"
                        {...impactImageMotion}
                      />
                    </AnimatePresence>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImpactImage}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="absolute bottom-0 left-0 right-0 p-4"
                      >
                        <p className="text-xs font-medium text-[#8DC63F]">{impactSlide.caption}</p>
                        <h3 className="mt-0.5 text-base font-bold font-display text-white sm:text-lg">
                          {impactSlide.title}
                        </h3>
                      </motion.div>
                    </AnimatePresence>

                    <button
                      type="button"
                      onClick={prevImpactImage}
                      aria-label="Previous impact image"
                      className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur-md transition hover:bg-black/60 group-hover:opacity-100"
                    >
                      <ArrowLeft size={16} />
                    </button>

                    <button
                      type="button"
                      onClick={nextImpactImage}
                      aria-label="Next impact image"
                      className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur-md transition hover:bg-black/60 group-hover:opacity-100"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                <div className="mt-3 flex justify-center gap-2">
                  {impactImages.map((item, index) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => goToImpactImage(index)}
                      aria-label={`Go to impact image ${index + 1}`}
                      className="group flex items-center justify-center p-1"
                    >
                      <span
                        className={`block h-1.5 rounded-full transition-all duration-300 ${
                          currentImpactImage === index ? "w-7 bg-[#8DC63F]" : "w-1.5 bg-paper/30 group-hover:bg-paper/60"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR WORK — one featured area, the rest as a divided list */}
        <section className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-forest sm:text-5xl font-display">Six areas. One purpose.</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-ink/65">
              We work across interconnected areas of Economic, Social and Cultural Rights to address the realities faced by vulnerable and marginalized communities.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative flex min-h-[380px] flex-col justify-end overflow-hidden bg-forest text-paper lg:min-h-[440px]"
            >
              {featuredArea.video && (
                <>
                  <video
                    src={featuredArea.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest via-forest/70 to-forest/10" />
                </>
              )}

              {!featuredArea.video && (
                <div className="absolute left-8 top-8 lg:left-10 lg:top-10">
                  <IconBox icon={FeaturedIcon} large />
                </div>
              )}

              <div className="relative z-10 p-8 lg:p-10">
                <h3 className="text-2xl font-bold font-display sm:text-3xl">{featuredArea.title}</h3>
                <p className="mt-4 text-base leading-7 text-paper/75">{featuredArea.description}</p>
                <Link
                  to={featuredArea.link}
                  className="mt-6 inline-flex w-fit items-center gap-2 border-b-2 border-[#8DC63F] pb-1 font-semibold text-[#8DC63F] transition hover:gap-3"
                >
                  Learn more
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            <div className="divide-y divide-forest/10 border-t border-forest/10 lg:border-t-0">
              {secondaryAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    className="group flex items-start gap-5 py-6 first:pt-0"
                  >
                    <Icon size={24} className="mt-1 shrink-0 text-forest-dark transition group-hover:text-[#8DC63F]" strokeWidth={1.7} />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 className="text-lg font-bold text-forest font-display">{area.title}</h3>
                        <Link
                          to={area.link}
                          className="text-sm font-semibold text-forest-dark underline decoration-transparent underline-offset-4 transition group-hover:decoration-forest-dark"
                        >
                          Learn more
                        </Link>
                      </div>
                      <p className="mt-1.5 text-sm leading-6 text-ink/65">{area.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* OUR APPROACH — a real four-step working method, shown as a
            connected sequence rather than four identical cards */}
        <section className="bg-forest-light px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-start gap-14 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-bold leading-tight text-forest sm:text-5xl font-display">
                  Evidence.
                  <br />
                  Advocacy.
                  <br />
                  <span className="text-forest-dark">Action.</span>
                </h2>
                <p className="mt-6 max-w-xl leading-8 text-ink/70">
                  EACHRights uses a rights-based approach to address structural inequalities and strengthen the ability of communities and institutions to advance human rights. Each stage builds on the one before it.
                </p>
              </div>

              <div className="divide-y divide-forest-dark/10 border-t border-forest-dark/10">
                {approaches.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-5 py-6 first:pt-0">
                      <div className="flex shrink-0 flex-col items-center gap-2 pt-0.5">
                        <span className="font-display text-sm font-bold text-[#8DC63F]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <Icon size={20} className="text-forest-dark" strokeWidth={1.7} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-forest font-display">{item.title}</h3>
                        <p className="mt-1.5 text-sm leading-6 text-ink/65">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* WHERE WE WORK — each country given a distinct role, not a
            repeated icon-in-a-circle card */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-forest sm:text-5xl font-display">Working across East Africa.</h2>
            <p className="mt-4 leading-7 text-ink/65">
              Our regional work connects communities, partners and stakeholders across East Africa to advance Economic, Social and Cultural Rights.
            </p>
          </div>

          <div className="mt-10 divide-y divide-forest/10 border-y border-forest/10">
            {regions.map((region) => {
              const Icon = region.icon;
              return (
                <div
                  key={region.country}
                  className="flex flex-col gap-3 py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <div className="flex items-center gap-5">
                    <Icon size={26} className="text-forest-dark" strokeWidth={1.6} />
                    <h3 className="text-2xl font-bold text-forest font-display">{region.country}</h3>
                  </div>
                  <p className="max-w-sm text-sm leading-6 text-ink/60 sm:text-right">{region.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* PARTNERSHIP CTA */}
        <section className="bg-forest-dark px-6 py-16 text-paper">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl font-display">Together, we can turn rights into action.</h2>
              <p className="mt-3 max-w-2xl text-paper/80">
                Explore opportunities for institutional, research, funding, government, private-sector, community and technical partnerships.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 bg-paper px-7 py-3.5 font-bold text-forest-dark shadow-lg transition hover:brightness-95"
            >
              Discuss a partnership
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-forest px-6 py-24 text-center text-paper">
          <div className="mx-auto max-w-3xl">
            <Handshake size={44} strokeWidth={1.3} className="mx-auto text-[#8DC63F]" />
            <h2 className="mt-6 text-4xl font-bold sm:text-5xl font-display">Be part of the change.</h2>
            <p className="mx-auto mt-5 max-w-xl leading-8 text-paper/65">
              Whether through partnership, advocacy, research or support, there is a role for everyone in advancing human rights and social justice.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#8DC63F] px-7 py-3.5 font-bold text-forest transition hover:brightness-105"
              >
                Get involved
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/donors"
                className="inline-flex items-center gap-2 border-2 border-[#8DC63F] px-7 py-3.5 font-bold text-[#8DC63F] transition hover:bg-[#8DC63F]/10"
              >
                Support our work
              </Link>
            </div>
          </div>
        </section>
      </main>

      {showScrollTop && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-forest-dark p-3 text-paper shadow-lg transition hover:brightness-110"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </div>
  );
}
