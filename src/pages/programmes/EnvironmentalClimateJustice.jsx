import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Leaf,
  Target,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const focusAreas = [
  "Promote environmental and climate adaptation and mitigation strategies.",
  "Strengthen environmental and climate accountability.",
  "Build climate resilience among vulnerable and marginalised communities.",
  "Promote environmental rights and justice.",
  "Increase climate change awareness and environmental education.",
  "Promote youth and community participation in climate action.",
  "Support sustainable natural resource management.",
  "Advocate for effective environmental and climate policies and governance.",
  "Conduct research, advocacy and evidence generation.",
  "Support community-led environmental protection and conservation initiatives.",
];

const outcomes = [
  "Increased awareness of environmental and climate rights.",
  "Stronger community capacity to adapt to climate change.",
  "Greater adoption of sustainable environmental practices.",
  "Increased participation of vulnerable communities in environmental decision-making.",
  "Improved accountability for environmental and climate commitments.",
  "Stronger implementation of environmental and climate policies and laws.",
  "Increased youth and community engagement in climate action.",
  "Improved protection and sustainable management of natural resources.",
  "Stronger evidence-based environmental and climate advocacy.",
];

export default function EnvironmentalClimateJustice() {
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
              <Leaf size={28} strokeWidth={1.7} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Our Work / Programmes
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Environmental & Climate Justice Programme
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Advancing environmental rights, climate resilience and
              accountability for vulnerable and marginalised communities.
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
              Environmental & Climate Justice
            </p>

            <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Protecting people, communities and the environment
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-8 text-gray-600">
              <p>
                Climate change poses an existential threat to humanity and
                threatens ecosystems, livelihoods, health, food security,
                water resources and the enjoyment of human rights.
              </p>

              <p>
                Vulnerable and marginalised groups and communities often bear
                a disproportionate burden of environmental degradation and
                climate change despite contributing the least to the problem.
                Droughts, floods, rising temperatures, pollution, land
                degradation and biodiversity loss can deepen poverty and
                inequality.
              </p>

              <p>
                In response to Sustainable Development Goal 13 on Climate
                Action, EACHRights, through the Environmental and Climate
                Justice Programme, aims to contribute to reducing the impact
                of environmental and climate change on vulnerable and
                marginalised groups and communities.
              </p>

              <p>
                The programme uses a human rights-based approach that promotes
                participation, equality, non-discrimination, access to
                information, accountability and meaningful community
                engagement in environmental and climate action.
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
              To contribute to the reduction of the impact of environmental
              and climate change on vulnerable and marginalised groups and
              communities.
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
              We work with communities and partners to advance climate
              resilience, environmental protection and accountability.
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
                <p className="font-medium leading-7 text-gray-700">{item}</p>
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
            Support environmental and climate justice
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
            Partner with us to strengthen climate resilience, environmental
            protection and accountability for vulnerable communities.
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