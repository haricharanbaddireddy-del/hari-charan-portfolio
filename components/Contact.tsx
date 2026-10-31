"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { profileData } from "@/data/profile";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Copy,
  Check,
  Sparkles,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Please enter a subject.";
    if (!formData.message.trim()) newErrors.message = "Please write a message.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Launch celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch (err) {
      // ignore
    }

    // Prepare direct mailto link to guarantee delivery
    const mailtoUrl = `mailto:${profileData.contact.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Open mailto fallback client-side
      window.open(mailtoUrl, "_blank");
    }, 600);
  };

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>LET&apos;S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Get in Touch &amp; Collaborate
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
            Whether you have an internship opportunity, an open-source project, or want to discuss AI pipelines, my inbox is always open.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contacts, Location, Profiles */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">
                Contact Information
              </h3>

              {/* Email Card with Quick Copy */}
              <div className="p-4 rounded-xl glass-card border border-white/[0.08] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-surface-subtle border border-white/[0.08] text-primary-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${profileData.contact.email}`}
                      className="text-xs sm:text-sm font-medium text-white hover:text-primary-300 transition-colors"
                    >
                      {profileData.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(profileData.contact.email, "email")}
                  className="p-2 rounded-lg bg-surface-subtle hover:bg-surface-hover border border-white/[0.08] text-zinc-400 hover:text-white transition-all text-xs"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card with Quick Copy */}
              <div className="p-4 rounded-xl glass-card border border-white/[0.08] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-surface-subtle border border-white/[0.08] text-accent-cyan">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                      Phone / WhatsApp
                    </span>
                    <a
                      href={`tel:${profileData.contact.phone.replace(/\s+/g, "")}`}
                      className="text-xs sm:text-sm font-medium text-white hover:text-accent-cyan transition-colors"
                    >
                      {profileData.contact.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(profileData.contact.phone, "phone")}
                  className="p-2 rounded-lg bg-surface-subtle hover:bg-surface-hover border border-white/[0.08] text-zinc-400 hover:text-white transition-all text-xs"
                  aria-label="Copy phone number"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl glass-card border border-white/[0.08] flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-surface-subtle border border-white/[0.08] text-accent-violet">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                    Campus &amp; Location
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white">
                    {profileData.contact.college}, Bhimavaram, AP
                  </span>
                </div>
              </div>
            </div>

            {/* Social Connect Banner */}
            <div className="p-5 rounded-2xl glass-card border border-white/[0.08]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                Professional Online Identity
              </h4>
              <div className="flex flex-col gap-2">
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] text-xs text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-primary-400" />
                    <span>github.com/haricharanbaddireddy-del</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] text-xs text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>linkedin.com/in/hari-charan-baddireddy</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/[0.08]">
              <h3 className="text-lg font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Fill in the details below. Once submitted, this form triggers a prepared email dispatch directly to my personal inbox.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">
                    Message Prepared &amp; Email Client Opened!
                  </h4>
                  <p className="text-xs text-zinc-300 max-w-md mx-auto mb-4">
                    Your message draft has been configured for <span className="text-emerald-400">{profileData.contact.email}</span>. Thank you for reaching out!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="text-xs font-mono text-primary-400 hover:text-primary-300 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full px-4 py-2.5 rounded-xl bg-surface-subtle border text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all ${
                          errors.name
                            ? "border-rose-500/60"
                            : "border-white/[0.08] focus:border-primary-500"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-4 py-2.5 rounded-xl bg-surface-subtle border text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all ${
                          errors.email
                            ? "border-rose-500/60"
                            : "border-white/[0.08] focus:border-primary-500"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Subject <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Internship Inquiry / Project Discussion"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 rounded-xl bg-surface-subtle border text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all ${
                        errors.subject
                          ? "border-rose-500/60"
                          : "border-white/[0.08] focus:border-primary-500"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell me about your project, timeline, or inquiry..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 rounded-xl bg-surface-subtle border text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all ${
                        errors.message
                          ? "border-rose-500/60"
                          : "border-white/[0.08] focus:border-primary-500"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl text-xs font-medium text-white bg-primary-600 hover:bg-primary-500 shadow-glow transition-all active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Preparing Transmission...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message via Mail Client</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-zinc-400 font-mono pt-1">
                    Direct fallback:{" "}
                    <a
                      href={`mailto:${profileData.contact.email}`}
                      className="text-primary-400 hover:underline"
                    >
                      {profileData.contact.email}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
