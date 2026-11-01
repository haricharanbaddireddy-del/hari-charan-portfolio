"use client";

import { useState } from "react";
import { skillCategories, SkillCategory } from "@/data/skills";
import {
  Terminal,
  Layout,
  Sparkles,
  Binary,
  Wrench,
  Users,
  CheckCircle2,
  Layers,
} from "lucide-react";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const iconComponents: Record<string, React.ReactNode> = {
    Terminal: <Terminal className="w-5 h-5 text-primary-500 dark:text-primary-400" />,
    Layout: <Layout className="w-5 h-5 text-accent-cyan" />,
    Sparkles: <Sparkles className="w-5 h-5 text-accent-violet" />,
    Binary: <Binary className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
    Wrench: <Wrench className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
    Users: <Users className="w-5 h-5 text-blue-500 dark:text-blue-400" />,
  };

  const filteredCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-accent-violet/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-300 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>VERIFIED CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Technical Stack &amp; Core Disciplines
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-2xl text-base sm:text-lg">
            A comprehensive, verified technical toolset grounded in computer science fundamentals and modern AI integrations.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 max-w-3xl">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-primary-600 text-white shadow-glow-sm"
                  : "bg-slate-100 dark:bg-surface-subtle border border-slate-200 dark:border-white/[0.06] text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/[0.04]"
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary-600 text-white shadow-glow-sm"
                    : "bg-slate-100 dark:bg-surface-subtle border border-slate-200 dark:border-white/[0.06] text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/[0.04]"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-white/[0.07] flex flex-col justify-between hover:border-primary-500/40 transition-all duration-300 group"
            >
              <div>
                {/* Card Top: Icon, Title, Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-surface-subtle border border-slate-200 dark:border-white/[0.08] group-hover:border-primary-500/30 transition-colors">
                    {iconComponents[cat.icon]}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-zinc-300">
                    {cat.badge}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Skills Tag Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07] text-xs font-medium text-slate-800 dark:text-zinc-200 hover:border-primary-500/40 hover:bg-primary-500/10 transition-all duration-200"
                    >
                      <CheckCircle2 className="w-3 h-3 text-primary-500 dark:text-primary-400/80" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Hint */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                <span>{cat.skills.length} verified technologies</span>
                <span className="text-primary-600 dark:text-primary-400">Production ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on integrity */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 dark:text-zinc-400 font-mono">
            * All technologies are actively verified in real projects, hackathons, and academic coursework.
          </p>
        </div>

      </div>
    </section>
  );
}
