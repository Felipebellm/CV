// import logo from './logo.svg';
import './App.scss';
import SideColumn from './components/SideColumn';
import MainColumn from './components/MainColumn';
import { useTranslation } from 'react-i18next';
import Download from './icons/download.svg';
import Flags from './icons/flags.svg';
import './i18n';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function printDocument() {
  const input = document.getElementById('pdf');
  html2canvas(input, {
    scale: 1,  // Adjust scale as needed
    windowWidth: input.scrollWidth,
    windowHeight: input.scrollHeight,
    logging: true, // Enable for debugging issues
    useCORS: true  // If you're using images hosted externally
    })
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4"
      });
      pdf.addImage(imgData, 'JPEG', 0, 0);
      pdf.save("download.pdf");
    });
}

// function toggleLang() {
//   debugger
// }

function App() {

  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const toggleLang = () => {
    
    const newLang = currentLang === 'pt' ? 'en' : 'pt'; // Toggle between 'pt' and 'en'
    i18n.changeLanguage(newLang);
  };

  return (
    <div className='app'>
      <div className='pdf' id="pdf">
        <SideColumn />

        <MainColumn />   
      </div>
      
      <button className='pdfBtn' onClick={printDocument}><div className='downloadIcon'><img src={Download}/></div>Download PDF</button>
      
      <div onClick={() => toggleLang(currentLang)} class="langSwitch">
        <div className={'circle '+currentLang}>
          <img src={Flags} /> 
        </div>
      </div>
    </div>
   
  );
}

export default App;