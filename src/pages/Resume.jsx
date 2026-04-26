import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Download, ArrowLeft, MapPin, Mail, Phone,
  Github, Linkedin, Briefcase, GraduationCap,
  Trophy, Code2, Users, Star, BookOpen, Lightbulb
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge  from '@/components/ui/Badge';

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */

const EDUCATION = {
  school:   'Liquidnet Family High School @ Agahozo-Shalom Youth Village',
  location: 'Rwamagana, Rwanda',
  period:   'August 2021 — July 2025',
  gpa:      '3.85 / 4.00',
  majors:   ['Mathematics', 'Physics', 'Computer Science', 'Entrepreneurship'],
  minors:   ['Kinyarwanda', 'English', 'General Studies & Communication Skills (GSCS)'],
  coursework: [
    {
      subject: 'Mathematics',
      topics:  'Algebra, Trigonometry, Calculus, Statistics, Geometry, Complex Numbers, Differential Equations, Probability',
    },
    {
      subject: 'Computer Science',
      topics:  'Algorithms, Database Design, Java, C++ Programming, Visual Basic, Computer Systems & Web Design',
    },
    {
      subject: 'Entrepreneurship',
      topics:  'Accounting, Investment & Business Plan, Strategic Management, Banking & Finance, Public Relations, International Trade',
    },
    {
      subject: 'Physics',
      topics:  'Astrophysics, Quantum Mechanics, Electromagnetic Theory, Optics, Thermodynamics, Nuclear Physics, Acoustics, Relativity',
    },
  ],
};

const EXPERIENCE = [
  {
    role:     'IT Intern',
    org:      'Agahozo-Shalom Youth Village (ASYV)',
    location: 'Rwamagana, Rwanda',
    period:   'September 2025 — Present',
    type:     'Internship',
    color:    '#3B82F6',
    points: [
      'Provide technical support to staff and students, including troubleshooting hardware, software, and network issues.',
      'Assist in managing school IT systems and maintaining computer labs across campus.',
      'Support digital learning initiatives and contribute to improving technology access and use across the village.',
    ],
  },
  {
    role:     'Trainee — Research & Systems Design',
    org:      'Growth Wave',
    location: 'Rwamagana, Kigali',
    period:   'March 2025 — July 2025',
    type:     'Internship',
    color:    '#8B5CF6',
    points: [
      'Revamped the school\'s election system with a fully digital, auditable solution improving transparency and efficiency.',
      'Designed and developed the Pharmacy Management System — a healthcare inventory platform for tracking medicines, expiry dates, and supplier orders.',
      'Assisted in teaching system research, user flow analysis, and requirements gathering to junior developers.',
    ],
  },
  {
    role:     'Designer & Developer',
    org:      'Career Connect Hub — Rwanda',
    location: 'Kigali, Rwanda',
    period:   'June 2025 — Present',
    type:     'Part-time',
    color:    '#10B981',
    points: [
      'Designed and developed an online writing competition platform to facilitate easy participation and submission management.',
      'Enhanced user engagement and accessibility through intuitive UI/UX design and streamlined registration flows.',
      'Collaborated directly with stakeholders to iterate on requirements and ship features on schedule.',
    ],
  },
];

const LEADERSHIP = [
  {
    role:     'Co-Founder & Lead Instructor',
    org:      'Byte Builders',
    location: 'Rwamagana, Rwanda',
    period:   'May 2023 — Present',
    color:    '#F59E0B',
    points: [
      'Co-founded a student-led coding club focused on teaching practical web development skills.',
      'Taught HTML & CSS, JavaScript, and PHP to fellow students through structured sessions and hands-on projects.',
      'Organized and coordinated the ASYV Hackathon, bringing together students to solve real-world problems with technology.',
      'Organized an exchange program with Rwanda Coding Academy, exposing students to broader tech ecosystems.',
    ],
  },
  {
    role:     'Church Elder',
    org:      'Agahozo-Shalom Youth Village',
    location: 'Rwamagana, Rwanda',
    period:   '2023 — Present',
    color:    '#EC4899',
    points: [
      'Serve as a spiritual leader and trusted mentor within the ASYV community of over 500 students.',
      'Organize and facilitate community gatherings, discussions, and programs that strengthen community bonds.',
      'Provide personal guidance and support to students navigating academic pressure and personal challenges.',
      'Model servant leadership, integrity, and community responsibility in all aspects of village life.',
    ],
  },
  {
    role:     'Advisor',
    org:      'ASYV Peer Mentorship Program',
    location: 'Rwamagana, Rwanda',
    period:   'July 2023 — July 2024',
    color:    '#06B6D4',
    points: [
      'Collaborated with the School Career Resources Center to organize workshops, career fairs, and student leader summits.',
      'Designed a comprehensive mentorship handbook used as the official framework for the program.',
      'Matched and assigned mentor-mentee pairs based on academic goals and personality compatibility.',
      'Provided weekly structured discussion topics to facilitate meaningful bilateral mentorship conversations.',
    ],
  },
  {
    role:     'Secretary',
    org:      'Science Club',
    location: 'Rwamagana, Rwanda',
    period:   'September 2022 — July 2023',
    color:    '#A1A1AA',
    points: [
      'Created and implemented membership initiatives that significantly boosted club participation and engagement.',
      'Organized STEM fairs, workshops, and educational programs contributing to a positive school-wide impact.',
      'Maintained meeting records, coordinated club communications, and managed event logistics.',
    ],
  },
];

const PROJECTS = [
  {
    name:   'Career Reach Hub',
    role:   'Full-Stack Developer',
    tech:   ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    color:  '#3B82F6',
    desc:   'A full-stack education and career platform connecting Rwandan students with opportunities, resources, and career guidance. Features user authentication, opportunity listings, application tracking, and an admin dashboard.',
  },
  {
    name:   'Product Store App',
    role:   'Full-Stack Developer',
    tech:   ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    color:  '#8B5CF6',
    desc:   'A complete MERN stack e-commerce application with product management, cart functionality, user authentication, order processing, and an admin panel for inventory control.',
  },
  {
    name:   'Kigali Pizza Company',
    role:   'Full-Stack Developer',
    tech:   ['React.js', 'Node.js', 'MySQL', 'Express.js', 'Tailwind CSS'],
    color:  '#F59E0B',
    desc:   'A restaurant management platform for a real Kigali business — handling menu management, online ordering, table reservations, kitchen workflow, and sales reporting.',
  },
  {
    name:   'Pharmacy Management System',
    role:   'Designer & Developer',
    tech:   ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML/CSS'],
    color:  '#10B981',
    desc:   'A healthcare inventory management system for pharmacies — tracking medicine stock, expiry dates, supplier orders, sales records, and generating operational reports.',
  },
  {
    name:   'Pay-to-Watch Video Platform',
    role:   'Full-Stack Developer',
    tech:   ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'MTN MoMo', 'HLS.js'],
    color:  '#F43F5E',
    desc:   'Currently building — a video streaming platform where users pay to unlock individual content or subscribe. Integrating Stripe and MTN Mobile Money for local and international payments, with future e-commerce capabilities.',
    current: true,
  },
  {
    name:   'Past Paper Finder',
    role:   'Developer',
    tech:   ['HTML', 'CSS', 'JavaScript'],
    color:  '#06B6D4',
    desc:   'A web platform giving ASYV students easy access to past exam papers. Won Best Developer award at ASYV STEM Day 2025.',
  },
  {
    name:   'Special Meals Management System',
    role:   'Designer & Developer',
    tech:   ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    color:  '#A259FF',
    desc:   'A platform connecting the school clinic and kitchen to streamline special meal requests for students with dietary needs. Won Outstanding Innovation Award at Innovators\' Tech Challenge 2024.',
  },
  {
    name:   'School Election System',
    role:   'Developer',
    tech:   ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    color:  '#F59E0B',
    desc:   'Revamped ASYV\'s student election process with a fully digital, auditable system improving transparency, reducing manual errors, and enabling real-time result tracking.',
  },
];

const AWARDS = [
  {
    title:  'Best Developer — ASYV STEM Day 2025',
    org:    'Liquidnet Family High School',
    date:   'February 2025',
    color:  '#F59E0B',
    desc:   'Awarded for building the Past Paper Finder web platform — recognized for innovation and real impact in helping students access past exam papers efficiently.',
  },
  {
    title:  'Outstanding Innovation Award — Innovators\' Tech Challenge 2024',
    org:    'Agahozo-Shalom Youth Village',
    date:   'October 2024',
    color:  '#3B82F6',
    desc:   'Won for designing the Special Meals Management System — a platform connecting the school clinic and kitchen to streamline special meal requests, improving efficiency and student well-being.',
  },
  {
    title:  'Four-Year Full Scholarship',
    org:    'Agahozo-Shalom Youth Village',
    date:   'August 2021',
    color:  '#10B981',
    desc:   'Awarded the ASYV four-year scholarship covering full tuition, accommodation, and living expenses — given to students who demonstrate exceptional academic promise and leadership potential.',
  },
];

const SKILLS = [
  {
    label:  'Frontend',
    color:  '#61DAFB',
    items:  ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'Responsive Design'],
  },
  {
    label:  'Backend',
    color:  '#8CC84B',
    items:  ['Node.js', 'Express.js', 'PHP', 'Java', 'C++', 'Python (CMU)', 'Visual Basic', 'REST APIs'],
  },
  {
    label:  'Databases',
    color:  '#F29111',
    items:  ['MongoDB', 'MySQL', 'Database Design', 'Data Modelling'],
  },
  {
    label:  'Design & Tools',
    color:  '#F24E1E',
    items:  ['Figma', 'UI/UX Design', 'Git', 'GitHub', 'Flutter', 'MS Office Suite'],
  },
  {
    label:  'Soft Skills',
    color:  '#A259FF',
    items:  ['Leadership', 'Teaching & Mentorship', 'Project Management', 'Community Building', 'Public Speaking', 'Strategic Thinking'],
  },
  {
    label:  'Languages',
    color:  '#EC4899',
    items:  ['English (Advanced)', 'Kinyarwanda (Advanced)', 'Kirundi (Native)', 'Kiswahili (Conversational)'],
  },
];

const REFERENCES = [
  { name: 'Stella Wayianzuvuko', role: 'Principal, Liquidnet Family High School', email: 'stella@asyv.org' },
  { name: 'Kaboyo Julius',       role: 'Dean of Students, Liquidnet Family High School', email: 'julius@asyv.org' },
  { name: 'Justin Mutangana',    role: 'IT Department, Agahozo-Shalom Youth Village', email: 'justin@asyv.org' },
];

/* ─────────────────────────────────────────────────────────────
   ANIMATION
───────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = (delay = 0) => ({
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: delay } },
});

/* ─────────────────────────────────────────────────────────────
   REUSABLE COMPONENTS
───────────────────────────────────────────────────────────── */

/* Section block */
function Section({ id, icon, title, children, delay = 0 }) {
  return (
    <motion.section
      id={id}
      variants={stagger(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="mb-16"
    >
      <motion.div
        variants={fadeUp}
        className="flex items-center gap-3 mb-7 pb-3 border-b border-border"
      >
        <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 text-accent flex-shrink-0">
          {icon}
        </div>
        <h2 className="font-heading font-semibold text-base text-text-primary tracking-tight uppercase">
          {title}
        </h2>
      </motion.div>
      {children}
    </motion.section>
  );
}

/* Timeline entry */
function TimelineEntry({ role, org, location, period, type, color, points }) {
  return (
    <motion.div variants={fadeUp} className="flex gap-5 mb-8 last:mb-0 group">
      {/* Timeline spine */}
      <div className="flex flex-col items-center flex-shrink-0 pt-1">
        <div
          className="w-2.5 h-2.5 rounded-full border-2 border-bg-primary flex-shrink-0"
          style={{ background: color }}
        />
        <div className="w-px flex-1 mt-2 bg-border group-last:hidden" />
      </div>

      {/* Body */}
      <div className="flex-1 min-w-0 pb-2">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 mb-3">
          <div>
            <h3 className="font-heading font-semibold text-sm text-text-primary leading-snug">{role}</h3>
            <p className="text-sm text-text-secondary mt-0.5">{org}</p>
          </div>
          <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
            <span className="font-mono text-[11px] text-text-tertiary">{period}</span>
            <div className="flex items-center gap-1.5">
              <MapPin size={10} className="text-text-tertiary" />
              <span className="font-mono text-[10px] text-text-tertiary">{location}</span>
            </div>
            {type && <Badge variant="default" size="sm">{type}</Badge>}
          </div>
        </div>

        {/* Bullet points */}
        <ul className="flex flex-col gap-2">
          {points.map((pt, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed">
              <span
                className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: color }}
                aria-hidden="true"
              />
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* Project row */
function ProjectRow({ name, role, tech, color, desc, current }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ x: 3 }}
      transition={{ duration: 0.2 }}
      className="flex gap-4 p-4 rounded-xl border border-border bg-bg-secondary hover:border-accent/20 transition-colors duration-200 mb-3 last:mb-0"
    >
      {/* Color bar */}
      <div
        className="w-1 rounded-full flex-shrink-0 self-stretch"
        style={{ background: color }}
        aria-hidden="true"
      />

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-2">
            <h3 className="font-heading font-semibold text-sm text-text-primary">{name}</h3>
            {current && (
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent">
                <span className="w-1 h-1 rounded-full bg-accent animate-pulse-slow" />
                In Progress
              </span>
            )}
          </div>
          <span className="font-mono text-[10px] text-text-tertiary">{role}</span>
        </div>

        <p className="text-xs text-text-secondary leading-relaxed mb-2.5">{desc}</p>

        <div className="flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-bg-tertiary border border-border text-text-tertiary"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* Award card */
function AwardCard({ title, org, date, color, desc }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="flex gap-4 p-4 rounded-xl border border-border bg-bg-secondary hover:bg-bg-tertiary/40 transition-colors duration-200 mb-3 last:mb-0"
    >
      <div
        className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl border mt-0.5"
        style={{ background: color + '15', borderColor: color + '30', color }}
      >
        <Trophy size={15} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <p className="font-heading font-semibold text-sm text-text-primary leading-snug">{title}</p>
          <span className="font-mono text-[10px] text-text-tertiary flex-shrink-0">{date}</span>
        </div>
        <p className="font-mono text-[10px] text-text-tertiary mb-2">{org}</p>
        <p className="text-xs text-text-secondary leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
export default function Resume() {
  return (
    <div className="min-h-screen bg-bg-primary">

      {/* ── Sticky top bar ── */}
      <div className="sticky top-16 z-30 border-b border-border bg-bg-secondary/70 backdrop-blur-xl">
        <div className="max-content flex items-center justify-between py-3 gap-4">
          <Button as={Link} to="/" variant="ghost" size="sm" iconLeft={<ArrowLeft size={14} />}>
            Back
          </Button>

          {/* Section jump links */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Resume sections"
          >
            {[
              { label: 'Education',   href: '#education'   },
              { label: 'Experience',  href: '#experience'  },
              { label: 'Leadership',  href: '#leadership'  },
              { label: 'Projects',    href: '#projects'    },
              { label: 'Skills',      href: '#skills'      },
              { label: 'Awards',      href: '#awards'      },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3 py-1.5 rounded-md font-mono text-[11px] text-text-tertiary hover:text-text-primary hover:bg-white/5 transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </nav>

          <Button
            as="a"
            href="/assets/Emmanuel_SEMAZA_CV.pdf"
            download
            variant="primary"
            size="sm"
            iconLeft={<Download size={13} />}
          >
            Download PDF
          </Button>
        </div>
      </div>

      {/* ── Page body ── */}
      <div className="max-content py-14">
        <div className="max-w-4xl mx-auto">

          {/* ════════════════════════════════════════
              HEADER
          ════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-14 pb-10 border-b border-border"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div>
                <h1
                  className="font-heading font-bold tracking-tight text-text-primary mb-2"
                  style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)' }}
                >
                  Emmanuel{' '}
                  <span className="gradient-text-blue">Semaza</span>
                </h1>

                <p className="text-text-secondary text-lg mb-5">
                  Full-Stack Developer · UI/UX Designer · Community Leader
                </p>

                {/* Contact info */}
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {[
                    { icon: <MapPin size={12} />,    text: 'Kicukiro, Kigali, Rwanda' },
                    { icon: <Phone size={12} />,     text: '+250 798 721 418',         href: 'tel:+250798721418' },
                    { icon: <Mail size={12} />,      text: 'semazaemmanuel@gmail.com', href: 'mailto:semazaemmanuel@gmail.com' },
                    { icon: <Github size={12} />,    text: 'github.com/emmanuelsemaza', href: 'https://github.com/semaza1' },
                    { icon: <Linkedin size={12} />,  text: 'linkedin.com/in/emmanuelsemaza', href: 'https://linkedin.com/in/emmanuelsemaza' },
                  ].map(({ icon, text, href }) =>
                    href ? (
                      <a
                        key={text}
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-1.5 font-mono text-xs text-text-tertiary hover:text-accent transition-colors duration-150"
                      >
                        {icon}{text}
                      </a>
                    ) : (
                      <span key={text} className="flex items-center gap-1.5 font-mono text-xs text-text-tertiary">
                        {icon}{text}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Status */}
              <div className="flex flex-col gap-2 flex-shrink-0">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
                  <span className="font-mono text-xs text-emerald-400 font-medium">Open to opportunities</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-bg-secondary">
                  <MapPin size={11} className="text-text-tertiary" />
                  <span className="font-mono text-xs text-text-tertiary">Kigali, Rwanda · Remote OK</span>
                </div>
              </div>
            </div>

            {/* Professional summary */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-8 p-5 rounded-xl border border-border/60 bg-bg-secondary/50"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary mb-3">
                Professional Summary
              </p>
              <p className="text-text-secondary text-sm leading-[1.85]">
                Full-stack developer and community leader from Kigali, Rwanda with a strong academic
                foundation in Mathematics, Physics, Computer Science, and Entrepreneurship. I build
                real-world software products that solve tangible problems — from education platforms
                and e-commerce apps to healthcare inventory systems and restaurant management tools.
                As Co-Founder of Byte Builders and Church Elder at ASYV, I combine technical depth
                with servant leadership and a deep commitment to community impact. Currently deepening
                expertise in video streaming, payment integration, and scalable system architecture.
              </p>
            </motion.div>
          </motion.div>

          {/* ════════════════════════════════════════
              EDUCATION
          ════════════════════════════════════════ */}
          <Section id="education" icon={<GraduationCap size={14} />} title="Education">
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-border bg-bg-secondary overflow-hidden"
            >
              {/* Top row */}
              <div className="p-6 border-b border-border">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading font-semibold text-base text-text-primary mb-1">
                      {EDUCATION.school}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={11} className="text-text-tertiary" />
                      <span className="font-mono text-xs text-text-tertiary">{EDUCATION.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="font-mono text-xs text-text-tertiary">{EDUCATION.period}</span>
                    <Badge variant="accent" dot>GPA: {EDUCATION.gpa}</Badge>
                  </div>
                </div>
              </div>

              {/* Majors & Minors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border">
                <div className="p-5">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary mb-3">Majors</p>
                  <div className="flex flex-wrap gap-2">
                    {EDUCATION.majors.map((m) => (
                      <Badge key={m} variant="default">{m}</Badge>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary mb-3">Minors</p>
                  <div className="flex flex-wrap gap-2">
                    {EDUCATION.minors.map((m) => (
                      <Badge key={m} variant="default">{m}</Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Coursework */}
              <div className="p-5 border-t border-border">
                <p className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary mb-4">
                  Relevant Coursework
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {EDUCATION.coursework.map(({ subject, topics }) => (
                    <div key={subject} className="p-3 rounded-lg bg-bg-tertiary border border-border/60">
                      <p className="font-mono text-xs font-medium text-text-primary mb-1.5">{subject}</p>
                      <p className="text-xs text-text-tertiary leading-relaxed">{topics}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Section>

          {/* ════════════════════════════════════════
              EXPERIENCE
          ════════════════════════════════════════ */}
          <Section id="experience" icon={<Briefcase size={14} />} title="Research & Internship Experience">
            {EXPERIENCE.map((item) => (
              <TimelineEntry key={item.org + item.role} {...item} />
            ))}
          </Section>

          {/* ════════════════════════════════════════
              LEADERSHIP
          ════════════════════════════════════════ */}
          <Section id="leadership" icon={<Users size={14} />} title="Work & Leadership Experience">
            {LEADERSHIP.map((item) => (
              <TimelineEntry key={item.org + item.role} {...item} />
            ))}
          </Section>

          {/* ════════════════════════════════════════
              PROJECTS
          ════════════════════════════════════════ */}
          <Section id="projects" icon={<Lightbulb size={14} />} title="Projects">
            {PROJECTS.map((p) => (
              <ProjectRow key={p.name} {...p} />
            ))}
          </Section>

          {/* ════════════════════════════════════════
              SKILLS
          ════════════════════════════════════════ */}
          <Section id="skills" icon={<Code2 size={14} />} title="Technical Skills">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SKILLS.map(({ label, color, items }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="p-4 rounded-xl border border-border bg-bg-secondary hover:border-border-strong transition-colors duration-200"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
                    <p className="font-mono text-xs font-medium text-text-secondary uppercase tracking-wider">
                      {label}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-[11px] px-2 py-1 rounded-md bg-bg-tertiary border border-border text-text-secondary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* ════════════════════════════════════════
              AWARDS
          ════════════════════════════════════════ */}
          <Section id="awards" icon={<Trophy size={14} />} title="Honors & Awards">
            {AWARDS.map((award) => (
              <AwardCard key={award.title} {...award} />
            ))}
          </Section>

          {/* ════════════════════════════════════════
              INTERESTS
          ════════════════════════════════════════ */}
          <Section id="interests" icon={<Star size={14} />} title="Interests & Essential Skills">
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {[
                'Software Engineering', 'Leadership & Mentorship', 'Community Building',
                'Open Source Development', 'STEM Education', 'Entrepreneurship',
                'UI/UX Design', 'Learning New Technologies', 'Public Speaking',
                'Strategic Thinking', 'Video Streaming', 'Payment Systems',
              ].map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs px-3 py-1.5 rounded-lg bg-bg-secondary border border-border text-text-secondary hover:border-accent/30 hover:text-text-primary transition-colors duration-150 cursor-default"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </Section>

          {/* ════════════════════════════════════════
              REFERENCES
          ════════════════════════════════════════ */}
          <Section id="references" icon={<BookOpen size={14} />} title="References">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {REFERENCES.map(({ name, role, email }) => (
                <motion.div
                  key={name}
                  variants={fadeUp}
                  className="p-4 rounded-xl border border-border bg-bg-secondary hover:border-accent/20 transition-colors duration-200"
                >
                  <p className="font-heading font-semibold text-sm text-text-primary mb-1">{name}</p>
                  <p className="text-xs text-text-secondary leading-snug mb-3">{role}</p>
                  <a
                    href={`mailto:${email}`}
                    className="font-mono text-[11px] text-accent hover:text-accent-hover transition-colors duration-150"
                  >
                    {email}
                  </a>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* ════════════════════════════════════════
              BOTTOM CTA
          ════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-4 p-6 rounded-2xl border border-accent/20 bg-accent/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          >
            <div>
              <p className="font-heading font-semibold text-text-primary mb-1">
                Let's build something meaningful together.
              </p>
              <p className="text-sm text-text-secondary">
                Open to full-time roles, freelance projects, and technical collaborations.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Button
                as="a"
                href="mailto:semazaemmanuel@gmail.com"
                variant="primary"
                size="md"
                iconRight={<Mail size={14} />}
              >
                Get in Touch
              </Button>
              <Button
                as={Link}
                to="/"
                variant="secondary"
                size="md"
                iconLeft={<ArrowLeft size={14} />}
              >
                Portfolio
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}