import { openSource, socialLinks } from '../portfolio';
import SEO from '../components/SEO';
import Bento from '../components/Bento';

export default function Home({ githubProfileData, age }) {
  return (
    <>
      <SEO
        data={{
          title: 'Dré Van den Hooff',
          description: `I'm ${age} years old and I graduated in Applied Information Technology at HoGent in 2023. I am passionate about web and mobile development with React and React Native.`,
          url: 'https://portfolio.drevdh.be/',
          keywords: [
            'Dré',
            'Van den Hooff',
            '@dre.vdh',
            'dre.vdh',
            'Portfolio',
            'Dré Portfolio',
            'Dré Van den Hooff Portfolio',
          ],
        }}
      />
      <div className="page">
        <header className="topbar">
          <span className="topbar__name">Dré Van den Hooff</span>
          <span className="topbar__meta mono">Portfolio — {new Date().getFullYear()}</span>
        </header>
        <Bento age={age} avatarUrl={githubProfileData?.avatar_url} />
        <footer className="footer mono">
          <span>© {new Date().getFullYear()} Dré Van den Hooff</span>
          <span>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>{' '}
            ·{' '}
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </span>
          <span>Self-hosted on a Raspberry Pi</span>
        </footer>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date('2002-11-15');
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  // The GitHub profile only adds the avatar, so don't fail the build without it.
  let githubProfileData = null;
  try {
    const res = await fetch(
      `https://api.github.com/users/${openSource.githubUserName}`,
    );
    if (res.ok) githubProfileData = await res.json();
  } catch {}

  return {
    props: { githubProfileData, age: calculateAge() },
  };
}
