/**
 * skills.js — single source of truth for all skills data
 */

export const SKILL_GROUPS = [
  {
    id:      'frontend',
    label:   'Frontend',
    tag:     '01',
    icon:    'monitor',
    skills: [
      { name: 'React.js',    level: 90, color: '#61DAFB' },
      { name: 'JavaScript',  level: 88, color: '#F7DF1E' },
      { name: 'Vite',        level: 85, color: '#646CFF' },
      { name: 'Tailwind CSS',level: 90, color: '#38BDF8' },
      { name: 'HTML / CSS',  level: 92, color: '#E34F26' },
    ],
  },
  {
    id:      'backend',
    label:   'Backend',
    tag:     '02',
    icon:    'server',
    skills: [
      { name: 'Node.js',    level: 85, color: '#8CC84B' },
      { name: 'Express.js', level: 83, color: '#A1A1AA' },
      { name: 'PHP',        level: 78, color: '#7377AD' },
      { name: 'MongoDB',    level: 80, color: '#47A248' },
      { name: 'MySQL',      level: 82, color: '#F29111' },
    ],
  },
  {
    id:      'design',
    label:   'Design & Tools',
    tag:     '03',
    icon:    'pen-tool',
    skills: [
      { name: 'Figma',      level: 80, color: '#F24E1E' },
      { name: 'UI/UX Design',level: 78, color: '#A259FF' },
      { name: 'Git / GitHub',level: 88, color: '#F1502F' },
      { name: 'REST APIs',  level: 85, color: '#3B82F6' },
      { name: 'Responsive Design', level: 90, color: '#10B981' },
    ],
  },
];