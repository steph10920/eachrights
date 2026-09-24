import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  Briefcase,
  ExternalLink,
  Globe2,
  HeartPulse,
  Leaf,
  Mail,
  Quote,
  Users,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| PROGRAMME PHOTO IMPORTS
|--------------------------------------------------------------------------
| Photos live in src/assets/programmes/ and are imported directly, same
| pattern as the team photos in Team.jsx.
*/

import educationPhoto from "../assets/programmes/education-justice.jpeg";
import genderPhoto from "../assets/programmes/gender-justice.jpeg";
import healthPhoto from "../assets/programmes/health-justice.jpeg";
import environmentalPhoto from "../assets/programmes/environmental-climate-justice.jpeg";
import economicPhoto from "../assets/programmes/economic-justice.jpeg";

/*
|--------------------------------------------------------------------------
| DATA
|--------------------------------------------------------------------------
*/

const programmes = [
  {
    index: "01",
    name: "Education Justice Programme",
    path: "/programmes/education-justice",
    icon: BookOpenCheck,
    photo: educationPhoto,
    stat: "Access & quality",
    blurb:
      "Advancing equitable access to quality education as a foundation for the realisation of human rights — working with schools, county governments and communities to close gaps in access and learning outcomes.",
  },
  {
    index: "02",
    name: "Gender Justice Programme",
    path: "/programmes/gender-justice",
    icon: Users,
    photo: genderPhoto,
    stat: "Equality & protection",
    blurb:
      "Advocating for gender equality and challenging harmful cultural practices and gender-based violence, through partnerships with duty-bearers, civil society and affected communities.",
  },
  {
    index: "03",
    name: "Health Justice Programme",
    path: "/programmes/health-justice",
    icon: HeartPulse,
    photo: healthPhoto,
    stat: "SRHR & access",
    blurb:
      "Championing Sexual and Reproductive Health and Rights (SRHR) and equitable access to health services, with a focus on youth-friendly services and county-level policy reform.",
  },
  {
    index: "04",
    name: "Environmental & Climate Justice Programme",
    path: "/programmes/environmental-climate-justice",
    icon: Leaf,
    photo: environmentalPhoto,
    stat: "Accountability & resilience",
    blurb:
      "Promoting environmental accountability and rights-based responses to the climate crisis, centring the communities most exposed to its effects.",
  },
  {
    index: "05",
    name: "Economic Justice, Business and Human Rights Programme",
    path: "/programmes/economic-justice",
    icon: Briefcase,
    photo: economicPhoto,
    stat: "Rights & accountability",
    blurb:
      "Holding business and state actors accountable for the economic and social rights of communities, and advancing responsible business conduct across the region.",
  },
];

const processes = [
  {
    name: "Universal Periodic Review",
    path: "/processes/universal-periodic-review",
    icon: Globe2,
    blurb:
      "Our engagement with the UN's Universal Periodic Review mechanism to advance human rights accountability.",
  },
];

const srhrAdvocacyLink = {
  name: "SRHR Advocacy",
  url: "https://eachrights.github.io/srhr/",
  blurb:
    "Visit our dedicated portal tracking Sexual and Reproductive Health and Rights advocacy across the region.",
};

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const gridVariants = {
  hidden: {},
  shown: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  shown: {
    opacity: 1,
    y: 0,
  },
};

/* =========================================================
   PROGRAMME GRID CARD
   ---------------------------------------------------------
   Each programme uses its photo as the full background.
   Text sits over a dark gradient overlay for readability.
========================================================= */

function ProgrammeRow({
  index,
  name,
  blurb,
  icon: Icon,
  photo,
  stat,
  path,
}) {
  return (
    <motion.article
      variants={cardVariants}
      className="group"
    >
      <Link
        to={path}
        className="relative block min-h-[390px] overflow-hidden bg-forest shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:min-h-[430px]"
      >
        {/* Background image */}
        {photo ? (
          <img
            src={photo}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-forest-light" />
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/15 transition-all duration-500 group-hover:from-black/95 group-hover:via-black/60" />

        {/* Card content */}
        <div className="relative z-10 flex min-h-[390px] h-full flex-col justify-between p-6 text-white sm:min-h-[430px] sm:p-8">

          {/* Top section */}
          <div className="flex items-start justify-between">
            <span className="font-display text-5xl font-bold leading-none text-white/90 sm:text-6xl">
              {index}
            </span>

            <div className="flex h-11 w-11 items-center justify-center bg-white/90 text-forest shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <Icon size={20} />
            </div>
          </div>

          {/* Bottom section */}
          <div>
            {stat && (
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                {stat}
              </p>
            )}

            <h3 className="mt-3 max-w-xl font-display text-2xl font-bold leading-tight sm:text-3xl">
              {name}
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
              {blurb}
            </p>

            {/* Clickable indication */}
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white underline-offset-4 transition-colors group-hover:text-accent group-hover:underline">
              Learn more about this programme
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

/* =========================================================
   SIMPLE CARD
   ---------------------------------------------------------
   Used for Processes and SRHR Advocacy.
========================================================= */

function SimpleCard({
  name,
  blurb,
  icon: Icon,
  path,
  external,
}) {
  const content = (
    <>
      <div className="flex h-11 w-11 items-center justify-center bg-forest-light text-forest-dark">
        <Icon size={20} />
      </div>

      <h3 className="mt-5 font-display text-lg font-bold text-forest">
        {name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-ink/65">
        {blurb}
      </p>

      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-forest underline-offset-2 group-hover:underline">
        Learn more
        {external ? (
          <ExternalLink size={14} />
        ) : (
          <ArrowRight size={14} />
        )}
      </span>
    </>
  );

  const className =
    "group block h-full bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl";

  if (external) {
    return (
      <motion.a
        variants={cardVariants}
        href={path}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div variants={cardVariants}>
      <Link to={path} className={className}>
        {content}
      </Link>
    </motion.div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function WhatWeDo() {
  return (
    <main className="min-h-screen bg-paper font-sans text-ink">

      {/* =====================================================
          HERO
      ===================================================== */}

      <header className="relative overflow-hidden bg-forest text-paper">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border-[25px] border-accent/10" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full border-[25px] border-paper/5" />

        <div className="absolute left-0 right-0 top-0 z-20 h-1 bg-accent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Our Programmes
          </p>

          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            What we do.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            Our objectives are to develop, strengthen and protect the
            principles of the rule of law, the enjoyment of human rights, and
            the promotion of Economic, Social and Cultural Rights across East
            Africa — delivered through five focus programmes and our engagement
            with regional and international human rights processes.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#programmes"
              className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-bold text-forest transition hover:brightness-105"
            >
              Explore Our Programmes
              <ArrowRight size={16} />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </header>

      {/* =====================================================
          PROGRAMMES — IMAGE BACKGROUND GRID
      ===================================================== */}

      <section
        id="programmes"
        className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="mb-4 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">
            01 — 05
          </p>

          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-forest sm:text-5xl">
            Five focus areas, one mission.
          </h2>

          <p className="mt-4 leading-7 text-ink/65">
            Each programme pairs research and evidence with direct advocacy,
            coalition-building and legal support, working alongside
            communities, county governments and regional partners.
          </p>
        </div>

        {/* Programme grid */}
        <motion.div
          initial="hidden"
          whileInView="shown"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={gridVariants}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {programmes.map((programme) => (
            <ProgrammeRow
              key={programme.path}
              {...programme}
            />
          ))}
        </motion.div>
      </section>

      {/* =====================================================
          PULL QUOTE
      ===================================================== */}

      <section className="bg-forest px-6 py-20 text-paper">
        <div className="mx-auto max-w-4xl text-center">
          <Quote
            size={36}
            className="mx-auto text-accent"
            strokeWidth={1.5}
          />

          <p className="mt-6 font-display text-2xl font-medium leading-relaxed sm:text-3xl">
            Every programme starts from the same premise: rights are only real
            when people can exercise them.
          </p>

          <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-white/50">
            EACHRights
          </p>
        </div>
      </section>

      {/* =====================================================
          APPROACH + PROCESSES
      ===================================================== */}

      <section className="bg-forest-light px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              Our Approach
            </p>

            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-forest sm:text-5xl">
              How it all fits together.
            </h2>

            <p className="mt-4 leading-7 text-ink/65">
              Alongside our five programmes, we work through regional and
              international mechanisms to hold states accountable to their
              human rights commitments.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="shown"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={gridVariants}
            className="grid gap-6 sm:grid-cols-2"
          >
            {processes.map((process) => (
              <SimpleCard
                key={process.path}
                {...process}
              />
            ))}

            <SimpleCard
              name={srhrAdvocacyLink.name}
              blurb={srhrAdvocacyLink.blurb}
              icon={HeartPulse}
              path={srhrAdvocacyLink.url}
              external
            />
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-forest px-6 py-24 text-center text-paper">
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full border-[25px] border-paper/5" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Want to know more?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-paper/65">
            Reach out to learn more about any of our programmes, or to explore
            how we could work together.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent px-7 py-3.5 font-bold text-forest transition hover:brightness-105"
            >
              <Mail size={18} />
              Contact Us
            </Link>

            <Link
              to="/who-we-are/team"
              className="inline-flex items-center gap-2 border-2 border-dashed border-accent px-7 py-3.5 font-bold text-accent transition hover:bg-accent/10"
            >
              Meet Our Team
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
