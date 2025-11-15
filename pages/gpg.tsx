import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import style from '../styles/gpg.module.scss';
import { Calendar, Clock, Key, Mail } from 'lucide-react';

const gpgKeys = [
  {
    name: 'Private',
    email: 'handymathis@gmail.com',
    fingerprint: '1A7C B156 9C23 250D ED19 47B9 AFE7 60E2 AA90 75D3',
    created: '2023-11-28',
    expires: null,
  },
  {
    name: 'Work',
    email: 'mburger@die-netzwerkstatt.de',
    fingerprint: 'EBBD 616F 8904 EE13 C458 DCDA B491 59DB 4F79 868D',
    created: '2023-03-29',
    expires: null,
  },
];

const GpgPage = () => {
  return (
    <Wrapper>
      <Header active="gpg" />
      <div className={style.container}>
        <h1>GPG Keys</h1>
        <div className={style.box}>
          {gpgKeys.map((key) => (
            <div key={key.fingerprint} className={style.elementBox}>
              <h2>{key.name}</h2>

              <div className={style.field}>
                <Mail className={style.icon} />
                <span className={style.label}>Email:</span>
                <span className={style.value}>{key.email}</span>
              </div>

              <div className={style.field}>
                <Key className={style.icon} />
                <span className={style.label}>Fingerprint:</span>
                <span className={style.value}>{key.fingerprint}</span>
              </div>

              <div className={style.field}>
                <Calendar className={style.icon} />
                <span className={style.label}>Created:</span>
                <span className={style.value}>{key.created}</span>
              </div>

              <div className={style.field}>
                <Clock className={style.icon} />
                <span className={style.label}>Expires:</span>
                <span className={style.value}>
                  {key.expires ?? 'not specified'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default GpgPage;
