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
      <div className={style.bg}>
        <div className={style.container}>
          <div className={style.textContainer}>
            <h1>Mathis Burger</h1>
            <p>{mainText === '' ? <LoadingSpinner /> : mainText}</p>
          </div>
          <div className={style.profileBox}>
            <div className={style.profilePictureBox} />
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Home;
