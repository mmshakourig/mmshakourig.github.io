import { assetUrl } from '../utils/assetUrl';

export const homeContent = {
  name: 'Mahdi Shakouri',
  titleLines: ['Medical Physics', 'Engineering Physics', 'BC Cancer Research Institute', 'University of British Columbia'],
  intro: [
    "I am a graduate student in the Department of Physics and Astronomy at the University of British Columbia, working on Translational AI Solutions in Nuclear Medicine. My research interests are in the fields of Medical Imaging, Computer Vision, and Deep Learning.",

    "Previously, I graduated from the Engineering Physics program at UBC, pursuing a rigorous curriculum of mathematics, physics, electrical, and computer engineering courses. Through undergrad, I was also a research assistant at the Center for Blood Research, International Collaboration on Repair Discoveries (ICORD), and the Center for Brain Health at UBC where I worked on designing and fabricating microfluidic chips, quantifying growth of in-vitro neurons, and augmenting Parkinson's disease assessment data respectively.",

    "My passion lies at the intersection of engineering, physics, machine learning, and medical technology, with a focus on developing innovative solutions that can improve patient care and outcomes."
  ],
  summary: [
    { text: 'Graduate Research Assistant @ ', comp: 'BC Cancer Research', href: 'https://www.bccrc.ca/dept/io-programs/qurit/people/mahdi-shakouri', date: '2026 - Current' },
    { text: 'Algorithms Engineer @ ', comp: 'Kardium Inc.', href: 'https://www.kardium.com/', date: '2024 - 2025' },
    { text: 'Teaching Assistant @ ', comp: 'UBC Dept. of Physics & Astronomy', href: 'https://www.physics.ubc.ca/', date: '2023 - Current' },
    { text: 'Official & Coach @ ', comp: 'Volleyball Canada', href: 'https://volleyball.ca/en/development/referee', date: '2018 - Current' },
  ],
  socials: [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mmahdi-shakouri', icon: 'linkedin', idx: 0 },
    { name: 'Email', href: 'mailto:mahdi.shakouri@ubc.ca', icon: 'email', idx: 1 },
    { name: 'GitHub', href: 'https://github.com/mmshakourig', icon: 'github', idx: 2 },
    { name: 'Scholar', href: 'https://scholar.google.com/citations?user=iFep8KoAAAAJ&hl=en&authuser=1&oi=ao', icon: 'scholar', idx: 3 },
    // resume is a pdf file in the assets folder, link to it
    { name: 'Resume', href: assetUrl('resume.pdf'), icon: 'resume', idx: 4 },
    { name: 'Profile', href: 'https://www.bccrc.ca/dept/io-programs/qurit/people/mahdi-shakouri', icon: 'profile', idx: 5 } // Add a profile link
  ],
  icons: {
    linkedin: 'linkedin',
    email: 'email',
    github: 'github',
    scholar: 'scholar',
    resume: 'resume',
    profile: 'profile' // Add a profile icon
  },

  highlights: [
    {
      number: '01',
      title: 'Echoes and Horizons',
      date: '2026',
      sneakPeak: 'Post-graduation reflections on the past, present, and future of my academic journey.',
      href: '#/reflections'
    },
    {
      number: '02',
      title: 'Multi-Agent Sim2Real',
      date: '2026',
      sneakPeak: 'A reinforcement learning agent trained in simulation and deployed in real-world.',
      href: '#/projects/sim2real'
    },
    {
      number: '03',
      title: 'Computational Physics',
      date: '2025',
      sneakPeak: 'Turning complex work into concise, legible, and archival documentation.',
      href: '#/projects/galaxy'
    },
    
    {
      number: '04',
      title: 'Academic Review',
      date: '2026',
      sneakPeak: 'Reading notes and synthesis practices across papers, texts, and reports.',
      href: '#'
    },
    {
      number: '05',
      title: 'Volunteer Work',
      date: '2026',
      sneakPeak: 'Mentoring and outreach with a calm, structured, student-first approach.',
      href: '#'
    },
    {
      number: '06',
      title: 'EngPhys Robot Summer',
      date: '2023',
      sneakPeak: 'Robotics, embedded systems, and control theory applied to a small autonomous robot.',
      href: 'https://www.enph253-sharp.com/index.html'
    }
  ]
};
