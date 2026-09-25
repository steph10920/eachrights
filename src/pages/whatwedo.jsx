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
| Reuses the same photos as the "Six programmes" section on the Home
| page (src/pages/Home.jsx), so a programme looks the same wherever it
| appears on the site. Economic Justice and Business & Human Rights are
| combined into a single card here, using impact5. The Universal Periodic
| Review card has no dedicated photo and falls back to a solid colour
| background. The hero uses its own separate photo (heroImpact.png).
*/

import educationPhoto from "../assets/impact/impact-1.png";
import genderPhoto from "../assets/impact/impact-2.png";
import healthPhoto from "../assets/impact/impact-3.png";
import environmentalPhoto from "../assets/impact/impact-4.png";
import economicPhoto from "../assets/impact/impact-5.png";
import heroPhoto from "../assets/impact/heroImpact.png";

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
  {
    index: "06",
    name: "Universal Periodic Review",
    path: "/processes/universal-periodic-review",
    icon: Globe2,
    stat: "UN engagement",
    blurb:
      "Our engagement with the UN's Universal Periodic Review mechanism to advance human rights accountability across the region.",
  },
];

const srhrAdvocacyLink = {
  name: "SRHR Advocacy",
  url: "https://eachrights.github.io/srhr/",
  blurb:
    "Visit our dedicated portal tracking Sexual and Reproductive Health and Rights advocacy across the region.",
};

// Credibility strip under the hero — drawn only from facts already on the page
const heroFacts = [
  { value: "06", label: "Focus programmes" },
  { value: "East Africa", label: "Regional reach" },
  { value: "UPR", label: "UN engagement" },
];

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
        className="relative block min-h-[390px] overflow-hidden bg-forest shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:min-h-[430px]"
      >
        {/* Background image — desaturated by default, revealing full color on hover */}
        {photo ? (
          <img
            src={photo}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover grayscale-[55%] contrast-[1.05] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
          />
        ) : (
          <div className="absolute inset-0 bg-forest-light" />
        )}

        {/* Colour grade — ties every photo to the brand palette rather than a flat black wash */}
        <div className="absolute inset-0 bg-forest-dark/35 mix-blend-multiply" />

        {/* Legibility fade — just enough contrast for the text, most of the photo left clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

        {/* Card content */}
        <div className="relative z-10 flex min-h-[390px] h-full flex-col justify-between p-6 text-white sm:min-h-[430px] sm:p-8">

          {/* Top section */}
          <div className="flex items-start justify-between border-b border-white/15 pb-4">
            <span className="font-display text-4xl font-bold leading-none text-white/70 sm:text-5xl">
              {index}
            </span>

            <Icon size={20} className="mt-1 text-accent" strokeWidth={1.75} />
          </div>

          {/* Bottom section */}
          <div>
            {stat && (
              <p className="flex items-center gap-2 text-sm font-semibold text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
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
   Used for the SRHR Advocacy link-out.
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
      <Icon size={22} className="text-forest" strokeWidth={1.75} />

      <h3 className="mt-5 font-display text-lg font-bold text-forest">
        {name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-ink/65">
        {blurb}
      </p>

      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
        Learn more
        {external ? (
          <ExternalLink size={14} />
        ) : (
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </>
  );

  const className =
    "group block h-full border border-ink/10 bg-white p-7 transition-colors duration-300 hover:border-forest";

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
        <div className="absolute left-0 right-0 top-0 z-10 h-1 bg-accent" />

        {/* Background photo */}
        <img
          src={heroPhoto}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Legibility fade for the copy — neutral dark, no colour tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="mt-8 flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 bg-accent" />
            <p className="text-sm font-semibold text-white/70">
              Our programmes
            </p>
          </div>

          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            What we do.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            Our objectives are to develop, strengthen and protect the
            principles of the rule of law, the enjoyment of human rights, and
            the promotion of Economic, Social and Cultural Rights across East
            Africa — delivered through six focus programmes.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#programmes"
              className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-bold text-forest transition hover:brightness-105"
            >
              Explore our programmes
              <ArrowRight size={16} />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              Get involved
            </Link>
          </div>

          {/* Credibility strip */}
          <div className="mt-14 flex max-w-2xl flex-wrap gap-x-10 gap-y-6 border-t border-white/15 pt-8">
            {heroFacts.map((fact) => (
              <div key={fact.label}>
                <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {fact.value}
                </p>
                <p className="mt-1 text-sm text-white/60">{fact.label}</p>
              </div>
            ))}
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
          <h2 className="font-display text-4xl font-bold tracking-tight text-forest sm:text-5xl">
            Six focus areas, one mission.
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
            size={32}
            className="mx-auto text-accent"
            strokeWidth={1.5}
          />

          <p className="mt-6 font-display text-2xl font-medium leading-relaxed sm:text-3xl">
            Every programme starts from the same premise: rights are only
            real when people can exercise them.
          </p>

          <p className="mt-5 text-sm font-semibold text-white/50">
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
            <h2 className="font-display text-4xl font-bold tracking-tight text-forest sm:text-5xl">
              Track our SRHR advocacy.
            </h2>

            <p className="mt-4 leading-7 text-ink/65">
              A dedicated portal follows our Sexual and Reproductive Health
              and Rights work across the region in more depth.
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

      <section className="bg-forest px-6 py-24 text-center text-paper">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Want to know more?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-paper/65">
            Reach out to learn more about any of our programmes, or to
            explore how we could work together.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent px-7 py-3.5 font-bold text-forest transition hover:brightness-105"
            >
              <Mail size={18} />
              Contact us
            </Link>

            <Link
              to="/who-we-are/team"
              className="inline-flex items-center gap-2 border border-accent px-7 py-3.5 font-bold text-accent transition hover:bg-accent/10"
            >
              Meet our team
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
