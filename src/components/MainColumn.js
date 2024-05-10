import React from 'react';
import '../scss/mainColumn.scss';
import Telephone from '../icons/telephone.svg';
import Mail from '../icons/envelope.svg';
import Linkedin from '../icons/linkedin.svg';
import Github from '../icons/github.svg';
import Location from '../icons/geo.svg';

function MainColumn() {
  return (
    <div className="mainColumn">
      <div className='header'>
        <div className='profileInfo'>
          <div className='name'>
            Felipe <br/>Bell Marques
            <div className='role'>
              Full-Stack
            </div>
          </div>
          <div className='personalInfo'>
            <div>Idade:<i>  29 anos</i></div>
            <div>Nacionalidade:<i>  Brasileiro</i></div>
            {/* <div>Estado Civil:<i>  Solteiro</i></div> */}
          </div>
        </div>

        <div className='contactInfo'>

          <div className='item'>
            <div className='icon'>
              <img src={Location} />
            </div>
            <div className='text'>
              Rua Benedito da Cunha Campos, número 573, Mogi Mirim -São Paulo-SP, Mogi Mirim, 13806610, Brazil
            </div>
          </div>

          <div className='item'>
            <div className='icon'>
              <img src={Telephone} />
            </div>
            <div className='text'>
              (19) 99597-8967/ (19) 3862-8976
            </div>
          </div>

          <div className='item'>
            <div className='icon'>
              <img src={Mail} />
            </div>
            <div className='text'>
              felipe.bell@hotmail.com
            </div>
          </div>

          <div className='item'>
            <div className='icon'>
              <img src={Linkedin} />
            </div>
            <div className='text'>
              <a href='https://www.linkedin.com/in/felipe-bell-marques/'>https://www.linkedin.com/in/felipe-bell-marques/</a>
            </div>
          </div>

          <div className='item'>
            <div className='icon'>
              <img src={Github} />
            </div>
            <div className='text'>
              <a href='https://github.com/Felipebellm'>https://github.com/Felipebellm</a>
            </div>
          </div>

        </div>
      </div>
     

      <div className='bodyContent'>

        <div className='title'>EXPERIÊNCIA PROFISSIONAL</div>
        <hr></hr>

        <div className='body'>

          <div className='item'>

            <div className='itemTitle'>
              Autônomo
              <div className='date'>
                jan 2012 - dez 2012
              </div>
            </div>

            <div className='role'>
                Professor de Informática Particular
                <div className='description'>
                  Lecionando informática básica
                </div>
              </div>

          </div>

          <div className='item'>
            
            <div className='itemTitle'>
              Autônomo
              <div className='date'>
                jan 2012 - dez 2014
              </div>
            </div>

            <div className='role'>
              Técnico em Informática
              <div className='description'>
                Manutenção de Computadores e Sistemas Operacionais
              </div>
            </div>

          </div>

          <div className='item'>
            
            <div className='itemTitle'>
              IBM, Hortolândia
              <div className='date'>
                jan 2014 - jun 2016
              </div>
            </div>

            <div className='role'>
              Analista de Desenvolvimento em Main Frame.
              <div className='description'>
              Desenvolver e testar sistemas em COBOL e JCL – Main Frame.
              </div>
            </div>

          </div>

          <div className='item'>
            
            <div className='itemTitle'>
              HP, CTMM - Itaú
              <div className='date'>
                jul 2016 - jun 2018
              </div>
            </div>

            <div className='role'>
              Técnico de Campo
              <div className='description'>
                Gerenciamento de Infraestrutura de Data Center.
              </div>
            </div>

          </div>

          <div className='item'>
            
            <div className='itemTitle'>
              Stefanini,<br/> Jaguariúna
              <div className='date'>
                jul 2018 - jun 2023
              </div>
            </div>

            <div className='role'>
              Desenvolvedor Full-Stack
              <div className='description'>
                Desenvolver, testar e analisar aplicações Web
              </div>
            </div>

          </div>
         
        </div>

        <div className='title'>FORMAÇÃO</div>
        <hr></hr>

        <div className='body'>

          <div className='item'>

            <div className='itemTitle'>
              ETEC. Pedro Ferreira Alves
              <div className='date'>
                jan 2012 - dez 2012
              </div>
            </div>

            <div className='role'>
              Técnico de Informática com ênfase Internet
              <div className='description'></div>
                
              </div>

          </div>

          <div className='item'>
            
            <div className='itemTitle'>
              ETEC. Pedro Ferreira Alves
              <div className='date'>
                jan 2012 - dez 2014
              </div>
            </div>

            <div className='role'>
            Ensino médio
            <div className='description'></div>
            </div>

          </div>
        </div>

        <div className='title'>PROJETOS</div>
        <hr></hr>

        <div className='body'>
          <ol className='list'>
            <li>AT&T – Sistema de Cobrança, COBOL (IBM).</li>
            <li>Banco Safra – Desenvolvimento do sistema principal, COBOL (IBM).</li>
            <li>Itaú – Analista de Data center, suporte de campo (HP).</li>
            <li>American Airlines – Desenvolvedor de aplicação Web, WordPress, PHP e AngularJS (Stefanini).</li>
            <li>Edenred – Desenvolvedor de aplicação Web, Wordpress e PHP (Stefanini).</li>
            <li>GSK – Designer Gráfico, UX e UI (Stefanini).</li>
            <li>Red Asset – Desenvolvedor de aplicação Web, WordPress e PHP (Stefanini).</li>
            <li>AdvanSix – Suporte de Aplicação Web, WordPress e PHP (Stefanini).</li>
            <li>SourceLink – Desenvolvedor de migração de aplicação Web, PHP puro para Larevel Framework</li>
            <li>(Stefanini).</li>
            <li>Sesc – Desenvolvedor de aplicação Web, WordPress e PHP (Stefanini).</li>
            <li>EDF – Desenvolvedor de aplicação Web, WordPress e PHP (Stefanini).</li>
            <li>Alvarez and Marsal – Desenvolvedor de aplicação Web, DRUPAL e PHP (Stefanini).</li>
          </ol>
          <div className='credits'>Esse currículo foi criado com React</div>
        </div>
      </div>
    </div>
  );
}

export default MainColumn;