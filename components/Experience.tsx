"use client";

import { experienceData } from "@/data/experience";
import {
  Briefcase,
  Users,
  Mic,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Experience() {
  const categoryIcon = (category: string) => {
    switch (category) {
      case "Leadership":
        return <Users className="w-4 h-4 text-primary-500 dark:text-primary-400" />;
      case "Public Speaking":
        return <Mic className="w-4 h-4 text-accent-violet" />;
      default:
        return <Briefcase className="w-4 h-4 text-accent-cyan" />;
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-primary-700/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-300 text-xs font-mono mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>LEADERSHIP &amp; COMMUNITY INVOLVEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Experience &amp; Student Governance
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-2xl text-base sm:text-lg">
            Active roles driving student technical chapters, institutional symposiums, oratorical platforms, and event operations.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-slate-200 dark:bg-white/[0.08] -translate-x-1/2" />

          <div className="space-y-12">
            {experienceData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  } group`}
                >
                  {/* Central Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-surface-subtle border border-primary-500/50 shadow-glow-sm group-hover:scale-110 transition-transform">
                    {categoryIcon(item.category)}
                  </div>

                  {/* Spacer for 2-column timeline layout on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Timeline Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-8 sm:pr-8">
                    <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-white/[0.08] hover:border-primary-500/40 transition-all duration-300">
                      
                      {/* Meta badges: Category & Period */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-300">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-zinc-400 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Role & Org */}
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-zinc-300 mb-4">
                        <span className="font-semibold">{item.organization}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-slate-500 dark:text-zinc-400">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-5">
                        {item.highlights.map((point, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2 text-xs text-slate-600 dark:text-zinc-400"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skill tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-white/[0.06]">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-zinc-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
