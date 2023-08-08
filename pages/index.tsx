import Header from '../components/Header';
import style from '../styles/Home.module.scss';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';

/**
 * The index page that sows some general content of the page.
 */
const Home = () => {
  const [mainText, setMainText] = useState<string>('');

  useEffect(() => {
    fetch('/mainText.txt')
      .then((res) => res.text())
      .then((txt) => setMainText(txt));
  }, []);

  return (
    <Wrapper>
      <Header active={'home'} />
      <div className={style.bg} />
        <div className={style.container}>
            <div className={style.imageRow}>
                <img src="/me.jpg" alt=""/>
                <img src="/me2.JPG" alt=""/>
                <img src="/me3.jpg" alt=""/>
                <img src="/me4.jpeg" alt=""/>
                <img src="/me5.jpg" alt=""/>
                <img src="/me6.JPG" alt=""/>
                <img src="/me7.jpg" alt=""/>
            </div>
            <h1>Mathis Burger</h1>
            <p>{mainText === '' ? <LoadingSpinner /> : mainText}</p>
        </div>
      <Footer />
    </Wrapper>
  );
};

export default Home;
