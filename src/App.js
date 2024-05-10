// import logo from './logo.svg';
import './App.scss';
import SideColumn from './components/SideColumn';
import MainColumn from './components/MainColumn';

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

function App() {
  return (
    <div className='app'>
      <div className='pdf' id="pdf">
        <SideColumn />

        <MainColumn />   
      </div>
      
      <button onClick={printDocument}>Download PDF</button>
    </div>
   
  );
}

export default App;