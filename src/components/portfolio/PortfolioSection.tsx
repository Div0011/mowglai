"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Magnetic from "../Magnetic";
import Link from "next/link";

const projects = [
  {
    title: "Clarity Cartel",
    category: "Web App & Branding",
    image: "/assets/projects/clarity-cartel.webp",
    link: "/explore"
  },
  {
    title: "iElevate Digital",
    category: "Online Platform",
    image: "/assets/projects/ielevate.webp",
    link: "/explore"
  },
  {
    title: "Jayhawk Aviation",
    category: "Corporate System",
    image: "/assets/projects/jayhawk.webp",
    link: "/explore"
  },
  {
    title: "True Ratings",
    category: "SaaS Product",
    image: "/assets/projects/true-ratings.webp",
    link: "/explore"
  }
];

export default function PortfolioSection() {
  return (
    <section id="work" className="relative py-24 z-10 bg-background/95">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-primary font-display font-bold text-xs tracking-[0.3em] uppercase mb-3">
              <span className="w-8 h-[2px] bg-primary"></span>
              Selected Work
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
            >
              Our Featured Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-foreground/70 max-w-lg font-body"
            >
              A selection of our finest digital experiences crafted for ambitious brands worldwide.
            </motion.p>
          </div>
          <Magnetic>
            <Link 
              href="/explore"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary/20 text-primary font-bold tracking-widest uppercase text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm hover:shadow-[0_0_25px_rgba(245,208,97,0.25)]"
            >
              View All Works
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Magnetic>
        </div>

        {/* 2x2 Responsive Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl aspect-[16/10] bg-card border border-primary/15 shadow-lg"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-40"
              />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <div>
                  <p className="text-jungle-gold font-medium mb-2 font-body tracking-wider uppercase text-xs">
                    {project.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    <Link 
                      href={project.link}
                      className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl inline-flex items-center gap-2 hover:brightness-110 transition-all shadow-[0_0_20px_rgba(245,208,97,0.3)] text-sm"
                    >
                      <ExternalLink size={16} /> Explore Project
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
