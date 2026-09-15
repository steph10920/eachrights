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
import CountUp from "../components/CountUp.jsx";
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
      className={`inline-block font-script text-lg sm:text-xl ${
        clay ? "text-clay" : "text-gold"
      }`}
    >
      {children}
    </span>
  );
}

function IconBox({ icon: Icon, large = false }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gold/10 text-gold ${
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
      className="min-h-screen bg-paper font-sans text-ink"
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

      <header className="relative overflow-hidden bg-forest text-paper">
        {/* Decorative shapes */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[40px] border-gold/10" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full border-[45px] border-clay/10" />

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
                className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl font-display"
              >
                {slide.title}
                <br />
                <span className="text-gold">
                  {slide.highlight}
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-paper/75 sm:text-lg">
                {slide.description}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/our-work"
                  className="inline-flex items-center gap-2 bg-clay px-6 py-3.5 font-semibold text-paper shadow-lg transition hover:brightness-110"
                >
                  Explore Our Work
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-dashed border-gold px-6 py-3.5 font-semibold text-gold transition hover:bg-gold/10"
                >
                  Get Involved
                </Link>
              </div>

              <p className="mt-8 max-w-lg text-sm leading-6 text-paper/50">
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
                <div className="relative flex h-72 w-72 items-center justify-center rounded-full border-2 border-dashed border-gold/50 bg-forest-dark shadow-2xl sm:h-80 sm:w-80">

                  <div className="absolute inset-8 rounded-full border border-paper/10" />

                  <div className="absolute inset-16 rounded-full border border-gold/20" />

                  <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-clay shadow-xl">
                    <HeroIcon
                      size={68}
                      strokeWidth={1.3}
                      className="text-paper"
                    />
                  </div>

                  {/* Floating labels */}
                  <div className="absolute -left-4 top-12 rotate-[-8deg] bg-paper px-4 py-2 text-sm font-bold text-forest shadow-lg">
                    HUMAN RIGHTS
                  </div>

                  <div className="absolute -bottom-3 right-0 rotate-[5deg] bg-gold px-4 py-2 text-sm font-bold text-forest shadow-lg">
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
                  ? "w-8 bg-gold"
                  : "w-2.5 bg-paper/30"
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
              className="mt-3 text-4xl font-bold leading-tight text-forest sm:text-5xl font-display"
            >
              Human rights.
              <br />
              <span className="text-clay">
                Community action.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-ink/75">
              The East African Centre for Human Rights (EACHRights) is a
              non-partisan regional non-governmental organisation founded in
              2010. We work to promote, protect and advance Economic, Social
              and Cultural Rights for vulnerable and marginalized communities.
            </p>

            <p className="mt-4 text-base leading-8 text-ink/75">
              Our work spans Kenya, Uganda and Tanzania, with a focus on
              creating an enabling environment where people can enjoy their
              rights and live with dignity.
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

          {/* Mission card */}
          <motion.div
            whileHover={{ rotate: 1, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative mx-auto w-full max-w-lg bg-white p-8 shadow-xl"
          >
            <div className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-[-2deg] bg-gold/70" />

            <IconBox icon={ShieldCheck} large />

            <h3
              className="mt-7 text-2xl font-bold text-forest font-display"
            >
              Our commitment
            </h3>

            <p className="mt-4 text-lg leading-8 text-ink/70">
              We believe that every person deserves equality, justice,
              dignity and the opportunity to enjoy their fundamental rights.
            </p>

            <div className="mt-7 h-1 w-20 bg-clay" />
          </motion.div>
        </section>

        {/* =====================================================
            IMPACT
        ===================================================== */}

        <section className="relative overflow-hidden bg-forest px-6 py-20 text-paper">

          <div className="absolute -right-24 top-0 h-72 w-72 rounded-full border-[30px] border-gold/10" />

          <div className="relative z-10 mx-auto max-w-6xl text-center">

            <Eyebrow>Our journey</Eyebrow>

            <h2
              className="mt-3 text-4xl font-bold sm:text-5xl font-display"
            >
              Advancing rights since 2010.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-paper/65">
              Our work is rooted in evidence, community participation,
              advocacy and a commitment to social justice.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">

              <div className="border border-dashed border-paper/20 p-6">
                <div
                  className="text-4xl font-bold text-gold sm:text-5xl font-display"
                >
                  <CountUp end={15} duration={2} />+
                </div>
                <p className="mt-2 text-xs uppercase tracking-wider text-paper/60">
                  Years of Work
                </p>
              </div>

              <div className="border border-dashed border-paper/20 p-6">
                <div
                  className="text-4xl font-bold text-gold sm:text-5xl font-display"
                >
                  <CountUp end={3} duration={2} />
                </div>
                <p className="mt-2 text-xs uppercase tracking-wider text-paper/60">
                  Countries
                </p>
              </div>

              <div className="border border-dashed border-paper/20 p-6">
                <div
                  className="text-4xl font-bold text-gold sm:text-5xl font-display"
                >
                  <CountUp end={6} duration={2} />
                </div>
                <p className="mt-2 text-xs uppercase tracking-wider text-paper/60">
                  Focus Areas
                </p>
              </div>

              <div className="border border-dashed border-paper/20 p-6">
                <div
                  className="text-4xl font-bold text-gold sm:text-5xl font-display"
                >
                  ESC
                </div>
                <p className="mt-2 text-xs uppercase tracking-wider text-paper/60">
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
              className="mt-3 text-4xl font-bold text-forest sm:text-5xl font-display"
            >
              Six areas. One purpose.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-ink/65">
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
                  <div className="absolute left-0 top-0 h-full w-1 bg-gold opacity-0 transition group-hover:opacity-100" />

                  <IconBox icon={Icon} />

                  <h3
                    className="mt-6 text-xl font-bold text-forest font-display"
                  >
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-ink/65">
                    {area.description}
                  </p>

                  <Link
                    to="/our-work"
                    className="mt-5 inline-flex items-center gap-2 font-semibold text-clay"
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

        <section className="bg-forest-light px-6 py-24">

          <div className="mx-auto max-w-7xl">

            <div className="grid items-center gap-14 lg:grid-cols-2">

              <div>
                <Eyebrow clay>Our approach</Eyebrow>

                <h2
                  className="mt-3 text-4xl font-bold leading-tight text-forest sm:text-5xl font-display"
                >
                  Evidence.
                  <br />
                  Advocacy.
                  <br />
                  <span className="text-clay">Action.</span>
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-ink/70">
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
                      className="bg-paper p-6 shadow-sm"
                    >
                      <Icon
                        size={30}
                        className="text-clay"
                        strokeWidth={1.7}
                      />

                      <h3
                        className="mt-5 text-lg font-bold text-forest font-display"
                      >
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

        {/* =====================================================
            EAST AFRICA
        ===================================================== */}

        <section className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">
            <Eyebrow>Where we work</Eyebrow>

            <h2
              className="mt-3 text-4xl font-bold text-forest sm:text-5xl font-display"
            >
              Working across East Africa.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-ink/65">
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
                  className="group flex items-center gap-5 border border-forest/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest text-gold">
                    <Icon size={30} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-clay">
                      East Africa
                    </p>

                    <h3
                      className="mt-1 text-2xl font-bold text-forest font-display"
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

        <section className="relative overflow-hidden bg-clay px-6 py-16 text-paper">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[25px] border-paper/10" />

          <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">

            <div>
              <Eyebrow>Partner with EACHRights</Eyebrow>

              <h2
                className="mt-2 text-3xl font-bold sm:text-4xl font-display"
              >
                Together, we can turn rights into action.
              </h2>

              <p className="mt-3 max-w-2xl text-paper/80">
                Explore opportunities for institutional, research, funding,
                government, private-sector, community and technical
                partnerships.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 bg-paper px-7 py-3.5 font-bold text-clay shadow-lg transition hover:brightness-95"
            >
              Discuss a Partnership
              <ArrowRight size={18} />
            </Link>

          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="bg-forest px-6 py-24 text-center text-paper">

          <div className="mx-auto max-w-3xl">

            <Handshake
              size={48}
              strokeWidth={1.3}
              className="mx-auto text-gold"
            />

            <h2
              className="mt-6 text-4xl font-bold sm:text-5xl font-display"
            >
              Be part of the change.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-paper/65">
              Whether through partnership, advocacy, research or support,
              there is a role for everyone in advancing human rights and
              social justice.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold px-7 py-3.5 font-bold text-forest transition hover:brightness-105"
              >
                Get Involved
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/donors"
                className="inline-flex items-center gap-2 border-2 border-dashed border-gold px-7 py-3.5 font-bold text-gold transition hover:bg-gold/10"
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
          className="fixed bottom-6 right-6 z-50 rounded-full bg-clay p-3 text-paper shadow-lg transition hover:brightness-110"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}

    </div>
  );
}