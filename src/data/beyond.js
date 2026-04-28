/**
 * beyond.js — data for the Beyond Code page
 * Update this file only when you add new content.
 */

export const CERTIFICATIONS = [
  {
    id:       'cert-1',
    title:    'Responsive Web Design',
    issuer:   'freeCodeCamp',
    year:     '2024',
    category: 'Frontend',
    color:    '#3B82F6',
    link:     'https://www.freecodecamp.org/certification/semaza1/responsive-web-design',   // replace with your certificate URL
    image:    '/assets/certs/Free code camp Certificate.png',   // replace with certificate image path
  },
  {
    id:       'cert-2',
    title:    'Python Algorithms & Data Structures',
    issuer:   'CMU CS Academy',
    year:     '2025',
    category: 'Programming',
    color:    '#F59E0B',
    link:     null,
    image:    '/assets/certs/cmu.png',
  },
  {
    id:       'cert-3',
    title:    'Applied Data Science with Python',
    issuer:   'World Quant University',
    year:     '2025',
    category: 'Data Science',
    color:    '#10B981',
    link:     'https://www.credly.com/badges/955c5c17-f2ad-4f2d-81b1-a83067b581c7',
    image:    '/assets/certs/wqu.png',
  },
  {
    id:       'cert-4',
    title:    'Introduction to AI Fundemantals',
    issuer:   'Udacity',
    year:     '2025',
    category: 'AI',
    color:    '#47A248',
    link:     'www.udacity.com/certificate/e/3fcb253e-737c-11f0-b57f-0bd8a48ac4ed',
    image:    '/assets/certs/udacity.png',
  },
  {
    id:       'cert-5',
    title:    'The Web Developer Bootcamp',
    issuer:   'Growthwave',
    year:     '2025',
    category: 'Full-Stack',
    color:    '#8B5CF6',
    link:     null,
    image:    '/assets/certs/growthwave.png',
  },
  {
    id:       'cert-6',
    title:    'Science and Technology Bootcamp',
    issuer:   'ASYV',
    year:     '2022',
    category: 'Design and Mechanics',
    color:    '#EC4899',
    link:     null,
    image:    '/assets/certs/innovate.png',
  },
];

export const MATH_HIGHLIGHTS = [
  {
    subject: 'Calculus',
    icon:    '∫',
    color:   '#3B82F6',
    desc:    'Differential and integral calculus — understanding rates of change and the mathematics behind optimization and algorithm complexity.',
  },
  {
    subject: 'Statistics & Probability',
    icon:    'σ',
    color:   '#8B5CF6',
    desc:    'Probability theory, statistical analysis, and data interpretation — skills that inform everything from A/B testing to system reliability.',
  },
  {
    subject: 'Algebra & Trigonometry',
    icon:    'x²',
    color:   '#10B981',
    desc:    'Linear algebra, complex numbers, and trigonometry — the mathematical backbone of graphics, cryptography, and data structures.',
  },
  {
    subject: 'Differential Equations',
    icon:    "∂",
    color:   '#F59E0B',
    desc:    'Modeling real-world phenomena through differential equations — bridges pure mathematics with physics, engineering, and systems design.',
  },
  {
    subject: 'Quantum Mechanics',
    icon:    'ψ',
    color:   '#EC4899',
    desc:    'Explored the mathematics of quantum systems — wave functions, probability amplitudes, and the Schrödinger equation.',
  },
  {
    subject: 'Astrophysics',
    icon:    '★',
    color:   '#06B6D4',
    desc:    'Study of stellar physics, orbital mechanics, and cosmology — where mathematics meets the scale of the universe.',
  },
];

export const TEACHING_ITEMS = [
  {
    role:   'Co-Founder & Lead Instructor',
    org:    'Byte Builders — ASYV',
    period: 'May 2023 — Present',
    color:  '#F59E0B',
    desc:   'Co-founded a student-led coding club and taught HTML, CSS, JavaScript, and PHP to fellow students through structured sessions, live demos, and hands-on projects.',
    impact: '20+ students introduced to web development',
    tags:   ['HTML/CSS', 'JavaScript', 'PHP', 'Peer Teaching'],
  },
  {
    role:   'Advisor',
    org:    'ASYV Peer Mentorship Program',
    period: 'July 2023 — July 2024',
    color:  '#06B6D4',
    desc:   'Designed the official mentorship handbook and matched mentor-mentee pairs. Facilitated weekly structured discussions on academic goals, career planning, and personal growth.',
    impact: '30+ students supported through mentorship',
    tags:   ['Career Guidance', 'Mentorship Design', 'Student Leadership'],
  },
  {
    role:   'IT Support & Digital Learning',
    org:    'ASYV IT Internship',
    period: 'Sept 2025 — Present',
    color:  '#3B82F6',
    desc:   'Beyond technical support, actively contributed to improving digital literacy across campus — helping staff and students become more confident with technology tools.',
    impact: 'Campus-wide technology access improved',
    tags:   ['Tech Support', 'Digital Literacy', 'Training'],
  },
  {
    role:   'Hackathon Organizer',
    org:    'ASYV Hackathon',
    period: '2024',
    color:  '#10B981',
    desc:   'Organized and coordinated the ASYV Hackathon — designing challenges, mentoring teams during the event, and facilitating knowledge exchange between participants.',
    impact: 'First ASYV Hackathon successfully organized',
    tags:   ['Event Organization', 'Team Mentoring', 'Problem Solving'],
  },
];

export const GALLERY_ITEMS = [
  // Replace src with real image paths once you have photos
  // Use /assets/gallery/your-photo.jpg
  { id: 'g1', src: null, alt: 'ASYV STEM Day 2025 — Award Ceremony',   caption: 'Receiving Best Developer at ASYV STEM Day 2025', category: 'Awards'    },
  { id: 'g2', src: null, alt: 'Byte Builders Coding Session',            caption: 'Teaching HTML & CSS at Byte Builders',           category: 'Teaching'  },
  { id: 'g3', src: null, alt: 'ASYV Hackathon',                          caption: 'Organizing the ASYV Hackathon 2024',             category: 'Events'    },
  { id: 'g4', src: '/assets/gallery/innovation.jpeg', alt: 'Innovators Tech Challenge 2024',          caption: 'Outstanding Innovation Award — Tech Challenge',  category: 'Awards'    },
  { id: 'g5', src: '/assets/gallery/rca.jpg', alt: 'Rwanda Coding Academy Exchange',          caption: 'Exchange program with Rwanda Coding Academy',    category: 'Community' },
  { id: 'g6', src: '/assets/gallery/teaching.jpeg', alt: 'Peer Mentorship Program',                 caption: 'ASYV Peer Mentorship Program session',           category: 'Teaching'  },
  { id: 'g7', src: null, alt: 'Community gathering at ASYV',             caption: 'Community gathering — Church Elder role',        category: 'Community' },
  { id: 'g8', src: '/assets/gallery/graduation.jpg', alt: 'STEM Fair 2023',caption: 'High School Graduation Celemony',                        category: 'Events'    },
];