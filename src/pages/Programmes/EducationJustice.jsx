import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Target,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

/* =========================================================
   INTERVENTION FOCUS AREAS
   (add more entries here as they're confirmed)
========================================================= */

const focusAreas = [
  "Promote access to education for vulnerable and marginalized groups and communities",
];

/* =========================================================
   EDUCATION JUSTICE PROGRAMME PAGE
========================================================= */

export default function EducationJustice() {
  return (
    <main className="bg-white font-sans text-ink">

      {/* =====================================================
          PAGE HERO
      ===================================================== */}

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
              <GraduationCap size={28} strokeWidth={1.7} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Our Work / Programmes
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Education Justice Programme
            </h1>

          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 h-8 w-full bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          aria-hidden="true"
        />
      </section>

      {/* =====================================================
          GENERAL COMMENT NO. 13 — PULL QUOTE
      ===================================================== */}

      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-5xl">

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="border-l-4 border-forest bg-forest-soft px-8 py-8 sm:px-10 sm:py-10"
          >
            <p className="text-lg leading-8 text-ink/85 sm:text-xl">
              &ldquo;Education is both a human right in itself and an
              indispensable means of realizing other human rights. As an
              empowerment right, education is the primary vehicle by which
              economically and socially marginalized adults and children can
              lift themselves out of poverty and obtain the means to
              participate fully in their communities. Education has a vital
              role in empowering women, safeguarding children from
              exploitative and hazardous labour and sexual exploitation,
              promoting human rights and democracy, protecting the
              environment, and controlling population growth.&rdquo;
              <sup className="ml-0.5 text-sm text-forest">19</sup>
            </p>

            <cite className="mt-6 block text-sm font-semibold not-italic uppercase tracking-[0.15em] text-forest">
              General Comment No. 13 on the Right to Education, para. 1
            </cite>
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-10 text-base leading-8 text-gray-600 sm:text-lg"
          >
            The Education Justice Programme will therefore cover
            pre-primary, primary, junior, secondary/senior school,
            vocational, adult, and continuing education, and implement
            projects around girl child education, foundational
            learning/early childhood education, education for children in
            urban informal settlements, education for children in rural,
            arid, and semi-arid areas, and education among the youth.
          </motion.p>

        </div>
      </section>

      {/* =====================================================
          PROGRAMME GOAL
      ===================================================== */}

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
                To enhance the right to education among vulnerable and
                marginalized groups and communities.
              </h2>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          INTERVENTION FOCUS AREAS
      ===================================================== */}

      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-5xl">

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            How We Work
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Intervention focus areas
          </h2>

          <div className="mt-4 h-1 w-16 rounded-full bg-forest" />

          <ul className="mt-10 flex flex-col gap-4">
            {focusAreas.map((area, index) => (
              <motion.li
                key={area}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-4 rounded-xl border border-forest/10 bg-white p-6 shadow-sm"
              >
                <CheckCircle2
                  size={22}
                  className="mt-0.5 flex-shrink-0 text-forest"
                  strokeWidth={1.7}
                />
                <span className="text-base leading-7 text-gray-700">
                  {area}
                </span>
              </motion.li>
            ))}
          </ul>

        </div>
      </section>

      {/* =====================================================
          GET INVOLVED CTA
      ===================================================== */}

      <section className="bg-forest px-6 py-16 text-center text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Support the Education Justice Programme
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
            Partner with us, or explore our other programme areas advancing
            economic, social and cultural rights across East Africa.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold px-6 py-3 font-semibold text-forest transition hover:brightness-105"
            >
              Get Involved
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 border-2 border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View All Programmes
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
