import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scale, ArrowRight, ArrowLeft } from "lucide-react";

/* =========================================================
   GENDER JUSTICE PROGRAMME PAGE
   Placeholder — replace with confirmed programme copy,
   goal statement and intervention focus areas, same
   structure as EducationJustice.jsx.
========================================================= */

export default function GenderJustice() {
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
              <Scale size={28} strokeWidth={1.7} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Our Work / Programmes
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Gender Justice Programme
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
          PLACEHOLDER CONTENT
      ===================================================== */}

      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-4xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-forest/10 bg-forest-soft p-8 sm:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Content in progress
            </p>
            <h2 className="mt-4 text-2xl font-bold leading-snug text-ink sm:text-3xl">
              Full programme details for Gender Justice Programme are being finalized.
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              This page will cover the programme&rsquo;s goal and intervention
              focus areas, in the same structure as our Education Justice
              Programme page. Get in touch if you&rsquo;d like to learn more
              in the meantime.
            </p>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          GET INVOLVED CTA
      ===================================================== */}

      <section className="bg-forest px-6 py-16 text-center text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Support this programme
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
