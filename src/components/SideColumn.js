import React from 'react';
import '../scss/sideColumn.scss';
import Profile from './../profile.jpeg'

function SideColumn() {
  return (
    <div className="sideColumn">
      <div className='profile-block'>
        <img src={Profile} className="img-profile" alt="profile" />
      </div>
      <div className='aboutMe'>
        <div className='title'>
          Sobre Mim
        </div>
        <div className='textBody'>
        Especialista em desenvolvimento web com competência em WordPress, PHP, AngularJS, Laravel, React e Node.js com vasta experiência em projetos de empresas líderes no mercado como American Airlines e EDF via Stefanini. Possuo habilidades avançadas em design UX/UI adquiridas através do desenvolvimento de aplicações web. Estou ansioso para integrar sua equipe.
        </div>
      </div>

      <hr></hr>

      <div className='knowledge'>
        <div className='title'>
          Conhecimentos
        </div>

        <div className='item'>
          <div className='itemTitle'>
            COBOL, JCL, DB2
          </div>
          <div className='itemFull'>
            <div className='itemLevel-3'></div>
          </div>
        </div>

        <div className='item'>
          <div className='itemTitle'>
            JavaScript
          </div>
          <div className='itemFull'>
            <div className='itemLevel-4'></div>
          </div>
        </div>

        <div className='item'>
          <div className='itemTitle'>
            HTML, CSS
          </div>
          <div className='itemFull'>
            <div className='itemLevel-5'></div>
          </div>
        </div>

        <div className='item'>
          <div className='itemTitle'>
            Designer gráfico
          </div>
          <div className='itemFull'>
            <div className='itemLevel-4'></div>
          </div>
        </div>

        <div className='item'>
          <div className='itemTitle'>
            Desenvolvimento de aplicações WEB
          </div>
          <div className='itemFull'>
            <div className='itemLevel-4'></div>
          </div>
        </div>

        <div className='item'>
          <div className='itemTitle'>
            PHP
          </div>
          <div className='itemFull'>
            <div className='itemLevel-4'></div>
          </div>
        </div>

        <div className='item'>
          <div className='itemTitle'>
            WordPress
          </div>
          <div className='itemFull'>
            <div className='itemLevel-4'></div>
          </div>
        </div>

        <div className='item'>
          <div className='itemTitle'>
            Drupal
          </div>
          <div className='itemFull'>
            <div className='itemLevel-3'></div>
          </div>
        </div>

        <div className='item'>
          <div className='itemTitle'>
            Laravel
          </div>
          <div className='itemFull'>
            <div className='itemLevel-3'></div>
          </div>
        </div>

        <div className='item'>
          <div className='itemTitle'>
            Angular
          </div>
          <div className='itemFull'>
            <div className='itemLevel-3'></div>
          </div>
        </div>

        <div className='item'>
          <div className='itemTitle'>
            React
          </div>
          <div className='itemFull'>
            <div className='itemLevel-3'></div>
          </div>
        </div>

        <div className='item'>
          <div className='itemTitle'>
            Node.js
          </div>
          <div className='itemFull'>
            <div className='itemLevel-3'></div>
          </div>
        </div>

        <div className='item'>
          <div className='itemTitle'>
            Docker
          </div>
          <div className='itemFull'>
            <div className='itemLevel-4'></div>
          </div>
        </div>

      </div>


      <div className='knowledge language'>
        <div className='languageTitle'>Idiomas</div>

        <div className='item'>
          <div className='itemTitle'>
            Inglês
          </div>
          <div className='itemFull'>
            <div className='itemLevel-5'></div>
          </div>
        </div>

        <div className='item'>
          <div className='itemTitle'>
            Espanhol
          </div>
          <div className='itemFull'>
            <div className='itemLevel-3'></div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default SideColumn;