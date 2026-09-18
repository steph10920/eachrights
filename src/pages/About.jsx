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

function Eyebrow({ children, dark = false }) {
  return (
    <span className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-forest-dark" : "text-accent"}`}>
      {children}
    </span>
  );
}

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
      {/* PAGE HERO — mirrors Home's forest hero band */}
      <section className="relative overflow-hidden bg-forest text-paper">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border-[25px] border-accent/10" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full border-[25px] border-paper/5" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow>About EACHRights</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Advancing human rights,
              <span className="block text-accent">justice and human dignity.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
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
          <Eyebrow dark>Who We Are</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-forest sm:text-5xl">
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
          <Eyebrow dark>Our Commitment</Eyebrow>
          <h3 className="mt-4 text-2xl font-bold leading-snug text-forest sm:text-3xl font-display">
            Rights for everyone. Dignity for all.
          </h3>
          <p className="mt-5 leading-7 text-ink/70">
            We believe that every person is entitled to dignity, equality and the full realization of their human
            rights.
          </p>
          <div className="mt-6 h-1 w-16 bg-forest-dark" />
        </motion.div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-forest-light px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 shadow-sm"
          >
            <IconBox icon={Eye} />
            <Eyebrow dark>Our Vision</Eyebrow>
            <p className="mt-4 truncate text-lg text-forest font-display" title="A just society that respects and upholds human rights and inherent dignity.">
              A just society that respects and upholds <br>
              </br>human rights and inherent dignity.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="bg-white p-8 shadow-sm"
          >
            <IconBox icon={Target} />
            <Eyebrow dark>Our Mission</Eyebrow>
            <p className="mt-4 truncate text-lg text-forest font-display" title="To promote and protect human dignity through the realization of social and economic rights for vulnerable and marginalized groups and communities.">
              To promote and protect human dignity <br></br>through the realization of social and <br></br>economic rights for vulnerable and <br></br>marginalized groups and communities.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="bg-white p-8 shadow-sm"
          >
            <IconBox icon={Handshake} />
            <Eyebrow dark>Our Direction</Eyebrow>
            <p className="mt-4 truncate text-lg text-forest font-display" title="Building a more just and equitable society for every person to live with dignity.">
              Building a more just and equitable society.
            </p>
          </motion.article>
        </div>
      </section>

      {/* GOAL STATEMENT */}
      <section className="relative overflow-hidden bg-forest px-6 py-20 text-paper">
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full border-[25px] border-accent/10" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.3fr_0.7fr] lg:items-start">
            <IconBox icon={Target} large onDark />
            <div>
              <Eyebrow>Goal Statement</Eyebrow>
              <h2 className="mt-4 text-2xl leading-9 text-white sm:text-3xl lg:text-4xl font-display">
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

      {/* CORE VALUES */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <div className="mb-12 max-w-2xl">
          <Eyebrow dark>Core Values</Eyebrow>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-forest sm:text-5xl font-display">
            The principles that guide everything we do.
          </h2>
          <p className="mt-4 leading-7 text-ink/65">
            Our values define how we work with communities, partners, institutions and one another.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white p-7 shadow-sm transition hover:shadow-xl"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-accent opacity-0 transition group-hover:opacity-100" />
                <IconBox icon={Icon} />
                <h3 className="mt-6 text-xl font-bold leading-snug text-forest font-display">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/65">{value.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* HOW WE ADVANCE OUR MISSION */}
      <section className="bg-forest-light px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow dark>Our Approach</Eyebrow>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-forest sm:text-5xl font-display">
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
                  <Icon size={30} className="text-forest-dark" strokeWidth={1.7} />
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
              <Eyebrow dark>Learn More</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest sm:text-4xl font-display">
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
