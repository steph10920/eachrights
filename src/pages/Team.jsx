import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Handshake, Mail } from "lucide-react";

/*
|--------------------------------------------------------------------------
| LOCAL IMAGE IMPORTS
|--------------------------------------------------------------------------
| Drop each person's photo into src/assets/team/ using the filenames below
| (kebab-case of their name), then these imports will resolve. Rename the
| import paths here if your actual filenames differ. Any photo you don't
| have yet: comment out its import line and set that person's `photo` back
| to `null` — the Avatar component will show an initials badge instead.
*/

// Board
import okeroOtieno from "../assets/team/Isaack.jpg";
import florenceAnnan from "../assets/team/Florence.jpg";
import fredrickKinama from "../assets/team/Fredrick.jpg";
import gilbertOnyangoBoard from "../assets/team/Gilbert.jpg";
import christineAlai from "../assets/team/Christine.jpg";
import julieKubai from "../assets/team/Julie.jpg";
import martinMavenjina from "../assets/team/Martin.jpg";
import allanOginga from "../assets/team/Allan.jpg";

// Leadership
import gilbertOnyango from "../assets/team/Gilbert.jpg";

// Staff
import marcelinoThuku from "../assets/team/Marcelino.jpg";
import johnstoneShisanya from "../assets/team/Johnstone.jpg";
import madinaMohamed from "../assets/team/Madina.jpeg";
import loisMwaniki from "../assets/team/Lois.jpg";
import janeOtieno from "../assets/team/Jane.jpg";
import samsonMutange from "../assets/team/Samson.jpg";
import mirriamMwongela from "../assets/team/Mirriam.jpg";
import pachuIbrahim from "../assets/team/Pachu.jpg";

/*
|--------------------------------------------------------------------------
| ADD YOUR BOARD MEMBERS HERE
|--------------------------------------------------------------------------
| Board members are volunteer governance leaders, shown separately from
| paid Leadership/Staff below. photo: an imported image (see imports
| above), or null for an initials badge.
*/

const board = [
  {
    name: "Okero Otieno",
    role: "Board Chairperson",
    photo: okeroOtieno,
    bio: "Mr. Okero Otieno is a democratic governance and public policy expert with over 22 years' experience across state, non-state, academic, and donor organizations in more than 15 sub-Saharan African countries. He currently serves as Chief Technical Advisor–Elections with UNDP Malawi, having previously held senior roles with UNDP Nigeria, IFES, UNDP Kenya, and Kenya's Ministry of Justice. A PhD candidate with advanced degrees in political science and development studies, he brings deep expertise in electoral systems, human rights, and institutional strengthening to his role as Board Chairperson.",
    email: "",
  },
  {
    name: "Florence Annan",
    role: "Vice Chair, Board of Directors",
    photo: florenceAnnan,
    bio: "Ms. Florence Annan is a human rights and governance practitioner with over 18 years' experience in civil society and government, specializing in partnerships and fundraising, organizational development, and policy advocacy. Her work spans land governance, gender and child protection, and devolution, including campaigns such as Keeping Girls in School, ShuleYangu Alliance, and the Nyandarua County Titling Program. She has contributed to the enactment of key human rights frameworks in Kenya and Somalia, including The Children Act and the Protection Against Domestic Violence Act. She currently serves as Fundraising and Partnership Manager at Amnesty International Kenya, and sits on the boards of The Change Trust and The Sports Development Trust.",
    email: "",
  },
  {
    name: "Fredrick K. Kinama",
    role: "Treasurer, Board of Directors",
    photo: fredrickKinama,
    bio: "Mr. Fredrick K. Kinama is a seasoned finance advisor with extensive experience managing financial systems and compliance across Africa, including roles with USDA/USAID in South Sudan, the Aga Khan Foundation in East Africa, Tearfund UK's West Africa WASH programs in Liberia, and Ignite the Orphan Africa-Kenya. He holds a Diploma in Business Management from Sigalagala Polytechnic College and a Bachelor of Business Administration from the Switzerland Centre for Management University, and is a Certified Public Accountant (CPA-K) accredited by KASNEB.",
    email: "",
  },
  {
    name: "Gilbert Onyango",
    role: "Executive Director and Founder",
    photo: gilbertOnyangoBoard,
    bio: "Mr. Gilbert Onyango is the Founder and a member of the Board of Trustees at EACHRights. His career began in 2002 as a legal intern with The CRADLE, rising to Deputy Director, before serving as Regional Deputy Director for the Canadian Bar Association's SAJEA Programme in Tanzania, Regional Director at EACHRights (2010–2015), and Regional Director for Africa at UPR Info (2015–2020). He resumed as Executive Director of EACHRights in November 2022. He holds an LL.B from Dr. BAM University, India, an M.Sc. in Management and Organisational Development from USIU-Africa, and an M.A. in Development Studies from Erasmus University Rotterdam, and was admitted to the Kenyan Bar in 2002.",
    email: "director@eachrights.or.ke",
  },
  {
    name: "Christine Alai",
    role: "Board Member",
    photo: christineAlai,
    bio: "Ms. Christine Alai is a human rights lawyer with 15 years' experience advancing equality, non-discrimination, and access to justice for victims of gross human rights violations and atrocity crimes across Kenya, South Sudan, and East and Central Africa. She is presently Transitional Justice Advisor to the UN Commission on Human Rights in South Sudan, and co-founder of Utu Wetu Trust, which focuses on preventing and responding to conflict-related sexual and gender-based violence.",
    email: "",
  },
  {
    name: "Julie M. Kubai",
    role: "Board Member",
    photo: julieKubai,
    bio: "Ms. Julie M. Kubai is an Auditor at the Office of the Auditor-General (OAG), where she has served since 2015, including five years in the Human Resource Department. She previously worked at the Kenya Trade Network Agency (KENTRADE) as a Trade Facilitator, contributing to the development and roll-out of the Kenya Single Window System (KESWS). She holds a Master of Arts in International Relations from the University of Nairobi and a Bachelor of Science in Hospitality Management from Strathmore University, and is currently pursuing CHRP certification.",
    email: "",
  },
  {
    name: "Martin Ray T. Mavenjina",
    role: "Board Member",
    photo: martinMavenjina,
    bio: "Mr. Martin Mavenjina is a Constitutional and Human Rights lawyer specializing in Civic Space, Security Governance, Counter Terrorism, and Transitional Justice. He currently serves as Senior Program Advisor for Transitional Justice at the Kenya Human Rights Commission, and has engaged with peer review mechanisms including the UN Human Rights Council and the African Commission on Human and Peoples' Rights. He holds a Bachelor of Laws from Nkumba University, a Post Graduate Diploma in Legal Practice from the Kenya School of Law, and is pursuing a Master of Laws at the University of Nairobi. He chairs Democracy Without Borders-Kenya and is a member of the Law Society of Kenya, the East African Law Society, and the International Commission of Jurists.",
    email: "",
  },
  {
    name: "Allan Oginga",
    role: "Board Member",
    photo: allanOginga,
    bio: "Allan has over 25 years' experience working with non-state actors in the health sector, in senior management roles at Living Goods, The Fred Hollows Foundation, IntraHealth International, and AMREF Health Africa, having begun his career in corporate banking at Citibank N.A. Kenya. He is currently Chief Executive Officer at No Malaria Kenya, and holds board positions at Basic Needs Basic Rights Kenya and No Taps Foundation-Australia. He holds a postgraduate degree in Social and Applied Economics from Wright State University, Dayton, Ohio.",
    email: "",
  },
];

/*
|--------------------------------------------------------------------------
| ADD YOUR STAFF MEMBERS HERE
|--------------------------------------------------------------------------
| photo: an imported image (see imports above), or null for a placeholder
| initial instead.
*/

const leadership = [
  {
    name: "Gilbert Onyango",
    role: "Executive Director",
    bio: "Mr. Gilbert Onyango is the Founder and a member of the Board of Trustees at EACHRights. His journey in the non-governmental sector began in 2002 as a legal intern with The CRADLE – The Children's Foundation, where he later became the Deputy Director. He then served as the Regional Deputy Director for the Canadian Bar Association's Strengthening Access to Justice in Eastern Africa (SAJEA) Programme in Dar es Salaam, Tanzania, from June to December 2010. Following this, Mr. Onyango assumed the role of Regional Director at EACHRights from December 2010 to May 2015, after which he joined UPR Info, a Swiss NGO, as the Regional Director for Africa from June 2015 to December 2020. He resumed his position as Executive Director of EACHRights in November 2022. Mr. Onyango holds an LL.B. degree from Dr. BAM University, Aurangabad, India, and was admitted to the Kenyan Bar in 2002. He also obtained a Master's of Science (M.Sc.) Degree in Management and Organisational Development from United States International University, Africa (USIU-A) in 2008, and a Master's of Arts (M.A.) Degree in Development Studies with a major in Human Rights, Development, and Social Justice from the International Institute of Social Studies (ISS) at Erasmus University, Rotterdam, in 2012. Throughout his career, Mr. Onyango has pursued professional development in various areas, including child rights, human rights, law, development, strategic planning and management, human resource management, project evaluation, and grant making. His steadfast dedication to human rights and substantial contributions to the development sector underscore Mr. Onyango's commitment to driving positive change, guiding EACHRights' growth and impact through his leadership.",
    photo: gilbertOnyango,
    email: "director@eachrights.or.ke",
  },
];

const staff = [
  {
    name: "Marcelino Thuku",
    role: "Programme Manager",
    bio: "Marcelino Waithaka Thuku manages the Watoto Wetu project under the Gender Justice Programme at EACHRights. He is a Community Development Professional with over 20 years' experience managing donor-funded human rights and peacebuilding programs in Kenya, spanning land, labour, and child rights, transitional justice, devolution, and gender-based violence prevention across Nairobi's informal settlements and counties including Garissa, Kajiado, Kilifi, and Turkana. Under his stewardship, EACHRights has partnered with the Directorate of Children's Services and County Governments to develop key policies, including the Kajiado FGM Eradication Policy 2019 and the Marsabit County Integrated Child Policy 2024. He holds a Bachelor of Arts in Anthropology from the University of Nairobi and extensive training in MERL, resource mobilization, and conflict management.",
    photo: marcelinoThuku,
    email: "marcelino@eachrights.or.ke",
  },
  {
    name: "Johnstone Shisanya",
    role: "Programme Manager",
    bio: "Mr. Johnstone Shisanya is a human rights and community development professional with over 7 years of experience in the NGO sector. His expertise includes education, child protection, safeguarding, project management, gender healing and reconciliation, leadership development, research, and training. He holds a Master of Arts in African Studies, a Bachelor of Arts in Philosophy and Religious Studies, and is a Master Practitioner in Neuro-Linguistic Programming. He has held managerial roles with organizations including Edmund Rice Advocacy Network East Africa, Omni One Limited, and L'Arche Kenya. Mr. Shisanya is committed to advancing human rights, strengthening communities, and building partnerships that contribute to EACHRights' growth and impact.",
    photo: johnstoneShisanya,
    email: "",
  },
  {
    name: "Madina Mohamed",
    role: "Project Officer",
    bio: "Ms. Madina Mohamed is a gender development, governance, and human rights professional with over six years of experience in community development, advocacy, and programme implementation. Her expertise includes inclusive education, gender equality, prevention of gender-based violence, governance, human rights, and community empowerment. She previously served as a Programmes Officer at the Centre for Community Development and Human Rights, working with the Kenya Parliamentary Caucus on Human Rights and Sustainable Development Goals. Ms. Mohamed also serves on the boards of Uweza Foundation and Edmund Rice Centre Nairobi and represents EACHRights as Kenya Equity and Inclusion Thematic Co-lead at the RELI Africa network. Her work is focused on advancing equitable education, gender justice, and the rights of vulnerable and marginalized communities.",
    photo: madinaMohamed,
    email: "",
  },
  {
    name: "Lois Mwaniki",
    role: "Project Officer",
    bio: "Lois Mwaniki is a legal professional and human rights advocate serving as a Project Officer under the Health Justice Programme at EACHRights. She holds an LLB, a Diploma in Law from the Kenya School of Law, and is an Advocate of the High Court of Kenya. Her expertise includes Sexual and Reproductive Health and Rights (SRHR), health justice, project management, policy advocacy, monitoring, and programme implementation. At EACHRights, she coordinates project activities, supports partners, and contributes to evidence-based advocacy and reporting. Lois is committed to advancing health justice, equity, and the economic, social, and cultural rights of marginalized communities.",
    photo: loisMwaniki,
    email: "",
  },
  {
    name: "Jane Otieno",
    role: "Project Officer",
    bio: "Ms. Jane Otieno is a human rights practitioner and qualified Nursing Officer specializing in Sexual and Reproductive Health and Rights (SRHR), social justice, policy advocacy, and community engagement. As a Project Officer under the Health Justice Programme at EACHRights, she coordinates stakeholder engagements, supports SRHR advocacy, conducts policy analysis, and contributes to evidence-based programme implementation. Her clinical and community-based experience enables her to connect health service delivery with rights-based approaches, particularly for vulnerable and marginalized communities. Jane is passionate about expanding access to comprehensive SRHR services, youth-friendly healthcare, and equitable health systems.",
    photo: janeOtieno,
    email: "",
  },
  {
    name: "Samson Mutange",
    role: "Finance and Operations Officer",
    bio: "Mr. Samson Mutange is a finance and operations professional with over 15 years of experience in the NGO sector. He serves as the Finance, Administration and Operations Officer at EACHRights, overseeing financial management, administration, procurement, human resources, logistics, and office operations. He holds a Certified Public Accountants (CPA) qualification and ensures compliance with organizational and donor requirements while supporting effective financial reporting and good governance. Mr. Mutange is committed to strengthening efficient, accountable, and well-managed operations at EACHRights.",
    photo: samsonMutange,
    email: "",
  },
  {
    name: "Mirriam Mwongela",
    role: "Communications Officer",
    bio: "Ms. Mirriam Mwongela is a strategic communications and public relations professional with expertise in media relations, digital communication, community engagement, event coordination, and multimedia production. As Communications Officer at EACHRights, she leads the organization's digital presence, develops communication campaigns, creates engaging multimedia content, and manages stakeholder engagement across digital platforms. She is also a member of the Association of Women in Media in Kenya (AMWIK), supporting gender-responsive media practices and promoting social justice and gender equality. Ms. Mwongela is committed to strengthening EACHRights' visibility, storytelling, and public engagement through effective and innovative communication.",
    photo: mirriamMwongela,
    email: "",
  },
  {
    name: "Pachu Ibrahim",
    role: "Administrative Assistant",
    bio: "Pachu Ibrahim is an Administrative Assistant at EACHRights, supporting managers and staff while ensuring the smooth and efficient running of daily office operations. Her expertise includes office management, organization, time management, multitasking, problem-solving, and administrative support. She also manages office equipment and helps maintain an organized and productive work environment. Pachu's attention to detail and commitment to efficiency contribute to the effective delivery of EACHRights' day-to-day operations.",
    photo: pachuIbrahim,
    email: "",
  },
];

/* =========================================================
   PRELOAD HELPER
   ---------------------------------------------------------
   Every photo across board, leadership and staff is fetched
   via a JS Image() before the page reveals its content, so
   nothing pops in as the visitor scrolls.
========================================================= */

const allPhotos = [...board, ...leadership, ...staff]
  .map((person) => person.photo)
  .filter(Boolean);

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = resolve; // don't block the page forever on one bad file
    img.src = src;
  });
}

/* =========================================================
   SHARED HELPERS
========================================================= */

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

function Avatar({ name, photo, large = false }) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        decoding="async"
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
      <span className="font-display text-4xl font-bold">{getInitials(name)}</span>
    </div>
  );
}

// One reveal per grid, staggered across its children, instead of each
// card independently computing its own animation delay.
const gridVariants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  shown: { opacity: 1, y: 0 },
};

/* =========================================================
   PAGE LOADER
   ---------------------------------------------------------
   Full-screen splash shown until every photo has finished
   downloading. Uses the same palette as the hero so the
   transition into the real header feels seamless.
========================================================= */

function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-forest text-paper">
      <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-paper/25 border-t-accent" />
      <p className="text-sm font-medium tracking-wide text-paper/70">Loading team…</p>
    </div>
  );
}

export default function Team() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    Promise.all(allPhotos.map(preloadImage)).then(() => {
      if (!cancelled) setReady(true);
    });

    // Safety net: reveal the page even if something hangs, so a slow
    // or failed image can never trap a visitor on the loader forever.
    const fallback = setTimeout(() => {
      if (!cancelled) setReady(true);
    }, 8000);

    return () => {
      cancelled = true;
      clearTimeout(fallback);
    };
  }, []);

  if (!ready) {
    return <PageLoader />;
  }

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
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to About
          </Link>

          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
            The people advancing
            <span className="block text-accent">human rights every day.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            EACHRights is powered by a board, leadership team and staff of researchers, advocates, legal experts
            and programme staff working together to advance Economic, Social and Cultural Rights across East
            Africa.
          </p>
        </div>
      </header>

      {/* =====================================================
          LEADERSHIP + BOARD — share one paper-coloured band; the
          board is a compact list rather than a third identical
          photo-card grid.
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-28">

        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-forest sm:text-5xl font-display">
            Guiding our mission.
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, amount: 0.15 }}
          variants={gridVariants}
          className="grid gap-8"
        >
          {leadership.map((person) => (
            <motion.article
              key={person.name}
              variants={cardVariants}
              className="grid gap-8 bg-white p-8 shadow-sm sm:grid-cols-[380px_1fr] sm:p-10 lg:grid-cols-[440px_1fr]"
            >
              <div className="w-full">
                <Avatar name={person.name} photo={person.photo} large />
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-forest font-display sm:text-3xl">{person.name}</h3>
                <p className="mt-1.5 text-base font-medium text-accent">{person.role}</p>
                <p className="mt-4 max-w-none text-base leading-8 text-ink/65">{person.bio}</p>

                {person.email && (
                  <div className="mt-5 flex gap-3">
                    <a
                      href={`mailto:${person.email}`}
                      aria-label={`Email ${person.name}`}
                      className="flex h-10 w-10 items-center justify-center bg-forest-light text-forest-dark transition hover:bg-forest hover:text-paper"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mb-10 mt-20 max-w-2xl sm:mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-forest sm:text-4xl font-display">
            Our Board of Directors
          </h2>
          <p className="mt-3 leading-7 text-ink/65">
            Volunteer governance leaders who set EACHRights' strategic direction and hold the organisation
            accountable.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, amount: 0.15 }}
          variants={gridVariants}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {board.map((person) => (
            <motion.article
              key={person.name}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group overflow-hidden bg-white shadow-sm transition hover:shadow-xl"
            >
              <Avatar name={person.name} photo={person.photo} />

              <div className="p-5">
                <h3 className="text-lg font-bold text-forest font-display">{person.name}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{person.role}</p>
                {person.bio && (
                  <p className="mt-3 text-sm leading-6 text-ink/65">{person.bio}</p>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* =====================================================
          STAFF
      ===================================================== */}

      <section className="bg-forest-light px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-forest sm:text-5xl font-display">
              A multidisciplinary team.
            </h2>
            <p className="mt-4 leading-7 text-ink/65">
              Researchers, advocates, legal officers and programme staff working across our focus areas and
              regions.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true, amount: 0.05 }}
            variants={gridVariants}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {staff.map((person) => (
              <motion.article
                key={person.name}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group overflow-hidden bg-white shadow-sm transition hover:shadow-xl"
              >
                <Avatar name={person.name} photo={person.photo} />

                <div className="p-5">
                  <h3 className="text-lg font-bold text-forest font-display">{person.name}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{person.role}</p>
                  <p className="mt-3 text-sm leading-6 text-ink/65">{person.bio}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          JOIN THE TEAM CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-forest-dark px-6 py-16 text-paper">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[25px] border-paper/10" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
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
