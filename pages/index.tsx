import Header from '../components/Header';
import style from '../styles/Home.module.scss';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';
import { getCookie, setCookie } from 'typescript-cookie';
import IntImg from '../components/IntImg';

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
        <Header active={'home'}/>
        <div className={style.bg}/>
          <div
              className={`${style.container} ${noAnimation ? style.noAnimation : ''}`}
          >
              <div className={style.imageRow}>
                  <IntImg src="/me.jpg"/>
                  <IntImg src="/me2.JPG"/>
                  <IntImg src="/me3.jpg"/>
                  <IntImg src="/me4.jpeg"/>
                  <IntImg src="/me5.jpg"/>
                  <IntImg src="/me6.JPG"/>
                  <IntImg src="/me7.jpg"/>
              </div>
              <h1>Welcome! I am <span>Mathis Burger</span></h1>
              <p>A fullstack software engineer from Germany.</p>
              {/* <p>{mainText === '' ? <LoadingSpinner/> : mainText}</p> */}
              <svg className={style.arrows}>
                  <path className={style.a1} d="M0 0 L30 32 L60 0"></path>
                  <path className={style.a2} d="M0 20 L30 52 L60 20"></path>
                  <path className={style.a3} d="M0 40 L30 72 L60 40"></path>
              </svg>
              <section className={`${style.section} ${style.first}`}>
                  <h2>About me</h2>
                  <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                      also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                      the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                  </p>
              </section>
              <section className={style.section}>
                  <h2>Work Experience</h2>
                  <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                      also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                      the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                  </p>
              </section>
              <section className={style.section}>
                  <h2>Tools I work with</h2>
                  <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                      also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                      the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                  </p>
              </section>
          </div>
          <Footer/>
      </Wrapper>
  );
};

export default Home;
