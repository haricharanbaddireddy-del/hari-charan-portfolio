"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { certificatesData, Certificate } from "@/data/certificates";
import {
  Award,
  ExternalLink,
  Eye,
  X,
  Filter,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";

export default function CertificateGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const categories = [
    "All",
    "Research & Award",
    "Innovation & Design",
    "National Hackathon",
    "Automation Certification",
    "Public Speaking",
  ];

  const filteredCerts =
    activeCategory === "All"
      ? certificatesData
      : certificatesData.filter((c) => c.category === activeCategory);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock background page scroll while modal is open
  useEffect(() => {
    if (selectedCert) {
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
  }, [selectedCert]);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-primary-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-300 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED ACADEMIC &amp; COMPETITIVE HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Official Certificate Gallery
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-2xl text-base sm:text-lg">
            Directly verified digital credentials from national hackathons, innovation bootcamps, and technical symposiums.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 max-w-4xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary-600 text-white shadow-glow-sm"
                    : "bg-slate-100 dark:bg-surface-subtle border border-slate-200 dark:border-white/[0.06] text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/[0.04]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl glass-card overflow-hidden border border-slate-200 dark:border-white/[0.08] hover:border-primary-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Certificate Preview Frame */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative aspect-[4/3] w-full bg-slate-950 overflow-hidden cursor-pointer group/thumb"
                >
                  <Image
                    src={cert.previewUrl}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover/thumb:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover/thumb:opacity-100">
                    <div className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5 border border-white/20">
                      <Eye className="w-3.5 h-3.5 text-primary-400" />
                      <span>Preview Certificate</span>
                    </div>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white">
                    {cert.category}
                  </div>
                </div>

                {/* Card Meta */}
                <div className="p-4">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-zinc-400 mb-1.5">
                    <span>{cert.event}</span>
                    <span>{cert.year}</span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-3">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="py-2 px-2.5 rounded-xl text-xs font-medium text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-surface-subtle hover:bg-slate-200 dark:hover:bg-surface-hover border border-slate-200 dark:border-white/[0.08] flex items-center justify-center gap-1 transition-all"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview</span>
                </button>

                <a
                  href={cert.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-2.5 rounded-xl text-xs font-medium text-white bg-primary-600 hover:bg-primary-500 shadow-glow-sm flex items-center justify-center gap-1 transition-all"
                  title="Open original drive link"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Drive</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Certificate Modal */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))] pl-[max(0.5rem,env(safe-area-inset-left))] pr-[max(0.5rem,env(safe-area-inset-right))]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden bg-slate-900 border border-white/[0.15] rounded-2xl shadow-2xl flex flex-col my-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3.5 border-b border-white/[0.1] bg-slate-950/95 gap-2.5 flex-shrink-0 z-30">
              <div className="flex items-center gap-2.5 min-w-0 flex-1 pr-1 overflow-hidden">
                <Award className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div className="min-w-0 flex-1 truncate">
                  <h3 className="text-sm sm:text-base font-bold text-white truncate min-w-0">
                    {selectedCert.title}
                  </h3>
                  <span className="text-xs font-mono text-zinc-400 truncate block">
                    {selectedCert.event} • {selectedCert.organization}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white border border-white/25 shadow-lg hover:border-white/40 transition-all active:scale-95 flex-shrink-0 z-30 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Close certificate preview"
                title="Close (Esc)"
              >
                <X className="w-5 h-5 text-white stroke-[2.5]" />
              </button>
            </div>

            {/* Modal Image Viewport */}
            <div className="relative w-full flex-1 min-h-[350px] sm:min-h-[460px] bg-black flex items-center justify-center p-2">
              <Image
                src={selectedCert.previewUrl}
                alt={selectedCert.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-slate-950/90 border-t border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-zinc-300 max-w-md">
                {selectedCert.description}
              </p>

              <div className="flex items-center gap-3 flex-shrink-0">
                <a
                  href={selectedCert.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-white bg-primary-600 hover:bg-primary-500 shadow-glow-sm transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Original in Google Drive</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
