/**
 * projects.js — single source of truth for all project data
 * Update links, descriptions, and images here only.
 */

export const PROJECTS = [
  {
    id:          'career-reach-hub',
    title:       'Career Reach Hub',
    category:    'Education & Career',
    description:
      'A full-stack education and career platform that connects students with opportunities, resources, and guidance. Built to bridge the gap between Rwandan youth and meaningful career pathways.',
    tech:        ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    image:       new URL('../assets/projects/project.png', import.meta.url).href,
    liveUrl:     'https://careerreachhub.com',
    githubUrl:   'https://github.com/emmanuelsemaza/career-reach-hub',
    status:      'live',
    featured:    true,
    color:       '#3B82F6',
    colorMuted:  'rgba(59,130,246,0.08)',
    colorBorder: 'rgba(59,130,246,0.2)',
  },
  {
    id:          'product-store-app',
    title:       'Product Store App',
    category:    'E-Commerce',
    description:
      'A full-stack e-commerce application with product management, cart functionality, user authentication, and order processing. Built with the MERN stack.',
    tech:        ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    image:       new URL('../assets/projects/product-store.png', import.meta.url).href,
    liveUrl:     'https://productstoreapp.com',
    githubUrl:   'https://github.com/emmanuelsemaza/product-store-app',
    status:      'live',
    featured:    true,
    color:       '#8B5CF6',
    colorMuted:  'rgba(139,92,246,0.08)',
    colorBorder: 'rgba(139,92,246,0.2)',
  },
  {
    id:          'kigali-pizza-company',
    title:       'Kigali Pizza Company',
    category:    'Restaurant Management',
    description:
      'A restaurant management platform for Kigali Pizza Company — handling menu management, order tracking, table reservations, and kitchen workflow in one unified system.',
    tech:        ['React.js', 'Node.js', 'MySQL', 'Express.js', 'Tailwind CSS'],
    image:       new URL('../assets/projects/kigali-pizza.png', import.meta.url).href,
    liveUrl:     'https://kigalipizzacompany.com',
    githubUrl:   'https://github.com/emmanuelsemaza/kigali-pizza',
    status:      'live',
    featured:    true,
    color:       '#F59E0B',
    colorMuted:  'rgba(245,158,11,0.08)',
    colorBorder: 'rgba(245,158,11,0.2)',
  },
  {
    id:          'pharmacy-management-system',
    title:       'Pharmacy Management System',
    category:    'Healthcare',
    description:
      'A healthcare inventory management system for pharmacies — tracking medicine stock, expiry dates, supplier orders, and sales with precision and reliability.',
    tech:        ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML/CSS'],
    image:       new URL('../assets/projects/pharmacy.png', import.meta.url).href,
    liveUrl:     null,
    githubUrl:   'https://github.com/emmanuelsemaza/pharmacy-management',
    status:      'completed',
    featured:    true,
    color:       '#10B981',
    colorMuted:  'rgba(16,185,129,0.08)',
    colorBorder: 'rgba(16,185,129,0.2)',
  },
];

export const FEATURED = PROJECTS.filter((p) => p.featured);