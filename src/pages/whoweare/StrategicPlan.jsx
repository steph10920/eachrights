import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Handshake,
  Users,
  GraduationCap,
  HeartPulse,
  Leaf,
  Briefcase,
  Globe,
  Building2,
} from "lucide-react";

// Loads whichever images exist in src/assets/strategicplan/ so a missing
// file no longer breaks the build. Name files gender, education, health,
// environment, economic, upr, institutional (.jpeg, .jpg, .png or .webp).
const imageFiles = import.meta.glob("../../assets/strategicplan/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
});

function getImage(name) {
  const match = Object.keys(imageFiles).find((path) =>
    new RegExp(`/${name}\\.(jpeg|jpg|png|webp)$`).test(path)
  );
  return match ? imageFiles[match] : null;
}

/* =========================================================
   SHARED HELPERS — match WhoWeAre.jsx's design language
========================================================= */

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
   STRATEGIC FOCUS AREAS (Chapter Four of the plan)
========================================================= */

const focusAreas = [
  {
    icon: Users,
    title: "Gender Justice",
    image: getImage("gender"),
    alt: "Gender justice work with women and girls",
    goal: "To contribute to a society where both men and women enjoy equal rights and opportunities across all sectors, including meaningful participation in governance and decision-making.",
    interventions: [
      "Intersecting issues of gender norms, gender inequality, and gender-based violence in Kenya.",
      "Strengthen the participation of women in governance and decision-making.",
      "Monitor the implementation of gender responsive policies, laws, and budgets.",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education Justice",
    image: getImage("education"),
    alt: "Children learning in a classroom",
    goal: "To enhance the right to education among vulnerable and marginalized groups and communities.",
    interventions: [
      "Promote access to education for vulnerable and marginalized groups and communities.",
    ],
  },
  {
    icon: HeartPulse,
    title: "Health Justice",
    image: getImage("health"),
    alt: "Community members accessing health services",
    goal: "To promote access to healthcare among vulnerable and marginalized groups and communities.",
    interventions: [
      "Promote the realization of the right to health.",
      "Promote the realization of sexual and reproductive health and rights (SRHR).",
    ],
  },
  {
    icon: Leaf,
    title: "Environmental and Climate Justice",
    image: getImage("environment"),
    alt: "Community responding to climate change",
    goal: "To contribute to the reduction of the impact of environmental and climate change on vulnerable and marginalised groups and communities.",
    interventions: [
      "Promote environmental and climate adaptation and mitigation strategies.",
      "Strengthen environmental and climate accountability.",
    ],
  },
  {
    icon: Briefcase,
    title: "Economic Justice, Business and Human Rights",
    image: getImage("economic"),
    alt: "Workers and decent work",
    goal: "To contribute to a society where there are equal economic opportunities for all individuals.",
    interventions: [
      "Promote the right to decent work and employment.",
      "Enhance adherence to the Guiding Principle on Business and Human Rights.",
      "Promote adherence to the Environmental, Social, and Governance Framework.",
    ],
  },
  {
    icon: Globe,
    title: "The Universal Periodic Review",
    image: getImage("upr"),
    alt: "UPR Kenya stakeholders meeting",
    goal: "To enhance the utilisation of the UPR mechanism.",
    interventions: [
      "Coordination of UPR Kenya.",
      "Advocacy on EACHRights thematic focus areas using the UPR mechanism.",
    ],
  },
  {
    icon: Building2,
    title: "Institutional Growth and Sustainability",
    image: getImage("institutional"),
    alt: "The EACHRights team at work",
    goal: "Enhanced institutional effectiveness, growth, and sustainability.",
    interventions: [
      "Strengthen organizational leadership and governance.",
      "Human Resource Management.",
      "Fundraising and resource mobilization.",
      "Strengthen finance systems and internal controls.",
      "Risk and compliance.",
      "Communication and visibility.",
      "Data and Information System Management and Security.",
      "Monitoring, Evaluation, and Learning.",
    ],
  },
];

/* =========================================================
   THEORY OF CHANGE (section 3.5 of the plan)
========================================================= */

const outcomes = [
  "Increased awareness and capacity of groups and communities to claim their rights",
  "Strengthened grassroots advocacy and community engagement in policy processes",
  "Improved access to essential services in education, health, and economic opportunities",
  "Enhanced resilience and adaptive capacity to climate change",
  "Reduced gender and economic disparities through systemic reforms",
];

/* =========================================================
   STRATEGIC PLAN PAGE
========================================================= */

export default function StrategicPlan() {
  return (
    <main className="bg-paper font-sans text-ink">
      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-forest text-paper">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border-[25px] border-[#8DC63F]/10" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full border-[25px] border-paper/5" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
          <div className="max-w-3xl">
            <h1 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Strategic Plan 2026 – 2030,
              <span className="block text-[#8DC63F]">promoting social and economic rights in East Africa.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              Our strategic vision, mission, and ambitions, along with the intervention strategies to achieve
              them.
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:py-28 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl font-bold leading-tight text-forest sm:text-5xl">
            A bold vision and a focused framework.
          </h2>
          <p className="mt-6 text-base leading-8 text-ink/75">
            This Strategic Plan articulates a bold vision and provides a focused framework to guide The East
            African Centre for Human Rights (EACHRights). By clearly defining the thematic priorities,
            strategic approaches, and institutional objectives, the Plan positions the organization to deliver
            targeted, effective interventions across Kenya and the wider East African region.
          </p>
          <p className="mt-4 text-base leading-8 text-ink/75">
            This Plan was developed through a highly participatory and consultative process, involving
            EACHRights’ staff and stakeholders who took part in structured workshops and dialogue sessions.
          </p>
          <p className="mt-4 text-base leading-8 text-ink/75">
            These engagements shaped forward-looking goals aimed at fostering organizational growth,
            resilience, and long-term impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-forest-light p-8 sm:p-10"
        >
          <IconBox icon={Target} large />
          <h3 className="mt-6 text-2xl font-bold leading-snug text-forest sm:text-3xl font-display">
            Anchored on seven strategic focus areas.
          </h3>
          <p className="mt-5 leading-7 text-ink/70">
            The strategic focus areas are largely informed by the lessons learnt, conclusions, and
            recommendations from the analysis of EACHRights’ operating context, as well as a reflection on the
            organisational past performance and track record.
          </p>
          <div className="mt-6 h-1 w-16 bg-forest-dark" />
        </motion.div>
      </section>

      {/* STRATEGIC FOCUS AREAS */}
      <section className="bg-forest-light px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-forest sm:text-5xl font-display">
              Our strategic focus areas.
            </h2>
            <p className="mt-4 leading-7 text-ink/65">
              Each focus area has a programme goal and the interventions we will pursue to reach it.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {focusAreas.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: (index % 2) * 0.05 }}
                  className="overflow-hidden bg-paper shadow-sm"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="h-56 w-full object-cover"
                    />
                  )}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between">
                      <Icon size={30} className="text-forest-dark" strokeWidth={1.7} />
                      <span className="font-display text-sm font-bold text-[#8DC63F]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-forest font-display">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-ink/75">
                      <span className="font-bold text-forest">Programme goal: </span>
                      {item.goal}
                    </p>
                    <p className="mt-5 text-sm font-bold text-forest">Intervention focus areas</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-ink/65">
                      {item.interventions.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THEORY OF CHANGE */}
      <section className="relative overflow-hidden bg-forest px-6 py-24 text-paper">
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full border-[25px] border-[#8DC63F]/10" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl font-display">
            Our theory of change.
          </h2>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-[#8DC63F] font-display">Problem statement</h3>
              <p className="mt-3 leading-8 text-paper/80">
                Systemic inequalities limit the ability of vulnerable and marginalized groups and communities
                to access basic rights and influence decision-making processes in Kenya.
              </p>

              <h3 className="mt-10 text-lg font-bold text-[#8DC63F] font-display">Assumption</h3>
              <p className="mt-3 leading-8 text-paper/80">
                If vulnerable and marginalized groups and communities are empowered with knowledge, resources,
                and platforms to advocate for their rights, and if structural barriers are addressed through
                coordinated, rights-based interventions, then these groups and communities can become
                effective agents of change, driving social justice.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#8DC63F] font-display">Outcomes (short to medium term)</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-paper/80">
                {outcomes.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>

              <h3 className="mt-10 text-lg font-bold text-[#8DC63F] font-display">Impact (long-term goal)</h3>
              <p className="mt-3 leading-8 text-paper/80">
                Therefore, EACHRights’ long-term goal is a just and equitable society where vulnerable and
                marginalized groups and communities are empowered to advocate for and enjoy equitable access
                to education, healthcare, climate resilience, and economic and gender justice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA — mirrors WhoWeAre's final CTA */}
      <section className="bg-paper px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <Handshake size={48} strokeWidth={1.3} className="mx-auto text-[#8DC63F]" />
          <h2 className="mt-6 text-4xl font-bold text-forest sm:text-5xl font-display">Help us deliver this plan.</h2>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-ink/70">
            We look forward to vibrant collaborations as we work to deliver the goals contained herein.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-[#8DC63F] px-7 py-3.5 font-bold text-forest transition hover:brightness-105"
          >
            Contact EACHRights
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
