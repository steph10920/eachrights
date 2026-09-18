import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Handshake, Mail } from "lucide-react";

/*
|--------------------------------------------------------------------------
| ADD YOUR STAFF MEMBERS HERE
|--------------------------------------------------------------------------
| photo: path to an imported image (e.g. import photo1 from "../assets/team/jane-doe.jpg")
|        leave null to show a placeholder initial instead
*/

const leadership = [
  {
    name: "Jane Doe",
    role: "Executive Director",
    bio: "Leads EACHRights' strategic direction, partnerships and organisational governance.",
    photo: null,
    email: "",
  },
  {
    name: "John Smith",
    role: "Deputy Director, Programmes",
    bio: "Oversees programme design, delivery and impact across all thematic areas.",
    photo: null,
    email: "",
  },
];

const staff = [
  {
    name: "Amara Otieno",
    role: "Head of Advocacy",
    bio: "Leads policy engagement and advocacy campaigns across East Africa.",
    photo: null,
  },
  {
    name: "David Mwangi",
    role: "Legal & Litigation Officer",
    bio: "Coordinates public interest litigation and legal support for partner communities.",
    photo: null,
  },
  {
    name: "Grace Achieng",
    role: "Research & Evidence Lead",
    bio: "Designs and manages research that informs EACHRights' advocacy and programming.",
    photo: null,
  },
  {
    name: "Peter Kariuki",
    role: "Programmes Officer",
    bio: "Manages field programmes, partner relationships and community engagement.",
    photo: null,
  },
  {
    name: "Sarah Nabirye",
    role: "Communications Officer",
    bio: "Leads storytelling, media relations and public communications.",
    photo: null,
  },
  {
    name: "Michael Ouma",
    role: "Finance & Operations Manager",
    bio: "Manages finance, compliance and organisational operations.",
    photo: null,
  },
];

/* =========================================================
   SHARED HELPERS — match Home.jsx / About.jsx design language
========================================================= */

function Eyebrow({ children, dark = false }) {
  return (
    <span className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-forest-dark" : "text-accent"}`}>
      {children}
    </span>
  );
}

function Avatar({ name, photo, large = false }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        className={`w-full object-cover ${large ? "aspect-[4/5]" : "aspect-square"}`}
      />
    );
  }

  return (
    <div
      className={`flex w-full items-center justify-center bg-forest-light text-forest-dark ${
        large ? "aspect-[4/5]" : "aspect-square"
      }`}
    >
      <span className="font-display text-4xl font-bold">{initials}</span>
    </div>
  );
}

export default function Team() {
  return (
    <main className="min-h-screen bg-paper font-sans text-ink">

      {/* =====================================================
          HERO
      ===================================================== */}

      <header className="relative overflow-hidden bg-forest text-paper">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border-[25px] border-accent/10" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full border-[25px] border-paper/5" />
        <div className="absolute left-0 right-0 top-0 z-20 h-1 bg-accent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Link
            to="/about"
            className="mb-6 inline-flex text-sm font-medium text-white/75 transition hover:text-white"
          >
            ← Back to About
          </Link>

          <Eyebrow>Meet Our Team</Eyebrow>

          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
            The people advancing
            <span className="block text-accent">human rights every day.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            EACHRights is powered by a team of researchers, advocates, legal experts and programme staff working
            together to advance Economic, Social and Cultural Rights across East Africa.
          </p>
        </div>
      </header>

      {/* =====================================================
          LEADERSHIP
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <div className="mb-12 max-w-2xl">
          <Eyebrow dark>Leadership</Eyebrow>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-forest sm:text-5xl font-display">
            Guiding our mission.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {leadership.map((person, index) => (
            <motion.article
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="grid gap-6 bg-white p-6 shadow-sm sm:grid-cols-[160px_1fr] sm:p-7"
            >
              <div className="w-full max-w-[160px]">
                <Avatar name={person.name} photo={person.photo} large />
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold text-forest font-display">{person.name}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-forest-dark">
                  {person.role}
                </p>
                <p className="mt-3 text-sm leading-7 text-ink/65">{person.bio}</p>

                {person.email && (
                  <div className="mt-4 flex gap-3">
                    <a
                      href={`mailto:${person.email}`}
                      aria-label={`Email ${person.name}`}
                      className="flex h-9 w-9 items-center justify-center bg-forest-light text-forest-dark transition hover:bg-forest hover:text-paper"
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* =====================================================
          STAFF
      ===================================================== */}

      <section className="bg-forest-light px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <Eyebrow dark>Our Staff</Eyebrow>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-forest sm:text-5xl font-display">
              A multidisciplinary team.
            </h2>
            <p className="mt-4 leading-7 text-ink/65">
              Researchers, advocates, legal officers and programme staff working across our focus areas and
              regions.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((person, index) => (
              <motion.article
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden bg-white shadow-sm transition hover:shadow-xl"
              >
                <Avatar name={person.name} photo={person.photo} />

                <div className="p-5">
                  <h3 className="text-lg font-bold text-forest font-display">{person.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-forest-dark">
                    {person.role}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-ink/65">{person.bio}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          JOIN THE TEAM CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-forest-dark px-6 py-16 text-paper">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[25px] border-paper/10" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <Eyebrow>Join Us</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              Want to work with EACHRights?
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-paper/80">
              We're always looking for people who share our commitment to human rights and social justice. See
              our current openings.
            </p>
          </div>

          <Link
            to="/opportunities"
            className="inline-flex shrink-0 items-center gap-2 bg-accent px-7 py-3.5 font-bold text-forest shadow-lg transition hover:brightness-105"
          >
            View Opportunities
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-forest px-6 py-24 text-center text-paper">
        <div className="mx-auto max-w-3xl">
          <Handshake size={48} strokeWidth={1.3} className="mx-auto text-accent" />
          <h2 className="mt-6 text-4xl font-bold sm:text-5xl font-display">Be part of the change.</h2>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-paper/65">
            Whether through partnership, advocacy, research or support, there is a role for everyone in advancing
            human rights and social justice.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent px-7 py-3.5 font-bold text-forest transition hover:brightness-105"
            >
              Get Involved
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/donors"
              className="inline-flex items-center gap-2 border-2 border-dashed border-accent px-7 py-3.5 font-bold text-accent transition hover:bg-accent/10"
            >
              Support Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
