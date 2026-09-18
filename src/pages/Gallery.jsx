import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/*
|--------------------------------------------------------------------------
| ADD YOUR YOUTUBE VIDEOS HERE
|--------------------------------------------------------------------------
|
| You can paste either:
|
| https://www.youtube.com/watch?v=VIDEO_ID
|
| or:
|
| https://youtu.be/VIDEO_ID
|
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

    // Standard YouTube URL
    if (parsedUrl.hostname.includes("youtube.com")) {
      videoId = parsedUrl.searchParams.get("v") || "";

      // YouTube Shorts
      if (!videoId && parsedUrl.pathname.startsWith("/shorts/")) {
        videoId = parsedUrl.pathname.split("/shorts/")[1]?.split("/")[0];
      }

      // YouTube embed URL
      if (!videoId && parsedUrl.pathname.startsWith("/embed/")) {
        videoId = parsedUrl.pathname.split("/embed/")[1]?.split("/")[0];
      }
    }

    // Short YouTube URL
    if (parsedUrl.hostname === "youtu.be") {
      videoId = parsedUrl.pathname.replace("/", "").split("/")[0];
    }

    if (!videoId) return "";

    return `https://www.youtube.com/embed/${videoId}`;
  } catch {
    return "";
  }
}

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Videos"];

  const filteredVideos = useMemo(() => {
    if (activeCategory === "All") {
      return videos;
    }

    return videos;
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="bg-forest text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Link
              to="/"
              className="mb-8 inline-flex text-sm font-medium text-white/80 transition hover:text-white"
            >
              ← Back to Home
            </Link>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Gallery
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Stories, Voices &amp; Moments
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
              Explore videos and visual stories that showcase EACHRights'
              programmes, community engagement, advocacy and work to advance
              human rights and social justice in East Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest">
            Our Gallery
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest-dark sm:text-4xl">
            Watch our work in action
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Our gallery brings together stories, events, programme activities
            and conversations that reflect the experiences of the communities
            and people we work with.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section className="border-y border-gray-100 bg-forest-soft">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-6 lg:px-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-forest text-white"
                  : "bg-white text-forest ring-1 ring-forest/20 hover:bg-forest-soft"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* VIDEOS */}
<section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
  <div className="mb-8">
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest">
      Videos
    </p>

    <h2 className="mt-2 text-3xl font-bold text-forest-dark">
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
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            {/* VIDEO */}
            <div className="aspect-video bg-black">
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
                <div className="flex h-full items-center justify-center px-4 text-center text-sm text-white/70">
                  Add a valid YouTube URL to display this video.
                </div>
              )}
            </div>

            {/* VIDEO DETAILS */}
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="rounded-full bg-forest-soft px-2.5 py-1 text-[11px] font-semibold text-forest">
                  Video
                </span>

                <span className="text-xs text-gray-500">
                  {video.date}
                </span>
              </div>

              <h3 className="text-lg font-bold leading-snug text-forest-dark">
                {video.title}
              </h3>

              <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                {video.description}
              </p>
            </div>
          </motion.article>
        );
      })}
    </div>
  ) : (
    <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center">
      <h3 className="text-xl font-bold text-forest-dark">
        No videos available
      </h3>

      <p className="mt-2 text-gray-600">
        Videos will appear here when they are added.
      </p>
    </div>
  )}
</section>

      {/* YOUTUBE CTA */}
      <section className="bg-forest-soft">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest">
            Stay Connected
          </p>

          <h2 className="mt-3 text-3xl font-bold text-forest-dark">
            Follow our work
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Follow EACHRights for updates, stories, events and conversations
            about human rights and social justice across East Africa.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-forest px-6 py-3 font-semibold text-white transition hover:bg-forest-dark"
            >
              Visit YouTube Channel
            </a>

            <Link
              to="/contact"
              className="rounded-full border border-forest px-6 py-3 font-semibold text-forest transition hover:bg-forest-soft"
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