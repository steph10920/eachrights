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
  ShieldCheck,
  Users,
} from "lucide-react";

/* =========================================================
   PROGRAMME PHOTO IMPORTS
========================================================= */

import educationPhoto from "../assets/impact/impact-1.png";
import genderPhoto from "../assets/impact/impact-2.png";
import healthPhoto from "../assets/impact/impact-3.png";
import environmentalPhoto from "../assets/impact/impact-4.png";
import economicPhoto from "../assets/impact/impact-5.png";
import heroPhoto from "../assets/impact/heroImpact.png";

/* =========================================================
   EXTERNAL PLATFORM
========================================================= */

const SRHR_PORTAL_URL = "https://eachrights.github.io/srhr/";

/* =========================================================
   PROGRAMMES
========================================================= */

const programmes = [
  {
    index: "01",
    name: "Education Justice Programme",
    path: "/programmes/education-justice",
    icon: BookOpenCheck,
    photo: educationPhoto,
    stat: "Access & quality",
    blurb:
      "Advancing equitable access to quality education and strengthening the right to learn, working with schools, communities and duty-bearers to address barriers to education.",
  },
  {
    index: "02",
    name: "Gender Justice Programme",
    path: "/programmes/gender-justice",
    icon: Users,
    photo: genderPhoto,
    stat: "Equality & protection",
    blurb:
      "Promoting gender equality, dignity and protection for women, girls and vulnerable groups while challenging harmful practices and gender-based violence.",
  },
  {
    index: "03",
    name: "Health Justice Programme",
    path: "/programmes/health-justice",
    icon: HeartPulse,
    photo: healthPhoto,
    stat: "Health & SRHR",
    blurb:
      "Advocating for equitable access to health services and the realization of the right to health, including Sexual and Reproductive Health and Rights.",
  },
  {
    index: "04",
    name: "Environmental & Climate Justice Programme",
    path: "/programmes/environmental-climate-justice",
    icon: Leaf,
    photo: environmentalPhoto,
    stat: "Accountability & resilience",
    blurb:
      "Supporting communities to address environmental challenges and climate-related injustices while promoting rights-based approaches to environmental protection.",
  },
  {
    index: "05",
    name: "Economic Justice, Business and Human Rights Programme",
    path: "/programmes/economic-justice",
    icon: Briefcase,
    photo: economicPhoto,
    stat: "Rights & accountability",
    blurb:
      "Advancing economic and social rights while promoting responsible business conduct and accountability for human rights impacts affecting communities.",
  },
  {
    index: "06",
    name: "Institutional Growth and Sustainability",
    path: "/programmes/institutional-growth-sustainability",
    icon: ShieldCheck,
    photo: null,
    stat: "Capacity & sustainability",
    blurb:
      "Strengthening organisational capacity, governance, partnerships and resource mobilisation to sustain EACHRights' long-term impact and effectiveness.",
  },
   {
    index: "07",
    name: "Universal Periodic Review",
    path: "/processes/universal-periodic-review",
    icon: Globe2,
    photo: null,
    stat: "UN human rights engagement",
    blurb:
      "Engaging with the United Nations Universal Periodic Review mechanism to contribute evidence, strengthen accountability and advance human rights commitments.",
  },
];

/* =========================================================
   PROCESSES / HUMAN RIGHTS ENGAGEMENT
========================================================= */

const processes = [
  {
    name: "Universal Periodic Review",
    path: "/processes/universal-periodic-review",
    icon: Globe2,
    stat: "UN engagement",
    blurb:
      "Engaging with the United Nations Universal Periodic Review mechanism to contribute evidence, strengthen accountability and advance human rights commitments.",
  },
];

/* =========================================================
   SRHR ADVOCACY
========================================================= */

const srhrAdvocacyLink = {
  name: "SRHR Advocacy Portal",
  url: SRHR_PORTAL_URL,
  blurb:
    "Explore the dedicated EACHRights portal documenting Sexual and Reproductive Health and Rights advocacy and related work across the region.",
};

/* =========================================================
   HERO FACTS
========================================================= */

const heroFacts = [
  {
    value: "06",
    label: "Core programmes",
  },
  {
    value: "East Africa",
    label: "Regional reach",
  },
  {
    value: "UPR",
    label: "UN engagement",
  },
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
    transition: {
      duration: 0.45,
    },
  },
};

/* =========================================================
   PROGRAMME CARD
========================================================= */

function ProgrammeCard({
  index,
  name,
  blurb,
  icon: Icon,
  photo,
  stat,
  path,
}) {
  return (
    <motion.article variants={cardVariants} className="group">
      <Link
        to={path}
        className="relative block min-h-[390px] overflow-hidden bg-forest shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:min-h-[430px]"
      >
        {/* Background image */}
        {photo ? (
          <img
            src={photo}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover grayscale-[55%] contrast-[1.05] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
          />
        ) : (
          <div className="absolute inset-0 bg-forest-dark">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-accent/30" />
              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-white/10" />
            </div>
          </div>
        )}

        {/* Brand colour overlay */}
        <div className="absolute inset-0 bg-forest-dark/35 mix-blend-multiply" />

        {/* Text readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[390px] h-full flex-col justify-between p-6 text-white sm:min-h-[430px] sm:p-8">
          <div className="flex items-start justify-between border-b border-white/15 pb-4">
            <span className="font-display text-4xl font-bold leading-none text-white/70 sm:text-5xl">
              {index}
            </span>

            <Icon
              size={22}
              className="mt-1 text-accent"
              strokeWidth={1.75}
            />
          </div>

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

            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-accent group-hover:underline group-hover:underline-offset-4">
              Explore programme
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
   PROCESS CARD
========================================================= */

function ProcessCard({
  name,
  blurb,
  icon: Icon,
  path,
  stat,
}) {
  return (
    <motion.article variants={cardVariants}>
      <Link
        to={path}
        className="group block h-full border border-forest/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-forest hover:shadow-lg"
      >
        <div className="flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center bg-forest-light">
            <Icon
              size={24}
              className="text-forest"
              strokeWidth={1.7}
            />
          </span>

          <ArrowRight
            size={18}
            className="text-forest/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-forest"
          />
        </div>

        <p className="mt-7 text-sm font-semibold text-forest/60">
          {stat}
        </p>

        <h3 className="mt-2 font-display text-2xl font-bold text-forest">
          {name}
        </h3>

        <p className="mt-3 text-sm leading-7 text-ink/65">
          {blurb}
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-forest">
          Explore this process
          <ArrowRight size={15} />
        </span>
      </Link>
    </motion.article>
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

        <img
          src={heroPhoto}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-24">

          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="mt-6 flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 bg-accent" />
            <p className="text-sm font-semibold text-white/70">
              OUR WORK
            </p>
          </div>

          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
            What we do.
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
            EACHRights promotes, protects and advances Economic, Social and
            Cultural Rights across East Africa. We work with communities,
            institutions and partners to address barriers to rights,
            strengthen accountability and support lasting social justice.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#programmes"
              className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-bold text-forest transition hover:brightness-105"
            >
              Explore our programmes
              <ArrowRight size={16} />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              Get involved
            </Link>
          </div>

          {/* Credibility strip */}
          <div className="mt-14 flex max-w-3xl flex-wrap gap-x-12 gap-y-6 border-t border-white/15 pt-8">
            {heroFacts.map((fact) => (
              <div key={fact.label}>
                <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {fact.value}
                </p>
                <p className="mt-1 text-sm text-white/60">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

          <div>
            <span className="block h-1 w-14 bg-accent" />

            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-forest sm:text-5xl">
              Rights into action.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="font-display text-2xl font-bold leading-snug text-forest sm:text-3xl">
              We work to create an environment where people can claim their
              rights and live with dignity.
            </p>

            <p className="mt-6 text-lg leading-8 text-ink/70">
              Our work combines research, advocacy, capacity building and
              public interest litigation with community engagement and
              institutional partnerships. Across our programmes, we focus on
              the structural barriers that prevent people from fully enjoying
              their Economic, Social and Cultural Rights.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROGRAMMES
      ===================================================== */}

      <section
        id="programmes"
        className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="max-w-3xl">
          <span className="block h-1 w-14 bg-accent" />

          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-forest sm:text-5xl">
            Seven programmes. One commitment to justice.
          </h2>

          <p className="mt-5 text-lg leading-8 text-ink/65">
            Our programmes respond to interconnected rights challenges
            affecting communities across East Africa. Each programme combines
            evidence, community engagement, advocacy and partnerships to
            advance practical and sustainable change.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="shown"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={gridVariants}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {programmes.map((programme) => (
            <ProgrammeCard
              key={programme.path}
              {...programme}
            />
          ))}
        </motion.div>
      </section>
      {/* =====================================================
          SRHR PORTAL
      ===================================================== */}

      <section className="bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="grid overflow-hidden border border-forest/10 lg:grid-cols-[1.1fr_0.9fr]">

            <div className="bg-forest p-8 text-white sm:p-12 lg:p-16">
              <span className="flex h-12 w-12 items-center justify-center bg-white/10">
                <HeartPulse
                  size={25}
                  className="text-accent"
                  strokeWidth={1.7}
                />
              </span>

              <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-accent">
                Dedicated platform
              </p>

              <h2 className="mt-3 max-w-xl font-display text-3xl font-bold leading-tight sm:text-4xl">
                Sexual and Reproductive Health and Rights advocacy.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-white/70">
                Our dedicated SRHR portal provides a deeper look at our
                Sexual and Reproductive Health and Rights advocacy and related
                work across the region.
              </p>

              <a
                href={srhrAdvocacyLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-bold text-forest transition hover:brightness-105"
              >
                Visit the SRHR Portal
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="flex items-center bg-paper p-8 sm:p-12 lg:p-16">
              <div>
                <p className="text-sm font-semibold text-forest/60">
                  Why it matters
                </p>

                <h3 className="mt-3 font-display text-2xl font-bold text-forest">
                  Health, dignity and informed choice are central to human
                  rights.
                </h3>

                <p className="mt-5 leading-7 text-ink/65">
                  Through advocacy, evidence generation and engagement with
                  communities and decision-makers, EACHRights works to advance
                  access to rights-based health information and services.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      

    </main>
  );
}