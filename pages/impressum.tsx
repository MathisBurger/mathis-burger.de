import {NextPage} from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import React from "react";

const Impressum: NextPage = () => {

    return (
        <Wrapper>
            <Header active="" />
            Impressum
            Angaben gemäß § 5 TMG

            Max Muster
            Musterweg
            12345 Musterstadt
            Vertreten durch:
            Max Muster
            Kontakt:
            Telefon: 01234-789456
            Fax: 1234-56789
            E-Mail: max@muster.de
            <Footer />
        </Wrapper>
    );
}

export default Impressum;
