"use client";

import { Github, Mail, Linkedin, Globe, Search, Cpu, BarChart3, Sparkles, ExternalLink, ShieldCheck, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import NextImage from "next/image";
import XLogo from "@/components/icons/XLogo";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  badge?: string;
  bio: string;
  skills: string[];
  image: string;
  socials: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    email: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "Founder & Chief Delivery Execution Officer",
    badge: "VISIONARY & CHIEF ARCHITECT",
    bio: "The foundational visionary and delivery executor driving Mowglai's frontier engineering. Orchestrates full-stack digital architecture, multi-cloud runtimes, reinforcement learning policy routing, and mission-critical client deliverables from inception to global scale.",
    skills: ["Full-Stack Architecture", "Milestone Execution", "Multi-Cloud Infrastructure", "Autonomous Systems", "Next.js 16 & React 19"],
    image: "/team/as.jpeg",
    socials: {
      github: "https://github.com/1nsharma",
      twitter: "https://x.com/mowglai_in",
      email: "mailto:amit@mowglai.com",
    },
  },
  {
    id: 2,
    name: "Nikhil Sharma",
    role: "Head of AIO, SEO & Search Intelligence",
    badge: "GROWTH & SEARCH ARCHITECT",
    bio: "Passionate about humanizing data. Bridges organic search intent with AI generative answer engines. Directs end-to-end AIO, keyword ranking dominance, on-page semantic graphs, high-trust off-page authority, and GA4 telemetry funnels so businesses get discovered and convert.",
    skills: [
      "AIO & Generative Engine Optimization (GEO)",
      "Keyword Research & SERP Ranking Strategy",
      "On-Page Semantic & Schema.org Graphs",
      "Off-Page Authority & Backlink Engineering",
      "GA4 Tags, Event Telemetry & Funnel Analytics",
    ],
    image: "/team/ns.jpeg",
    socials: {
      github: "https://github.com/1nsharma",
      twitter: "https://x.com/1nsharma",
      email: "mailto:sharma@mowglai.com",
    },
  },
  {
    id: 3,
    name: "Ankit Baghel",
    role: "Chief Marketing Officer",
    badge: "BRAND ARCHITECT",
    bio: "Leading creative brand direction, visual aesthetic systems, and global growth campaigns for tier-1 digital brands.",
    skills: ["Brand Systems", "Creative Direction", "Conversion UX", "Media Strategy"],
    image: "/team/ab.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/company/mowglai",
      twitter: "https://x.com/mowglai_in",
      email: "mailto:akshay@mowglai.com",
    },
  },
  {
    id: 4,
    name: "Divyansh Awasthi",
    role: "Chief Financial Officer",
    badge: "FINANCIAL GOVERNANCE",
    bio: "Guiding sustainable enterprise economics, capital allocation, and client return on investment for long-range digital infrastructure.",
    skills: ["Financial Modeling", "Resource Allocation", "Risk Governance", "SaaS Metrics"],
    image: "/team/da.jpeg",
    socials: {
      github: "https://github.com/div0011",
      linkedin: "https://www.linkedin.com/company/mowglai",
      email: "mailto:divyanshawasthi90@gmail.com",
    },
  },
  {
    id: 5,
    name: "Ajay Ahlawat",
    role: "Strategic Enterprise Advisor",
    badge: "STRATEGIC ADVISOR",
    bio: "Advising on high-value client alliances, enterprise roadmap expansion, and industry scaling.",
    skills: ["Enterprise Strategy", "Client Growth", "Operations", "Market Scale"],
    image: "/team/aa.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/company/mowglai",
      twitter: "https://x.com/mowglai_in",
      email: "mailto:ajay@mowglai.com",
    },
  },
];

export default function TeamSection() {
  return (
    <section className="relative w-full py-16 md:py-24 z-20 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Leadership & Domain Architects
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white uppercase">
            Meet the <span className="text-primary italic">Engineers & Strategists</span> Behind Mowglai
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-white/70 font-normal leading-relaxed">
            Real people dedicated to world-class craftsmanship. Blending human intuition, search algorithms, and machine intelligence to grow your business.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`rounded-3xl p-6 sm:p-7 backdrop-blur-2xl border transition-all duration-300 flex flex-col justify-between group ${
                member.id === 1 || member.id === 2
                  ? "bg-gradient-to-b from-white/[0.06] via-white/[0.03] to-transparent border-primary/40 shadow-[0_0_35px_rgba(200,241,105,0.15)]"
                  : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              <div>
                {/* Top Avatar & Badges */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-white/15 bg-primary/10 shrink-0 shadow-lg">
                    <div className="absolute inset-0 flex items-center justify-center text-primary/30 text-2xl font-black uppercase">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <NextImage
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="text-right">
                    {member.badge && (
                      <span className="inline-block text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary uppercase tracking-wider mb-2">
                        {member.badge}
                      </span>
                    )}
                    <div className="flex items-center justify-end gap-2 text-white/50">
                      {member.socials.github && (
                        <a
                          href={member.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors text-white/70"
                          aria-label="GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors text-white/70"
                          aria-label="Twitter / X"
                        >
                          <XLogo size={14} />
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors text-white/70"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.email && (
                        <a
                          href={member.socials.email}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors text-white/70"
                          aria-label="Email"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-mono font-bold text-primary uppercase tracking-wider mt-1 mb-3">
                  {member.role}
                </p>

                {/* Humanized Bio */}
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                  {member.bio}
                </p>
              </div>

              {/* Skill Badges */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-white/80 group-hover:border-primary/20 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
