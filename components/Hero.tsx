"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import {
  ArrowRight,
  FileDown,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
  Cpu,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Subtle radial ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary-500/10 dark:bg-primary-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-accent-violet/10 blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent-cyan/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Identity, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-surface-subtle border border-slate-200 dark:border-white/[0.08] shadow-sm mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono tracking-wide text-slate-700 dark:text-zinc-300">
                Available for Summer &apos;25/&apos;26 Internships &amp; Research
              </span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4">
              <span className="block text-slate-500 dark:text-zinc-400 text-lg sm:text-xl font-normal font-mono mb-2 tracking-wide">
                Hi, my name is
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-zinc-100 dark:to-zinc-400">
                {profileData.fullName}
              </span>
            </h1>

            {/* Core Mission Headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-800 dark:text-zinc-200 leading-snug mb-6">
              Building Intelligent Solutions Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-accent-violet to-accent-cyan dark:from-primary-400 dark:via-accent-violet dark:to-accent-cyan">
                AI, Full Stack Development &amp; Automation.
              </span>
            </h2>

            {/* Supporting Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-8">
              {profileData.summary}
            </p>

            {/* 3 Identity Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mb-8">
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                <Terminal className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                <span className="text-xs font-mono text-slate-800 dark:text-zinc-300 tracking-wider font-semibold">
                  I BUILD SOFTWARE
                </span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                <Sparkles className="w-4 h-4 text-accent-violet flex-shrink-0" />
                <span className="text-xs font-mono text-slate-800 dark:text-zinc-300 tracking-wider font-semibold">
                  I EXPLORE AI
                </span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                <Cpu className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                <span className="text-xs font-mono text-slate-800 dark:text-zinc-300 tracking-wider font-semibold">
                  I AUTOMATE
                </span>
              </div>
            </div>

            {/* Action Buttons & Social Links */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-primary-600 hover:bg-primary-500 shadow-glow transition-all duration-200 active:scale-95 group"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={profileData.resumeUrl}
                download="Baddireddy_Hari_Charan_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-700 dark:text-zinc-200 bg-slate-100 dark:bg-surface-subtle hover:bg-slate-200 dark:hover:bg-surface-hover border border-slate-200 dark:border-white/[0.1] transition-all duration-200 active:scale-95"
              >
                <FileDown className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                <span>Download Resume</span>
              </a>

              {/* Social Icon Pills */}
              <div className="flex items-center gap-2 ml-1">
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-surface-subtle border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-primary-500/40 transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-surface-subtle border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-primary-500/40 transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="p-3 rounded-xl bg-slate-100 dark:bg-surface-subtle border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-primary-500/40 transition-all"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait with Dark Aesthetic Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Subtle aura backglow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-primary-600/30 via-accent-violet/30 to-accent-cyan/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

              {/* Card Container */}
              <div className="relative w-[280px] sm:w-[320px] md:w-[350px] aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 dark:bg-surface-subtle border border-slate-200 dark:border-white/[0.12] shadow-2xl p-2.5 backdrop-blur-xl">
                {/* Inner image frame */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/60">
                  <Image
                    src={profileData.portraitUrl}
                    alt={profileData.fullName}
                    fill
                    sizes="(max-width: 768px) 280px, 350px"
                    priority
                    className="object-cover object-center filter contrast-[1.03] brightness-[0.98] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle bottom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-transparent opacity-60" />

                  {/* Corner Accent Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/[0.1] text-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-white font-medium">
                          Baddireddy Hari Charan
                        </span>
                        <span className="text-[11px] text-zinc-400 font-mono">
                          SRKR Engineering College • 8.78 CGPA
                        </span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-primary-400 shadow-glow-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
