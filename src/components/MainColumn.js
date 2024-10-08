import React from 'react';
import '../scss/mainColumn.scss';
import Telephone from '../icons/telephone.svg';
import Mail from '../icons/envelope.svg';
import Linkedin from '../icons/linkedin.svg';
import Github from '../icons/github.svg';
import Location from '../icons/geo.svg';
import { useTranslation } from 'react-i18next';

function MainColumn() {

  const { t } = useTranslation(); 

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
            {/* <div>{t('age')}:<i>  29 anos</i></div> */}
            <div>{t('nationalityLabel')}: <i>{t('nationality')}</i></div>
            {/* <div>Estado Civil:<i>  Solteiro</i></div> */}
          </div>
        </div>

        <div className='contactInfo'>

          <div className='item'>
            <div className='icon'>
              <img src={Location} />
            </div>
            <div className='text'>
              {t('location')}
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

        <div className='title'>{t('professionalEx')}</div>
        <hr></hr>

        <div className='body'>

          <div className='item'>
            
            <div className='itemTitle'>
              {t('selfEmployed')}
              <div className='date'>
                jan 2012 - dez 2014
              </div>
            </div>

            <div className='role'>
              {t('techIT')}
              <div className='description'>
                {t('descTechIT')}
              </div>
            </div>

          </div>

          <div className='item'>
            
            <div className='itemTitle'>
              IBM, Hortolândia
              <div className='date'>
                nov 2014 - jun 2016
              </div>
            </div>

            <div className='role'>
              {t('ibmRole')}
              <div className='description'>
                {t('descIbmRole')}
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
              {t('fildTech')}
              <div className='description'>
                {t('descFildTech')}
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
              {t('fullStack')}
              <div className='description'>
                {t('descFullStack')}
              </div>
            </div>

          </div>

          <div className='item'>
            
            <div className='itemTitle'>
              {t('selfEmployed')}
              <div className='date'>
                jul 2023 - Atuando
              </div>
            </div>

            <div className='role'>
              {t('fullStackSelf')}
              <div className='description'>
                {t('descFullStackSelf')}
              </div>
            </div>

          </div>
         
        </div>

        <div className='title'>{t('education')}</div>
        <hr></hr>

        <div className='body'>

          <div className='item'>

            <div className='itemTitle'>
              ETEC. Pedro Ferreira Alves
              <div className='date'>
                jan 2011 - jul 2012
              </div>
            </div>

            <div className='role'>
              {t('techFormation')}
              <div className='description'></div>
                
              </div>

          </div>

          <div className='item'>
            
            <div className='itemTitle'>
              ETEC. Pedro Ferreira Alves
              <div className='date'>
                jan 2011 - dez 2013
              </div>
            </div>

            <div className='role'>
            {t('regularFormation')}
            <div className='description'></div>
            </div>

          </div>
          <div className='item'>
            
            <div className='itemTitle'>
              METROCAMP
              <div className='date'>
                jan 2014 - dez 2017
              </div>
            </div>

            <div className='role'>
            {t('cumputerScience')}
            <div className='description'>{t('descCumputerScience')}</div>
            </div>

          </div>

          <div className='item'>
            
            <div className='itemTitle'>
              ESTACIO
              <div className='date'>
                abr 2024 - Cursando
              </div>
            </div>

            <div className='role'>
            {t('tecFullStack')}
            <div className='description'></div>
            </div>

          </div>
        </div>

        <div className='title'>{t('projects')}</div>
        <hr></hr>

        <div className='body'>
          <ol className='list'>
            <li>{t('ibm1')}</li>
            <li>{t('ibm2')}</li>
            <li>{t('hp')}</li>
            <li>{t('stef1')}</li>
            <li>{t('stef2')}</li>
            <li>{t('stef3')}</li>
            <li>{t('stef4')}</li>
            <li>{t('stef5')}</li>
            <li>{t('stef6')}</li>
            <li>{t('stef7')}</li>
            <li>{t('stef8')}</li>
            <li>{t('stef9')}</li>
          </ol>
          <div className='credits'>{t('reactInfo')}</div>
        </div>
      </div>
    </div>
  );
}

export default MainColumn;