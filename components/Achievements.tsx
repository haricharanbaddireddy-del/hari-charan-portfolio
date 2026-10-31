"use client";

import { useState } from "react";
import { achievementsData, Achievement } from "@/data/achievements";
import {
  Trophy,
  Award,
  Lightbulb,
  Code,
  Flame,
  Cpu,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Calendar,
} from "lucide-react";

export default function Achievements() {
  const [filter, setFilter] = useState<string>("All");

  const iconMap: Record<string, React.ReactNode> = {
    Trophy: <Trophy className="w-5 h-5 text-amber-400" />,
    Lightbulb: <Lightbulb className="w-5 h-5 text-amber-300" />,
    Code: <Code className="w-5 h-5 text-accent-cyan" />,
    Flame: <Flame className="w-5 h-5 text-rose-400" />,
    Cpu: <Cpu className="w-5 h-5 text-primary-400" />,
  };

  const categories = ["All", "Award", "Bootcamp", "Hackathon", "Certification"];

  const filteredAchievements =
    filter === "All"
      ? achievementsData
      : achievementsData.filter((item) => item.category === filter);

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-accent-violet/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS &amp; MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Achievements &amp; Certifications
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
            Competitive honors, national bootcamp selections, and specialized technical certifications.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === cat
                    ? "bg-primary-600 text-white shadow-glow-sm"
                    : "bg-surface-subtle border border-white/[0.06] text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl glass-card border border-white/[0.08] hover:border-primary-500/40 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Header: Icon, Category Badge & Year */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-surface-subtle border border-white/[0.08] group-hover:border-primary-500/30 transition-colors">
                    {iconMap[item.icon] || <Award className="w-5 h-5 text-primary-400" />}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Title & Event */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary-300 transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-primary-400 mb-3">
                  {item.event} • {item.organization}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Impact Points */}
                <ul className="space-y-1.5 mb-6">
                  {item.impactPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/90 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Award Recognition Tag */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Recognition:</span>
                <span className="text-emerald-400 font-semibold">{item.award}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Addition Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-400 font-mono">
            Digital certificate credentials and event galleries are archived and available upon academic/employer verification request.
          </p>
        </div>

      </div>
    </section>
  );
}
