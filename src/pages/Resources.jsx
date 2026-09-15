import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FileText,
  Download,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  BookOpen,
  Search,
} from "lucide-react";
import { useState } from "react";

const publications = [
  {
    title: "EACHRights Annual Report 2025",
    category: "Annual Reports",
    year: "2025",
    description:
      "An overview of EACHRights programmes, activities, achievements, partnerships and organizational priorities during 2025.",
    pdf: "/publications/eachrights-annual-report-2025.pdf",
  },
  {
    title: "Education Justice Programme",
    category: "Programme Publications",
    year: "2026",
    description:
      "An overview of the Education Justice Programme and its commitment to advancing the right to accessible, inclusive and equitable education.",
    pdf: "/publications/education-justice-programme.pdf",
  },
  {
    title: "Gender Justice Programme",
    category: "Programme Publications",
    year: "2026",
    description:
      "An overview of EACHRights' approach to advancing gender equality and addressing structural inequalities affecting women and girls.",
    pdf: "/publications/gender-justice-programme.pdf",
  },
  {
    title: "Health Justice Programme",
    category: "Programme Publications",
    year: "2026",
    description:
      "A programme overview focused on advancing the right to health and improving access to equitable and quality healthcare.",
    pdf: "/publications/health-justice-programme.pdf",
  },
  {
    title: "Environmental & Climate Justice Programme",
    category: "Programme Publications",
    year: "2026",
    description:
      "An overview of efforts to address environmental and climate vulnerabilities affecting marginalized communities.",
    pdf: "/publications/environmental-climate-justice.pdf",
  },
  {
    title: "Economic Justice Programme",
    category: "Programme Publications",
    year: "2026",
    description:
      "A programme overview addressing economic inequalities and promoting the realization of economic and social rights.",
    pdf: "/publications/economic-justice-programme.pdf",
  },
  {
    title: "Business and Human Rights Programme",
    category: "Programme Publications",
    year: "2026",
    description:
      "An overview of the relationship between business activities, human rights and corporate accountability.",
    pdf: "/publications/business-human-rights-programme.pdf",
  },
  {
    title: "Strategic Plan",
    category: "Strategy & Planning",
    year: "2026",
    description:
      "EACHRights' strategic direction, priorities and institutional commitments for advancing human rights and social justice.",
    pdf: "/publications/eachrights-strategic-plan.pdf",
  },
];

const categories = [
  "All",
  "Annual Reports",
  "Programme Publications",
  "Strategy & Planning",
];

export default function Publications() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPublications = publications.filter((publication) => {
    const matchesCategory =
      activeCategory === "All" ||
      publication.category === activeCategory;

    const matchesSearch =
      publication.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      publication.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-white font-sans text-ink">

      {/* =====================================================
          HERO
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
            to="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Resources
          </Link>

          <div className="mt-10 max-w-3xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
              <BookOpen size={30} strokeWidth={1.7} />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Resources
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Publications
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Explore publications, reports and programme documents produced
              by EACHRights to advance human rights, justice and human dignity.
            </p>

          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 h-8 w-full bg-white"
          style={{
            clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
          }}
          aria-hidden="true"
        />

      </section>


      {/* =====================================================
          PUBLICATIONS
      ===================================================== */}

      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

        <div className="mx-auto max-w-7xl">

          {/* SEARCH */}

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                Knowledge Resources
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Our Publications
              </h2>

              <div className="mt-4 h-1 w-16 rounded-full bg-forest" />
            </div>

            <div className="relative w-full lg:max-w-sm">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="search"
                placeholder="Search publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/10"
              />

            </div>

          </div>


          {/* CATEGORY FILTER */}

          <div className="mt-10 flex flex-wrap gap-2">

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-forest text-white"
                    : "bg-forest-soft text-forest hover:bg-forest/10"
                }`}
              >
                {category}
              </button>
            ))}

          </div>


          {/* PUBLICATION GRID */}

          {filteredPublications.length > 0 ? (

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {filteredPublications.map((publication, index) => (

                <motion.article
                  key={publication.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                  className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* PDF ICON */}

                  <div className="flex items-start justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest-soft text-forest">
                      <FileText
                        size={27}
                        strokeWidth={1.7}
                      />
                    </div>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                      PDF
                    </span>

                  </div>


                  {/* CATEGORY */}

                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.15em] text-forest">
                    {publication.category}
                  </p>


                  {/* TITLE */}

                  <h3 className="mt-3 text-xl font-bold leading-snug text-ink">
                    {publication.title}
                  </h3>


                  {/* DATE */}

                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">

                    <CalendarDays size={16} />

                    <span>{publication.year}</span>

                  </div>


                  {/* DESCRIPTION */}

                  <p className="mt-5 flex-1 text-sm leading-7 text-gray-600">
                    {publication.description}
                  </p>


                  {/* ACTIONS */}

                  <div className="mt-7 flex flex-wrap gap-3 border-t border-gray-100 pt-5">

                    <a
                      href={publication.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-forest px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-forest-dark"
                    >
                      <ExternalLink size={16} />
                      View PDF
                    </a>

                    <a
                      href={publication.pdf}
                      download
                      className="inline-flex items-center gap-2 rounded-lg border border-forest/20 px-4 py-2.5 text-sm font-semibold text-forest transition hover:bg-forest-soft"
                    >
                      <Download size={16} />
                      Download
                    </a>

                  </div>

                </motion.article>

              ))}

            </div>

          ) : (

            <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-16 text-center">

              <FileText
                size={40}
                className="mx-auto text-gray-400"
              />

              <h3 className="mt-5 text-xl font-bold text-ink">
                No publications found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try another search term or publication category.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          DOWNLOAD INFORMATION
      ===================================================== */}

      <section className="bg-forest-soft px-6 py-16 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-5xl">

          <div className="rounded-2xl border border-forest/10 bg-white p-8 sm:p-10">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-forest text-white">
                <Download size={23} />
              </div>

              <div>

                <h2 className="text-xl font-bold text-ink sm:text-2xl">
                  Access our publications
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
                  Our publications provide research, evidence, programme
                  information and knowledge that contribute to discussions on
                  human rights, social justice and sustainable development.
                  Publications are available in PDF format for viewing and
                  download.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-forest px-6 py-20 text-center text-white sm:px-8 lg:px-12">

        <div className="mx-auto max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Stay Connected
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Looking for more resources?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Explore our other resources or get in touch with EACHRights for
            more information about our work.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              to="/resources"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-forest transition hover:bg-forest-light"
            >
              All Resources
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}