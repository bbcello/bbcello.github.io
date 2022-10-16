import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Joon Suh Sohn', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Joon Suh Sohn Developer Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Joon Suh.',
  subtitle: "I'm a Full-Stack Developer.",
  // title: "Hi, if you're",
  // name: 'here,',
  // subtitle: 'this site is a work in progress.',
  // cta: 'Continue',
};

// SKILLS DATA
export const skillsData = {
  frontEnd: {
    title: 'Front End',
    stacks: [
      { name: 'JavaScript', img: 'javascript.png' },
      { name: 'React', img: 'react.png' },
      { name: 'HTML5', img: 'html5.png' },
      { name: 'CSS3', img: 'css.png' },
    ],
    burger: 'frontend.png',
  },
  backEnd: {
    title: 'Back End',
    stacks: [
      { name: 'Node', img: 'node.png' },
      { name: 'Express', img: 'express.png' },
      { name: 'PostgreSQL', img: 'pg.png' },
      { name: 'Django', img: 'django.png' },
      { name: 'MongoDB', img: 'mongodb.png' },
      { name: 'Python', img: 'python.png' },
    ],
    burger: 'backend.png',
  },
  tools: {
    title: 'Tools',
    stacks: [
      { name: 'Git', img: 'git.png' },
      { name: 'Heroku', img: 'heroku.png' },
      { name: 'AWS', img: 'aws.png' },
      { name: 'Figma', img: 'figma.png' },
      { name: 'OAuth', img: 'id.png' },
    ],
    burger: 'tools.png',
  },
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'minesweeper2.png',
    title: 'Minesweeper',
    info: 'A simple minesweeper game',
    stack: ['Javascript', 'HTML', 'CSS', 'Figma'],
    url: 'https://bbcello.github.io/Minesweeper/',
    repo: 'https://github.com/bbcello/Minesweeper', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'explore-ss.png',
    title: 'Notty Notes',
    info: 'Music score sharing website allows users to save, share, and download music scores. User can login and sign up with Google Authentication',
    stack: ['Node/Express', 'Mongo DB', 'Javascript', 'HTML', 'CSS', 'Google Cloud APIs', 'Heroku'],
    note: 'App hosted on free Heroku server. Please allow 10-15s to load.',
    url: 'https://notty-notes.herokuapp.com/',
    repo: 'https://github.com/bbcello/Notty-Notes', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gardensmart.png',
    title: 'Garden Smart',
    contributors: 'Paul Yeung, Iaroslav Snigur',
    info: 'Online Database App for keeping track of your gardening endeavors! Plant various vegetable seeds and build out your garden! Access vegetable seeds, fertilizers, tools and pesticdes from the store. Upload beautiful photos, count how much money you have spent!',
    stack: ['Javascript', 'HTML', 'CSS', 'PostgreSQL', 'Python', 'Django', 'Boto3 (AWS)', 'Heroku'],
    note: 'App hosted on free Heroku server. Please allow 10-15s to load.',
    url: 'https://garden-smart-app.herokuapp.com/', // if no url, the button will not show up
    repo: 'https://github.com/bbcello/Garden-Smart', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'travelspo.png',
    title: 'Travelspo',
    contributors: 'Cait Brock, Ram Sritharan',
    info: 'Have you ever created random lists of potential restaurants, hotels, destinations, ect. you want to visit? What about taking random screenshots that get saved haphazardly in your phone prior to a trip? Travelspo is a social media platform that provides aspiring travellers with a location to save information related to travels.',
    stack: [
      'Javascript',
      'HTML',
      'CSS',
      'React',
      'Mongo DB',
      'Express JS',
      'Socket.io',
      'Material UI',
      'AWS S3',
      'Heroku',
    ],
    note: 'App hosted on free Heroku server. Please allow 10-15s to load.',
    url: 'https://travelspo.netlify.app/',
    repo: 'https://github.com/bbcello/Travelspo-1',
  },
];

// ABOUT DATA
export const aboutData = {
  img: 'profpic.png',
  paragraphOne:
    'I am Toronto-Seoul based software developer, with background in Statistics and Music',
  paragraphTwo:
    'In 2022, I took a leap and trained in full-stack software development program at General Assembly. I have passions in building products that can benefit all types of people. I am also motivated by technical innovations and business success.',
  paragraphThree:
    'My long time interest in music, crypto currency, and teaching helped me acquire a wide range of perspectives.',
  resume:
    'https://docs.google.com/document/d/1ee07XeMz0CJzOyx748puBYrT7QAFgbSzMNwKevsPetA/edit?usp=sharing', // if no resume, the button will not show up
};

// CONTACT DATA
export const contactData = {
  cta: 'Get In Touch!',
  btn: '',
  email: 'joonsuh.sohn@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/joon-suh-sohn-64b385152/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/bbcello',
    },
    {
      id: nanoid(),
      name: 'file',
      url: aboutData.resume,
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
