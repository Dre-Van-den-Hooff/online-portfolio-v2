import emoji from 'react-easy-emoji';

const prefix = '/online-portfolio-v2';

export const greetings = {
  name: 'Dré Van den Hooff',
  title: "Nice to meet you! I'm Dré",
  description:
    "I'm 20 years old and I study Applied Information Technology at HoGent. I am passionate about web and mobile development with React and React Native.",
  resumeLink: 'CV_Dre_Van_den_Hooff.pdf',
};

export const openSource = {
  githubUserName: 'Dre-Van-den-Hooff',
};

export const contact = {};

export const socialLinks = {
  instagram: 'https://www.instagram.com/dre.vdh/',
  github: 'https://github.com/Dre-Van-den-Hooff',
  linkedin: 'https://www.linkedin.com/in/dr%C3%A9-van-den-hooff-002296227/',
};

// find icons here - https://icon-sets.iconify.design/

export const skillsSection = {
  title: 'What I do',
  subTitle: 'Full stack web developer that enjoys learning new technologies',
  data: [
    {
      title: 'Full Stack Web Development',
      lottieAnimationFile: `/lottie/skills/fullstack.json`, // Path of Lottie Animation JSON File
      skills: [
        '⚡ Building responsive Single-Page-Apps (SPA) in React.js',
        '⚡ Building mobile applications in React Native',
        '⚡ Building RESTful APIs in NodeJs using Koa middleware',
        '⚡ Building (Type)GraphQL APIs in NodeJs with Apollo Server',
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassname: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassname: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'SCSS',
          fontAwesomeClassname: 'vscode-icons:file-type-scss2',
        },
        {
          skillName: 'Styled Components',
          fontAwesomeClassname: 'skill-icons:styledcomponents',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'logos:javascript',
        },
        {
          skillName: 'TypeScript',
          fontAwesomeClassname: 'vscode-icons:file-type-typescript-official',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'React Native',
          fontAwesomeClassname: 'vscode-icons:file-type-reactts',
        },
        {
          skillName: 'NodeJs',
          fontAwesomeClassname: 'logos:nodejs-icon',
        },
        {
          skillName: 'GraphQL',
          fontAwesomeClassname: 'vscode-icons:file-type-graphql',
        },
        {
          skillName: 'Apollo Server',
          fontAwesomeClassname: 'logos:apollostack',
        },
        {
          skillName: 'Rest',
          fontAwesomeClassname: 'vscode-icons:file-type-rest',
        },
        {
          skillName: 'Koa',
          fontAwesomeClassname: 'logos:koa',
        },
        // {
        //   skillName: 'NPM',
        //   fontAwesomeClassname: 'logos:npm-icon',
        // },
        // {
        //   skillName: 'Yarn',
        //   fontAwesomeClassname: 'logos:yarn',
        // },
      ],
    },
    {
      title: 'Other knowledge',
      lottieAnimationFile: `/lottie/skills/other-skills.json`, // Path of Lottie Animation JSON File
      skills: [
        '⚡ Creating full stack web applications using the Blazor framework',
        '⚡ Experience on working with Java Spring Boot',
        '⚡ Building native Android and iOS apps',
        '⚡ Familiar with the use of component libraries for React',
      ],
      softwareSkills: [
        {
          skillName: 'Java',
          fontAwesomeClassname: 'logos:java',
        },
        {
          skillName: 'Java Spring',
          fontAwesomeClassname: 'logos:spring-icon',
        },
        {
          skillName: 'Blazor',
          fontAwesomeClassname: 'simple-icons:blazor',
        },
        {
          skillName: 'Python',
          fontAwesomeClassname: 'logos:python',
        },
        {
          skillName: 'Swift',
          fontAwesomeClassname: 'vscode-icons:file-type-swift',
        },
        {
          skillName: 'Kotlin',
          fontAwesomeClassname: 'logos:kotlin-icon',
        },
        {
          skillName: 'MongoDB',
          fontAwesomeClassname: 'vscode-icons:file-type-mongo',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassname: 'logos:postgresql',
        },
        {
          skillName: 'Sequelize',
          fontAwesomeClassname: 'logos:sequelize',
        },
        {
          skillName: 'DotNet',
          fontAwesomeClassname: 'cib:dot-net',
        },
        {
          skillName: 'Tauri framework',
          fontAwesomeClassname: 'logos:tauri',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassname: 'logos:heroku-icon',
        },
        {
          skillName: 'MySQL',
          fontAwesomeClassname: 'logos:mysql',
        },
        {
          skillName: 'Git',
          fontAwesomeClassname: 'vscode-icons:file-type-git',
        },
        {
          skillName: 'Chakra UI',
          fontAwesomeClassname: 'simple-icons:chakraui',
        },
        {
          skillName: 'MUI',
          fontAwesomeClassname: 'logos:material-ui',
        },
        {
          skillName: 'Mantine',
          fontAwesomeClassname: 'logos:mantine-icon',
        },
      ],
    },
    {
      title: 'Interested in or currently learning',
      lottieAnimationFile: `/lottie/skills/learning.json`, // Path of Lottie Animation JSON File
      skills: [
        '⚡ Server side React using NextJs',
        '⚡ New JavaScript frameworks such as Svelte or Vue',
        '⚡ Other TypeScript ORM solutions like Prisma',
      ],
      softwareSkills: [
        {
          skillName: 'NextJs',
          fontAwesomeClassname: 'logos:nextjs',
        },
        {
          skillName: 'Svelte',
          fontAwesomeClassname: 'vscode-icons:file-type-svelte',
        },
        {
          skillName: 'Vuejs',
          fontAwesomeClassname: 'logos:vue',
        },
        {
          skillName: 'Prisma',
          fontAwesomeClassname: 'logos:prisma',
        },
        {
          skillName: 'tRPC',
          fontAwesomeClassname: 'logos:trpc',
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '85', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '85',
  },
  {
    Stack: 'Programming',
    progressPercentage: '80',
  },
];

export const educationInfo = [
  {
    schoolName: 'Instituut Sint-Vincentius a Paulo',
    subHeader: 'Modern Languages - Science',
    duration: 'September 2018 - June 2020',
    desc: 'High School Diploma in Modern Languages & Science.',
  },
  {
    schoolName: 'HoGent',
    subHeader: 'Applied Information Technology',
    duration: 'September 2020 - June 2023',
    desc: "Currently studying for my bachelor's degree",
    //  descBullets: [
    //    "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
    //    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //  ],
  },
];

export const experience = [
  {
    role: 'React Developer',
    company: 'Codifly',
    companylogo: '/img/codifly_logo.png',
    date: 'June 2022 - August 2022',
    desc: 'My first experience working as a React developer.',
    link: 'https://codifly.be/',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Full Stack TypeScript Developer',
    company: 'Codifly',
    companylogo: '/img/codifly_logo.png',
    date: 'Februari 2023 - May 2023',
    desc: 'Internship during my last semester of Applied Information Technology at HoGent.',
    link: 'https://codifly.be/',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects = [
  {
    name: 'Free Games API & Webapplication',
    desc: 'My very first experience with creating a full stack webapplication made with React, Chakra UI and a RESTful API.',
    github: 'https://github.com/Dre-Van-den-Hooff/free-games-webapp-api',
    link: 'https://dre-van-den-hooff.github.io/free-games-gh-pages/',
  },
  {
    name: '[WIP] Ark API & Webapplication',
    desc: 'My first experience with creating my own API using GraphQL and Apollo Server. The Front-end consists of a React application using TypeScript and Chakra UI. ',
    github: '',
    link: '',
  },
  {
    name: 'Pokemon guesser app',
    desc: 'My first experience with React Native & TypeScript.',
    github: 'https://github.com/Dre-Van-den-Hooff/pokemon-guesser',
  },
];

export const feedbacks = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];
