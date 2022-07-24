import Header from '../components/Header'
import SocialBox, { SocialBoxProps } from '../components/SocialBox'
import style from '../styles/Socials.module.scss'
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

const Socials = () => {
  const data: SocialBoxProps[] = [
    {
      url: 'https://twitter.com/MathisBurger4',
      iconUrl: '/twitter.png',
    },
    {
      url: 'https://instagram.com/mathis.bu',
      iconUrl: '/instagram.png',
    },
    {
      url: 'https://github.com/MathisBurger',
      iconUrl: '/github.png',
    },
    {
      url: 'https://www.linkedin.com/in/mathis-burger-93614222b/',
      iconUrl: '/linked-in.png',
    },
  ]

  return (
      <Wrapper>
        <div style={{ overflow: 'hidden' }}>
          <Header active="socials" />
          <div className={style.container}>
            <h1>Socials</h1>
            <div className={style.box}>
              {data.map((props) => (
                  <SocialBox {...props} key={props.url} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </Wrapper>
  );
}

export default Socials
