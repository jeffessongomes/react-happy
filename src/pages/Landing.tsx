import React from 'react';

import {FiArrowRight} from 'react-icons/fi';

import '../styles/pages/landing.css';

import logoImg from '../assets/img/logo.svg';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Logotipo do HAPPY"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>
            Visite orfanatos e mude o dia
            de muitas crianças.
          </p>
        </main>
        <div className="location">
          <strong>Rio Grande do Norte</strong>
          <span>Goianinha</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
