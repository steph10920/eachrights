import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  Target,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const focusAreas = [
  "Promote the right to decent work and employment.",
  "Enhance adherence to the Guiding Principles on Business and Human Rights.",
  "Promote adherence to the Environmental, Social and Governance Framework.",
  "Strengthen business and human rights accountability.",
  "Promote community rights and meaningful participation.",
  "Protect labour rights and workplace equality.",
  "Promote access to remedy and justice for affected communities.",
  "Encourage responsible investment and sustainable development.",
  "Promote environmental responsibility and corporate accountability.",
  "Conduct research, advocacy and policy engagement.",
  "Build capacity and awareness on economic rights and responsible business.",
  "Promote inclusive economic opportunities for vulnerable and marginalised groups.",
];

const outcomes = [
  "Increased awareness and protection of economic and labour rights.",
  "Improved access to decent work and employment opportunities.",
  "Greater respect for human rights by businesses.",
  "Increased adoption of responsible and sustainable business practices.",
  "Stronger implementation of the UN Guiding Principles on Business and Human Rights.",
  "Greater integration of ESG considerations into business decision-making.",
  "Improved participation of communities in business and development projects.",
  "Stronger accountability for business-related human rights impacts.",
  "Improved access to grievance mechanisms and effective remedies.",
  "Reduced negative environmental and social impacts associated with business activities.",
  "Stronger policies and practices supporting inclusive economic development.",
  "Increased economic opportunities for vulnerable and marginalised groups.",
];

export default function EconomicJustice() {
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
              <BriefcaseBusiness size={28} strokeWidth={1.7} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Our Work / Programmes
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Economic Justice, Business & Human Rights Programme
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Advancing economic rights, decent work and responsible business
              practices that respect people, communities and the environment.
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
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
              Economic Justice & Business
            </p>

            <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Advancing economic rights and responsible business
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-8 text-gray-600">
              <p>
                We recognise that the violation of economic rights can have a
                profound impact on individuals, workers and communities.
                Businesses in Kenya, as elsewhere in the world, can make
                significant contributions to human rights and economic
                development.
              </p>

              <p>
                Businesses contribute positively through employment creation,
                increased public revenue through tax payments, provision of
                goods and services, innovation and investments that can improve
                people's quality of life.
              </p>

              <p>
                At the same time, business activities can have negative impacts
                on human rights, including violations of labour rights,
                displacement of communities, inadequate consultation or
                compensation, unsafe working conditions and environmental
                pollution.
              </p>

              <p>
                The Economic Justice, Business and Human Rights Programme
                therefore works at the intersection of economic rights,
                responsible business conduct and human rights. The programme
                is guided by the Guiding Principles on Business and Human
                Rights and the Environmental, Social and Governance (ESG)
                Framework.
              </p>

              <p>
                Through research, advocacy, capacity building, community
                engagement and accountability initiatives, EACHRights seeks to
                promote economic opportunities and ensure that business
                activities respect the rights, dignity and wellbeing of
                individuals and communities.
              </p>
            </div>
          </motion.div>

          {/* GOAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 rounded-2xl bg-forest p-8 text-white sm:p-10"
          >
            <div className="flex items-center gap-3">
              <Target size={24} />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Programme Goal
              </p>
            </div>

            <p className="mt-5 text-2xl font-semibold leading-9 sm:text-3xl">
              To contribute to a society where there are equal economic
              opportunities for all individuals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="bg-forest-soft px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Intervention Focus Areas
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We promote economic justice, decent work and responsible
              business practices that respect human rights and communities.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {focusAreas.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="flex gap-4 rounded-xl bg-white p-6 shadow-sm"
              >
                <CheckCircle2
                  className="mt-1 shrink-0 text-forest"
                  size={21}
                />
                <p className="font-medium leading-7 text-gray-700">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPECTED OUTCOMES */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
              Our Impact
            </p>

            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Expected Change
            </h2>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-5 md:grid-cols-2">
            {outcomes.map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2
                  className="mt-1 shrink-0 text-forest"
                  size={20}
                />
                <p className="leading-7 text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest px-6 py-16 text-center text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Support economic justice
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
            Partner with us to advance economic rights, decent work and
            responsible business practices across communities.
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