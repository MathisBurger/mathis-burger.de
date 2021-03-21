import Header from "../components/Header";
import style from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Header active={"home"} />
      <div className={style.bg}>
          <div className={style.container}>
              <div>
                  text
              </div>
              <div className={style.profileBox}>
                <div className={style.profilePictureBox} />
              </div>
          </div>
      </div>
    </div>
  )
}
