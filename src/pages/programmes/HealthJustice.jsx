import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HeartPulse,
  Target,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const focusAreas = [
  "Promote the realization of the right to the highest attainable standard of health.",
  "Promote the realization of sexual and reproductive health and rights (SRHR).",
  "Advocate for equitable access to quality, affordable, accessible, and acceptable healthcare services.",
  "Address social, economic, geographical, and institutional barriers to healthcare.",
  "Strengthen meaningful community participation in health governance and decision-making.",
  "Promote accountability among health institutions and duty bearers.",
  "Promote access to accurate, timely, and understandable health information.",
  "Advocate for improved access to maternal, newborn, child, and adolescent health services.",
  "Address the specific health needs of vulnerable and marginalized groups and communities.",
  "Conduct research, advocacy, capacity building, and partnerships to advance health justice.",
];

export default function HealthJustice() {
  return (
    <main className="bg-white font-sans text-ink">

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-forest text-white">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full border border-white/10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-48 -left-48 h-[30rem] w-[30rem] rounded-full border border-white/10"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Our Work
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
              <HeartPulse size={28} strokeWidth={1.7} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Our Work / Programmes
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Health Justice Programme
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Promoting equitable access to healthcare and advancing the right
              to health for vulnerable and marginalized communities.
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 h-8 w-full bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          aria-hidden="true"
        />
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-5xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Health Justice
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Advancing the right to health for all
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              Article 43(1) of the Constitution of Kenya, 2010, guarantees
              every person the right to the highest attainable standard of
              health, which includes the right to healthcare services,
              including reproductive healthcare.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              Despite these constitutional guarantees and other commitments to
              the right to health, many people continue to experience barriers
              to accessing quality, affordable, accessible, and appropriate
              healthcare services. Vulnerable and marginalized groups and
              communities are often disproportionately affected by these
              barriers.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              Challenges such as poverty, geographical isolation,
              discrimination, limited health infrastructure, inadequate
              information, and unequal access to health services can prevent
              individuals and communities from fully enjoying their right to
              health.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              The Health Justice Programme seeks to contribute to a society
              where healthcare is accessible to vulnerable and marginalized
              groups and communities. The programme applies a{" "}
              <strong className="text-ink">
                human rights-based approach
              </strong>{" "}
              that promotes participation, equality, non-discrimination,
              accountability, transparency, and access to information in
              health-related decision-making.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROGRAMME GOAL */}
      <section className="bg-forest-soft px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 rounded-2xl border border-forest/10 bg-white p-8 shadow-sm sm:flex-row sm:items-center sm:p-10"
          >
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-forest text-white">
              <Target size={28} strokeWidth={1.7} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                Programme Goal
              </p>

              <h2 className="mt-3 text-2xl font-bold leading-snug text-ink sm:text-3xl">
                To promote access to healthcare among vulnerable and
                marginalized groups and communities.
              </h2>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTERVENTION FOCUS AREAS */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-5xl">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            How We Work
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Intervention focus areas
          </h2>

          <div className="mt-4 h-1 w-16 rounded-full bg-forest" />

          <p className="mt-5 max-w-3xl leading-7 text-gray-600">
            Our interventions address the barriers that prevent vulnerable and
            marginalized communities from fully realizing their right to
            health.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="flex items-start gap-4 rounded-xl border border-forest/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <CheckCircle2
                  size={22}
                  className="mt-0.5 flex-shrink-0 text-forest"
                  strokeWidth={1.7}
                />

                <span className="text-base leading-7 text-gray-700">
                  {area}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPECTED CHANGE */}
      <section className="bg-forest-soft px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            Expected Change
          </p>

          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Advancing health justice
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Increased awareness of the right to health.",
              "Improved access to quality and equitable healthcare services.",
              "Greater awareness and protection of sexual and reproductive health and rights.",
              "Increased community participation in health decision-making.",
              "Strengthened accountability among health institutions and duty bearers.",
              "Improved access to relevant and reliable health information.",
              "Greater attention to the health needs of underserved communities.",
              "Stronger implementation of health-related laws, policies, and budgets.",
              "Increased evidence-based advocacy for health justice and equity.",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-sm font-bold text-white">
                  {index + 1}
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest px-6 py-16 text-center text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Support the Health Justice Programme
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
            Partner with us to promote equitable access to healthcare and
            advance the right to health for vulnerable and marginalized
            communities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold px-6 py-3 font-semibold text-forest transition hover:brightness-105"
            >
              Get Involved
              <ArrowRight size={18} />
            </Link>

           
          </div>
        </div>
      </section>

    </main>
  );
}
