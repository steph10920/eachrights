import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Handshake,
  Globe2,
  Scale,
  Users,
  FileCheck2,
  TrendingUp,
} from "lucide-react";

/* =========================================================
   SHARED HELPERS — match Home.jsx's design language
========================================================= */

function Eyebrow({ children, dark = false }) {
  return (
    <span className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-forest-dark" : "text-[#8DC63F]"}`}>
      {children}
    </span>
  );
}

function IconBox({ icon: Icon, large = false, onDark = false }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full ${
        onDark ? "bg-paper/10 text-[#8DC63F]" : "bg-[#8DC63F]/10 text-[#8DC63F]"
      } ${large ? "h-20 w-20" : "h-14 w-14"}`}
    >
      <Icon size={large ? 36 : 26} strokeWidth={1.7} />
    </div>
  );
}

/* =========================================================
   DATA
========================================================= */

const cycles = [
  { year: "2010", label: "1st Cycle" },
  { year: "2015", label: "2nd Cycle", detail: "253 recommendations received · 192 (76%) accepted" },
  { year: "2020", label: "3rd Cycle", detail: "319 recommendations received · 261 accepted, 53 noted" },
  { year: "2025", label: "4th Cycle", detail: "Kenya's next review, expected April 2025" },
];

const achievements = [
  "Sustained dedication and commitment to the Universal Periodic Review process among Kenyan stakeholders throughout each cycle.",
  "A growing number of CSOs and thematic groups joining the process ahead of the 3rd Cycle.",
  "Stronger recognition of the indivisibility and interrelatedness of human rights, bringing together organisations across different thematic areas.",
  "Coordinated fundraising and resource mobilization that kept the Universal Periodic Review process running with support from multiple organisations.",
  "In-depth research for the Mid-Term Report that produced a credible baseline for the 3rd Cycle review.",
  "Evidence-based advocacy, using credible data to support assertions and propose solutions that benefit the people of Kenya.",
  "Reinforcement that the Universal Periodic Review is a process, not an event — tracking issues from submission drafting through to implementation and the next Mid-Term Report.",
  "Expanded participation from previously underrepresented thematic groups, including Social Justice Centres, Persons with Disabilities, Counter Trafficking, and HIV/AIDS groups.",
  "Growing recognition among organisations of the value of the Universal Periodic Review, leading more to seek funding to support the process.",
];

export default function UniversalPeriodicReview() {
  return (
    <main className="bg-paper font-sans text-ink">
      {/* HERO */}
      <section className="relative overflow-hidden bg-forest text-paper">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border-[25px] border-[#8DC63F]/10" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full border-[25px] border-paper/5" />
        <div className="absolute left-0 right-0 top-0 z-20 h-1 bg-[#8DC63F]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Link
            to="/resources"
            className="mb-6 inline-flex text-sm font-medium text-white/75 transition hover:text-white"
          >
            ← Back to Resources
          </Link>

          <Eyebrow>Human Rights Mechanisms</Eyebrow>

          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Universal Periodic
            <span className="block text-[#8DC63F]">Review.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            A unique inter-governmental peer-review mechanism ensuring every UN Member State's human rights record
            is reviewed on equal footing, every five years.
          </p>
        </div>
      </section>

      {/* WHAT IS THE Universal Periodic Review */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:py-28 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow dark>What Is the Universal Periodic Review.</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-forest sm:text-5xl">
            A State-driven
            <br />
            <span className="text-forest-dark">peer-review process.</span>
          </h2>
          <p className="mt-6 text-base leading-8 text-ink/75">
            In 2006, the UN General Assembly adopted Resolution 60/251, establishing the Human Rights Council to
            promote universal respect for human rights and fundamental freedoms across Member States. One of its
            key mandates is the Universal Periodic Review (Universal Periodic Review), which ensures the fulfilment of each State's
            human rights obligations and commitments.
          </p>
          <p className="mt-4 text-base leading-8 text-ink/75">
            Every one of the 194 UN Member States is reviewed every five years, under the same rules and
            supervision, regardless of size or political influence — giving each State an opportunity to declare
            what it has done to improve its human rights situation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-forest-light p-8 sm:p-10"
        >
          <IconBox icon={Globe2} large />
          <Eyebrow dark>A Process, Not an Event</Eyebrow>
          <h3 className="mt-4 text-2xl font-bold leading-snug text-forest sm:text-3xl font-display">
            Cooperation, not confrontation.
          </h3>
          <p className="mt-5 leading-7 text-ink/70">
            States must respond to every recommendation from their peers and report on the implementation of
            recommendations they previously accepted. The Universal Periodic Review complements the work of UN treaty bodies and remains
            a cooperative process requiring the full participation of the State under review.
          </p>
          <div className="mt-6 h-1 w-16 bg-forest-dark" />
        </motion.div>
      </section>

      {/* KENYA'S Universal Periodic Review PROCESS */}
      <section className="bg-forest-light px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <Eyebrow dark>Kenya's Universal Periodic Review Process</Eyebrow>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-forest sm:text-5xl font-display">
              Three cycles of review.
            </h2>
            <p className="mt-4 leading-7 text-ink/65">
              Kenya's human rights record has been reviewed by the UN Human Rights Council three times, with a
              fourth cycle set for April 2025.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cycles.map((cycle, index) => (
              <motion.div
                key={cycle.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-white p-6 shadow-sm"
              >
                <span className="font-display text-3xl font-bold text-[#8DC63F]">{cycle.year}</span>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-forest-dark">
                  {cycle.label}
                </p>
                {cycle.detail && (
                  <p className="mt-3 text-sm leading-6 text-ink/65">{cycle.detail}</p>
                )}
              </motion.div>
            ))}
          </div>

          <p className="mt-8 max-w-4xl leading-7 text-ink/70">
            In 2019, Kenya Stakeholders on the Universal Periodic Review undertook in-depth research establishing the level of
            implementation of accepted recommendations, captured in a Mid-Term Report launched and submitted to
            the Human Rights Council in Geneva. The Outcome Document of the 3rd Cycle review was formally adopted
            by the Council in June 2020.
          </p>
        </div>
      </section>

      {/* THE COALITION */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow dark>The Coalition</Eyebrow>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-forest sm:text-5xl font-display">
              Kenya's Stakeholders
              <br />
              <span className="text-forest-dark">Coalition on the Universal Periodic Review.</span>
            </h2>
            <p className="mt-6 leading-8 text-ink/75">
              The Coalition, known as Universal Periodic Review Kenya, brings together a membership of over 200 NGOs. It is led by a
              Steering Committee with technical support from the Kenya National Commission on Human Rights
              (KNCHR) and the UN Office of the High Commissioner on Human Rights (OHCHR).
            </p>
            <p className="mt-4 leading-8 text-ink/75">
              EACHRights serves as the Secretariat of the Kenya Stakeholders Coalition on the Universal Periodic Review.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            <div className="bg-white p-6 shadow-sm">
              <IconBox icon={Users} />
              <p className="mt-5 font-display text-2xl font-bold text-forest">200+</p>
              <p className="mt-1 text-sm text-ink/65">Member NGOs</p>
            </div>
            <div className="bg-white p-6 shadow-sm">
              <IconBox icon={Scale} />
              <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-forest-dark">EACHRights</p>
              <p className="mt-1 text-sm text-ink/65">Coalition Secretariat</p>
            </div>
            <div className="col-span-2 bg-white p-6 shadow-sm">
              <IconBox icon={FileCheck2} />
              <p className="mt-5 text-sm leading-6 text-ink/65">
                Technical support from the Kenya National Commission on Human Rights (KNCHR) and the UN Office of
                the High Commissioner on Human Rights (OHCHR).
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="bg-forest-light px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <Eyebrow dark>Achievements</Eyebrow>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-forest sm:text-5xl font-display">
              What the Coalition has achieved.
            </h2>
            <p className="mt-4 leading-7 text-ink/65">
              Progress made by Kenyan Universal Periodic Review Stakeholders during the 2nd Cycle process, including the development of
              the Mid-Term Report.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="flex gap-4 bg-white p-6 shadow-sm"
              >
                <span className="font-display text-2xl font-bold text-[#8DC63F]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-7 text-ink/70">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="relative overflow-hidden bg-forest px-6 py-20 text-paper">
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full border-[25px] border-[#8DC63F]/10" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.3fr_0.7fr] lg:items-start">
            <IconBox icon={TrendingUp} large onDark />
            <div>
              <Eyebrow>Why It Matters</Eyebrow>
              <h2 className="mt-4 text-2xl leading-9 text-white sm:text-3xl lg:text-4xl font-display">
                Advancing human rights nationally, regionally and globally.
              </h2>
              <p className="mt-6 max-w-4xl text-base leading-8 text-paper/70 sm:text-lg">
                No other universal mechanism of this kind exists. The Universal Periodic Review's ultimate aim is to improve the human
                rights situation in every country and address violations wherever they occur — and its success
                depends on sustained follow-through, not a single review event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-forest px-6 py-24 text-center text-paper">
        <div className="mx-auto max-w-3xl">
          <Handshake size={48} strokeWidth={1.3} className="mx-auto text-[#8DC63F]" />
          <h2 className="mt-6 text-4xl font-bold sm:text-5xl font-display">Get involved in the Universal Periodic Review process.</h2>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-paper/65">
            Learn how your organisation can join Kenya's Stakeholders Coalition on the Universal Periodic Review and contribute to
            advancing human rights across the country.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#8DC63F] px-7 py-3.5 font-bold text-forest transition hover:brightness-105"
            >
              Contact EACHRights
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 border-2 border-dashed border-[#8DC63F] px-7 py-3.5 font-bold text-[#8DC63F] transition hover:bg-[#8DC63F]/10"
            >
              Explore More Resources
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
