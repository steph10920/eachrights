import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
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
  BookOpen,
  ShieldCheck,
  Landmark,
} from "lucide-react";
import { Helmet } from "react-helmet";
import CountUp from "react-countup";
import Footer from "../components/Footer.jsx";

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

const heroSlides = [
  {
    eyebrow: "HUMAN RIGHTS • SOCIAL JUSTICE • DIGNITY",
    title: "Advancing Rights.",
    highlight: "Empowering Communities.",
    description:
      "EACHRights works to promote, protect and advance Economic, Social and Cultural Rights across East Africa.",
    icon: Scale,
  },
  {
    eyebrow: "EQUALITY & SOCIAL JUSTICE",
    title: "Building a Future",
    highlight: "Where Everyone Can Thrive.",
    description:
      "We work with vulnerable and marginalized communities to create an enabling environment where people can enjoy their rights and live with dignity.",
    icon: Users,
  },
  {
    eyebrow: "EVIDENCE • ADVOCACY • ACTION",
    title: "Turning Evidence",
    highlight: "Into Meaningful Change.",
    description:
      "Through research, advocacy, awareness, capacity building and public interest litigation, we turn human rights principles into action.",
    icon: Megaphone,
  },
];

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function Eyebrow({ children, clay = false }) {
  return (
    <span
      className={`inline-block text-lg sm:text-xl ${
        clay ? "text-[#b8462f]" : "text-[#e3a73b]"
      }`}
      style={{ fontFamily: "'Caveat', cursive" }}
    >
      {children}
    </span>
  );
}

function IconBox({ icon: Icon, large = false }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-[#e3a73b]/10 text-[#e3a73b] ${
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slide = heroSlides[currentSlide];
  const HeroIcon = slide.icon;

  return (
    <div
      className="min-h-screen bg-[#f1edd9] text-[#1b2a22]"
      style={{
        fontFamily: "'Work Sans', ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <Helmet>
        <title>
          EACHRights | Advancing Human Rights & Social Justice in East Africa
        </title>

        <meta
          name="description"
          content="EACHRights is a non-partisan regional NGO advancing Economic, Social and Cultural Rights for vulnerable and marginalized communities across East Africa."
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,900&family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* =====================================================
          HERO
      ===================================================== */}

      <header className="relative overflow-hidden bg-[#1f3a2e] text-[#f1edd9]">
        {/* Decorative shapes */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[40px] border-[#e3a73b]/10" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full border-[45px] border-[#b8462f]/10" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 sm:py-28 lg:grid-cols-2 lg:py-32">

          {/* HERO TEXT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.55 }}
              className="relative z-10"
            >
              <Eyebrow>{slide.eyebrow}</Eyebrow>

              <h1
                className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                {slide.title}
                <br />
                <span className="text-[#e3a73b]">
                  {slide.highlight}
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#f1edd9]/75 sm:text-lg">
                {slide.description}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/our-work"
                  className="inline-flex items-center gap-2 bg-[#b8462f] px-6 py-3.5 font-semibold text-[#f1edd9] shadow-lg transition hover:brightness-110"
                >
                  Explore Our Work
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-dashed border-[#e3a73b] px-6 py-3.5 font-semibold text-[#e3a73b] transition hover:bg-[#e3a73b]/10"
                >
                  Get Involved
                </Link>
              </div>

              <p className="mt-8 max-w-lg text-sm leading-6 text-[#f1edd9]/50">
                A non-partisan regional organisation working for equality,
                social justice and human dignity.
              </p>
            </motion.div>
          </AnimatePresence>

          {/* HERO ICON */}
          <div className="relative flex justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  rotate: -8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 3,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  rotate: 8,
                }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Main icon card */}
                <div className="relative flex h-72 w-72 items-center justify-center rounded-full border-2 border-dashed border-[#e3a73b]/50 bg-[#16291f] shadow-2xl sm:h-80 sm:w-80">

                  <div className="absolute inset-8 rounded-full border border-[#f1edd9]/10" />

                  <div className="absolute inset-16 rounded-full border border-[#e3a73b]/20" />

                  <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-[#b8462f] shadow-xl">
                    <HeroIcon
                      size={68}
                      strokeWidth={1.3}
                      className="text-[#f1edd9]"
                    />
                  </div>

                  {/* Floating labels */}
                  <div className="absolute -left-4 top-12 rotate-[-8deg] bg-[#f1edd9] px-4 py-2 text-sm font-bold text-[#1f3a2e] shadow-lg">
                    HUMAN RIGHTS
                  </div>

                  <div className="absolute -bottom-3 right-0 rotate-[5deg] bg-[#e3a73b] px-4 py-2 text-sm font-bold text-[#1f3a2e] shadow-lg">
                    EAST AFRICA
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slider dots */}
        <div className="relative z-20 mb-10 flex justify-center gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                currentSlide === index
                  ? "w-8 bg-[#e3a73b]"
                  : "w-2.5 bg-[#f1edd9]/30"
              }`}
            />
          ))}
        </div>
      </header>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:py-28 lg:grid-cols-2">

          <div>
            <Eyebrow clay>Who we are</Eyebrow>

            <h2
              className="mt-3 text-4xl font-bold leading-tight text-[#1f3a2e] sm:text-5xl"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Human rights.
              <br />
              <span className="text-[#b8462f]">
                Community action.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#1b2a22]/75">
              The East African Centre for Human Rights (EACHRights) is a
              non-partisan regional non-governmental organisation founded in
              2010. We work to promote, protect and advance Economic, Social
              and Cultural Rights for vulnerable and marginalized communities.
            </p>

            <p className="mt-4 text-base leading-8 text-[#1b2a22]/75">
              Our work spans Kenya, Uganda and Tanzania, with a focus on
              creating an enabling environment where people can enjoy their
              rights and live with dignity.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="bg-[#1f3a2e] px-6 py-3 font-semibold text-[#f1edd9] shadow transition hover:brightness-110"
              >
                About EACHRights
              </Link>

              <Link
                to="/contact"
                className="border-2 border-[#1f3a2e] px-6 py-3 font-semibold text-[#1f3a2e] transition hover:bg-[#1f3a2e]/5"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mission card */}
          <motion.div
            whileHover={{ rotate: 1, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative mx-auto w-full max-w-lg bg-white p-8 shadow-xl"
          >
            <div className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-[-2deg] bg-[#e3a73b]/70" />

            <IconBox icon={ShieldCheck} large />

            <h3
              className="mt-7 text-2xl font-bold text-[#1f3a2e]"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Our commitment
            </h3>

            <p className="mt-4 text-lg leading-8 text-[#1b2a22]/70">
              We believe that every person deserves equality, justice,
              dignity and the opportunity to enjoy their fundamental rights.
            </p>

            <div className="mt-7 h-1 w-20 bg-[#b8462f]" />
          </motion.div>
        </section>

        {/* =====================================================
            IMPACT
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#1f3a2e] px-6 py-20 text-[#f1edd9]">

          <div className="absolute -right-24 top-0 h-72 w-72 rounded-full border-[30px] border-[#e3a73b]/10" />

          <div className="relative z-10 mx-auto max-w-6xl text-center">

            <Eyebrow>Our journey</Eyebrow>

            <h2
              className="mt-3 text-4xl font-bold sm:text-5xl"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Advancing rights since 2010.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#f1edd9]/65">
              Our work is rooted in evidence, community participation,
              advocacy and a commitment to social justice.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">

              <div className="border border-dashed border-[#f1edd9]/20 p-6">
                <div
                  className="text-4xl font-bold text-[#e3a73b] sm:text-5xl"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  <CountUp end={15} duration={2} />+
                </div>
                <p className="mt-2 text-xs uppercase tracking-wider text-[#f1edd9]/60">
                  Years of Work
                </p>
              </div>

              <div className="border border-dashed border-[#f1edd9]/20 p-6">
                <div
                  className="text-4xl font-bold text-[#e3a73b] sm:text-5xl"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  <CountUp end={3} duration={2} />
                </div>
                <p className="mt-2 text-xs uppercase tracking-wider text-[#f1edd9]/60">
                  Countries
                </p>
              </div>

              <div className="border border-dashed border-[#f1edd9]/20 p-6">
                <div
                  className="text-4xl font-bold text-[#e3a73b] sm:text-5xl"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  <CountUp end={6} duration={2} />
                </div>
                <p className="mt-2 text-xs uppercase tracking-wider text-[#f1edd9]/60">
                  Focus Areas
                </p>
              </div>

              <div className="border border-dashed border-[#f1edd9]/20 p-6">
                <div
                  className="text-4xl font-bold text-[#e3a73b] sm:text-5xl"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  ESC
                </div>
                <p className="mt-2 text-xs uppercase tracking-wider text-[#f1edd9]/60">
                  Rights Focus
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            OUR WORK
        ===================================================== */}

        <section className="mx-auto max-w-7xl px-6 py-24 sm:py-28">

          <div className="mb-12 text-center">
            <Eyebrow>Our work</Eyebrow>

            <h2
              className="mt-3 text-4xl font-bold text-[#1f3a2e] sm:text-5xl"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Six areas. One purpose.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#1b2a22]/65">
              We work across interconnected areas of Economic, Social and
              Cultural Rights to address the realities faced by vulnerable and
              marginalized communities.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group relative bg-white p-7 shadow-sm transition hover:shadow-xl"
                >
                  {/* Decorative line */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-[#e3a73b] opacity-0 transition group-hover:opacity-100" />

                  <IconBox icon={Icon} />

                  <h3
                    className="mt-6 text-xl font-bold text-[#1f3a2e]"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#1b2a22]/65">
                    {area.description}
                  </p>

                  <Link
                    to="/our-work"
                    className="mt-5 inline-flex items-center gap-2 font-semibold text-[#b8462f]"
                  >
                    Learn more
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}

          </div>
        </section>

        {/* =====================================================
            HOW WE WORK
        ===================================================== */}

        <section className="bg-[#eae3cc] px-6 py-24">

          <div className="mx-auto max-w-7xl">

            <div className="grid items-center gap-14 lg:grid-cols-2">

              <div>
                <Eyebrow clay>Our approach</Eyebrow>

                <h2
                  className="mt-3 text-4xl font-bold leading-tight text-[#1f3a2e] sm:text-5xl"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  Evidence.
                  <br />
                  Advocacy.
                  <br />
                  <span className="text-[#b8462f]">Action.</span>
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-[#1b2a22]/70">
                  EACHRights uses a rights-based approach to address
                  structural inequalities and strengthen the ability of
                  communities and institutions to advance human rights.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                {approaches.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="bg-[#f1edd9] p-6 shadow-sm"
                    >
                      <Icon
                        size={30}
                        className="text-[#b8462f]"
                        strokeWidth={1.7}
                      />

                      <h3
                        className="mt-5 text-lg font-bold text-[#1f3a2e]"
                        style={{
                          fontFamily: "'Fraunces', Georgia, serif",
                        }}
                      >
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#1b2a22]/65">
                        {item.description}
                      </p>
                    </div>
                  );
                })}

              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            EAST AFRICA
        ===================================================== */}

        <section className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">
            <Eyebrow>Where we work</Eyebrow>

            <h2
              className="mt-3 text-4xl font-bold text-[#1f3a2e] sm:text-5xl"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Working across East Africa.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#1b2a22]/65">
              Our regional work connects communities, partners and
              stakeholders across East Africa to advance Economic, Social and
              Cultural Rights.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {regions.map((region) => {
              const Icon = region.icon;

              return (
                <div
                  key={region.country}
                  className="group flex items-center gap-5 border border-[#1f3a2e]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1f3a2e] text-[#e3a73b]">
                    <Icon size={30} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#b8462f]">
                      East Africa
                    </p>

                    <h3
                      className="mt-1 text-2xl font-bold text-[#1f3a2e]"
                      style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                    >
                      {region.country}
                    </h3>
                  </div>
                </div>
              );
            })}

          </div>
        </section>

        {/* =====================================================
            PARTNERSHIP CTA
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#b8462f] px-6 py-16 text-[#f1edd9]">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[25px] border-[#f1edd9]/10" />

          <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">

            <div>
              <Eyebrow>Partner with EACHRights</Eyebrow>

              <h2
                className="mt-2 text-3xl font-bold sm:text-4xl"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Together, we can turn rights into action.
              </h2>

              <p className="mt-3 max-w-2xl text-[#f1edd9]/80">
                Explore opportunities for institutional, research, funding,
                government, private-sector, community and technical
                partnerships.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 bg-[#f1edd9] px-7 py-3.5 font-bold text-[#b8462f] shadow-lg transition hover:brightness-95"
            >
              Discuss a Partnership
              <ArrowRight size={18} />
            </Link>

          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="bg-[#1f3a2e] px-6 py-24 text-center text-[#f1edd9]">

          <div className="mx-auto max-w-3xl">

            <Handshake
              size={48}
              strokeWidth={1.3}
              className="mx-auto text-[#e3a73b]"
            />

            <h2
              className="mt-6 text-4xl font-bold sm:text-5xl"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Be part of the change.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-[#f1edd9]/65">
              Whether through partnership, advocacy, research or support,
              there is a role for everyone in advancing human rights and
              social justice.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#e3a73b] px-7 py-3.5 font-bold text-[#1f3a2e] transition hover:brightness-105"
              >
                Get Involved
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/donors"
                className="inline-flex items-center gap-2 border-2 border-dashed border-[#e3a73b] px-7 py-3.5 font-bold text-[#e3a73b] transition hover:bg-[#e3a73b]/10"
              >
                Support Our Work
              </Link>

            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          SCROLL TOP
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
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-[#b8462f] p-3 text-[#f1edd9] shadow-lg transition hover:brightness-110"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}

    </div>
  );
}