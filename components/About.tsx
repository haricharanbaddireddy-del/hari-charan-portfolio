"use client";

import Image from "next/image";
import { profileData } from "@/data/profile";
import {
  GraduationCap,
  Award,
  Calendar,
  Sparkles,
  Code2,
  Brain,
  Cpu,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

export default function About() {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-primary-500 dark:text-primary-400" />,
    Brain: <Brain className="w-5 h-5 text-accent-violet" />,
    Cpu: <Cpu className="w-5 h-5 text-accent-cyan" />,
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary-600/5 dark:bg-primary-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND &amp; IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Engineering with Intent &amp; Academic Rigor
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-2xl text-base sm:text-lg">
            Bridging theoretical computer science with applied generative AI and robust automation systems.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait & Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden glass-card p-3 border border-slate-200 dark:border-white/[0.08] shadow-sm">
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden">
                <Image
                  src={profileData.secondaryPortraitUrl}
                  alt={profileData.fullName}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top filter contrast-[1.02] hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-sm font-semibold">{profileData.fullName}</div>
                  <div className="text-xs text-zinc-300 font-mono">
                    S.R.K.R. Engineering College (Autonomous), Bhimavaram
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Highlights Grid */}
            <div className="grid grid-cols-2 gap-3">
              {profileData.aboutDetails.highlights.map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl glass-card border border-slate-200 dark:border-white/[0.06] hover:border-primary-500/40 transition-all duration-300"
                >
                  <div className="text-[11px] font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white mb-0.5">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-zinc-400">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Bio Narrative & Strategic Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="space-y-4 text-slate-700 dark:text-zinc-300 text-base leading-relaxed">
              {profileData.aboutDetails.paragraphs.map((p, idx) => (
                <p key={idx}>
                  {p}
                </p>
              ))}
            </div>

            {/* Strategic Pillars */}
            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-mono text-primary-600 dark:text-primary-400 uppercase tracking-wider font-semibold">
                Core Competencies &amp; Focus Areas
              </h3>

              <div className="grid grid-cols-1 gap-3.5">
                {profileData.pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-xl glass-card border border-slate-200 dark:border-white/[0.06] hover:border-primary-500/40 transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-surface-subtle border border-slate-200 dark:border-white/[0.08] flex-shrink-0 mt-0.5">
                      {iconMap[pillar.icon] || <Code2 className="w-5 h-5 text-primary-500 dark:text-primary-400" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs text-slate-600 dark:text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06]">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                Autonomous Workflow Architect
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06]">
                <CheckCircle className="w-3.5 h-3.5 text-primary-500 dark:text-primary-400" />
                Prompt Engineering &amp; LLMs
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06]">
                <CheckCircle className="w-3.5 h-3.5 text-accent-violet" />
                Executive Body (ACE &amp; ACM)
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
