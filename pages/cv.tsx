import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import style from "../styles/cv.module.scss";
import Timeline from "../components/Timeline";


const CV = () => {

    return (
        <Wrapper>
            <Header active={'cv'} />
            <div className={style.container}>
                <h1>CV</h1>
                <div className={style.imgRow}>
                    <img src="/me2.JPG" alt="" />
                    <div className={style.dataRow}>
                        <h2>Mathis Burger</h2>
                        <div className={style.kv}>
                            <p>Age:</p>
                            <p>18</p>
                        </div>
                        <div className={style.kv}>
                            <p>Contact:</p>
                            <p>kontakt@mathis-burger.de</p>
                        </div>

                        <h2>Experience</h2>
                        <div className={style.kv}>
                            <img src="/experience/AUDI.png" alt="" />
                            <Timeline>
                                <div className={`${style.dataRow} ${style.extended}`}>
                                    <h3>Dual student</h3>
                                    <h5>AUDI AG | Sep. 2023 - today</h5>
                                    <p>
                                        Studying "Wirtschaftsinformatik" at the THI with some practical
                                        experience at the AUDI AG
                                    </p>
                                </div>
                                <div className={`${style.dataRow} ${style.extended}`}>
                                    <h3>Internship Baureihe SSP3xF / MQB</h3>
                                    <h5>AUDI AG | Feb. 2024 - Mar. 2024</h5>
                                    <p>
                                        Getting into the work and processes of Baureihenmanagement and doing
                                        some research on internal topics.
                                    </p>
                                </div>
                                <div className={`${style.dataRow} ${style.extended}`}>
                                    <h3>Internship Baureihe SSP3xF / MQB</h3>
                                    <h5>AUDI AG | Sep. 2023 - Oct. 2023</h5>
                                    <p>
                                        Getting into the work and processes of Baureihenmanagement.
                                    </p>
                                </div>
                            </Timeline>
                        </div>
                        <div className={style.kv}>
                            <img src="/experience/NWS.avif" alt="" />
                            <div className={`${style.dataRow}`}>
                                <h3>Fullstack Developer</h3>
                                <h5>NetzWerkstatt GmbH & Co. KG | Aug. 2021 - Sep. 2023</h5>
                                <p>
                                    Developing enterprise web applications with PHP, Symfony and React.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Wrapper>
    );
}

export default CV;
