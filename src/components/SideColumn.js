import React from 'react';
import '../scss/sideColumn.scss';
import Profile from './../profile.jpeg'
import { useTranslation } from 'react-i18next';

function SideColumn() {

  const { t } = useTranslation(); 

  return (
    <div className="sideColumn">
      <div className='profile-block'>
        <img src={Profile} className="img-profile" alt="profile" />
      </div>
      <div className='aboutMe'>
        <div className='title'>
          {t('aboutMe')}
        </div>
        <div className='textBody'>
          {t('TextAboutMe')}
        </div>
      </div>

      <hr></hr>

      <div className='knowledge'>
        <div className='title'>
          {t('knowledge')}
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
            {t('graphicDesigner')}
          </div>
          <div className='itemFull'>
            <div className='itemLevel-4'></div>
          </div>
        </div>

        {/* <div className='item'>
          <div className='itemTitle'>
            Desenvolvimento de aplicações WEB
          </div>
          <div className='itemFull'>
            <div className='itemLevel-4'></div>
          </div>
        </div> */}

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
            DEV WordPress
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
            <div className='itemLevel-2'></div>
          </div>
        </div>

        <div className='item'>
          <div className='itemTitle'>
            Node.js
          </div>
          <div className='itemFull'>
            <div className='itemLevel-2'></div>
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
        <div className='languageTitle'>{t('languages')}</div>

        <div className='item'>
          <div className='itemTitle'>
            {t('langEn')}
          </div>
          <div className='itemFull'>
            <div className='itemLevel-5'></div>
          </div>
        </div>

        <div className='item'>
          <div className='itemTitle'>
            {t('langEs')}
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