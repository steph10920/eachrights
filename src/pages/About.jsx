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
import Footer from "../components/Footer.jsx";

/* =========================================================
   CORE VALUES
========================================================= */

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We consistently hold ourselves and our partners to the highest standards of ethics, honesty, and truthfulness. We do the right thing even when no one is watching.",
  },
  {
    icon: Scale,
    title: "Transparency and Accountability",
    description:
      "We promote good governance, ensure fairness, build trust, enhance effectiveness, and take responsibility for our actions.",
  },
  {
    icon: Users,
    title: "Equity, Inclusion and Diversity",
    description:
      "We support fair treatment and full participation of all individuals, regardless of their background, identity, or characteristics. We actively seek diverse perspectives, provide equitable access to opportunities, and foster an inclusive environment where everyone feels valued.",
  },
  {
    icon: HeartPulse,
    title: "Human Dignity",
    description:
      "We uphold, respect and protect the dignity of every person by treating them with respect and kindness, listening to them, and standing up against discrimination.",
  },
  {
    icon: Handshake,
    title: "Teamwork",
    description:
      "We consistently promote collaborative efforts among staff, partners, and communities to enhance efficiency and effectiveness in achieving organizational goals.",
  },
];

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function About() {
  return (
    <>
      <main className="bg-white font-sans text-ink">

        {/* =====================================================
            PAGE HERO
        ===================================================== */}

        <section className="relative isolate overflow-hidden bg-forest text-white">

          {/* Decorative elements */}
          <div
            className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full border border-white/10"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-48 -left-48 h-[30rem] w-[30rem] rounded-full border border-white/10"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">

            <div className="max-w-4xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                About EACHRights
              </p>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Advancing human rights,
                <span className="block text-white/70">
                  justice and human dignity.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75">
                The East African Centre for Human Rights works to promote and
                protect human dignity through the realization of social and
                economic rights for vulnerable and marginalized groups and
                communities.
              </p>

            </div>

          </div>

          {/* Bottom transition */}
          <div
            className="absolute bottom-0 left-0 h-8 w-full bg-white"
            style={{
              clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
            }}
            aria-hidden="true"
          />

        </section>

        {/* =====================================================
            WHO WE ARE
        ===================================================== */}

        <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                Who We Are
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                The East African Centre for Human Rights
              </h2>

              <div className="mt-7 h-1 w-16 rounded-full bg-forest" />

              <p className="mt-7 text-base leading-8 text-gray-600 sm:text-lg">
                The East African Centre for Human Rights, abbreviated as
                EACHRights, is committed to promoting, protecting and advancing
                human rights and social justice across East Africa.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600">
                We work to strengthen the realization of Economic, Social and
                Cultural Rights, particularly for vulnerable and marginalized
                groups and communities.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600">
                Through research, advocacy, capacity building, public interest
                litigation and strategic partnerships, we seek to address
                inequalities, strengthen accountability and contribute to
                lasting social change.
              </p>

            </motion.div>

            {/* Highlight card */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-forest-soft p-8 sm:p-10"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-forest text-white">
                <ShieldCheck size={32} strokeWidth={1.6} />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                Our Commitment
              </p>

              <h3 className="mt-4 text-2xl font-bold leading-snug text-ink sm:text-3xl">
                Rights for everyone. Dignity for all.
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                We believe that every person is entitled to dignity, equality
                and the full realization of their human rights.
              </p>

            </motion.div>

          </div>

        </section>

        {/* =====================================================
            VISION & MISSION
        ===================================================== */}

        <section className="bg-forest-soft px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-10 lg:grid-cols-2">

              {/* Vision */}
              <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-forest/10 bg-white p-8 shadow-sm sm:p-10"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest text-white">
                  <Eye size={28} strokeWidth={1.7} />
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                  Our Vision
                </p>

                <h2 className="mt-5 text-3xl font-bold leading-tight text-ink sm:text-4xl">
                  “A just society that respects and upholds human rights and
                  inherent dignity”
                </h2>

              </motion.article>

              {/* Mission */}
              <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl border border-forest/10 bg-white p-8 shadow-sm sm:p-10"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest text-white">
                  <Target size={28} strokeWidth={1.7} />
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                  Our Mission
                </p>

                <h2 className="mt-5 text-2xl font-bold leading-8 text-ink sm:text-3xl">
                  “To promote and protect human dignity through the realization
                  of social and economic rights for vulnerable and marginalized
                  groups and communities”
                </h2>

              </motion.article>

            </div>

          </div>

        </section>

        {/* =====================================================
            VISION IMAGE
        ===================================================== */}

        <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >

              <div className="overflow-hidden rounded-2xl border border-gray-100 bg-forest-soft p-6 shadow-lg">

                <img
                  src="https://www.eachrights.or.ke/wp-content/uploads/2026/03/VISIO-1-300x263.png"
                  alt="EACHRights vision"
                  className="mx-auto h-auto w-full max-w-lg object-contain"
                  loading="lazy"
                />

              </div>

              <div
                className="absolute -bottom-5 -left-5 -z-10 h-24 w-24 rounded-xl bg-forest"
                aria-hidden="true"
              />

            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                Our Direction
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                Building a more just and equitable society.
              </h2>

              <div className="mt-7 h-1 w-16 rounded-full bg-forest" />

              <p className="mt-7 leading-8 text-gray-600">
                Our vision guides our commitment to creating a society where
                human rights are respected, protected and upheld, and where
                every person can live with dignity.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                This commitment informs our work with communities, rights
                defenders, civil society organisations, institutions and other
                partners across the region.
              </p>

            </motion.div>

          </div>

        </section>

        {/* =====================================================
            GOAL STATEMENT
        ===================================================== */}

        <section className="bg-forest px-6 py-20 text-white sm:px-8 lg:px-12 lg:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 lg:grid-cols-[0.3fr_0.7fr] lg:items-start">

              <div>

                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white text-forest">
                  <Target size={32} strokeWidth={1.6} />
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  Goal Statement
                </p>

              </div>

              <div>

                <h2 className="text-2xl font-bold leading-9 sm:text-3xl lg:text-4xl">
                  To achieve a just and equitable society where vulnerable and
                  marginalized groups and communities can fully realize their
                  rights.
                </h2>

                <p className="mt-7 max-w-4xl text-base leading-8 text-white/70 sm:text-lg">
                  Our goal is to enable vulnerable and marginalized groups and
                  communities to fully realize their rights to education and
                  health, challenge gender and economic inequalities, and
                  reduce the impact of environmental and climate change
                  vulnerabilities.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            CORE VALUES
        ===================================================== */}

        <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl">

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                Core Values
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                The principles that guide everything we do.
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Our values define how we work with communities, partners,
                institutions and one another.
              </p>

            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {coreValues.map((value, index) => {
                const Icon = value.icon;

                return (
                  <motion.article
                    key={value.title}
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
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="group rounded-xl border border-gray-100 bg-white p-7 shadow-sm transition-shadow hover:border-forest/20 hover:shadow-xl hover:shadow-forest/5"
                  >

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest-soft text-forest transition-colors group-hover:bg-forest group-hover:text-white">
                      <Icon size={27} strokeWidth={1.7} />
                    </div>

                    <h3 className="mt-7 text-xl font-bold leading-snug text-ink group-hover:text-forest">
                      {value.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-600">
                      {value.description}
                    </p>

                  </motion.article>
                );
              })}

            </div>

          </div>

        </section>

        {/* =====================================================
            HOW WE ADVANCE OUR MISSION
        ===================================================== */}

        <section className="bg-forest-soft px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="text-center">

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                Our Approach
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Turning commitment into action.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
                We use a combination of evidence, advocacy, capacity building
                and legal action to advance human rights and social justice.
              </p>

            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {[
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
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
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
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.05,
                    }}
                    className="rounded-xl border border-forest/10 bg-white p-7 shadow-sm"
                  >

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest text-white">
                      <Icon size={27} strokeWidth={1.7} />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-ink">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {item.text}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </section>

        {/* =====================================================
            EXPLORE ABOUT
        ===================================================== */}

        <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg sm:p-10 lg:p-14">

              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

                <div>

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                    Learn More
                  </span>

                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                    Discover more about EACHRights.
                  </h2>

                  <p className="mt-5 max-w-2xl leading-7 text-gray-600">
                    Explore our history, leadership, governance structures and
                    partnerships to learn more about who we are and how we work.
                  </p>

                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

                  <Link
                    to="/about/history"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-forest px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-forest-dark"
                  >
                    Our History
                    <ArrowRight size={17} />
                  </Link>

                  <Link
                    to="/about/team"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-forest px-6 py-3.5 text-sm font-semibold text-forest transition hover:bg-forest-soft"
                  >
                    Meet Our Team
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            CONTACT CTA
        ===================================================== */}

        <section className="bg-forest px-6 py-20 text-center text-white sm:px-8 lg:px-12 lg:py-24">

          <div className="mx-auto max-w-3xl">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-forest">
              <Handshake size={30} strokeWidth={1.7} />
            </div>

            <h2 className="mt-7 text-3xl font-bold tracking-tight sm:text-4xl">
              Work with us to advance justice.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">
              We welcome collaboration with communities, organisations,
              institutions and partners who share our commitment to human
              rights and dignity.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-forest shadow-lg transition hover:bg-forest-soft"
            >
              Contact EACHRights
              <ArrowRight size={18} />
            </Link>

          </div>

        </section>

      </main>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <Footer />
    </>
  );
}