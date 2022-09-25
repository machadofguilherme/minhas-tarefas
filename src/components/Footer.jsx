import React from 'react';
import { SiTodoist } from 'react-icons/si';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';

import '../styles/footer.sass';

function Footer() {
  return (
    <footer className='footer'>
      <i>
        <SiTodoist />
      </i>

      <section className='footer-social'>
        <a href="https://www.linkedin.com/in/machadodev/" target="_blank">
          <AiOutlineLinkedin />
        </a>
        
        <a href="https://github.com/machadofguilherme" target="_blank">
          <AiOutlineGithub />
        </a>
      </section>

      <section className='footer-info'>
        <h3>
          Desenvolvido por:
          <strong> Guilherme Machado</strong>
        </h3>
      </section>
    </footer>
  )
}

export default Footer