"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { videosData, SpeechVideo } from "@/data/videos";
import {
  Mic,
  Play,
  ExternalLink,
  Calendar,
  MapPin,
  X,
  Volume2,
  CheckCircle2,
  Maximize2,
} from "lucide-react";

export default function Speeches() {
  const [activeVideo, setActiveVideo] = useState<SpeechVideo | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock background page scroll while video modal is open
  useEffect(() => {
    if (activeVideo) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [activeVideo]);

  return (
    <section id="speeches" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-primary-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-300 text-xs font-mono mb-3">
            <Mic className="w-3.5 h-3.5" />
            <span>ORATORY &amp; RESEARCH KEYNOTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Speeches &amp; Presentations
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-2xl text-base sm:text-lg">
            Competitive public speaking, persuasive rhetoric on marginal gains, and live keynote recordings.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videosData.map((video) => (
            <div
              key={video.id}
              className="rounded-2xl glass-card overflow-hidden border border-slate-200 dark:border-white/[0.08] hover:border-primary-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Video Thumbnail Frame with Play Button */}
                <div
                  onClick={() => setActiveVideo(video)}
                  className="relative aspect-video w-full bg-slate-950 overflow-hidden cursor-pointer group/thumb"
                >
                  <Image
                    src={video.thumbnailUrl}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover/thumb:bg-black/20 transition-colors" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary-600/90 text-white flex items-center justify-center shadow-glow group-hover/thumb:scale-110 group-hover/thumb:bg-primary-500 transition-all">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Stage Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono text-white">
                    {video.stage} Round
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-zinc-400 mb-2">
                    <span>{video.event}</span>
                    <span>•</span>
                    <span>{video.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                    {video.title}
                  </h3>

                  <p className="text-xs font-mono text-primary-600 dark:text-primary-400 mb-3">
                    Topic: {video.topic}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-4">
                    {video.description}
                  </p>

                  {/* Key Themes */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-white/[0.06]">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 block">
                      Core Speech Themes:
                    </span>
                    <ul className="space-y-1">
                      {video.keyThemes.map((theme, tIdx) => (
                        <li
                          key={tIdx}
                          className="flex items-center gap-2 text-xs text-slate-700 dark:text-zinc-300"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                          <span>{theme}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-2 flex items-center gap-3">
                <button
                  onClick={() => setActiveVideo(video)}
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs font-medium text-white bg-primary-600 hover:bg-primary-500 shadow-glow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Presentation</span>
                </button>

                <a
                  href={video.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl text-xs font-medium text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-surface-subtle hover:bg-slate-200 dark:hover:bg-surface-hover border border-slate-200 dark:border-white/[0.08] flex items-center justify-center gap-1.5 transition-all"
                  title="Open original video link"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Drive Link</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Player Modal */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))] pl-[max(0.5rem,env(safe-area-inset-left))] pr-[max(0.5rem,env(safe-area-inset-right))]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-slate-900 border border-white/[0.15] rounded-2xl shadow-2xl flex flex-col my-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3.5 border-b border-white/[0.1] bg-slate-950/95 gap-2.5 flex-shrink-0 z-30">
              <div className="flex items-center gap-2.5 min-w-0 flex-1 pr-1 overflow-hidden">
                <Volume2 className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <h3 className="text-sm sm:text-base font-bold text-white truncate min-w-0">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white border border-white/25 shadow-lg hover:border-white/40 transition-all active:scale-95 flex-shrink-0 z-30 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Close video player"
                title="Close (Esc)"
              >
                <X className="w-5 h-5 text-white stroke-[2.5]" />
              </button>
            </div>

            {/* Video Player Iframe / Fallback */}
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={activeVideo.embedUrl}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-slate-950/90 border-t border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-zinc-400 font-mono">
                {activeVideo.event} • {activeVideo.stage} Round • {activeVideo.location}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={activeVideo.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium text-white bg-primary-600 hover:bg-primary-500 shadow-glow-sm transition-all"
                >
                  <span>Open in Full Google Drive Player</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
