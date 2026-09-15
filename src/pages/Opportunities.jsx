
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  Users,
  ArrowRight,
  Bell,
  CheckCircle2,
  Handshake,
  FileText,
  Mail,
} from "lucide-react";

const opportunityTypes = [
  {
    icon: BriefcaseBusiness,
    title: "Employment",
    description:
      "When employment opportunities become available, EACHRights will publish vacancies for professionals committed to advancing human rights, equality and social justice.",
  },
  {
    icon: GraduationCap,
    title: "Internships",
    description:
      "Internship opportunities may be available for students and recent graduates seeking practical experience in human rights, research, advocacy, communications, programmes and administration.",
  },
  {
    icon: HeartHandshake,
    title: "Volunteering",
    description:
      "We welcome individuals who are willing to contribute their time, skills and experience to support our programmes and strengthen the communities we serve.",
  },
  {
    icon: FileText,
    title: "Consultancies",
    description:
      "Consultancy opportunities may be advertised for qualified experts and specialists to support research, programme implementation, evaluation and institutional assignments.",
  },
  {
    icon: Users,
    title: "Fellowships & Learning",
    description:
      "From time to time, EACHRights may participate in fellowships, learning programmes and professional development opportunities.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description:
      "We collaborate with organisations, institutions, researchers, communities and other stakeholders interested in advancing human rights and social justice.",
  },
];

function Opportunities() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#0b5d3b] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b5d3b] to-[#08472e]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">

            <motion.p
              className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-white/70"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Opportunities
            </motion.p>

            <motion.h1
              className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Work With EACHRights
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl leading-relaxed text-white/85 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Explore opportunities to contribute to the advancement of human
              dignity, equality, social justice and the realization of
              economic, social and cultural rights.
            </motion.p>

            {/* CURRENT STATUS */}
            <motion.div
              className="mt-10 max-w-3xl bg-white text-[#12372a] rounded-2xl p-6 md:p-7 shadow-xl"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <div className="flex items-start gap-4">

                <div className="shrink-0 w-11 h-11 rounded-full bg-[#e8f5ef] flex items-center justify-center">
                  <Bell className="w-5 h-5 text-[#0b5d3b]" />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    No Current Vacancies
                  </h2>

                  <p className="mt-2 text-gray-600 leading-relaxed">
                    EACHRights is currently not hiring. There are no open
                    employment vacancies at this time. Please check this page
                    regularly for future opportunities.
                  </p>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0b5d3b]">
                Opportunities at EACHRights
              </p>

              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#12372a]">
                Building a community of changemakers
              </h2>
            </div>

            <div className="space-y-5 text-gray-600 leading-relaxed text-lg">

              <p>
                EACHRights recognises that meaningful social change requires
                people with diverse skills, experiences, perspectives and a
                strong commitment to human rights.
              </p>

              <p>
                This page provides information about opportunities to engage
                with EACHRights, including employment, internships,
                volunteering, consultancies, fellowships and partnerships.
              </p>

              <p>
                Whenever opportunities become available, we will publish the
                relevant details, eligibility requirements, application
                procedures and closing dates through our official
                communication channels.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          OPPORTUNITY TYPES
      ========================================================= */}
      <section className="bg-[#f3faf6] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0b5d3b]">
              Ways to engage
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#12372a]">
              Explore opportunities with EACHRights
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Opportunities vary depending on organisational needs,
              programmes, projects and available resources.
            </p>

          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {opportunityTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow"
                >

                  <div className="w-12 h-12 rounded-xl bg-[#e8f5ef] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#0b5d3b]" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#12372a]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                </motion.article>
              );
            })}

          </div>
        </div>
      </section>

      {/* =========================================================
          CURRENT VACANCIES
      ========================================================= */}
      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden">

            <div className="h-2 bg-[#0b5d3b]" />

            <div className="p-8 md:p-12 text-center">

              <div className="mx-auto w-16 h-16 rounded-full bg-[#e8f5ef] flex items-center justify-center">
                <BriefcaseBusiness className="w-7 h-7 text-[#0b5d3b]" />
              </div>

              <h2 className="mt-6 text-3xl font-bold text-[#12372a]">
                Current Vacancies
              </h2>

              <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                There are currently no open employment positions at
                EACHRights.
              </p>

              <div className="mt-7 flex items-center justify-center gap-3 text-[#0b5d3b] font-medium">
                <CheckCircle2 className="w-5 h-5" />
                <span>
                  New opportunities will be announced on this page.
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          STAY UPDATED
      ========================================================= */}
      <section className="bg-[#0b5d3b] text-white py-20 lg:py-24">

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">

          <div className="mx-auto w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
            <Bell className="w-7 h-7" />
          </div>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold">
            Stay Updated
          </h2>

          <p className="mt-4 text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Check this page regularly and follow EACHRights' official
            communication channels for announcements about new opportunities,
            calls for applications and other ways to engage with our work.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              to="/resources"
              className="inline-flex items-center gap-2 bg-white text-[#0b5d3b] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Explore Resources
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/50 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Contact EACHRights
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

        </div>
      </section>

      {/* =========================================================
          GET INVOLVED
      ========================================================= */}
      <section className="py-20 lg:py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="rounded-3xl bg-[#f3faf6] p-8 md:p-12">

            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">

              <div>

                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0b5d3b]">
                  Get involved
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#12372a]">
                  Want to contribute to our work?
                </h2>

                <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
                  Even when there are no vacancies, there may be opportunities
                  to engage through partnerships, research, knowledge sharing,
                  volunteering or other forms of collaboration.
                </p>

              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0b5d3b] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#08472e] transition whitespace-nowrap"
              >
                Get Involved
                <ArrowRight className="w-4 h-4" />
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          APPLICATION INFORMATION
      ========================================================= */}
      <section className="border-t border-gray-200 py-16">

        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">

          <Mail className="w-7 h-7 text-[#0b5d3b] mx-auto" />

          <h2 className="mt-4 text-2xl font-bold text-[#12372a]">
            Important Application Information
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl mx-auto">
            When opportunities become available, EACHRights will provide
            official application instructions, eligibility requirements and
            submission details. Applicants should rely only on information
            published through official EACHRights communication channels.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            EACHRights does not require applicants to pay a fee to apply for
            an opportunity.
          </p>

        </div>
      </section>

    </main>
  );
}

export default Opportunities;

