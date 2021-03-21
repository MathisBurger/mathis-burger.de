import Header from "../components/Header";
import style from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Header active={"home"} />
      <div className={style.bg}>
          <div className={style.container}>
              <div className={style.textContainer}>
                  <h1>Mathis Burger</h1>
                  <p>
                      Hi, I am Mathis Burger. A german Fullstack developer.
                      I like to use languages like Rust, Go and Javascript (Typescript).
                      I have a ton of different projects running. Most of them are on Github
                      Furthermore I love to gain knowledge about new frameworks and technologies.
                      Another point of interest of me is system-administration under linux based
                      operating systems. I am a big fan of devOps and docker.<br />
                      I like to help other people to learn more about coding and tech. Therefore
                      I am the owner of a very small youtube channel all around tech and coding.
                      Furthermore I like to discuss problems and new technologies with other people.
                  </p>
              </div>
              <div className={style.profileBox}>
                <div className={style.profilePictureBox} />
              </div>
          </div>
      </div>
    </div>
  )
}
