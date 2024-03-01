import Header from '../components/Header';
import style from '../styles/Home.module.scss';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';
import { getCookie, setCookie } from 'typescript-cookie';
import Image from "next/image";

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
        <div className={style.imageRow}>

          <img src="/me2.JPG" alt="" />
          <img src="/me3.jpg" alt="" />
          <img src="/me4.jpeg" alt="" />
          <img src="/me5.jpg" alt="" />
          <img src="/me6.JPG" alt="" />
          <img src="/me7.jpg" alt="" />
        </div>
        <h1>Mathis Burger</h1>
        <p>{mainText === '' ? <LoadingSpinner /> : mainText}</p>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Home;
