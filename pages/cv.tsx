import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../styles/cv.module.scss';
import Timeline from '../components/Timeline';
import IntImg from '../components/IntImg';

const CV = () => {
  return (
    <Wrapper>
      <Header active={'cv'} />
      <div className={style.container}>
        <h1>CV</h1>
        <div className={style.imgRow}>
          <IntImg src="/me2.JPG" />
          <div className={style.dataRow}>
            <h2>Mathis Burger</h2>
            <div className={style.kv}>
              <p>Age:</p>
              <p>21</p>
            </div>
            <div className={style.kv}>
              <p>Contact:</p>
              <p>kontakt@mathis-burger.de</p>
            </div>

            <h2>Professional Experience</h2>
            <div className={style.kv}>
              <IntImg src="/experience/AUDI.png" />
              <div className={`${style.dataRow}`}>
                <h3>Corporate Student</h3>
                <h5>AUDI AG | Sep. 2023 - today</h5>
                <p>
                  Studying Wirtschaftsinformatik at the THI with some practical
                  experience at the AUDI AG
                </p>
              </div>
            </div>
            <div className={style.kv}>
              <IntImg src="/experience/vwgds.jpeg" />
              <div className={`${style.dataRow}`}>
                <h3>Software Engineer</h3>
                <h5>
                  Volkswagen Group Digital Solutions [Portugal] | Jan. 2026 -
                  Mar. 2026
                </h5>
                <p>
                  Supporting on product and engineering side of the EVLVISNG
                  project.
                </p>
              </div>
            </div>
            <div className={style.kv}>
              <IntImg src="/experience/NWS.avif" />
              <Timeline>
                <div className={`${style.dataRow} ${style.extended}`}>
                  <h3>Fullstack Software Engineer</h3>
                  <h5>NetzWerkstatt GmbH & Co. KG | Jun. 2024 - today</h5>
                  <p>
                    Developing enterprise web applications with PHP, Symfony and
                    React.
                  </p>
                </div>
                <div className={`${style.dataRow} ${style.extended}`}>
                  <h3>Software Engineer</h3>
                  <h5>NetzWerkstatt GmbH & Co. KG | Aug. 2021 - Sep. 2023</h5>
                  <p>
                    Developing enterprise web applications with PHP, Symfony and
                    React.
                  </p>
                </div>
              </Timeline>
            </div>
            <div className={style.kv}>
              <IntImg src="/education/thi.png" />
              <Timeline>
                <div className={`${style.dataRow} ${style.extended}`}>
                  <h3>Tutor: Programming in Java 2</h3>
                  <h5>
                    Technische Hochschule Ingolstadt | Apr. 2025 - Jul. 2025
                  </h5>
                  <p>
                    Being tutor for the course &quot;Programming in Java 2&quot;
                    at the Technische Hochschule Ingolstadt.
                  </p>
                </div>
                <div className={`${style.dataRow} ${style.extended}`}>
                  <h3>Tutor: Introcuction to computer science</h3>
                  <h5>
                    Technische Hochschule Ingolstadt | Oct. 2024 - Feb. 2025
                  </h5>
                  <p>
                    Being tutor for the course &quot;Introcuction to computer
                    science&quot; at the Technische Hochschule Ingolstadt.
                  </p>
                </div>
              </Timeline>
            </div>

            <h2>Education</h2>
            <div className={style.kv}>
              <IntImg src="/education/thi.png" />
              <div className={`${style.dataRow}`}>
                <h3>Wirtschaftsinformatik (B.Sc.)</h3>
                <h5>Technische Hochschule Ingolstadt | 2023 - 2027</h5>
                <p>Application and information systems</p>
                <p>
                  IT-Business processes / Software engineering / IT-Security
                </p>
                <p>IT-Management / IT-Controlling</p>
              </div>
            </div>
            <div className={style.kv}>
              <IntImg src="/education/whg.png" />
              <div className={`${style.dataRow}`}>
                <h3>Abitur</h3>
                <h5>Werner-Heisenberg-Gymnasium Heide | 2015 - 2023</h5>
                <h5>Grade: 2.4</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default CV;
