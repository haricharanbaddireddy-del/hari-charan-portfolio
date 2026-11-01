"use client";

import Link from "next/link";
import { profileData } from "@/data/profile";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Terminal,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Events", href: "#events" },
    { name: "Speeches", href: "#speeches" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-slate-100 dark:bg-[#050608] border-t border-slate-200 dark:border-white/[0.06] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-white/[0.06]">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="#hero" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-mono font-bold text-xs group-hover:text-primary-700 dark:group-hover:text-white transition-colors">
                HC
              </div>
              <span className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                {profileData.fullName}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 max-w-sm leading-relaxed mb-4">
              {profileData.headline}. Passionate about computer science fundamentals, applied LLMs, and workflow automation.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-zinc-400">
              <Terminal className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
              <span>S.R.K.R. Engineering College • Class of 2028</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-800 dark:text-zinc-300 font-semibold mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs text-slate-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-800 dark:text-zinc-300 font-semibold mb-4 md:text-right">
                Connect
              </h4>
              <div className="flex items-center gap-2">
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white dark:bg-surface-subtle border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-primary-500/40 transition-all shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white dark:bg-surface-subtle border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-primary-500/40 transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="p-2.5 rounded-lg bg-white dark:bg-surface-subtle border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-primary-500/40 transition-all shadow-sm"
                  aria-label="Email Hari"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-surface-subtle hover:bg-slate-200 dark:hover:bg-surface-hover border border-slate-200 dark:border-white/[0.08] hover:border-primary-500/40 text-xs font-mono text-slate-700 dark:text-zinc-300 transition-all group shadow-sm"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Legal & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} {profileData.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Designed &amp; Architected with</span>
            <span className="text-primary-600 dark:text-primary-400 font-semibold">Next.js &amp; Tailwind</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
