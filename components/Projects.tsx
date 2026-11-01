"use client";

import { useState } from "react";
import { projectsData, Project } from "@/data/projects";
import {
  FolderGit2,
  ExternalLink,
  Github,
  Sparkles,
  Layers,
  ArrowUpRight,
  CheckCircle,
  HelpCircle,
  X,
  Code2,
  Workflow,
  Lightbulb,
} from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "AI & Full Stack", "AI & Automation", "Web Development", "Hackathons"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-primary-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-accent-cyan/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-300 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>APPLIED WORK &amp; ARCHITECTURES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Featured Engineering Projects
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-2xl text-base sm:text-lg">
            Practical, end-to-end software solutions spanning intelligent civic systems, generative AI automations, and interactive web apps.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-primary-600 text-white shadow-glow-sm"
                    : "bg-slate-100 dark:bg-surface-subtle border border-slate-200 dark:border-white/[0.06] text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/[0.04]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl glass-card border border-slate-200 dark:border-white/[0.08] hover:border-primary-500/40 p-6 sm:p-8 transition-all duration-300 group"
            >
              <div>
                {/* Header: Category, Status Badge & External Links */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-300">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-600 dark:text-zinc-400 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06]">
                      {project.statusBadge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-surface-subtle border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-primary-500/40 transition-colors"
                        aria-label={`GitHub repo for ${project.name}`}
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                        aria-label={`Live demo for ${project.name}`}
                        title="Live Demonstration"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs font-mono text-primary-600 dark:text-primary-400 mb-4">
                  {project.tagline}
                </p>

                {/* Short Description */}
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Problem Being Solved Callout */}
                <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/[0.06]">
                  <div className="flex items-start gap-2.5">
                    <Lightbulb className="w-4 h-4 text-amber-500 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200 block mb-0.5">
                        Problem Solved:
                      </span>
                      <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                        {project.problemSolved}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Features Preview */}
                <div className="mb-6 space-y-2">
                  <span className="text-xs font-mono uppercase text-slate-500 dark:text-zinc-400 tracking-wider block font-semibold">
                    Key Highlights &amp; Features:
                  </span>
                  <ul className="space-y-1.5">
                    {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-zinc-300">
                        <CheckCircle className="w-3.5 h-3.5 text-primary-500 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & Deep Dive Action */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6 pt-3 border-t border-slate-100 dark:border-white/[0.06]">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl text-xs font-medium text-slate-700 dark:text-zinc-200 bg-slate-100 dark:bg-surface-subtle hover:bg-slate-200 dark:hover:bg-surface-hover border border-slate-200 dark:border-white/[0.1] flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub Repo</span>
                    </a>
                  )}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl text-xs font-medium text-white bg-primary-600 hover:bg-primary-500 shadow-glow-sm flex items-center justify-center gap-1.5 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="py-2.5 px-3 rounded-xl text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-500/10 border border-primary-500/20 hover:bg-primary-500/20 flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Workflow className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </button>
                  )}
                </div>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-2 px-3 text-[11px] font-mono text-slate-500 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-300 flex items-center justify-center gap-1 transition-all"
                >
                  <span>Detailed Architecture &amp; Workflow Modal</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Future Architecture Notice */}
        <div className="mt-14 p-6 rounded-2xl glass-card border border-slate-200 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                Upcoming Pipelines: CampusOS &amp; OptiNest
              </h4>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Configured with modular schema in `data/projects.ts` for instant expansion of future releases.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/haricharanbaddireddy-del/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-slate-700 dark:text-white bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/[0.1] transition-all flex-shrink-0"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Explore All Repositories</span>
          </a>
        </div>

      </div>

      {/* Modal for In-depth Architecture Breakdown */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0F1117] border border-slate-200 dark:border-white/[0.12] rounded-2xl shadow-2xl p-6 sm:p-8">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-4 pr-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono uppercase px-2.5 py-0.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-300">
                  {activeModalProject.category}
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.04]">
                  {activeModalProject.statusBadge}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {activeModalProject.name}
              </h3>
              <p className="text-xs font-mono text-primary-600 dark:text-primary-400 mt-1">
                {activeModalProject.tagline}
              </p>
            </div>

            {/* Overview */}
            <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed mb-6">
              {activeModalProject.description}
            </p>

            {/* Problem Solved */}
            <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/[0.06]">
              <h4 className="text-xs font-semibold text-slate-800 dark:text-white uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                Problem Statement &amp; Solution
              </h4>
              <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                {activeModalProject.problemSolved}
              </p>
            </div>

            {/* All Key Features */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-slate-800 dark:text-white uppercase tracking-wider mb-3">
                Comprehensive Feature Set:
              </h4>
              <ul className="space-y-2">
                {activeModalProject.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-zinc-300">
                    <CheckCircle className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-xs font-semibold text-slate-800 dark:text-white uppercase tracking-wider mb-2">
                Technologies &amp; Architecture:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-surface-subtle border border-slate-200 dark:border-white/[0.08] text-primary-600 dark:text-primary-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 dark:border-white/[0.08]">
              {activeModalProject.githubUrl && (
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium text-white bg-primary-600 hover:bg-primary-500 shadow-glow-sm transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
              {activeModalProject.liveUrl && (
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-500 shadow-glow-sm transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>
              )}
              <button
                onClick={() => setActiveModalProject(null)}
                className="ml-auto px-4 py-2.5 rounded-xl text-xs font-medium text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
