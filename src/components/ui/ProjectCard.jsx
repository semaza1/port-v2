import { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export default function ProjectCard({ project, index = 0 }) {
  if (!project) return null;

  const {
    title       = '',
    category    = '',
    description = '',
    tech        = [],
    image,
    liveUrl,
    githubUrl,
    status      = 'completed',
    color       = '#3B82F6',
  } = project;

  const isLive = status === 'live';
  
  // Spotlight effect state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col h-full rounded-[24px] border border-white/5 bg-[#0a0a0a]/80 overflow-hidden backdrop-blur-xl transition-all duration-500 md:hover:-translate-y-2 md:hover:shadow-2xl"
      style={{
        boxShadow: "0 0 0 1px rgba(255,255,255,0.03), 0 20px 40px -10px rgba(0,0,0,0.5)"
      }}
    >
      {/* Dynamic Spotlight Background (Desktop) */}
      <motion.div
        className="hidden md:block pointer-events-none absolute -inset-px rounded-[24px] opacity-0 transition duration-500 md:group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${color}15,
              transparent 80%
            )
          `,
        }}
      />

      {/* Static Spotlight Background (Mobile) */}
      <div 
        className="md:hidden pointer-events-none absolute -inset-px rounded-[24px] z-0 opacity-100"
        style={{
          background: `radial-gradient(300px circle at 50% 0%, ${color}15, transparent 80%)`
        }}
      />

      {/* Dynamic Glowing Border (Desktop) */}
      <motion.div
        className="hidden md:block pointer-events-none absolute inset-0 rounded-[24px] opacity-0 transition duration-500 md:group-hover:opacity-100 z-20"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              ${color}50,
              transparent 100%
            )
          `,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      {/* Static Glowing Border (Mobile) */}
      <div
        className="md:hidden pointer-events-none absolute inset-0 rounded-[24px] z-20"
        style={{
          background: `radial-gradient(200px circle at 50% 0%, ${color}30, transparent 100%)`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      {/* Image Container */}
      <div className="relative h-56 sm:h-64 overflow-hidden rounded-t-[23px] bg-[#0c0c0c] z-10 mx-[1px] mt-[1px]">
        {image ? (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out md:group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent">
            <span className="font-heading text-4xl font-bold opacity-20" style={{ color }}>{title.charAt(0)}</span>
          </div>
        )}
        
        {/* Overlay gradient for image text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent opacity-90 md:group-hover:opacity-70 transition-opacity duration-500" />

        {/* Top Badges */}
        <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-20">
          <span 
            className="px-3 py-1.5 text-[10px] font-mono tracking-widest uppercase rounded-full backdrop-blur-md border border-white/10"
            style={{ color, backgroundColor: `${color}15` }}
          >
            {category}
          </span>
          {isLive && (
            <span className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono font-medium tracking-widest uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              Live
            </span>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="relative flex flex-col flex-1 p-6 sm:p-8 z-10 bg-gradient-to-b from-transparent to-[#050505]/50">
        <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-sm text-zinc-400/90 leading-relaxed mb-6 flex-1 group-hover:text-zinc-300 transition-colors duration-300">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tech.map((t) => (
            <span 
              key={t}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-zinc-300 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-colors duration-300 cursor-default"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-5 border-t border-white/5 mt-auto relative">
          <div className="flex items-center gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                aria-label="GitHub Repository"
              >
                <Github size={20} strokeWidth={1.5} />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                aria-label="Live Site"
              >
                <ExternalLink size={20} strokeWidth={1.5} />
              </a>
            )}
          </div>

          <a
            href={liveUrl || githubUrl || '#'}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:scale-110 transition-all duration-300 group/btn relative overflow-hidden"
            style={{ 
              boxShadow: `0 0 20px ${color}00`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 20px ${color}40`;
              e.currentTarget.style.borderColor = `${color}60`;
              e.currentTarget.style.backgroundColor = `${color}15`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 0 20px ${color}00`;
              e.currentTarget.style.borderColor = `rgba(255,255,255,0.1)`;
              e.currentTarget.style.backgroundColor = `rgba(255,255,255,0.05)`;
            }}
          >
            <ArrowRight size={18} className="text-zinc-400 group-hover/btn:text-white transition-colors duration-300 relative z-10" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}