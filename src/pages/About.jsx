import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Scale,
  Users,
  HeartPulse,
  Handshake,
  Target,
  Eye,
  BookOpen,
  Gavel,
} from "lucide-react";

/* =========================================================
   SHARED HELPERS — match Home.jsx's design language
========================================================= */

function IconBox({ icon: Icon, large = false, onDark = false }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full ${
        onDark ? "bg-paper/10 text-accent" : "bg-accent/10 text-accent"
      } ${large ? "h-20 w-20" : "h-14 w-14"}`}
    >
      <Icon size={large ? 36 : 26} strokeWidth={1.7} />
    </div>
  );
}

/* =========================================================
   CORE VALUES
========================================================= */

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

const approach = [
  {
    icon: BookOpen,
    title: "Research",
    text: "Generating evidence and knowledge to understand human rights challenges and inform solutions.",
  },
  {
    icon: Users,
    title: "Capacity Building",
    text: "Strengthening communities, institutions and rights defenders with knowledge and skills.",
  },
  {
    icon: Scale,
    title: "Advocacy",
    text: "Influencing policies, institutions and decision-makers through evidence-based advocacy.",
  },
  {
    icon: Gavel,
    title: "Public Interest Litigation",
    text: "Using strategic litigation to protect rights, promote accountability and advance legal change.",
  },
];

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function About() {
  return (
    <main className="bg-paper font-sans text-ink">
      {/* PAGE HERO — mirrors Home's forest hero band, kept compact */}
      <section className="relative overflow-hidden bg-forest text-paper">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border-[25px] border-accent/10" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full border-[25px] border-paper/5" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
          <div className="max-w-3xl">
            <h1 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Advancing human rights,
              <span className="block text-accent">justice and human dignity.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              The East African Centre for Human Rights works to promote and protect human dignity through the
              realization of social and economic rights for vulnerable and marginalized groups and communities.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:py-28 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl font-bold leading-tight text-forest sm:text-5xl">
            The East African Centre
            <br />
            <span className="text-forest-dark">for Human Rights.</span>
          </h2>
          <p className="mt-6 text-base leading-8 text-ink/75">
            EACHRights is committed to promoting, protecting and advancing human rights and social justice across
            East Africa.
          </p>
          <p className="mt-4 text-base leading-8 text-ink/75">
            We work to strengthen the realization of Economic, Social and Cultural Rights, particularly for
            vulnerable and marginalized groups and communities.
          </p>
          <p className="mt-4 text-base leading-8 text-ink/75">
            Through research, advocacy, capacity building, public interest litigation and strategic partnerships,
            we seek to address inequalities, strengthen accountability and contribute to lasting social change.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-forest-light p-8 sm:p-10"
        >
          <IconBox icon={ShieldCheck} large />
          <h3 className="mt-6 text-2xl font-bold leading-snug text-forest sm:text-3xl font-display">
            Rights for everyone. Dignity for all.
          </h3>
          <p className="mt-5 leading-7 text-ink/70">
            We believe that every person is entitled to dignity, equality and the full realization of their human
            rights.
          </p>
          <div className="mt-6 h-1 w-16 bg-forest-dark" />
        </motion.div>
      </section>

      {/* VISION & MISSION & DIRECTION — one shared panel with internal
          dividers instead of three identical shadow cards. The small
          caps label here is structural (it's the only thing naming which
          column is which), not decoration, so it stays. */}
      <section className="bg-forest-light px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid divide-y divide-forest/10 bg-white shadow-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          >
            <div className="p-8 sm:p-10">
              <IconBox icon={Eye} />
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-forest-dark">Our Vision</p>
              <p className="mt-3 text-lg leading-snug text-forest font-display">
                A just society that respects and upholds human rights and inherent dignity.
              </p>
            </div>
            <div className="p-8 sm:p-10">
              <IconBox icon={Target} />
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-forest-dark">Our Mission</p>
              <p className="mt-3 text-lg leading-snug text-forest font-display">
                To promote and protect human dignity through the realization of social and economic rights for
                vulnerable and marginalized groups and communities.
              </p>
            </div>
            <div className="p-8 sm:p-10">
              <IconBox icon={Handshake} />
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-forest-dark">Our Direction</p>
              <p className="mt-3 text-lg leading-snug text-forest font-display">
                Building a more just and equitable society.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GOAL STATEMENT */}
      <section className="relative overflow-hidden bg-forest px-6 py-20 text-paper">
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full border-[25px] border-accent/10" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.3fr_0.7fr] lg:items-start">
            <IconBox icon={Target} large onDark />
            <div>
              <h2 className="text-2xl leading-9 text-white sm:text-3xl lg:text-4xl font-display">
                To achieve a just and equitable society where vulnerable and marginalized groups and communities
                can fully realize their rights.
              </h2>
              <p className="mt-6 max-w-4xl text-base leading-8 text-paper/70 sm:text-lg">
                Our goal is to enable vulnerable and marginalized groups and communities to fully realize their
                rights to education and health, challenge gender and economic inequalities, and reduce the impact
                of environmental and climate change vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES — a divided two-column list instead of five identical
          shadow-hover cards. */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-forest sm:text-5xl font-display">
            The principles that guide everything we do.
          </h2>
          <p className="mt-4 leading-7 text-ink/65">
            Our values define how we work with communities, partners, institutions and one another.
          </p>
        </div>

        <div className="grid gap-x-12 border-t border-forest/10 sm:grid-cols-2">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="flex gap-5 border-b border-forest/10 py-7"
              >
                <Icon size={26} className="mt-1 shrink-0 text-forest-dark" strokeWidth={1.7} />
                <div>
                  <h3 className="text-lg font-bold leading-snug text-forest font-display">{value.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink/65">{value.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* HOW WE ADVANCE OUR MISSION — numbered, same as Home's Our Approach:
          research → capacity building → advocacy → litigation is a real
          sequence, so the numbering earns its place here too. */}
      <section className="bg-forest-light px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-forest sm:text-5xl font-display">
              Turning commitment into action.
            </h2>
            <p className="mt-4 leading-7 text-ink/65">
              We use a combination of evidence, advocacy, capacity building and legal action to advance human
              rights and social justice.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="bg-paper p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={30} className="text-forest-dark" strokeWidth={1.7} />
                    <span className="font-display text-sm font-bold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-forest font-display">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/65">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPLORE ABOUT */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <div className="bg-white p-8 shadow-lg sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-forest sm:text-4xl font-display">
                Discover more about EACHRights.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-ink/65">
                Explore our history, leadership, governance structures and partnerships to learn more about who we
                are and how we work.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to="/about/team"
                className="inline-flex items-center justify-center gap-2 border-2 border-forest px-6 py-3.5 text-sm font-semibold text-forest transition hover:bg-forest/5"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA — mirrors Home's final CTA */}
      <section className="bg-forest px-6 py-24 text-center text-paper">
        <div className="mx-auto max-w-3xl">
          <Handshake size={48} strokeWidth={1.3} className="mx-auto text-accent" />
          <h2 className="mt-6 text-4xl font-bold sm:text-5xl font-display">Work with us to advance justice.</h2>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-paper/65">
            We welcome collaboration with communities, organisations, institutions and partners who share our
            commitment to human rights and dignity.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-accent px-7 py-3.5 font-bold text-forest transition hover:brightness-105"
          >
            Contact EACHRights
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
