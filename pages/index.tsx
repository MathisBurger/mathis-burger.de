import Header from '../components/Header';
import style from '../styles/Home.module.scss';
import { useEffect, useState } from 'react';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';
import { getCookie, setCookie } from 'typescript-cookie';
import IntImg from '../components/IntImg';
import Link from "next/link";

/**
 * The index page that sows some general content of the page.
 */
const Home = () => {
  const [mainText, setMainText] = useState<string>('');

  const [noAnimation, setNoAnimation] = useState<boolean>(false);

  useEffect(() => {
    setNoAnimation(getCookie('animate-index') === 'true');
  }, []);

  useEffect(() => {
    fetch('/mainText.txt')
      .then((res) => res.text())
      .then((txt) => setMainText(txt));
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
        <p>A fullstack software engineer from Germany.</p>
        {/* <p>{mainText === '' ? <LoadingSpinner/> : mainText}</p> */}
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
              Hey, I am Mathis Burger, a german CS student and fullstack
              software engineer from Germany. I started programming back in 2019
              during my time in school. This was also the first time I got in
              touch with computers. After that I started to get obsessed with
              this stuff and got really deep into coding. I really love the
              fields of cyber security and enterprise applications. Due to my
              deep interest into cars I am also very into V2X and in-car
              software. I also love to play around with event technology and
              everything that has to to with electronics. I love to make my live
              easier by automating certain tasks in my daily live. In Addition
              to that I really like to try out new trends and technologies in
              software development.
              <br />
              In my free time I love to have some fun with my friends or learn
              new things that are useful to my career and my overall life. I
              like the idea of getting every day a little bit better in what I
              am doing and therefore, I also take some time to learn new things
              and improve myself.
            </p>
          </div>
        </section>
        <section className={style.section}>
          <h2>Work Experience</h2>
          <p>
            If you are interested into my detailed career path, you can take a
            look at my <Link href="/cv">CV page</Link>.<br />
            At the page of 16 I got my first side job as a fullstack software
            engineer. I worked on some big projects using PHP and React. After I
            turned 18 I quitted this job and moved to Bavaria to participate in
            the dual studies program of the german car manufacturer Audi. After
            the first semester I started to work as a fullstack software
            engineer at the same company as before alongside to my studies in
            Business Information Systems.
          </p>
        </section>
        <section className={style.section}>
          <h2>Tools I work with</h2>
          <div className={style.tools}>
            <IntImg src="/tools/actions.svg" />
            <IntImg src="/tools/angular.svg" />
            <IntImg src="/tools/aws.svg" />
            <IntImg src="/tools/csharp.svg" />
            <IntImg src="/tools/docker.svg" />
            <IntImg src="/tools/dotnet.svg" />
            <IntImg src="/tools/google-cloud.svg" />
            <IntImg src="/tools/go.svg" />
            <IntImg src="/tools/jira.svg" />
            <IntImg src="/tools/kotlin.svg" />
            <IntImg src="/tools/linux.svg" />
            <IntImg src="/tools/mariadb.svg" />
            <IntImg src="/tools/php.svg" />
            <IntImg src="/tools/postgres.svg" />
            <IntImg src="/tools/react.svg" />
            <IntImg src="/tools/rust.svg" />
            <IntImg src="/tools/swift.svg" />
            <IntImg src="/tools/symfony.svg" />
            <IntImg src="/tools/terraform.svg" />
            <IntImg src="/tools/typescript.svg" />
            <IntImg src="/tools/svelte.svg" />
            <IntImg src="/tools/vue-js.svg" />
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
