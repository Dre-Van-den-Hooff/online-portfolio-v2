import emoji from "react-easy-emoji";

export const greetings = {
  name: "Dré Van den Hooff",
  title: "Nice to meet you! I'm Dré",
  description:
    "I'm 19 years old and I study Applied Information Technology at HoGent. I am passionate about web and mobile development with React and React Native.",
  resumeLink: "",
};

export const openSource = {
  githubUserName: "Dre-Van-den-Hooff",
};

export const contact = {};

export const socialLinks = {
  instagram: "https://www.instagram.com/dre.vdh/",
  //twitter: "https://twitter.com/1hanzla100",
  github: "https://github.com/Dre-Van-den-Hooff",
  linkedin: "https://www.linkedin.com/in/dr%C3%A9-van-den-hooff-002296227/",
};

// find icons here - https://icon-sets.iconify.design/

export const skillsSection = {
  title: "What I do",
  subTitle: "Full stack web developer that enjoys learning new technologies",
  data: [
    {
      title: "Full Stack Web Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive mobile applications in React Native"),
        emoji("⚡ Building RESTful APIs in NodeJs using Koa middleware"),
        emoji("⚡ Building GraphQL APIs in NodeJs with Apollo Server"),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "SCSS",
          fontAwesomeClassname: "vscode-icons:file-type-scss2",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "vscode-icons:file-type-typescript-official",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "vscode-icons:file-type-reactts",
        },
        {
          skillName: "NodeJs",
          fontAwesomeClassname: "logos:nodejs-icon",
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "vscode-icons:file-type-graphql",
        },
        {
          skillName: "Apollo Server",
          fontAwesomeClassname: "logos:apollostack",
        },
        {
          skillName: "Rest",
          fontAwesomeClassname: "vscode-icons:file-type-rest",
        },
        {
          skillName: "Koa",
          fontAwesomeClassname: "logos:koa",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },
      ],
    },
    {
      title: "Other knowledge",
      lottieAnimationFile: "/lottie/skills/other-skills.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience with the JavaFX library"),
        emoji("⚡ Experience on working with Java Spring Boot Framework"),
        emoji("⚡ Hosting and maintaining APIs using Heroku"),
        emoji("⚡ Familiar with the use of component libraries for React"),
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
        },
        {
          skillName: "Java Spring",
          fontAwesomeClassname: "logos:spring-icon",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "logos:heroku-icon",
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "akar-icons:github-fill",
        },
        {
          skillName: "Chakra UI",
          fontAwesomeClassname: "simple-icons:chakraui",
        },
        {
          skillName: "MUI",
          fontAwesomeClassname: "simple-icons:mui",
        },
      ],
    },
    {
      title: "Interested in or currently learning",
      lottieAnimationFile: "/lottie/skills/learning.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ iOS app development with Swift"),
        emoji("⚡ Android development with Kotlin"),
        emoji("⚡ Other database solutions such as MongoDB or PostgreSQL"),
      ],
      softwareSkills: [
        {
          skillName: "Swift",
          fontAwesomeClassname: "vscode-icons:file-type-swift",
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "logos:kotlin-icon",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "vscode-icons:file-type-mongo",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "DotNet",
          fontAwesomeClassname: "cib:dot-net",
        },
        {
          skillName: "CSharp",
          fontAwesomeClassname: "vscode-icons:file-type-csharp2",
        },
        {
          skillName: "NextJs",
          fontAwesomeClassname: "logos:nextjs",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "80", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "70",
  },
];

export const educationInfo = [
  {
    schoolName: "Instituut Sint-Vincentius a Paulo",
    subHeader: "Modern Sciences - Languages",
    duration: "September 2018 - June 2020",
    desc: "High School Diploma in Modern Languages & Science.",
  },
  {
    schoolName: "HoGent",
    subHeader: "Applied Information Technology",
    duration: "September 2020 - June 2023",
    desc: "Currently studying for my bachelor's degree",
    //  descBullets: [
    //    "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
    //    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //  ],
  },
];

export const experience = [
  {
    role: "No experience yet",
    company: "",
    companylogo: "/img/placeholder.png",
    date: "",
    desc: "",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects = [
  {
    name: "Free Games API & Webapplication",
    desc: "My very first experience with creating a full stack webapplication, made with React, Chakra UI and NodeJs.",
    github: "",
    link: "",
  },
  {
    name: "Ark API and Webapplication",
    desc: "My first experience with creating my own API using GraphQL and Apollo Server. The Front-end consists of a React application using TypeScript and Chakra UI.",
    github: "",
    link: "",
  },
  {
    name: "Pokemon guesser app",
    desc: "My first experience with React Native & TypeScript.",
    github: "https://github.com/Dre-Van-den-Hooff/pokemon-guesser",
  },
];

export const feedbacks = [
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
];
