"use client";

import { educationData } from "@/data/education";
import {
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  BookOpen,
} from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-primary-800/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Education &amp; Academic Honors
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
            Consistent academic excellence in computer science and mathematical disciplines.
          </p>
        </div>

        {/* Academic Journey Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, idx) => (
            <div
              key={edu.id}
              className="p-6 sm:p-8 rounded-2xl glass-card border border-white/[0.08] hover:border-primary-500/40 transition-all duration-300 relative group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                
                {/* Degree & Institution */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-surface-subtle border border-white/[0.08] group-hover:border-primary-500/30 text-primary-400 flex-shrink-0 mt-1">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300">
                        {edu.status}
                      </span>
                      {edu.field && (
                        <span className="text-xs font-mono text-zinc-400">
                          {edu.field}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-300 mt-1">
                      <span className="text-zinc-200 font-semibold">{edu.institution}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-zinc-400">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Score Pill & Period */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1 flex-shrink-0">
                  <div className="px-3.5 py-1.5 rounded-xl bg-primary-500/15 border border-primary-500/30 text-primary-300 font-mono font-bold text-base shadow-glow-sm">
                    {edu.grade}
                  </div>
                  <span className="text-xs text-zinc-400 font-mono flex items-center gap-1 mt-1">
                    <Calendar className="w-3 h-3 text-zinc-400" />
                    {edu.period}
                  </span>
                </div>

              </div>

              {/* Coursework & Extracurricular Highlights */}
              <div className="pt-4 border-t border-white/[0.06]">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/90 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
