import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Handshake,
  Eye,
  Target,
  ShieldCheck,
  Scale,
  HeartPulse,
  GraduationCap,
  Leaf,
} from "lucide-react";

import heroImg from "../../assets/ourstory/hero.jpeg";
import missionImg from "../../assets/ourstory/mission.jpeg";

/* =========================================================
   CONTENT (text unchanged)
========================================================= */

// TODO: replace with EACHRights' real founding history.
const storyChapters = [
  {
    title: "Where it began",
    text: "EACHRights was founded by people who believed that every person, regardless of background or circumstance, is entitled to dignity and the full realization of their human rights.",
  },
  {
    title: "How we have grown",
    text: "What began as a small effort to support vulnerable and marginalized communities has grown into a regional organization working across research, advocacy, capacity building and public interest litigation.",
  },
  {
    title: "Shaped by the people we serve",
    text: "Along the way, our story has been shaped by the communities we serve, the partners we work alongside, and the challenges we continue to confront together.",
  },
];

// Taken from the goal statement.
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

const statements = [
  {
    icon: Eye,
    label: "Our Vision",
    text: "A just society that respects and upholds human rights and inherent dignity.",
  },
  {
    icon: Target,
    label: "Our Mission",
    text: "To promote and protect human dignity through the realization of social and economic rights for vulnerable and marginalized groups and communities.",
  },
  {
    icon: Handshake,
    label: "Goal Statement",
    text: "Building a more just and equitable society.",
  },
  {
    icon: Handshake,
    label: "Our Values",
    text: "Building a more just and equitable society.",
  },
];

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We hold ourselves and our partners to the highest standards of ethics, honesty and truthfulness. We do the right thing even when no one is watching.",
  },
  {
    icon: Scale,
    title: "Transparency and Accountability",
    description:
      "We promote good governance, ensure fairness, build trust and take responsibility for our actions.",
  },
  {
    icon: Users,
    title: "Equity, Inclusion and Diversity",
    description:
      "We support fair treatment and full participation of all individuals, regardless of background or identity, and foster an environment where everyone feels valued.",
  },
  {
    icon: HeartPulse,
    title: "Human Dignity",
    description:
      "We uphold and protect the dignity of every person by treating them with respect, listening to them, and standing against discrimination.",
  },
  {
    icon: Handshake,
    title: "Teamwork",
    description:
      "We promote collaborative efforts among staff, partners and communities to enhance effectiveness in achieving organisational goals.",
  },
];

/* =========================================================
   OUR STORY PAGE
========================================================= */

export default function OurStory() {
  const reduce = useReducedMotion();

  return (
    <main className="bg-paper font-sans text-ink">
      {/* HERO: full-bleed photo, title at the bottom left */}
      <section className="relative isolate flex min-h-[520px] items-end overflow-hidden bg-forest text-paper lg:min-h-[640px]">
        <img
          src={heroImg}
          alt="The EACHRights team together outdoors"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest via-forest/70 to-forest/10" />

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto w-full max-w-7xl px-6 pb-14 sm:px-8 lg:px-12 lg:pb-20"
        >
          <div className="mb-6 h-1 w-20 bg-[#8DC63F]" />
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Our story, rooted in justice and dignity.
          </h1>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:gap-20">
          <p className="font-display text-3xl leading-snug text-forest sm:text-4xl">
            EACHRights promotes and protects human dignity through the realization of social and economic
            rights for vulnerable and marginalized groups and communities.
          </p>
          <p className="text-lg leading-8 text-ink/75 lg:pt-3">
            How EACHRights came to be, and the journey that continues to shape our work across East Africa.
          </p>
        </div>
      </section>

      {/* STORY: sticky heading beside a timeline of chapters */}
      <section className="bg-forest-light px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-display text-4xl font-bold leading-tight text-forest sm:text-5xl">
              A story still being written.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-ink/70">
              Every campaign, case and partnership adds another chapter to our work advancing rights and
              justice across East Africa.
            </p>
          </div>

          <div className="relative border-l-2 border-[#8DC63F]/50 pl-8 sm:pl-12">
            {storyChapters.map((chapter) => (
              <article key={chapter.title} className="relative pb-14 last:pb-0">
                <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border-4 border-forest-light bg-[#8DC63F] sm:-left-[57px]" />
                <h3 className="font-display text-2xl font-bold text-forest">{chapter.title}</h3>
                <p className="mt-3 max-w-xl text-lg leading-8 text-ink/75">{chapter.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VISION, MISSION, GOAL STATEMENT, VALUES: 2 x 2 grid */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid border-t border-forest/15 md:grid-cols-2">
          {statements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`border-b border-forest/15 py-10 md:pr-10 ${
                  index % 2 === 1 ? "md:border-l md:pl-10 md:pr-0" : ""
                }`}
              >
                <div className="flex items-center gap-3 text-forest-dark">
                  <Icon size={24} className="text-[#8DC63F]" strokeWidth={1.8} />
                  <h2 className="text-lg font-bold">{item.label}</h2>
                </div>
                <p className="mt-4 font-display text-2xl leading-snug text-forest">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHERE OUR WORK IS FOCUSED: photo, text, then four columns */}
      <section className="bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <img
              src={missionImg}
              alt="An EACHRights facilitator speaking with community members"
              className="h-72 w-full object-cover sm:h-96 lg:h-[460px]"
            />
            <div>
              <h2 className="font-display text-4xl font-bold leading-tight text-forest sm:text-5xl">
                Where our work is focused.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-ink/75">
                Our goal is to enable vulnerable and marginalized groups and communities to fully realize
                their rights to education and health, challenge gender and economic inequalities, and reduce
                the impact of environmental and climate change vulnerabilities.
              </p>
            </div>
          </div>

          <div className="mt-16 grid border-t border-forest/15 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="border-b border-forest/15 py-8 sm:pr-8 lg:border-b-0 lg:border-r lg:pl-8 lg:first:pl-0 lg:last:border-r-0"
                >
                  <Icon size={32} className="text-[#8DC63F]" strokeWidth={1.6} />
                  <h3 className="mt-5 font-display text-xl font-bold text-forest">{area.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink/65">{area.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GOAL STATEMENT */}
      <section className="relative overflow-hidden bg-forest px-6 py-24 text-paper sm:px-8 lg:px-12 lg:py-32">
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full border-[25px] border-[#8DC63F]/10" />
        <div className="relative mx-auto max-w-7xl">
          <h2 className="max-w-5xl font-display text-3xl leading-[1.2] text-white sm:text-4xl lg:text-5xl">
            To achieve a just and equitable society where vulnerable and marginalized groups and communities
            can fully realize their rights.
          </h2>
        </div>
      </section>

      {/* CORE VALUES: sticky heading, one row per value */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-8 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20 lg:px-12 lg:py-32">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-4xl font-bold leading-tight text-forest sm:text-5xl">
            Our values
          </h2>
          <p className="mt-6 max-w-sm text-lg leading-8 text-ink/70">
            Our values define how we work with communities, partners, institutions and one another.
          </p>
        </div>

        <ul className="border-t border-forest/15">
          {coreValues.map((value) => {
            const Icon = value.icon;
            return (
              <li
                key={value.title}
                className="grid gap-3 border-b border-forest/15 py-8 sm:grid-cols-[0.42fr_0.58fr] sm:gap-8"
              >
                <div className="flex items-start gap-3">
                  <Icon size={24} className="mt-1 shrink-0 text-[#8DC63F]" strokeWidth={1.8} />
                  <h3 className="font-display text-xl font-bold leading-snug text-forest">{value.title}</h3>
                </div>
                <p className="leading-7 text-ink/70">{value.description}</p>
              </li>
            );
          })}
        </ul>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-forest px-6 py-20 text-paper sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
              Be part of the next chapter.
            </h2>
            <p className="mt-5 leading-8 text-paper/65">
              We welcome collaboration with communities, organisations, institutions and partners who share our
              commitment to human rights and dignity.
            </p>
          </div>
          
        </div>
      </section>
    </main>
  );
}
