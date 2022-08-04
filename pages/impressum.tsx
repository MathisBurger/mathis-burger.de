import {NextPage} from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import React from "react";
import styles from "../styles/Impressum.module.scss";

const Impressum: NextPage = () => {

    return (
        <Wrapper>
            <Header active="" />
            <div className={styles.container}>
                <h1>Impressum</h1>
                <p>Angaben gemäß § 5 TMG</p>
                <div />

                <p>Mathis Burger</p>
                <p>Mühlenberg 27</p>
                <p>25794 Pahlen</p>
                <div />
                <p>Kontakt:</p>
                <div/>
                <p>E-Mail: kontakt@mathis-burger.de</p>
                <div />
                <p>Haftung für Links</p>

                <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
                </div>
            <Footer />
        </Wrapper>
    );
}

export default Impressum;
