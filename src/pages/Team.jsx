import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Handshake, Mail, X } from "lucide-react";

/*
|--------------------------------------------------------------------------
| PHOTO LOADING
|--------------------------------------------------------------------------
| Instead of one static `import photo from "../assets/team/X.jpg"` per
| person (where a single typo'd filename or missing file throws at build
| time and can take the whole page down), every file in src/assets/team/
| is loaded dynamically. If a filename below doesn't match an actual file,
| that one person just falls back to an initials badge — nothing else on
| the page breaks.
|
| Drop each person's photo into src/assets/team/ using any filename, then
| reference that exact filename in `photo: getPhoto("Whatever.jpg")` below.
*/

const teamImageModules = import.meta.glob("../assets/team/*", {
  eager: true,
  import: "default",
});

// Build a lookup by filename only (e.g. "Gilbert.jpg"), so callers don't
// need to know the full relative path.
const teamImagesByFilename = Object.fromEntries(
  Object.entries(teamImageModules).map(([path, url]) => [path.split("/").pop(), url])
);

function getPhoto(filename) {
  return teamImagesByFilename[filename] || null;
}

/*
|--------------------------------------------------------------------------
| ADD YOUR BOARD MEMBERS HERE
|--------------------------------------------------------------------------
| Board members are volunteer governance leaders, shown separately from
| paid Leadership/Staff below. photo: getPhoto("Filename.jpg"), or leave
| it as getPhoto("") / null for an initials badge.
*/

const board = [
  {
    name: "Okero Otieno",
    role: "Board Chairperson",
    photo: getPhoto("Isaack.jpg"),
    bio: `MR. OKERO OTIENO
Chairperson, Board of Directors and Trustee
Mr. Okero Otieno is a Democratic Governance, applied Public Policy, Elections, Development and Human Rights expert with over 22 years' experience working with State, Non-State, Academic, and Donor Organizations as well as Think Tanks in more than 15 sub-Saharan African Countries. Mr. Okero Otieno also offers technical and policy support to Regional Governance Non-State Actors. Mr. Otieno has many years of experience in designing, implementing, monitoring, and evaluating Democratic Governance Projects and Programmes.
He is currently the Chief Technical Advisor (CTA)-Elections with the United Nations Development Programme (UNDP) Malawi Country Office. Previously, he served as a served as CTA with UNDP Nigeria Country Office and as the Head of International Foundations for Electoral Systems (IFES) both in Kenya and Uganda Country Offices.
He also previously served as the Project Manager for the UNDP Kenya Office, Chief of Party with the Kenya Government's Ministry of Justice and Constitutional Affairs in the countrywide Kenya National Integrated Constitutional Civic Education Programme (2011-2013), and Country Director with the International Development Law Organization.
Further, Mr. Otieno served as the Head of Governance and Corruption Unit with the Institute for Security Studies, South Africa (2010); Director, Democratic Governance Fund-CIDA (2007-2009); Deputy Executive Director and Head of Programmes with the Institute for Education in Democracy (2005-2007; University academic in Kenya (2000-
2004).
Mr. Otieno is currently a PhD candidate at the University of Manitoba, Canada. He holds a Master of Arts degree in Political Science from Central European University, Budapest, Hungary; a Master of Arts degree in Development Studies from the International Institute for Social Studies, The Hague, Netherlands, and a Bachelor of Arts degree in Anthropology from the University of Nairobi, Kenya. Additionally, he has undertaken several relevant courses in the subjects of Human Rights, Results-Based Management, Programmed/Project Management, Money and Politics, and Public Finance Management Reforms and Anti-Corruption.
He has published a Chapter in a widely referenced book on Governance and authored several online articles and op-eds.`,
    email: "",
  },
  {
    name: "Florence Annan",
    role: "Vice Chair, Board of Directors",
    photo: getPhoto("Florence.jpg"),
    bio: `Vice Chair - Board of Directors
Florence Annan
Ms. Florence Annan is a Human Rights and Governance practitioner with over 18 years' work experience in the civil society and government sectors. Her expertise revolves around: Partnerships and Fundraising; Organization Development Management and Policy Advocacy.
Ms. Annan has extensive knowledge of matters Land governance, Gender and Child protection, health, and Devolution. She has successfully spearheaded programs and campaigns in partnership with high-level consortiums and government agencies such as the Keeping Girls in School - Sanitary Towels Campaign; GBV and Child Protection Campaigns; Protection of Public-School Land (ShuleYangu Alliance); and the Nyandarua County Titling Program that sought to address historical issues of communities living in colonial and squatter villages.
Ms. Annan has also been part of lobby groups that have successfully advocated for the enactment of key human rights frameworks and guidelines in Kenya, including The Children Act (2021); The Guidelines on the Application Process of Public-School Title Deeds (2016); The Protection Against Domestic Violence Act (2015); The Teachers Service Commission Act (2012); The Basic Education Act (2013); Review of the Gender Policy in Education (2007). In Somalia, The Anti-FGM Policy (2014); and the Somaliland Youth Policy (2010).
Ms. Annan currently serves as the Fundraising and Partnership Manager at Amnesty International Kenya. She also serves as a Board Member of The Change Trust and The Sports Development Trust. Further to this, she is a member of the Pan-African Women Rights Organization (FEMNET). She is a proud alumna of Deakin University, Trinity College of Foundational Studies (Melbourne, Australia) and the Alliance Girls High School.`,
    email: "",
  },
  {
    name: "Fredrick K. Kinama",
    role: "Treasurer, Board of Directors",
    photo: getPhoto("Fredrick.jpg"),
    bio: `Fredrick K. Kinama
Treasurer, Board of Directors
Mr. Fredrick K. Kinama is a seasoned Finance Advisor with a wealth of experience managing financial systems and ensuring compliance with policies and standards across various organizations in Africa. His career began with a role as a Consultant in Finance and Administration for the USDA/USAID PASA University of Missouri Assistance Program in Juba, South Sudan. Subsequently, he joined the Aga Khan Foundation - East Africa as a Program Accountant, overseeing education programs in Zanzibar, Tanzania, and Kenya.
Mr. Kinama then transitioned to become the Finance Advisor for the West Africa Region at Tearfund UK in Liberia, focusing on Water, Sanitation, and Hygiene (WASH) projects. In this capacity, he ensured strict adherence to Tearfund financial management policies, standards, and statutory regulations.
Additionally, he contributed his expertise at Ignite the Orphan Africa-Kenya, overseeing the regional office accounting system and providing support to budget holders with coding, reporting, and analysis.
His professional development includes short-term training in financial management, strategic planning, office operations, ethics, as well as compliance and fraud prevention workshops with USAID. Mr. Kinama extensive experience and dedication to financial management make him a valuable asset in the non - profit and development sectors.
Mr. Kinama also possesses a Diploma in Business Management from Sigalagala Polytechnic College and a Bachelor of Business Administration from the Switzerland Centre for Management University and is a Certified Public Accountant (CPA) certified by the Kenya Accountants and Secretaries National Examination Board (KASNEB) in Nairobi, Kenya.`,
    email: "",
  },
  {
    name: "Gilbert Onyango",
    role: "Executive Director and Founder",
    photo: getPhoto("Gilbert.jpg"),
    bio: `Mr. Gilbert Onyango
Executive Director and Founder
Mr. Gilbert Onyango is the Founder and a member of the Board of Trustees at EACHRights. His journey in the non-governmental sector began in 2002 as a legal intern with The CRADLE – The Children's Foundation, where he later became the Deputy Director. He then served as the Regional Deputy Director for the Canadian Bar Association's Strengthening Access to Justice in Eastern Africa (SAJEA) Programme in Dar es Salaam, Tanzania, from June to December 2010. Following this, Mr. Onyango assumed the role of Regional Director at EACHRights from December 2010 to May 2015, after which he joined UPR Info, a Swiss NGO, as the Regional Director for Africa from June 2015 to December 2020. He resumed his position as Executive Director of EACHRights in November 2022.
Mr. Onyango holds an LL.B Degree from Dr. BAM University, Aurangabad, India, and was admitted to the Kenyan Bar in 2002. He also obtained a Master's of Science (M.Sc.) Degree in Management and Organisational Development from United States International University, Africa (USIU-A) in 2008, and a Master's of Arts (M.A.) Degree in Development Studies with a major in Human Rights, Development, and Social Justice from the International Institute of Social Studies (ISS) at Erasmus University, Rotterdam in 2012.
Throughout his career, Mr. Onyango has pursued professional development in various areas including child rights, human rights, law, development, strategic planning and management, human resource management, project evaluation, and grant making. His steadfast dedication to human rights and substantial contributions to the development sector underscore Mr. Onyango&#39;s commitment to driving positive change, guiding EACHRights&#39; growth and impact through his leadership.
For inquiries, Mr. Gilbert Onyango can be reached at director@eachrights.or.ke`,
    email: "director@eachrights.or.ke",
  },
  {
    name: "Christine Alai",
    role: "Board Member",
    photo: getPhoto("Christine.jpg"),
    bio: `Ms. Christine Alai is a human rights lawyer who has dedicated her 15-year career to promoting equality, non-discrimination, social inclusion, and access to justice for victims of gross human rights violations and atrocity crimes.
She has led and contributed to innovative research, litigation, policy and capacity development, technical assistance, resource mobilization and advocacy initiatives to advance human rights and transitional justice in Kenya, South Sudan, and parts of East and Central Africa. 
Ms. Alai is presently the Transitional Justice Advisor to the UN Commission on Human Rights in South Sudan. 
She is also a co-founder of Utu Wetu Trust – a budding firm that focuses on
enhancing prevention and response to conflict-related sexual and gender-based violence.`,
    email: "",
  },
  {
    name: "Julie M. Kubai",
    role: "Board Member",
    photo: getPhoto("Julie.jpg"),
    bio: `Ms. Julie M. Kubai is an Auditor who has been serving at the Office of the Auditor- General (OAG) since 2015, giving her work experience of about 8 years, 5 of which have been in the Human Resource Department. Before joining the OAG, she was working with the Kenya Trade Network Agency (KENTRADE) as a Trade Facilitator and was involved in the development, testing and roll-out of part of the Kenya Single Window System (KESWS) and also played a support role in its live environment.
She holds a Master of Arts Degree in International Relations from the University of Nairobi and a Bachelor of Science in Hospitality Management from Strathmore University. She is currently pursuing a Certified Human Resource Professional (CHRP) Certification.`,
    email: "",
  },
  {
    name: "Martin Ray T. Mavenjina",
    role: "Board Member",
    photo: getPhoto("Martin.jpg"),
    bio: `MARTIN RAY T. MAVENJINA
Board Member
Mr. Martin Mavenjina is a seasoned Constitutional and Human Rights lawyer, specializing in research, policy review, and advocacy on Civic Space, Security Governance, Counter Terrorism, and Transitional Justice at National, Regional, and International levels. Currently employed as the Senior Program Advisor Transitional Justice at the Kenya Human Rights Commission, he holds a Bachelor of Laws Degree from Nkumba University, a Post Graduate Diploma in Legal Practice from the Kenya School of Law, and a Graduate Certificate in Advanced Human Rights Course on Police Oversight and Vulnerable Groups from the University of Pretoria. Mr. Mavenjina is also pursuing a Master of Laws at the University of Nairobi.
His engagements with prominent peer review mechanisms like the United Nations Human Rights Council, the African Commission on Human and Peoples Rights, and the Assembly of State Parties have resulted in numerous positive resolutions benefiting victims of human rights violations.
Mr. Mavenjina has spearheaded successful campaigns at national and international levels, significantly impacting the lives of victims of systemic human rights violations. He has also played a key role in forming coalitions advocating for victims' rights and has contributed to seminal research on transitional justice, civic space, freedom of expression, protest rights, and surveillance, published both locally and globally.
Mr. Mavenjina is a member of the Law Society of Kenya, the East African Law Society, the Chartered Institute of Arbitrators, and the International Commission of Jurists, Mr. Mavenjina currently chairs the Democracy Without Borders-Kenya Chapter. He also serves on various committees of the East African Law Society, including Trade and Regional Integration, Business and Human Rights, Technology, Media and Telecom, and Oil and Gas.`,
    email: "",
  },
  {
    name: "Allan Oginga",
    role: "Board Member",
    photo: getPhoto("Allan.jpg"),
    bio: `Allan has over 25 years' experience working with Non-State Actors in the
health sector, in senior management positions in several organisations
including, Living Goods, The Fred Hollows Foundation, IntraHealth
International and AMREF Health Africa. He began his professional career in
corporate banking with Citbank N.A Kenya. He is currently the Chief
Executive Officer at No Malaria Kenya, a social enterprise company. He
holds Board positions at several organizations including Basic Needs Basic
Rights Kenya, a Public Benefits Organization promoting community mental
health interventions in Kenya and No Taps Foundation-Australia, a non-
profit organisation committed to providing clean, safe water to
marginalised communities. He holds a Postgraduate degree in Social and Applied Economics with concentrations in Health and Development Economics, obtained from Wright State University,
Dayton, Ohio, USA.`,
    email: "",
  },
];

/*
|--------------------------------------------------------------------------
| ADD YOUR STAFF MEMBERS HERE
|--------------------------------------------------------------------------
| photo: getPhoto("Filename.jpg"), or leave as getPhoto("") for a
| placeholder initial instead.
*/

const leadership = [
  {
    name: "Gilbert Onyango",
    role: "Executive Director",
    bio: "Mr. Gilbert Onyango is the Founder and a member of the Board of Trustees at EACHRights. His journey in the non-governmental sector began in 2002 as a legal intern with The CRADLE – The Children's Foundation, where he later became the Deputy Director. He then served as the Regional Deputy Director for the Canadian Bar Association's Strengthening Access to Justice in Eastern Africa (SAJEA) Programme in Dar es Salaam, Tanzania, from June to December 2010. Following this, Mr. Onyango assumed the role of Regional Director at EACHRights from December 2010 to May 2015, after which he joined UPR Info, a Swiss NGO, as the Regional Director for Africa from June 2015 to December 2020. He resumed his position as Executive Director of EACHRights in November 2022. Mr. Onyango holds an LL.B. degree from Dr. BAM University, Aurangabad, India, and was admitted to the Kenyan Bar in 2002. He also obtained a Master's of Science (M.Sc.) Degree in Management and Organisational Development from United States International University, Africa (USIU-A) in 2008, and a Master's of Arts (M.A.) Degree in Development Studies with a major in Human Rights, Development, and Social Justice from the International Institute of Social Studies (ISS) at Erasmus University, Rotterdam, in 2012. Throughout his career, Mr. Onyango has pursued professional development in various areas, including child rights, human rights, law, development, strategic planning and management, human resource management, project evaluation, and grant making. His steadfast dedication to human rights and substantial contributions to the development sector underscore Mr. Onyango's commitment to driving positive change, guiding EACHRights' growth and impact through his leadership.",
    photo: getPhoto("Gilbert.jpg"),
    email: "director@eachrights.or.ke",
  },
];

const staff = [
  {
    name: "Marcelino Thuku",
    role: "Programme Manager",
    bio: "Marcelino Waithaka Thuku manages the Watoto Wetu project under the Gender Justice Programme at EACHRights. He is a Community Development Professional with over 20 years' experience managing donor-funded human rights and peacebuilding programs in Kenya, spanning land, labour, and child rights, transitional justice, devolution, and gender-based violence prevention across Nairobi's informal settlements and counties including Garissa, Kajiado, Kilifi, and Turkana. Under his stewardship, EACHRights has partnered with the Directorate of Children's Services and County Governments to develop key policies, including the Kajiado FGM Eradication Policy 2019 and the Marsabit County Integrated Child Policy 2024. He holds a Bachelor of Arts in Anthropology from the University of Nairobi and extensive training in MERL, resource mobilization, and conflict management.",
    photo: getPhoto("Marcelino.jpg"),
    email: "marcelino@eachrights.or.ke",
  },
  {
    name: "Johnstone Shisanya",
    role: "Programme Manager",
    bio: "Mr. Johnstone Shisanya is a human rights and community development professional with over 7 years of experience in the NGO sector. His expertise includes education, child protection, safeguarding, project management, gender healing and reconciliation, leadership development, research, and training. He holds a Master of Arts in African Studies, a Bachelor of Arts in Philosophy and Religious Studies, and is a Master Practitioner in Neuro-Linguistic Programming. He has held managerial roles with organizations including Edmund Rice Advocacy Network East Africa, Omni One Limited, and L'Arche Kenya. Mr. Shisanya is committed to advancing human rights, strengthening communities, and building partnerships that contribute to EACHRights' growth and impact.",
    photo: getPhoto("Johnstone.jpg"),
    email: "",
  },
  {
    name: "Madina Mohamed",
    role: "Project Officer",
    bio: "Ms. Madina Mohamed is a gender development, governance, and human rights professional with over six years of experience in community development, advocacy, and programme implementation. Her expertise includes inclusive education, gender equality, prevention of gender-based violence, governance, human rights, and community empowerment. She previously served as a Programmes Officer at the Centre for Community Development and Human Rights, working with the Kenya Parliamentary Caucus on Human Rights and Sustainable Development Goals. Ms. Mohamed also serves on the boards of Uweza Foundation and Edmund Rice Centre Nairobi and represents EACHRights as Kenya Equity and Inclusion Thematic Co-lead at the RELI Africa network. Her work is focused on advancing equitable education, gender justice, and the rights of vulnerable and marginalized communities.",
    photo: getPhoto("Madina.jpeg"),
    email: "",
  },
  {
    name: "Lois Mwaniki",
    role: "Project Officer",
    bio: "Lois Mwaniki is a legal professional and human rights advocate serving as a Project Officer under the Health Justice Programme at EACHRights. She holds an LLB, a Diploma in Law from the Kenya School of Law, and is an Advocate of the High Court of Kenya. Her expertise includes Sexual and Reproductive Health and Rights (SRHR), health justice, project management, policy advocacy, monitoring, and programme implementation. At EACHRights, she coordinates project activities, supports partners, and contributes to evidence-based advocacy and reporting. Lois is committed to advancing health justice, equity, and the economic, social, and cultural rights of marginalized communities.",
    photo: getPhoto("Lois.jpg"),
    email: "",
  },
  {
    name: "Jane Otieno",
    role: "Project Officer",
    bio: "Ms. Jane Otieno is a human rights practitioner and qualified Nursing Officer specializing in Sexual and Reproductive Health and Rights (SRHR), social justice, policy advocacy, and community engagement. As a Project Officer under the Health Justice Programme at EACHRights, she coordinates stakeholder engagements, supports SRHR advocacy, conducts policy analysis, and contributes to evidence-based programme implementation. Her clinical and community-based experience enables her to connect health service delivery with rights-based approaches, particularly for vulnerable and marginalized communities. Jane is passionate about expanding access to comprehensive SRHR services, youth-friendly healthcare, and equitable health systems.",
    photo: getPhoto("Jane.jpg"),
    email: "",
  },
  {
    name: "Samson Mutange",
    role: "Finance and Operations Officer",
    bio: "Mr. Samson Mutange is a finance and operations professional with over 15 years of experience in the NGO sector. He serves as the Finance, Administration and Operations Officer at EACHRights, overseeing financial management, administration, procurement, human resources, logistics, and office operations. He holds a Certified Public Accountants (CPA) qualification and ensures compliance with organizational and donor requirements while supporting effective financial reporting and good governance. Mr. Mutange is committed to strengthening efficient, accountable, and well-managed operations at EACHRights.",
    photo: getPhoto("Samson.jpg"),
    email: "",
  },
  {
    name: "Mirriam Mwongela",
    role: "Communications Officer",
    bio: "Ms. Mirriam Mwongela is a strategic communications and public relations professional with expertise in media relations, digital communication, community engagement, event coordination, and multimedia production. As Communications Officer at EACHRights, she leads the organization's digital presence, develops communication campaigns, creates engaging multimedia content, and manages stakeholder engagement across digital platforms. She is also a member of the Association of Women in Media in Kenya (AMWIK), supporting gender-responsive media practices and promoting social justice and gender equality. Ms. Mwongela is committed to strengthening EACHRights' visibility, storytelling, and public engagement through effective and innovative communication.",
    photo: getPhoto("Mirriam.jpg"),
    email: "",
  },
  {
    name: "Pachu Ibrahim",
    role: "Administrative Assistant",
    bio: "Pachu Ibrahim is an Administrative Assistant at EACHRights, supporting managers and staff while ensuring the smooth and efficient running of daily office operations. Her expertise includes office management, organization, time management, multitasking, problem-solving, and administrative support. She also manages office equipment and helps maintain an organized and productive work environment. Pachu's attention to detail and commitment to efficiency contribute to the effective delivery of EACHRights' day-to-day operations.",
    photo: getPhoto("Pachu.jpg"),
    email: "",
  },
];

/* =========================================================
   PRELOAD HELPER
   ---------------------------------------------------------
   Every photo across board, leadership and staff is fetched
   via a JS Image() before the page reveals its content, so
   nothing pops in as the visitor scrolls. Guarded with a
   short overall timeout so a single broken URL can never
   trap the page on the loader.
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

/* =========================================================
   PROFILE MODAL
   ---------------------------------------------------------
   Pops open with the full photo, name, role, bio and email
   for whichever person is currently selected. Closes on the
   backdrop click, the X button, or Escape. Sized wide enough
   (max-w-5xl) and tall enough (max-h-[92vh]) that the longer
   board bios don't feel cramped, with their own scroll area
   on the text column for anything that still overflows.
*/

function ProfileModal({ person, onClose }) {
  useEffect(() => {
    if (!person) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [person, onClose]);

  return (
    <AnimatePresence>
      {person && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest-dark/70 p-4 backdrop-blur-sm sm:p-8"
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid max-h-[92vh] w-full max-w-5xl grid-cols-1 overflow-y-auto bg-white shadow-2xl sm:grid-cols-[320px_1fr] sm:overflow-hidden"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close profile"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-forest shadow transition hover:bg-white"
            >
              <X size={18} />
            </button>

            <div className="w-full sm:h-full">
              <Avatar name={person.name} photo={person.photo} large />
            </div>

            <div className="flex flex-col justify-center p-8 sm:h-full sm:min-h-0 sm:overflow-y-auto sm:p-10">
              <h3 className="font-display text-2xl font-bold text-forest sm:text-3xl">{person.name}</h3>
              <p className="mt-1.5 text-base font-medium text-accent">{person.role}</p>
              <p className="mt-5 max-w-none whitespace-pre-line text-base leading-8 text-ink/70">{person.bio}</p>

              {person.email && (
                <a
                  href={`mailto:${person.email}`}
                  className="mt-6 inline-flex w-fit items-center gap-2 bg-forest-light px-4 py-2.5 text-sm font-medium text-forest-dark transition hover:bg-forest hover:text-paper"
                >
                  <Mail size={16} />
                  {person.email}
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Team() {
  const [ready, setReady] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    let cancelled = false;

    Promise.all(allPhotos.map(preloadImage)).then(() => {
      if (!cancelled) setReady(true);
    });

    // Safety net: reveal the page even if something hangs, so a slow
    // or failed image can never trap a visitor on the loader forever.
    const fallback = setTimeout(() => {
      if (!cancelled) setReady(true);
    }, 4000);

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
            accountable. Tap a member to read their full profile.
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
              onClick={() => setSelectedPerson(person)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedPerson(person);
              }}
              className="group cursor-pointer overflow-hidden bg-white shadow-sm transition hover:shadow-xl"
            >
              <Avatar name={person.name} photo={person.photo} />

              <div className="p-5">
                <h3 className="text-lg font-bold text-forest font-display">{person.name}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{person.role}</p>
                {person.bio && (
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink/65">{person.bio}</p>
                )}
                <span className="mt-3 inline-block text-sm font-semibold text-forest underline-offset-2 group-hover:underline">
                  Read full profile
                </span>
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
              regions. Tap a member to read their full profile.
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
                onClick={() => setSelectedPerson(person)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedPerson(person);
                }}
                className="group cursor-pointer overflow-hidden bg-white shadow-sm transition hover:shadow-xl"
              >
                <Avatar name={person.name} photo={person.photo} />

                <div className="p-5">
                  <h3 className="text-lg font-bold text-forest font-display">{person.name}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{person.role}</p>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink/65">{person.bio}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-forest underline-offset-2 group-hover:underline">
                    Read full profile
                  </span>
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

      <ProfileModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />
    </main>
  );
}
