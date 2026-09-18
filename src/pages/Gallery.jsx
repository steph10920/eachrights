import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

import storiesHero from "../assets/gallery/stories-voices-moments.png";

/*
|--------------------------------------------------------------------------
| ADD YOUR YOUTUBE VIDEOS HERE
|--------------------------------------------------------------------------
*/

const videos = [
  {
    title: "Operationalization of Garissa, Kenya Children's Assemblies",
    description:
      "Highlights from EACHRights programmes, community engagement and human rights work.",
    date: "2026",
    url: "https://www.youtube.com/watch?v=dMBuKyPTfS8",
  },
  {
    title:
      "Restoring the Hope through Education: The Reading Rocket Project in Kenya",
    description:
      "Community-based activities and initiatives supporting human rights and social justice.",
    date: "2026",
    url: "https://www.youtube.com/watch?v=Mry_WyjgLPM",
  },
  {
    title: "Hands-On Climate Action with the Reading Rocket Project",
    description:
      "Stories, conversations and activities from EACHRights' work across East Africa.",
    date: "2026",
    url: "https://www.youtube.com/watch?v=KG_930uAXpQ",
  },
  {
    title: "MARSABIT INTEGRATED CHILD POLICY",
    description:
      "Stories, conversations and activities from EACHRights' work across East Africa.",
    date: "2026",
    url: "https://www.youtube.com/watch?v=wftZlROyuPA",
  },
  {
    title:
      "Voices of Resilience: Breaking Barriers to Girl Child Education in Garissa",
    description:
      "Breaking barriers and championing girl child education in Garissa County.",
    date: "2026",
    url: "https://www.youtube.com/watch?v=ShcjWaMZ230",
  },
  {
    title:
      "Voices of Resilience: Breaking Barriers to Girl Child Education in Garissa",
    description:
      "Inspiring stories of resilience against FGM and in support of girl child education.",
    date: "Feb 10, 2025",
    url: "https://www.youtube.com/watch?v=rRGE51TG-7A",
  },
  {
    title: "Reconstituting the Garissa Children’s Assemblies",
    description:
      "Children participated in elections across six sub-counties in Garissa, creating platforms for children to express their views and advocate for issues that matter to them.",
    date: "Feb 3, 2025",
    url: "https://www.youtube.com/watch?v=mSEDTQTSOMc",
  },
  {
    title: "Impact of Climate Change on Education in Kilifi County",
    description:
      "Climate change is affecting lives and education in Kilifi County, disrupting learning and threatening the future of children.",
    date: "2026",
    url: "https://www.youtube.com/watch?v=cc2o8fT9Efs",
  },
  {
    title:
      "Garissa Child Participation in Developing Guidelines for Management of Missing and Found Children",
    description:
      "Garissa children participated in the development of guidelines for the management of missing and found children.",
    date: "2026",
    url: "https://www.youtube.com/watch?v=gM0GXplEk2I",
  },
  {
    title:
      "Marsabit Children's Involvement in Guidelines for Managing Missing Children",
    description:
      "Marsabit children participated in developing guidelines for the management of missing children.",
    date: "Oct 18, 2024",
    url: "https://www.youtube.com/watch?v=paIm8O_MOvw",
  },
  {
    title: "ENCHORRO ENKAI ECO JUSTICE CLUB",
    description:
      "EACHRights held a two-day workshop at Enchorro Enkai Primary School in Kajiado South, empowering learners on environmental stewardship and supporting the launch of an Eco Justice Club.",
    date: "Oct 18, 2024",
    url: "https://www.youtube.com/watch?v=HHrP9cCvo5U",
  },
];

/*
|--------------------------------------------------------------------------
| GET YOUTUBE VIDEO ID
|--------------------------------------------------------------------------
*/

function getYouTubeVideoId(url) {
  if (!url) return "";

  try {
    const parsedUrl = new URL(url);
    let videoId = "";

    if (parsedUrl.hostname.includes("youtube.com")) {
      videoId = parsedUrl.searchParams.get("v") || "";

      if (!videoId && parsedUrl.pathname.startsWith("/shorts/")) {
        videoId = parsedUrl.pathname.split("/shorts/")[1]?.split("/")[0];
      }

      if (!videoId && parsedUrl.pathname.startsWith("/embed/")) {
        videoId = parsedUrl.pathname.split("/embed/")[1]?.split("/")[0];
      }
    }

    if (parsedUrl.hostname === "youtu.be") {
      videoId = parsedUrl.pathname.replace("/", "").split("/")[0];
    }

    return videoId;
  } catch {
    return "";
  }
}

function Eyebrow({ children, dark = false }) {
  return (
    <span
      className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] ${
        dark ? "text-forest-dark" : "text-accent"
      }`}
    >
      {children}
    </span>
  );
}

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeVideo, setActiveVideo] = useState(null);

  const categories = ["All", "Videos"];

  const filteredVideos = useMemo(() => {
    if (activeCategory === "All") return videos;
    return videos;
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-paper font-sans text-ink">

      {/* HERO */}
      <header className="relative h-[38vh] min-h-[300px] max-h-[380px] overflow-hidden bg-forest text-paper sm:h-[52vh] sm:min-h-[440px] sm:max-h-[560px]">
        <img
          src={storiesHero}
          alt="Stories, Voices & Moments"
          className="absolute inset-0 h-full w-full object-cover object-center sm:object-bottom"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute left-0 right-0 top-0 z-20 h-1 bg-accent" />

        <Link
          to="/"
          className="absolute left-4 top-4 z-20 text-xs font-medium text-white/85 transition hover:text-white sm:left-6 sm:top-6 sm:text-sm lg:left-8 lg:top-8"
        >
          ← Back to Home
        </Link>

        <h1 className="sr-only">
          Stories, Voices &amp; Moments — EACHRights Gallery
        </h1>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 pb-5 sm:px-6 sm:pb-8 lg:px-8 lg:pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="max-w-xl text-xs leading-6 text-white/90 sm:text-sm sm:leading-7 sm:text-base">
              Videos and visual stories from EACHRights' programmes,
              community engagement and work to advance human rights across
              East Africa.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
              <a
                href="#videos"
                className="inline-flex items-center gap-2 bg-accent px-4 py-2 text-xs font-bold text-forest shadow-lg transition hover:-translate-y-0.5 hover:brightness-105 sm:px-6 sm:py-3 sm:text-sm"
              >
                Explore Videos
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white bg-white/5 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-forest sm:px-6 sm:py-3 sm:text-sm"
              >
                Get Involved
              </Link>
            </div>
          </motion.div>
        </div>
      </header>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <Eyebrow dark>Our Gallery</Eyebrow>

          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-forest sm:text-4xl">
            Watch our work in action.
          </h2>

          <p className="mt-5 leading-8 text-ink/70">
            Our gallery brings together stories, events, programme activities
            and conversations that reflect the experiences of the communities
            and people we work with.
          </p>
        </motion.div>
      </section>

      {/* FILTER */}
      <section className="border-y border-forest/10 bg-forest-light">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-5 lg:px-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-forest text-paper"
                  : "bg-white text-forest-dark ring-1 ring-forest/15 hover:bg-white/70"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* VIDEOS */}
      <section
        id="videos"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
      >
        <div className="mb-10">
          <Eyebrow dark>Videos</Eyebrow>

          <h2 className="mt-2 font-display text-3xl font-bold text-forest">
            From our work
          </h2>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video, index) => {
            const videoId = getYouTubeVideoId(video.url);
            const isActive = activeVideo === index;

            return (
              <motion.article
                key={`${video.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -5 }}
                className="group overflow-hidden bg-white shadow-sm transition hover:shadow-xl"
              >

                {/* VIDEO / SHARP THUMBNAIL */}
                <div className="relative aspect-video overflow-hidden bg-black">

                  {videoId && !isActive ? (
                    <button
                      type="button"
                      onClick={() => setActiveVideo(index)}
                      className="absolute inset-0 h-full w-full"
                      aria-label={`Play ${video.title}`}
                    >
                      <img
                        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
                        alt={video.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        onError={(event) => {
                          event.currentTarget.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
                        }}
                      />

                      {/* DARK OVERLAY */}
                      <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />

                      {/* PLAY BUTTON */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-forest shadow-xl transition duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                          <PlayCircle
                            size={30}
                            strokeWidth={2}
                            className="sm:h-8 sm:w-8"
                          />
                        </span>
                      </div>
                    </button>
                  ) : videoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                      title={video.title}
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-2 px-4 text-center text-sm text-white/70">
                      <PlayCircle size={28} strokeWidth={1.5} />
                      Add a valid YouTube URL to display this video.
                    </div>
                  )}
                </div>

                {/* VIDEO DETAILS */}
                <div className="p-5">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="bg-accent/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-forest-dark">
                      Video
                    </span>

                    <span className="text-xs text-ink/50">
                      {video.date}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold leading-snug text-forest">
                    {video.title}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-ink/65">
                    {video.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-forest-dark px-6 py-16 text-paper">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[25px] border-paper/10" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <Eyebrow>Stay Connected</Eyebrow>

            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              Follow our work.
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-paper/80">
              Follow EACHRights for updates, stories, events and conversations
              about human rights and social justice across East Africa.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap justify-center gap-3">
            <a
              href="https://www.youtube.com/@eachrights7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 font-bold text-forest shadow-lg transition hover:brightness-105"
            >
              <PlayCircle size={18} />
              Visit YouTube Channel
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-paper/70 px-6 py-3.5 font-bold text-paper transition hover:bg-paper hover:text-forest-dark"
            >
              Contact EACHRights
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Gallery;
