import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Designer',
    icon: ux,
  },
  {
    title: 'Certified Solution Architect',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company_name: 'Eclipse AI®',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Feb 2021 - Present',
  },
  {
    title: 'Senior Frontend Developer',
    company_name: 'ChaiOne Inc.',
    icon: microverse,
    iconBg: '#333333',
    date: 'Aug 2018 - Feb 2021',
  },
  {
    title: 'Senior Frontend Developer',
    company_name: 'Aciano Technologies®',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Sep 2016 - Aug 2018',
  },
  {
    title: 'Senior Frontend Developer',
    company_name: 'TechSurge Inc.',
    icon: dcc,
    iconBg: '#333333',
    date: 'May 2015 - Sep 2016',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Eclipse AI',
    description: 'Eclipse AI analyses voice-of-customer data and gives insights to improve retention.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/eclipse-ai',
    demo: 'https://eclipse-ai.com/',
  },
  {
    id: 'project-2',
    name: 'TopTech TMS',
    description:
      'Toptech Systems is a global industry leader in automation and data management services',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/toptech',
    demo: 'https://toptech.com/',
  },
  {
    id: 'project-3',
    name: 'Stretto',
    description: 'Stretto provides deep industry expertise and best-in-class bankruptcy software solutions and services that help fiduciaries.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    // repo: 'https://stretto.com/',
    demo: 'https://stretto.com/',
  },
  {
    id: 'project-4',
    name: 'Lone Wolf',
    description: `The gold standard in real estate brokerage back office software.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/Lone-wolf-studio',
    demo: 'https://www.lwolf.com/products/accounting-reporting/complete-back-office/',
  },
  {
    id: 'project-5',
    name: 'Engro Corp.',
    description:
      'Engro Foundation is the brainchild of Engro aimed at helping people of Pakistan access better opportunities and life choices.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/liyingliang2022/fr/blob/main/5/sindh%20engro%20coal%20mining%20company.md',
    demo: 'https://engro.com/',
  },
];

export { services, technologies, experiences, projects };
