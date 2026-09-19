import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Target,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const focusAreas = [
  "Promote access to education for vulnerable and marginalized groups and communities.",
  "Promote girl-child education, including enrolment, retention, completion, and transition across levels of education.",
  "Strengthen foundational learning and access to quality early childhood education.",
  "Promote access to education for children and young people living in urban informal settlements.",
  "Advance equitable access to education for children and communities in rural, arid, and semi-arid areas.",
  "Promote inclusive education for learners facing disability, discrimination, exclusion, and other barriers.",
  "Support education, skills development, vocational opportunities, and lifelong learning for young people.",
  "Promote adult and continuing education, including literacy and skills development opportunities.",
  "Advocate for safe, inclusive, accessible, and child-friendly learning environments.",
  "Monitor and advocate for the implementation of education laws, policies, plans, programmes, and budgets.",
  "Conduct research and advocacy on emerging and persistent education justice issues.",
  "Strengthen the capacity and participation of communities, parents, learners, teachers, and other education stakeholders.",
];

export default function EducationJustice() {
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
              <GraduationCap size={28} strokeWidth={1.7} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Our Work / Programmes
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Education Justice Programme
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Advancing the right to quality, inclusive, equitable, and
              accessible education for vulnerable and marginalized communities.
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
              participate fully in their communities.&rdquo;
            </p>

            <cite className="mt-6 block text-sm font-semibold not-italic uppercase tracking-[0.15em] text-forest">
              General Comment No. 13 on the Right to Education, para. 1
            </cite>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-10 space-y-5 text-base leading-8 text-gray-600 sm:text-lg"
          >
            <p>
              Education is both a fundamental human right and an essential
              means of realizing other human rights. It enables economically
              and socially marginalized children and adults to overcome
              poverty and participate meaningfully in their communities. It
              also plays an important role in empowering women, protecting
              children from exploitative and hazardous labour and sexual
              exploitation, promoting human rights and democracy, protecting
              the environment, and advancing sustainable development.
            </p>

            <p>
              The Education Justice Programme therefore seeks to promote the
              right to quality, inclusive, equitable, and accessible education
              for all, with particular attention to vulnerable and marginalized
              groups and communities. The programme recognizes that barriers
              to education are often interconnected with poverty, geographical
              location, gender, disability, displacement, insecurity,
              inadequate infrastructure, and other social and economic factors.
            </p>

            <p>
              The programme covers{" "}
              <strong className="text-ink">
                pre-primary, primary, junior, secondary and senior school,
                vocational, adult, and continuing education
              </strong>
              . It implements and supports initiatives around girl-child
              education, foundational learning and early childhood education,
              education for children in urban informal settlements, education
              for children in rural, arid, and semi-arid areas, and education
              among young people.
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
                To enhance the right to education among vulnerable and
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
            Our interventions address the social, economic, geographical, and
            institutional barriers that prevent children, young people, and
            adults from accessing and benefiting from education.
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
            Advancing education for all
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Increased access to quality and inclusive education.",
              "Improved enrolment, retention, completion, and transition.",
              "Stronger foundational learning and early childhood education.",
              "Improved opportunities for learners in underserved communities.",
              "Greater access to vocational, adult, and continuing education.",
              "Stronger community participation in education accountability.",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
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
            Support the Education Justice Programme
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
            Partner with us to advance the right to education and create
            opportunities for vulnerable and marginalized communities.
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
