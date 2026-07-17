import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/ui/ProjectCard';
import Button from '@/components/ui/Button';
import { PROJECTS } from '@/data/projects';

export default function Projects() {
  // Ensure scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="max-content">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            tag="portfolio"
            title={<>All <span className="gradient-text-blue">Projects</span></>}
            subtitle="A comprehensive list of the applications, websites, and systems I've built."
            className="mb-0"
          />
          <div className="flex-shrink-0">
            <Button
              as="a"
              href="https://github.com/semaza1"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="md"
              iconLeft={<Github size={16} />}
            >
              View GitHub Profile
            </Button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project, i) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 pt-10 border-t border-border flex flex-col items-center text-center"
        >
          <h3 className="text-xl font-heading font-semibold mb-3">Want to see more code?</h3>
          <p className="text-text-secondary mb-6 max-w-md">
            I'm always pushing new code and experimenting with new tech. Check out my latest repositories and contributions.
          </p>
          <Button
            as="a"
            href="https://github.com/semaza1"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
            iconRight={<ExternalLink size={16} />}
          >
            Explore My GitHub
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
