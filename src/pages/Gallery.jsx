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
    title: "EACHRights Programme Highlights",
    description:
      "Highlights from EACHRights programmes, community engagement and human rights work.",
    date: "2026",
    url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    title: "EACHRights Community Engagement",
    description:
      "Community-based activities and initiatives supporting human rights and social justice.",
    date: "2026",
    url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    title: "Advancing Human Rights in East Africa",
    description:
      "Stories, conversations and activities from EACHRights' work across East Africa.",
    date: "2026",
    url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
];

/*
|--------------------------------------------------------------------------
| CONVERT YOUTUBE URL TO EMBED URL
|--------------------------------------------------------------------------
*/

function getYouTubeEmbedUrl(url) {
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

    return videoId
      ? `https://www.youtube.com/embed/${videoId}`
      : "";
  } catch {
    return "";
  }
}

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

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Videos"];

  const filteredVideos = useMemo(() => {
    if (activeCategory === "All") return videos;
    return videos;
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-paper font-sans text-ink">

      {/* =====================================================
          HERO — sized down to match Home's proportions
      ===================================================== */}

      <header className="relative h-[52vh] min-h-[440px] max-h-[560px] overflow-hidden bg-forest text-paper">

        <img
          src={storiesHero}
          alt="Stories, Voices & Moments"
          className="absolute inset-0 h-full w-full object-cover object-bottom"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute left-0 right-0 top-0 z-20 h-1 bg-accent" />

        <Link
          to="/"
          className="absolute left-6 top-6 z-20 inline-flex text-sm font-medium text-white/85 transition hover:text-white lg:left-8 lg:top-8"
        >
          ← Back to Home
        </Link>

        <h1 className="sr-only">Stories, Voices &amp; Moments — EACHRights Gallery</h1>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-8 lg:px-8 lg:pb-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >

            <p className="max-w-xl text-sm leading-7 text-white/90 sm:text-base">
              Videos and visual stories from EACHRights' programmes, community engagement and work to advance
              human rights across East Africa.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              <a
                href="#videos"
                className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-bold text-forest shadow-lg transition hover:-translate-y-0.5 hover:brightness-105"
              >
                Explore Videos
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-forest"
              >
                Get Involved
              </Link>

            </div>

          </motion.div>

        </div>
      </header>


      {/* =====================================================
          INTRO
      ===================================================== */}

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
            Our gallery brings together stories, events, programme activities and conversations that reflect the
            experiences of the communities and people we work with.
          </p>

        </motion.div>

      </section>


      {/* =====================================================
          FILTER
      ===================================================== */}

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


      {/* =====================================================
          VIDEOS
      ===================================================== */}

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


        {filteredVideos.length > 0 ? (

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {filteredVideos.map((video, index) => {

              const embedUrl = getYouTubeEmbedUrl(video.url);

              return (

                <motion.article
                  key={`${video.title}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group overflow-hidden bg-white shadow-sm transition hover:shadow-xl"
                >

                  {/* VIDEO */}

                  <div className="relative aspect-video bg-forest">

                    {embedUrl ? (

                      <iframe
                        src={embedUrl}
                        title={video.title}
                        className="h-full w-full"
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

                    <h3 className="text-lg font-bold leading-snug text-forest font-display">
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

        ) : (

          <div className="border border-dashed border-forest/20 bg-forest-light px-6 py-12 text-center">

            <h3 className="text-xl font-bold text-forest font-display">
              No videos available
            </h3>

            <p className="mt-2 text-ink/65">
              Videos will appear here when they are added.
            </p>

          </div>

        )}

      </section>


      {/* =====================================================
          YOUTUBE CTA — mirrors Home's partnership CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-forest-dark px-6 py-16 text-paper">

        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[25px] border-paper/10" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">

          <div>
            <Eyebrow>Stay Connected</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              Follow our work.
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-paper/80">
              Follow EACHRights for updates, stories, events and conversations about human rights and social
              justice across East Africa.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap justify-center gap-3">

            <a
              href="https://www.youtube.com/"
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
