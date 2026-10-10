import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoCard = ({ video, index = 0 }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      data-testid={`video-card-${index}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="glass group relative overflow-hidden rounded-2xl"
    >
      <div className="relative aspect-video overflow-hidden">
        {playing ? (
          <video
            src={video.src}
            controls
            autoPlay
            playsInline
            className="h-full w-full object-cover"
            data-testid={`video-player-${index}`}
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            data-testid={`video-play-${index}`}
            className="relative block h-full w-full"
            aria-label={`Play ${video.title}`}
          >
            <img
              src={video.poster}
              alt={video.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="glass-strong gold-ring flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110">
                <Play className="ml-1 h-6 w-6 fill-amber-300 text-amber-300" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="flex items-center justify-between gap-3 p-4">
        <h3 className="font-display text-lg font-semibold text-amber-100">{video.title}</h3>
        <span className="shrink-0 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-amber-400">
          {video.tag}
        </span>
      </div>
    </motion.div>
  );
};

export default VideoCard;
