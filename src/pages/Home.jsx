import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import hero1 from "../assets/hero/hero-1.jpg";
import hero2 from "../assets/hero/hero-2.jpg";
import hero3 from "../assets/hero/hero-3.jpg";

import {
  ArrowRight,
  ArrowUp,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
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

import { Helmet } from "react-helmet";
import CountUp from "../components/CountUp.jsx";

/* =========================================================
   EACHRIGHTS CONTENT
========================================================= */

const focusAreas = [
  {
    title: "Education Justice",
    description:
      "Advancing equitable access to quality education and strengthening the right to learn.",
    icon: GraduationCap,
  },
  {
    title: "Gender Justice",
    description:
      "Promoting gender equality, dignity and protection for women, girls and vulnerable groups.",
    icon: Scale,
  },
  {
    title: "Health Justice",
    description:
      "Advocating for equitable access to health and the realization of the right to health.",
    icon: HeartPulse,
  },
  {
    title: "Environmental & Climate Justice",
    description:
      "Supporting communities to address environmental challenges and climate-related injustices.",
    icon: Leaf,
  },
  {
    title: "Economic Justice",
    description:
      "Advancing economic and social rights for vulnerable and marginalized communities.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Business & Human Rights",
    description:
      "Promoting responsible business practices and respect for human rights.",
    icon: Building2,
  },
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
    title: "Capacity Building",
    description:
      "Strengthening communities and partners with knowledge, skills and tools for action.",
    icon: Users,
  },
  {
    title: "Public Interest Litigation",
    description:
      "Using strategic legal action to protect rights and seek justice.",
    icon: Gavel,
  },
];

const regions = [
  {
    country: "Kenya",
    icon: Landmark,
  },
  {
    country: "Uganda",
    icon: Globe2,
  },
  {
    country: "Tanzania",
    icon: Globe2,
  },
];

/* =========================================================
   HERO SLIDES
========================================================= */

const heroSlides = [
  {
    image: hero1,
    eyebrow: "HUMAN RIGHTS • SOCIAL JUSTICE • DIGNITY",
    title: "Advancing Rights.",
    highlight: "Empowering Communities.",
    description:
      "EACHRights works to promote, protect and advance Economic, Social and Cultural Rights across East Africa.",
  },
  {
    image: hero2,
    eyebrow: "EQUALITY & SOCIAL JUSTICE",
    title: "Building a Future",
    highlight: "Where Everyone Can Thrive.",
    description:
      "We work with vulnerable and marginalized communities to create an enabling environment where people can enjoy their rights and live with dignity.",
  },
  {
    image: hero3,
    eyebrow: "EVIDENCE • ADVOCACY • ACTION",
    title: "Turning Evidence",
    highlight: "Into Meaningful Change.",
    description:
      "Through research, advocacy, awareness, capacity building and public interest litigation, we turn human rights principles into action.",
  },
];

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function Eyebrow({ children, dark = false }) {
  return (
    <span
      className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] ${
        dark ? "text-forest-dark" : "text-accent"
      }`}
    >
      {children}
    </span>
  );
}

function IconBox({ icon: Icon, large = false }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-accent/10 text-accent ${
        large ? "h-24 w-24" : "h-14 w-14"
      }`}
    >
      <Icon size={large ? 42 : 26} strokeWidth={1.7} />
    </div>
  );
}

/* =========================================================
   HOME PAGE
========================================================= */

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  /* =======================================================
     AUTOMATIC HERO SLIDER
  ======================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  /* =======================================================
     SCROLL TOP BUTTON
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =======================================================
     SLIDER CONTROLS
  ======================================================= */

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % heroSlides.length
    );
  };

  const previousSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + heroSlides.length) %
        heroSlides.length
    );
  };

  const slide = heroSlides[currentSlide];

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      {/* =====================================================
          SEO
      ===================================================== */}

      <Helmet>
        <title>
          EACHRights | Advancing Human Rights & Social Justice
          in East Africa
        </title>

        <meta
          name="description"
          content="EACHRights is a non-partisan regional NGO advancing Economic, Social and Cultural Rights for vulnerable and marginalized communities across East Africa."
        />
      </Helmet>

      {/* =====================================================
          HERO IMAGE SLIDER
      ===================================================== */}

      <header className="relative h-[620px] overflow-hidden bg-forest text-paper sm:h-[680px] lg:h-[720px]">

        {/* ---------------------------------------------------
            BACKGROUND IMAGES
        --------------------------------------------------- */}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{
              opacity: 0,
              scale: 1.05,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt="EACHRights community and human rights work"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* ---------------------------------------------------
            DARK OVERLAY
        --------------------------------------------------- */}

        <div className="absolute inset-0 bg-black/50" />

        {/* ---------------------------------------------------
            LEFT GRADIENT
        --------------------------------------------------- */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

        {/* ---------------------------------------------------
            BOTTOM GRADIENT
        --------------------------------------------------- */}

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/60 to-transparent" />

        {/* ---------------------------------------------------
            HERO CONTENT
        --------------------------------------------------- */}

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.7,
              }}
              className="max-w-3xl"
            >
              {/* Eyebrow */}

              <Eyebrow>
                {slide.eyebrow}
              </Eyebrow>

              {/* Heading */}

              <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl font-display">
                {slide.title}

                <br />

                <span className="text-accent">
                  {slide.highlight}
                </span>
              </h1>

              {/* Description */}

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                {slide.description}
              </p>

              {/* Buttons */}

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/our-work"
                  className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 font-semibold text-forest shadow-lg transition hover:brightness-110"
                >
                  Explore Our Work
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-white px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  Get Involved
                </Link>
              </div>

              {/* Small statement */}

              <p className="mt-8 max-w-lg text-sm leading-6 text-white/65">
                A non-partisan regional organisation working
                for equality, social justice and human dignity.
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ===================================================
            PREVIOUS BUTTON
        =================================================== */}

        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-5 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/40 bg-black/30 p-3 text-white backdrop-blur-sm transition hover:bg-black/60 md:flex"
        >
          <ArrowLeft size={22} />
        </button>

        {/* ===================================================
            NEXT BUTTON
        =================================================== */}

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/40 bg-black/30 p-3 text-white backdrop-blur-sm transition hover:bg-black/60 md:flex"
        >
          <ArrowRightIcon size={22} />
        </button>

        {/* ===================================================
            SLIDE COUNTER
        =================================================== */}

        <div className="absolute right-6 top-6 z-20 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-semibold tracking-wider text-white backdrop-blur-sm">
          {String(currentSlide + 1).padStart(2, "0")} /{" "}
          {String(heroSlides.length).padStart(2, "0")}
        </div>

        {/* ===================================================
            SLIDER DOTS
        =================================================== */}

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-10 bg-accent"
                  : "w-2.5 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>

        {/* ===================================================
            SCROLL INDICATOR
        =================================================== */}

        <div className="absolute bottom-7 right-6 z-20 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60 lg:flex">
          <span>Scroll</span>
          <div className="h-10 w-px bg-white/40" />
        </div>
      </header>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main>

        {/* ===================================================
            INTRODUCTION
        =================================================== */}

        <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:py-28 lg:grid-cols-2">
          <div>
            <Eyebrow dark>Who we are</Eyebrow>

            <h2 className="mt-3 text-4xl font-bold leading-tight text-forest sm:text-5xl font-display">
              Human rights.
              <br />

              <span className="text-forest-dark">
                Community action.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-ink/75">
              The East African Centre for Human Rights
              (EACHRights) is a non-partisan regional
              non-governmental organisation founded in 2010.
              We work to promote, protect and advance Economic,
              Social and Cultural Rights for vulnerable and
              marginalized communities.
            </p>

            <p className="mt-4 text-base leading-8 text-ink/75">
              Our work spans Kenya, Uganda and Tanzania, with a
              focus on creating an enabling environment where
              people can enjoy their rights and live with dignity.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="bg-forest px-6 py-3 font-semibold text-paper shadow transition hover:brightness-110"
              >
                About EACHRights
              </Link>

              <Link
                to="/contact"
                className="border-2 border-forest px-6 py-3 font-semibold text-forest transition hover:bg-forest/5"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mission Card */}

          <motion.div
            whileHover={{
              rotate: 1,
              y: -5,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
            }}
            className="relative mx-auto w-full max-w-lg bg-white p-8 shadow-xl"
          >
            <div className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-[-2deg] bg-accent/70" />

            <IconBox
              icon={ShieldCheck}
              large
            />

            <h3 className="mt-7 text-2xl font-bold text-forest font-display">
              Our commitment
            </h3>

            <p className="mt-4 text-lg leading-8 text-ink/70">
              We believe that every person deserves equality,
              justice, dignity and the opportunity to enjoy their
              fundamental rights.
            </p>

            <div className="mt-7 h-1 w-20 bg-forest-dark" />
          </motion.div>
        </section>

        {/* ===================================================
            IMPACT
        =================================================== */}

        <section className="relative overflow-hidden bg-forest px-6 py-20 text-paper">
          <div className="absolute -right-24 top-0 h-72 w-72 rounded-full border-[30px] border-accent/10" />

          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <Eyebrow>Our journey</Eyebrow>

            <h2 className="mt-3 text-4xl font-bold sm:text-5xl font-display">
              Advancing rights since 2010.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-paper/65">
              Our work is rooted in evidence, community
              participation, advocacy and a commitment to social
              justice.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">

              {/* Years */}

              <div className="border border-dashed border-paper/20 p-6">
                <div className="text-4xl font-bold text-accent sm:text-5xl font-display">
                  <CountUp
                    end={15}
                    duration={2}
                  />
                  +
                </div>

                <p className="mt-2 text-xs uppercase tracking-wider text-paper/60">
                  Years of Work
                </p>
              </div>

              {/* Countries */}

              <div className="border border-dashed border-paper/20 p-6">
                <div className="text-4xl font-bold text-accent sm:text-5xl font-display">
                  <CountUp
                    end={3}
                    duration={2}
                  />
                </div>

                <p className="mt-2 text-xs uppercase tracking-wider text-paper/60">
                  Countries
                </p>
              </div>

              {/* Focus Areas */}

              <div className="border border-dashed border-paper/20 p-6">
                <div className="text-4xl font-bold text-accent sm:text-5xl font-display">
                  <CountUp
                    end={6}
                    duration={2}
                  />
                </div>

                <p className="mt-2 text-xs uppercase tracking-wider text-paper/60">
                  Focus Areas
                </p>
              </div>

              {/* Rights */}

              <div className="border border-dashed border-paper/20 p-6">
                <div className="text-4xl font-bold text-accent sm:text-5xl font-display">
                  ESC
                </div>

                <p className="mt-2 text-xs uppercase tracking-wider text-paper/60">
                  Rights Focus
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================
            OUR WORK
        =================================================== */}

        <section className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
          <div className="mb-12 text-center">
            <Eyebrow>Our work</Eyebrow>

            <h2 className="mt-3 text-4xl font-bold text-forest sm:text-5xl font-display">
              Six areas. One purpose.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-ink/65">
              We work across interconnected areas of Economic,
              Social and Cultural Rights to address the realities
              faced by vulnerable and marginalized communities.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.div
                  key={area.title}
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
                    margin: "-50px",
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="group relative bg-white p-7 shadow-sm transition hover:shadow-xl"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-accent opacity-0 transition group-hover:opacity-100" />

                  <IconBox icon={Icon} />

                  <h3 className="mt-6 text-xl font-bold text-forest font-display">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-ink/65">
                    {area.description}
                  </p>

                  <Link
                    to="/our-work"
                    className="mt-5 inline-flex items-center gap-2 font-semibold text-forest-dark"
                  >
                    Learn more
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ===================================================
            HOW WE WORK
        =================================================== */}

        <section className="bg-forest-light px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-14 lg:grid-cols-2">

              <div>
                <Eyebrow dark>
                  Our approach
                </Eyebrow>

                <h2 className="mt-3 text-4xl font-bold leading-tight text-forest sm:text-5xl font-display">
                  Evidence.
                  <br />
                  Advocacy.
                  <br />

                  <span className="text-forest-dark">
                    Action.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-ink/70">
                  EACHRights uses a rights-based approach to
                  address structural inequalities and strengthen
                  the ability of communities and institutions to
                  advance human rights.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {approaches.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="bg-paper p-6 shadow-sm"
                    >
                      <Icon
                        size={30}
                        className="text-forest-dark"
                        strokeWidth={1.7}
                      />

                      <h3 className="mt-5 text-lg font-bold text-forest font-display">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-ink/65">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================
            EAST AFRICA
        =================================================== */}

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <Eyebrow>
              Where we work
            </Eyebrow>

            <h2 className="mt-3 text-4xl font-bold text-forest sm:text-5xl font-display">
              Working across East Africa.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-ink/65">
              Our regional work connects communities, partners
              and stakeholders across East Africa to advance
              Economic, Social and Cultural Rights.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {regions.map((region) => {
              const Icon = region.icon;

              return (
                <div
                  key={region.country}
                  className="group flex items-center gap-5 border border-forest/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest text-accent">
                    <Icon size={30} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-forest-dark">
                      East Africa
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-forest font-display">
                      {region.country}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================================================
            PARTNERSHIP CTA
        =================================================== */}

        <section className="relative overflow-hidden bg-forest-dark px-6 py-16 text-paper">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[25px] border-paper/10" />

          <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">

            <div>
              <Eyebrow>
                Partner with EACHRights
              </Eyebrow>

              <h2 className="mt-2 text-3xl font-bold sm:text-4xl font-display">
                Together, we can turn rights into action.
              </h2>

              <p className="mt-3 max-w-2xl text-paper/80">
                Explore opportunities for institutional,
                research, funding, government, private-sector,
                community and technical partnerships.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 bg-paper px-7 py-3.5 font-bold text-forest-dark shadow-lg transition hover:brightness-95"
            >
              Discuss a Partnership
              <ArrowRight size={18} />
            </Link>

          </div>
        </section>

        {/* ===================================================
            FINAL CTA
        =================================================== */}

        <section className="bg-forest px-6 py-24 text-center text-paper">
          <div className="mx-auto max-w-3xl">

            <Handshake
              size={48}
              strokeWidth={1.3}
              className="mx-auto text-accent"
            />

            <h2 className="mt-6 text-4xl font-bold sm:text-5xl font-display">
              Be part of the change.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-paper/65">
              Whether through partnership, advocacy, research
              or support, there is a role for everyone in
              advancing human rights and social justice.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent px-7 py-3.5 font-bold text-forest transition hover:brightness-105"
              >
                Get Involved
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/donors"
                className="inline-flex items-center gap-2 border-2 border-dashed border-accent px-7 py-3.5 font-bold text-accent transition hover:bg-accent/10"
              >
                Support Our Work
              </Link>

            </div>
          </div>
        </section>

      </main>

      {/* =====================================================
          SCROLL TO TOP
      ===================================================== */}

      {showScrollTop && (
        <motion.button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-forest-dark p-3 text-paper shadow-lg transition hover:brightness-110"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </div>
  );
}