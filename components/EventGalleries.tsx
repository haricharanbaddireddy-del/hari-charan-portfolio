"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { eventsData, EventGallery } from "@/data/events";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Minimize2,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function EventGalleries() {
  const [selectedEvent, setSelectedEvent] = useState<EventGallery | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const openLightbox = (event: EventGallery, initialIndex: number = 0) => {
    setSelectedEvent(event);
    setCurrentImageIndex(initialIndex);
    setIsFullScreen(false);
  };

  const closeLightbox = () => {
    setSelectedEvent(null);
    setIsFullScreen(false);
  };

  const nextImage = useCallback(() => {
    if (!selectedEvent) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedEvent.images.length);
  }, [selectedEvent]);

  const prevImage = useCallback(() => {
    if (!selectedEvent) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedEvent.images.length - 1 : prev - 1
    );
  }, [selectedEvent]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedEvent) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedEvent, nextImage, prevImage]);

  return (
    <section id="events" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-accent-violet/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-300 text-xs font-mono mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>INTERACTIVE EVENT GALLERIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Hackathons, Bootcamps &amp; Stages
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-2xl text-base sm:text-lg">
            Documented on-site moments, technical defenses, award ceremonies, and team sprint archives.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData.map((event) => (
            <div
              key={event.id}
              onClick={() => openLightbox(event)}
              className="group cursor-pointer rounded-2xl glass-card overflow-hidden border border-slate-200 dark:border-white/[0.08] hover:border-primary-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Cover Image Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={event.coverImage}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Corner Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white">
                    {event.badge}
                  </div>

                  {/* Image Counter Badge */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-xs font-mono text-white flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-primary-400" />
                    <span>{event.images.length} Photos</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-zinc-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {event.year}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 truncate">
                      <MapPin className="w-3 h-3" />
                      {event.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                    {event.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-0">
                <div className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-surface-subtle group-hover:bg-primary-600 group-hover:text-white border border-slate-200 dark:border-white/[0.08] text-xs font-medium text-slate-700 dark:text-zinc-300 flex items-center justify-center gap-1.5 transition-all">
                  <span>Open Interactive Gallery</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
          <div
            className={`relative w-full ${
              isFullScreen ? "max-w-[98vw] h-[95vh]" : "max-w-4xl max-h-[92vh]"
            } overflow-hidden bg-slate-900 border border-white/[0.15] rounded-2xl shadow-2xl flex flex-col transition-all duration-300`}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.1] bg-slate-950/80">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full bg-primary-500/20 text-primary-300 text-xs font-mono border border-primary-500/30">
                  {selectedEvent.badge}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white truncate max-w-md">
                  {selectedEvent.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.1] transition-colors"
                  aria-label="Toggle full screen"
                  title="Toggle full screen"
                >
                  {isFullScreen ? (
                    <Minimize2 className="w-4 h-4" />
                  ) : (
                    <Maximize2 className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={closeLightbox}
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.1] transition-colors"
                  aria-label="Close lightbox"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Main Body */}
            <div className="flex-1 overflow-y-auto flex flex-col">
              {/* Image Viewport with Previous / Next Controls */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-black flex items-center justify-center overflow-hidden">
                <Image
                  src={selectedEvent.images[currentImageIndex].url}
                  alt={selectedEvent.images[currentImageIndex].caption}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />

                {/* Left Arrow */}
                {selectedEvent.images.length > 1 && (
                  <button
                    onClick={prevImage}
                    className="absolute left-3 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all active:scale-95 shadow-lg"
                    aria-label="Previous photograph"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}

                {/* Right Arrow */}
                {selectedEvent.images.length > 1 && (
                  <button
                    onClick={nextImage}
                    className="absolute right-3 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all active:scale-95 shadow-lg"
                    aria-label="Next photograph"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}

                {/* Counter & Caption Pill */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-zinc-300 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 pointer-events-auto">
                    {currentImageIndex + 1} / {selectedEvent.images.length}
                  </span>
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-zinc-200 pointer-events-auto max-w-lg truncate">
                    {selectedEvent.images[currentImageIndex].caption}
                  </span>
                </div>
              </div>

              {/* Event Description & Related Artifacts */}
              <div className="p-6 bg-slate-950/90 border-t border-white/[0.1] space-y-4">
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {selectedEvent.description}
                </p>

                {/* Key Takeaways */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-primary-400 mb-2 font-semibold">
                    Key Highlights &amp; Learnings:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedEvent.keyTakeaways.map((takeaway, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-zinc-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certificate & Video Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {selectedEvent.certificateDriveUrl && (
                    <a
                      href={selectedEvent.certificateDriveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-white bg-primary-600 hover:bg-primary-500 shadow-glow-sm transition-all"
                    >
                      <Award className="w-4 h-4" />
                      <span>View Official Certificate Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {/* Thumbnail Row */}
                  <div className="flex items-center gap-2 ml-auto">
                    {selectedEvent.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative w-12 h-9 rounded-lg overflow-hidden border-2 transition-all ${
                          currentImageIndex === idx
                            ? "border-primary-400 scale-105"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img.url}
                          alt={img.caption}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
