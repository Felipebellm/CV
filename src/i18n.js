import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  pt: {
    translation: {
      nationalityLabel: "Nacionalidade",
      nationality: "Brasileiro",
      location:  "Rua Benedito da Cunha Campos, número 573, Mogi Mirim -São Paulo-SP, Mogi Mirim, 13806610, Brazil",
      
      professionalEx: "experiência profissional",
      selfEmployed: "Autônomo.",
      techIT: "Técnico em Informática.",
      descTechIT: "Manutenção de Computadores e Sistemas Operacionais.",
      ibmRole: "Analista de Desenvolvimento em Main Frame.",
      descIbmRole: "Desenvolver e testar sistemas em COBOL e JCL – Main Frame.",
      fildTech: "Técnico de Campo.",
      descFildTech: "Gerenciamento de Infraestrutura de Data Center.",
      fullStack: "Desenvolvedor Full-Stack.",
      descFullStack: "Desenvolver, testar e analisar aplicações Web.",
      fullStackSelf: "Desenvolvendo Sistema/Aplicações Web.",
      descFullStackSelf: "Desenvolvendo Projeos pessoais e de terceiros.",
      suportAnalist : "Analista de Suporte", 
      descSuportAnalist : "Analista e resolver problemas de software e infraestrutura.", 

      education: "Formação",
      techFormation: "Técnico de Informática com ênfase Internet.",
      regularFormation: "Ensino médio.",
      cumputerScience: "Ciência da Computação",
      descCumputerScience: "Não Finalizado.",
      tecFullStack: "Tecnólogo Full-Stack.",

      projects: "Projetos",
      ibm1: "AT&T – Sistema de Cobrança, COBOL (IBM).",
      ibm2: "Banco Safra – Desenvolvimento do sistema principal, COBOL (IBM).",
      hp: "Itaú – Analista de Data center, suporte de campo (HP).",
      stef1: "American Airlines – Desenvolvedor de aplicação Web, WordPress, PHP e AngularJS (Stefanini).",
      stef2: "Edenred – Desenvolvedor de aplicação Web, Wordpress e PHP (Stefanini).",
      stef3: "GSK – Designer Gráfico, UX e UI (Stefanini).",
      stef4: "Red Asset – Desenvolvedor de aplicação Web, WordPress e PHP (Stefanini).",
      stef5: "AdvanSix – Suporte de Aplicação Web, WordPress e PHP (Stefanini).",
      stef6: "SourceLink – Desenvolvedor de migração de aplicação Web, PHP puro para Larevel Framework (Stefanini).",
      stef7: "Sesc – Desenvolvedor de aplicação Web, WordPress e PHP (Stefanini).",
      stef8: "EDF – Desenvolvedor de aplicação Web, WordPress e PHP (Stefanini).",
      stef9: "Alvarez and Marsal – Desenvolvedor de aplicação Web, DRUPAL e PHP (Stefanini).",
      auto: "Projeto Próprio - Criação de um MVP próprio em PHP",
    
      aboutMe: "Sobre Mim",
      TextAboutMe: "Especialista em desenvolvimento web com competência em WordPress, PHP, AngularJS, Laravel, React e Node.js com vasta experiência em projetos de empresas líderes no mercado como American Airlines e EDF via Stefanini. Possuo habilidades avançadas em design UX/UI adquiridas através do desenvolvimento de aplicações web. Estou ansioso para integrar sua equipe.",
      
      knowledge: "Conhecimentos",
      graphicDesigner: "Designer gráfico",
      languages: "Idiomas",
      langEn: "Inglês",
      langEs: "Espanhol",

      reactInfo: "Esse currículo foi desenvolvido usando React",
    }
  },
  en: {
    translation: {
      nationalityLabel: "Nationality",
      nationality: "Brazilian",
      location:  "Street Benedito da Cunha Campos, número 573, Mogi Mirim -São Paulo-SP, Mogi Mirim, 13806610, Brazil",
      
      professionalEx: "professional experience",
      selfEmployed: "Self-Employed.",
      techIT: "IT Technician.",
      descTechIT: "Computer and Operating Systems Maintenance.",
      ibmRole: "Main Frame Development Analyst.",
      descIbmRole: "Develop and test systems in COBOL and JCL – Main Frame.",
      fildTech: "Field Technician.",
      descFildTech: "Data Center Infrastructure Management.",
      fullStack: "Full-Stack Developer.",
      descFullStack: "Develop, test and analyze web applications.",
      fullStackSelf: "Developing System/Web Applications.",
      descFullStackSelf: "Developing personal and third-party projects.", 
    
      education: "Education",
      techFormation: "Computer Technician with Internet emphasis.",
      regularFormation: "High school.",
      cumputerScience: "Computer Science.",
      descCumputerScience: "Not finished.",
      tecFullStack: "Full-Stack Technologist.",

      projects: "Projects",
      ibm1: "AT&T – Billing System, COBOL (IBM).",
      ibm2: "Banco Safra – Development of the main system, COBOL (IBM).",
      hp: "Itaú – Data center Analyst, field support (HP).",
      stef1: "American Airlines – Web application developer, WordPress, PHP and AngularJS (Stefanini).",
      stef2: "Edenred – Wordpress and PHP Web application developer (Stefanini).",
      stef3: "GSK – UX and UI Graphic Designer (Stefanini).",
      stef4: "Red Asset – WordPress and PHP Web application developer (Stefanini).",
      stef5: "AdvanSix – Web Application Support, WordPress and PHP (Stefanini).",
      stef6: "SourceLink – Web application migration developer, pure PHP for Larevel Framework (Stefanini).",
      stef7: "Sesc – WordPress and PHP Web application developer (Stefanini).",
      stef8: "EDF – Web application developer, WordPress and PHP (Stefanini).",
      stef9: "Alvarez and Marsal – Web application developer, DRUPAL and PHP (Stefanini).",
      auto: "My Own Project - Creation of your own MVP in PHP",

      aboutMe: "About Me",
      TextAboutMe: "Specialist in web development with expertise in WordPress, PHP, AngularJS, Laravel, React, and Node.js, with extensive experience in projects for leading companies such as American Airlines and EDF via Stefanini. I have advanced UX/UI design skills acquired through the development of web applications. I am eager to join your team.",
    
      knowledge: "Knowledge",
      graphicDesigner: "Graphic designer",
      languages: "Languages",
      langEn: "English",
      langEs: "Spanish",

      reactInfo: "This resume was developed using React",
    }
  }
};

// Initialize i18next
i18n
  .use(LanguageDetector) // Detects the user's language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: 'pt', // Set the default language to Portuguese
    fallbackLng: 'pt', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;