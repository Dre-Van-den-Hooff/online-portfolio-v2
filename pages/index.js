import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
const Navigation = dynamic(() => import('../components/Navigation'));
const Greetings = dynamic(() => import('../containers/Greetings'));
const Skills = dynamic(() => import('../containers/Skills'));
const Proficiency = dynamic(() => import('../containers/Proficiency'));
const Education = dynamic(() => import('../containers/Education'));
const Experience = dynamic(() => import('../containers/Experience'));
const Projects = dynamic(() => import('../containers/Projects'));
const Feedbacks = dynamic(() => import('../containers/Feedbacks'));
const GithubProfileCard = dynamic(() =>
  import('../components/GithubProfileCard'),
);
import { openSource } from '../portfolio';
import SEO from '../components/SEO';

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: 'Dré Van den Hooff',
          description:
            "I'm 21 years old and I graduated in Applied Information Technology at HoGent in 2023. I am passionate about web and mobile development with React and React Native.",
          //image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
          url: 'https://dre-van-den-hooff.github.io/online-portfolio-v2/',
          keywords: [
            'Dré',
            'Van den Hooff',
            '@dre.vdh',
            'dre.vdh',
            'Portfolio',
            'Dré Portfolio ',
            'Dré Van den Hooff Portfolio',
          ],
        }}
      />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      {/* <Feedbacks /> */}
      {/* <Projects /> */}
      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`,
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
