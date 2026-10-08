import React from 'react';
import { Icon } from '@iconify/react';
import {
  educationInfo,
  experience,
  greetings,
  skillsSection,
  socialLinks,
} from '../portfolio';
import LocalTime from './LocalTime';
import Tile from './Tile';

const [doing, other, learning, selfHosting] = skillsSection.data;
const current = experience[0];

// Monochrome variants for logos that are too dark to see on the dark tiles.
const darkSafeIcons = {
  'logos:koa': 'simple-icons:koa',
  'logos:apollostack': 'simple-icons:apollographql',
  'logos:prisma': 'simple-icons:prisma',
  'devicon:astro': 'simple-icons:astro',
  'cib:dot-net': 'simple-icons:dotnet',
  'selfhst:portainer': 'selfhst:portainer-light',
};
const iconFor = (skill) =>
  darkSafeIcons[skill.fontAwesomeClassname] ?? skill.fontAwesomeClassname;

const ExternalLink = ({ href, children, ...rest }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
    {children}
  </a>
);

const Bento = ({ age, avatarUrl }) => (
  <main className="bento">
    <Tile area="intro" index={0} className="tile--intro">
      <p className="label">Full stack developer · Web &amp; Mobile</p>
      <h1 className="intro__title">
        Hi, I&apos;m Dré<span className="intro__wave">.</span>
      </h1>
      <p className="intro__text">
        I&apos;m {age}, graduated in Applied Information Technology at HoGent
        in 2023, and I build web and mobile products with React and React
        Native.
      </p>
      <div className="intro__actions">
        <a className="pill pill--light" href={greetings.resumeLink}>
          Résumé <Icon icon="ph:arrow-up-right-bold" aria-hidden="true" />
        </a>
        <ExternalLink className="pill" href={socialLinks.linkedin}>
          Say hi <Icon icon="ph:hand-waving-bold" aria-hidden="true" />
        </ExternalLink>
      </div>
    </Tile>

    <Tile area="photo" index={1} className="tile--photo">
      {avatarUrl && <img src={avatarUrl} alt="Dré Van den Hooff" />}
      <span className="photo__chip">Aalst, Belgium</span>
    </Tile>

    <Tile area="now" index={2} className="tile--now">
      <div className="now__top">
        <p className="label">
          <span className="live-dot" aria-hidden="true" /> Currently
        </p>
        <img src={current.companylogo} alt="" className="now__logo" />
      </div>
      <div>
        <p className="now__role">{current.role.replace(/\s*\(.*\)/, '')}</p>
        <p className="now__company">
          at{' '}
          <ExternalLink href={current.link}>{current.company}</ExternalLink>,
          consulting via{' '}
          <ExternalLink href="https://codifly.be/">Codifly</ExternalLink>
        </p>
      </div>
    </Tile>

    <Tile area="clock" index={3} className="tile--clock">
      <p className="label">Local time · Belgium</p>
      <p className="clock__time mono">
        <LocalTime seconds />
      </p>
    </Tile>

    <Tile area="do" index={4} className="tile--do">
      <p className="label">What I do</p>
      <h2 className="tile__title">{doing.title}</h2>
      <ul className="do__list">
        {doing.skills.map((skill) => (
          <li key={skill}>
            <Icon icon="ph:arrow-right-bold" aria-hidden="true" />
            {skill}
          </li>
        ))}
      </ul>
    </Tile>

    <Tile area="stack" index={5} className="tile--stack">
      <p className="label">Daily stack</p>
      <ul className="stack__grid">
        {doing.softwareSkills.map((skill) => (
          <li key={skill.skillName} className="stack__item">
            <Icon icon={iconFor(skill)} aria-hidden="true" />
            <span className="stack__name">{skill.skillName}</span>
          </li>
        ))}
      </ul>
    </Tile>

    <Tile area="exp" index={6} className="tile--exp">
      <p className="label">Experience</p>
      <ol className="list">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`}>
            <ExternalLink href={job.link} className="list__row">
              <img src={job.companylogo} alt="" className="list__logo" />
              <span className="list__main">
                <span className="list__title">{job.company}</span>
                <span className="list__sub">{job.role}</span>
              </span>
              <span className="list__date mono">{job.date}</span>
            </ExternalLink>
          </li>
        ))}
      </ol>
    </Tile>

    <Tile
      area="gh"
      index={7}
      as="a"
      href={socialLinks.github}
      target="_blank"
      rel="noopener noreferrer"
      className="tile--social"
    >
      <Icon icon="mdi:github" className="social__icon" aria-hidden="true" />
      <span className="social__name">
        GitHub <Icon icon="ph:arrow-up-right-bold" aria-hidden="true" />
      </span>
    </Tile>

    <Tile
      area="li"
      index={8}
      as="a"
      href={socialLinks.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="tile--social tile--linkedin"
    >
      <Icon icon="mdi:linkedin" className="social__icon" aria-hidden="true" />
      <span className="social__name">
        LinkedIn <Icon icon="ph:arrow-up-right-bold" aria-hidden="true" />
      </span>
    </Tile>

    <Tile
      area="cta"
      index={9}
      as="a"
      href={socialLinks.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="tile--cta"
    >
      <p className="label">Got a project?</p>
      <p className="cta__title">
        Let&apos;s build something together
        <Icon icon="ph:arrow-right-bold" className="cta__arrow" aria-hidden="true" />
      </p>
    </Tile>

    <Tile area="edu" index={10} className="tile--edu">
      <p className="label">Education</p>
      <ol className="list">
        {[...educationInfo].reverse().map((school) => (
          <li key={school.schoolName} className="list__row">
            <span className="list__main">
              <span className="list__title">{school.schoolName}</span>
              <span className="list__sub">{school.subHeader}</span>
            </span>
            <span className="list__date mono">
              {school.duration.replace(/[A-Za-z]+ /g, '')}
            </span>
          </li>
        ))}
      </ol>
    </Tile>

    <Tile area="host" index={11} className="tile--host">
      <p className="label">{selfHosting.title}</p>
      <h2 className="tile__title">Homelab</h2>
      <p className="host__text">{selfHosting.skills[0]}.</p>
      <ul className="host__grid">
        {selfHosting.softwareSkills.map((skill) => (
          <li key={skill.skillName} className="host__item">
            <Icon icon={iconFor(skill)} aria-hidden="true" />
            <span>{skill.skillName}</span>
          </li>
        ))}
      </ul>
      <p className="host__more">…and many others</p>
    </Tile>

    <Tile area="also" index={12} className="tile--also">
      <p className="label">{other.title}</p>
      <ul className="chips">
        {other.softwareSkills.map((skill) => (
          <li key={skill.skillName} className="chip">
            <Icon icon={iconFor(skill)} aria-hidden="true" />
            {skill.skillName}
          </li>
        ))}
      </ul>
      <p className="label label--spaced">Exploring</p>
      <ul className="chips">
        {learning.softwareSkills.map((skill) => (
          <li key={skill.skillName} className="chip chip--dashed">
            <Icon icon={iconFor(skill)} aria-hidden="true" />
            {skill.skillName}
          </li>
        ))}
      </ul>
    </Tile>
  </main>
);

export default Bento;
