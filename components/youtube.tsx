"use client";

import { useState } from "react";
import type { YoutubeVideo } from "@/content/videos";

export function YoutubePlayer({
  video,
  playLabel,
}: {
  video: YoutubeVideo;
  playLabel: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure>
      <div className="relative aspect-video bg-black">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            type="button"
            className="absolute inset-0"
            onClick={() => setPlaying(true)}
            aria-label={`${playLabel}: ${video.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt=""
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-black/25" />
            <span className="absolute top-1/2 left-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center bg-signal text-ink">
              <span className="ml-1 block h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-ink" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-2 font-display text-xl uppercase leading-tight">{video.title}</figcaption>
    </figure>
  );
}
