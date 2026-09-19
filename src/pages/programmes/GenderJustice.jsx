import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Scale,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Users,
  Landmark,
  FileCheck,
  Gavel,
  BriefcaseBusiness,
  BookOpen,
  Search,
} from "lucide-react";

const focusAreas = [
  {
    icon: Scale,
    title: "Gender Equality & Social Norms",
    text: "Address intersecting issues of gender norms, discrimination, gender inequality, and harmful practices that limit the rights and opportunities of women and girls.",
  },
  {
    icon: ShieldCheck,
    title: "Gender-Based Violence",
    text: "Promote prevention, protection, access to justice, and accountability in addressing gender-based violence and supporting survivors.",
  },
  {
    icon: Users,
    title: "Women in Governance",
    text: "Strengthen the meaningful participation and representation of women in leadership, governance, and decision-making processes.",
  },
  {
    icon: FileCheck,
    title: "Gender-Responsive Policies",
    text: "Monitor and advocate for the effective implementation of gender-responsive policies, laws, programmes, and budgets.",
  },
  {
    icon: Gavel,
    title: "Access to Justice",
    text: "Support efforts to remove barriers to justice and strengthen access to legal information, remedies, protection, and accountability.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Economic Empowerment",
    text: "Advocate for equal access to economic opportunities, employment, education, skills, resources, and social protection.",
  },
  {
    icon: BookOpen,
    title: "Capacity Building",
    text: "Build the capacity of communities, institutions, duty bearers, and other stakeholders to promote and protect gender equality.",
  },
  {
    icon: Search,
    title: "Research & Advocacy",
    text: "Generate evidence on gender justice issues and use research, advocacy, partnerships, and public engagement to influence positive change.",
  },
];

export default function GenderJustice() {
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
              <Scale size={28} strokeWidth={1.7} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Our Work / Programmes
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Gender Justice Programme
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Promoting gender equality, meaningful participation, access to
              justice, and equal opportunities for women and men.
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
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-start">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
                Gender Justice
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Advancing equality, dignity and participation
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Despite Kenya's ratification of international, regional, and
                national frameworks promoting gender equality, achieving
                substantive gender equality remains a challenge. Women and
                girls facing social, economic, cultural, and other forms of
                adversity are particularly affected by discrimination, unequal
                access to opportunities, violence, and limited participation in
                decision-making.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                The Gender Justice Programme seeks to contribute to a society
                where women and men enjoy equal rights and opportunities across
                all sectors. The programme applies a human rights-based
                approach to address structural and systemic barriers to gender
                equality while promoting meaningful participation, empowerment,
                accountability, and access to justice.
              </p>
            </motion.div>

            {/* GOAL */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-forest p-8 text-white sm:p-10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Scale size={24} />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Programme Goal
              </p>

              <p className="mt-4 text-xl font-semibold leading-8">
                To contribute to a society where both women and men enjoy equal
                rights and opportunities across all sectors, including
                meaningful participation in governance and decision-making.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="bg-forest-soft px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
              Intervention Areas
            </p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Where we focus our efforts
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              The programme works across interconnected areas that influence
              gender equality, participation, protection, and access to justice.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-2xl border border-forest/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest/10 text-forest">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-ink">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPECTED CHANGE */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
                Our Impact
              </p>

              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
                Creating lasting change
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Through research, advocacy, capacity building, partnerships,
                and community engagement, the programme seeks to strengthen
                systems that advance gender equality and protect the rights of
                women and girls.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Greater awareness of gender equality and women's rights.",
                "Increased participation of women in governance and decision-making.",
                "Improved implementation of gender-responsive laws, policies, and budgets.",
                "Stronger prevention and response to gender-based violence.",
                "Improved access to justice and protection for women and girls.",
                "Greater accountability among duty bearers and institutions.",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
                >
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-forest text-white">
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-sm leading-6 text-gray-600">{item}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest px-6 py-16 text-center text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Support gender justice
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
            Partner with us to promote equality, participation, accountability,
            and the protection of human rights across East Africa.
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
