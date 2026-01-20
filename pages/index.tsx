import Header from '../components/Header';
import style from '../styles/Home.module.scss';
import { useEffect, useState } from 'react';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';
import { getCookie, setCookie } from 'typescript-cookie';
import IntImg from '../components/IntImg';
import JourneyPath from '../components/journey';
import GitHeatMap from '../components/GitHeatMap';

/**
 * The index page that sows some general content of the page.
 */
const Home = () => {
  const [noAnimation, setNoAnimation] = useState<boolean>(false);

  useEffect(() => {
    setNoAnimation(getCookie('animate-index') === 'true');
  }, []);

  useEffect(() => {
    return () => {
      setCookie('animate-index', true, {
        expires: new Date(new Date().getTime() + 1000 * 10),
      });
    };
  }, []);

  return (
    <Wrapper>
      <Header active={'home'} />
      <div className={style.bg} />
      <div
        className={`${style.container} ${noAnimation ? style.noAnimation : ''}`}
      >
        <h1>
          Welcome! I am <span>Mathis Burger</span>
        </h1>
        <p className={style.subtitle}>
          A fullstack software engineer from Germany.
        </p>
        <svg className={style.arrows}>
          <path className={style.a1} d="M0 0 L30 32 L60 0"></path>
          <path className={style.a2} d="M0 20 L30 52 L60 20"></path>
          <path className={style.a3} d="M0 40 L30 72 L60 40"></path>
        </svg>
        <section className={`${style.section} ${style.first}`}>
          <h2>About me</h2>
          <div className={style.split}>
            <img src="/me2.JPG" />
            <p>
              I am {new Date().getFullYear() - 2005} years old. I am currently
              living in Bavaria, Germany working as a corporate student at AUDI
              AG and fullstack software engineer at NetzWerkstatt GmbH & Co.KG.
              I love to learn new stuff and share my knowledge with others.
              Currently I am getting into complexity theory and algorithms.
              Furthermore, I am pursuing a bachelor&apos;s degree in business
              information systems. And I like finance. And traveling. And all
              the other normal people stuff.
            </p>
          </div>
        </section>
        <section className={style.section} style={{ alignItems: 'center' }}>
          <h2>Git contribution (last year)</h2>
          <GitHeatMap />
        </section>
        <section className={style.section}>
          <h2>My journey</h2>
          <div className={`${style.split} ${style.reverse}`}>
            <p>
              I started programming at the age of 14. I did some personal
              projects, mostly minecraft server plugins. At the age of 16, I
              started working as a software developer at NetzWerkstatt GmbH &
              Co.KG aside from school. After I graduated from school I moved to
              Bavaria to pursue my bachelor&apos;s degree in business
              information systems in cooperation with the AUDI AG, which is what
              I currently do.
            </p>
            <JourneyPath />
          </div>
        </section>
        <section className={style.section}>
          <h2>Work Experience</h2>
          <p>
            As already mentioned I got my first job at the age of 16 at
            NetzWerkstatt GmbH & Co.KG. Then I started to work as a corporate
            student at AUDI AG. After the first semester I started to work as a
            fullstack software engineer at NetzWerkstatt GmbH & Co.KG again.
            During my time at Audi I had many different internships in vehicle
            project management, complexity management and software engineering.
          </p>
        </section>
        <section className={style.section}>
          <h2>Tools I work with</h2>
          <div className={style.tools}>
            <IntImg src="/tools/actions.svg" />
            <IntImg src="/tools/aws.svg" />
            <IntImg src="/tools/docker.svg" />
            <IntImg src="/tools/go.svg" />
            <IntImg src="/tools/jira.svg" />
            <IntImg src="/tools/kotlin.svg" />
            <IntImg src="/tools/linux.svg" />
            <IntImg src="/tools/mariadb.svg" />
            <IntImg src="/tools/php.svg" />
            <IntImg src="/tools/postgres.svg" />
            <IntImg src="/tools/csharp.svg" />
            <IntImg src="/tools/react.svg" />
            <IntImg src="/tools/rust.svg" />
            <IntImg src="/tools/symfony.svg" />
            <IntImg src="/tools/terraform.svg" />
            <IntImg src="/tools/typescript.svg" />
            <IntImg src="/tools/confluence.svg" />
            <IntImg src="/tools/gitlab.svg" />
            <IntImg src="/tools/mongodb-original.svg" />
            <IntImg src="/tools/redis-plain.svg" />
            <IntImg src="/tools/jetbrains-toolbox.svg" />
          </div>
        </section>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Home;
