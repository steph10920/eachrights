import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Handshake,
  Users,
  GraduationCap,
  HeartPulse,
  Leaf,
  Briefcase,
  Globe,
  Building2,
} from "lucide-react";

// Loads whatever files are in src/assets/strategicplan/ and matches each
// focus area by file name, ignoring capital letters and the extension.
// Expected names: gender, education, health, environment, economic, upr,
// institutional (for example Health.JPG or health.jpeg both work).
const imageFiles = import.meta.glob("../../assets/strategicplan/*", {
  eager: true,
  import: "default",
});

function getImage(name) {
  const match = Object.keys(imageFiles).find((path) => {
    const file = path.split("/").pop().toLowerCase();
    return file.startsWith(name);
  });

  if (!match && import.meta.env.DEV) {
    console.warn(
      `StrategicPlan: no image found for "${name}". Files found:`,
      Object.keys(imageFiles).map((path) => path.split("/").pop())
    );
  }

  return match ? imageFiles[match] : null;
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
  const reduce = useReducedMotion();

  return (
    <main className="bg-paper font-sans text-ink">
      {/* HERO */}
      <section className="relative overflow-hidden bg-forest text-paper">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full border-[28px] border-[#8DC63F]/10" />
        <div className="pointer-events-none absolute -bottom-48 -left-40 h-96 w-96 rounded-full border-[28px] border-paper/5" />

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
        >
          <div className="mb-6 h-1 w-20 bg-[#8DC63F]" />
          <h1 className="max-w-5xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Strategic Plan 2026 – 2030
          </h1>
          <p className="mt-6 max-w-3xl font-display text-2xl leading-snug text-[#8DC63F] sm:text-3xl">
            Promoting social and economic rights in East Africa.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Our strategic vision, mission, and ambitions, along with the intervention strategies to achieve
            them.
          </p>
        </motion.div>
      </section>

      {/* OVERVIEW + INDEX */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-12 lg:py-32">
        <div>
          <h2 className="font-display text-4xl font-bold leading-tight text-forest sm:text-5xl">
            A bold vision and a focused framework.
          </h2>
          <p className="mt-8 text-lg leading-8 text-ink/80">
            This Strategic Plan articulates a bold vision and provides a focused framework to guide The East
            African Centre for Human Rights (EACHRights). By clearly defining the thematic priorities,
            strategic approaches, and institutional objectives, the Plan positions the organization to deliver
            targeted, effective interventions across Kenya and the wider East African region.
          </p>
          <p className="mt-5 leading-8 text-ink/70">
            This Plan was developed through a highly participatory and consultative process, involving
            EACHRights’ staff and stakeholders who took part in structured workshops and dialogue sessions.
          </p>
          <p className="mt-5 leading-8 text-ink/70">
            These engagements shaped forward-looking goals aimed at fostering organizational growth,
            resilience, and long-term impact.
          </p>
        </div>

        <aside className="self-start bg-forest-light p-8 sm:p-10 lg:sticky lg:top-28">
          <h3 className="font-display text-2xl font-bold leading-snug text-forest">
            Anchored on seven strategic focus areas.
          </h3>
          <p className="mt-4 text-sm leading-7 text-ink/70">
            The strategic focus areas are largely informed by the lessons learnt, conclusions, and
            recommendations from the analysis of EACHRights’ operating context, as well as a reflection on the
            organisational past performance and track record.
          </p>
          <ol className="mt-6 border-t border-forest/15">
            {focusAreas.map((item, index) => (
              <li key={item.title} className="border-b border-forest/15">
                <a
                  href={`#focus-${index + 1}`}
                  className="flex items-baseline gap-4 py-3 text-forest transition hover:text-forest-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8DC63F]"
                >
                  <span className="w-5 shrink-0 font-display text-sm font-bold text-[#8DC63F]">
                    {index + 1}
                  </span>
                  <span className="font-semibold leading-snug">{item.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </aside>
      </section>

      {/* FOCUS AREAS: one full-width row each, alternating sides */}
      <div>
        {focusAreas.map((item, index) => {
          const Icon = item.icon;
          const imageFirst = index % 2 === 0;
          return (
            <section
              key={item.title}
              id={`focus-${index + 1}`}
              className={`scroll-mt-20 ${index % 2 === 0 ? "bg-white" : "bg-forest-light"}`}
            >
              <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-2">
                <div className={imageFirst ? "" : "lg:order-2"}>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="h-72 w-full object-cover sm:h-96 lg:h-full lg:min-h-[520px]"
                    />
                  ) : (
                    <div className="flex h-72 w-full items-center justify-center bg-forest text-[#8DC63F] sm:h-96 lg:h-full lg:min-h-[520px]">
                      <Icon size={72} strokeWidth={1.2} />
                    </div>
                  )}
                </div>

                <div className="px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
                  <div className="flex items-center gap-3 text-[#8DC63F]">
                    <Icon size={26} strokeWidth={1.8} />
                    <span className="font-display text-lg font-bold">Focus area {index + 1}</span>
                  </div>
                  <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-forest sm:text-4xl">
                    {item.title}
                  </h2>

                  <div className="mt-8 border-l-4 border-[#8DC63F] pl-5">
                    <p className="text-sm font-bold text-forest-dark">Programme goal</p>
                    <p className="mt-2 font-display text-xl leading-snug text-forest">{item.goal}</p>
                  </div>

                  <h3 className="mt-10 text-sm font-bold text-forest-dark">Intervention focus areas</h3>
                  <ul className="mt-3 divide-y divide-forest/15 border-y border-forest/15">
                    {item.interventions.map((line) => (
                      <li key={line} className="flex gap-3 py-3 text-sm leading-6 text-ink/75">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#8DC63F]" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* THEORY OF CHANGE: four connected stages */}
      <section className="relative overflow-hidden bg-forest px-6 py-24 text-paper sm:px-8 lg:px-12 lg:py-32">
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full border-[25px] border-[#8DC63F]/10" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our theory of change.
          </h2>

          <ol className="mt-16 grid gap-12 lg:grid-cols-4 lg:gap-8">
            {[
              {
                label: "Problem statement",
                body: (
                  <p>
                    Systemic inequalities limit the ability of vulnerable and marginalized groups and
                    communities to access basic rights and influence decision-making processes in Kenya.
                  </p>
                ),
              },
              {
                label: "Assumption",
                body: (
                  <p>
                    If vulnerable and marginalized groups and communities are empowered with knowledge,
                    resources, and platforms to advocate for their rights, and if structural barriers are
                    addressed through coordinated, rights-based interventions, then these groups and
                    communities can become effective agents of change, driving social justice.
                  </p>
                ),
              },
              {
                label: "Outcomes (short to medium term)",
                body: (
                  <ul className="list-disc space-y-2 pl-5">
                    {outcomes.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                ),
              },
              {
                label: "Impact (long-term goal)",
                body: (
                  <p>
                    Therefore, EACHRights’ long-term goal is a just and equitable society where vulnerable and
                    marginalized groups and communities are empowered to advocate for and enjoy equitable
                    access to education, healthcare, climate resilience, and economic and gender justice.
                  </p>
                ),
              },
            ].map((stage, index) => (
              <li key={stage.label} className="relative border-t-2 border-[#8DC63F]/50 pt-8">
                <span className="absolute -top-[9px] left-0 h-4 w-4 rounded-full bg-[#8DC63F]" />
                <span className="font-display text-sm font-bold text-[#8DC63F]">Stage {index + 1}</span>
                <h3 className="mt-2 font-display text-xl font-bold text-white">{stage.label}</h3>
                <div className="mt-4 text-sm leading-7 text-paper/80">{stage.body}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-paper px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Handshake size={44} strokeWidth={1.3} className="text-[#8DC63F]" />
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-forest sm:text-5xl">
              Help us deliver this plan.
            </h2>
            <p className="mt-5 leading-8 text-ink/70">
              We look forward to vibrant collaborations as we work to deliver the goals contained herein.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 self-start bg-[#8DC63F] px-7 py-3.5 font-bold text-forest transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest lg:self-auto"
          >
            Contact EACHRights
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
