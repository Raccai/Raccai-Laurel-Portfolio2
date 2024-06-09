import DanielKang from "../assets/DanielKang/DanielKang.svg";

import JosephLapuz from "../assets/JosephLapuz/JosephLapuz.svg";
import JosephLapuz1 from "../assets/JosephLapuz/1.svg";
import JosephLapuz2 from "../assets/JosephLapuz/2.svg";
import JosephLapuz3 from "../assets/JosephLapuz/3.svg";
import JosephLapuz4 from "../assets/JosephLapuz/4.svg";
import JosephLapuz5 from "../assets/JosephLapuz/5.svg";

import Edventure from "../assets/Edventure/Edventure.svg";
import Edventure1 from "../assets/Edventure/1.svg";
import Edventure2 from "../assets/Edventure/2.svg";
import Edventure3 from "../assets/Edventure/3.svg";
import Edventure4 from "../assets/Edventure/4.svg";
import Edventure5 from "../assets/Edventure/5.svg";

import Tagawika from "../assets/Tagawika/Tagawika.svg";
import Tagawika1 from "../assets/Tagawika/1.svg";
import Tagawika2 from "../assets/Tagawika/2.svg";
import Tagawika3 from "../assets/Tagawika/3.svg";
import Tagawika4 from "../assets/Tagawika/4.svg";
import Tagawika5 from "../assets/Tagawika/5.svg";

import NotaLingua from "../assets/NotaLingua/NotaLingua.svg";
import NotaLingua1 from "../assets/NotaLingua/1.svg";
import NotaLingua2 from "../assets/NotaLingua/2.svg";
import NotaLingua3 from "../assets/NotaLingua/3.svg";
import NotaLingua4 from "../assets/NotaLingua/4.svg";
import NotaLingua5 from "../assets/NotaLingua/5.svg";

import AboutMe1 from "../assets/Me/1.jpg";
import AboutMe2 from "../assets/Me/2.jpg";
import AboutMe3 from "../assets/Me/3.jpg";
import AboutMe4 from "../assets/Me/4.jpg";
import AboutMe5 from "../assets/Me/5.jpg";

import logo from "../assets/logo.svg";

export const projects = [
  {
    id: 0,
    name: "Tagawika",
    subtitle: "A fairly simplified Tagalog learning app focusing on grammar",
    span: "Mobile App",
    style: "Tagawika",
    details: [
      `Tagawika is a React Native mobile app that simplifies Tagalog language learning. It focuses on grammar, providing lessons and examples without jargon. Designed to be accessible and straightforward, Tagawika ensures users can delve deeply into Tagalog grammar and its practical use cases.`,
    
      `The creation of Tagawika stemmed from a passion for making language learning accessible. Simplifying complex grammar rules without diluting the content is still a significant challenge. Ensuring the lessons are engaging and informative requires constant refinement and feedback from language learners and Tagalog experts, as well as locals because they're the ones who are in a position to help a Tagalog learner the most, after all.`, 
      
      `The result is an app that demystifies Tagalog grammar, making it easier for users to grasp and apply, and hopefully use in their daily lives here in the Philippines as long-term residents or short-term visitors.`
    ],
    mainImg: [Tagawika],
    detailImgs: [Tagawika1, Tagawika2, Tagawika3, Tagawika4, Tagawika5],
    techs: ["Figma", "Adobe Illustrator", "React Native", "VS Code"],
    translateX: '-200px', 
    translateY: '60px', 
    rotate: '-4deg', 
    width: '860px', 
    height: '860px',
    mainLink: "https://raccaigaleriya.vercel.app/",
    rotateOnHover: false, 
    aboutAnimation: true,
  },
  {
    id: 1,
    name: "Edventure OS",
    subtitle: "A fun and unique OS-like website for Edventure.ph",
    span: "Website",
    style: "Edventure",
    details: [
      `Edventure OS is a creative, OS-inspired website developed during my internship at Edventure.ph by 917Ventures. It showcases the brand identity and offers insights into my experiences and learning. The design aims to provide a user-friendly platform for parents, reflecting Edventure's mission to simplify educational support services for children.`,
    
      `The concept for Edventure OS was inspired by the desire to create a unique and engaging user experience. Designing an OS-like interface that was both fun and functional presented significant challenges, particularly in terms of usability and navigation. Ensuring that the website effectively communicated the brand’s mission while being easy to use required innovative design solutions and extensive testing. The end product is a testament to creative problem-solving and a commitment to user-centric design without sacrificing creativity.`
    ],
    mainImg: [Edventure],
    detailImgs: [Edventure1, Edventure2, Edventure3, Edventure4, Edventure5],
    techs: ["Figma", "Adobe Illustrator", "Sveltekit", "VS Code"],
    translateX: '80px', 
    translateY: '10px', 
    rotate: '0deg', 
    width: '600px', 
    height: '600px', 
    mainLink: "https://edventurous-os.vercel.app/",
    rotateOnHover: true, 
    aboutAnimation: true,
  },
  {
    id: 2,
    name: "NotaLingua",
    subtitle: "A word collation app for linguistic enthusiasts",
    span: "Mobile App",
    style: "NotaLingua",
    details: [
      `NotLingua is a React Native app designed to help users capture and organize words they encounter daily. Users can add new words with detailed linguistic information such as meaning, part of speech, etymology, pronunciation, and origin. The app features an intuitive interface, robust search functionality, and efficient word management, making it an essential tool for anyone passionate about languages or just starting out on their language journey.`,
    
      `The development of NotLingua was driven by a deep appreciation for languages and a desire to create a tool that linguists and language learners could rely on. Words are amazing, after all, and why wouldn't you want to know more about a new word from a new country and culture?`,
      
      `One of the main challenges was designing an interface that could handle fairly complex linguistic data while remaining user-friendly. Balancing the need for detailed information with ease of use required iterative design and testing. Overcoming these hurdles resulted in a functional app that meets the needs of its users.`
    ],
    mainImg: [NotaLingua],
    detailImgs: [NotaLingua1, NotaLingua5, NotaLingua3, NotaLingua4, NotaLingua2],
    techs: ["Figma", "Adobe Illustrator", "React Native", "VS Code"],
    translateX: '-120px', 
    translateY: '40px', 
    rotate: '-12deg', 
    width: '720px', 
    height: '720px', 
    mainLink: "https://raccaigaleriya.vercel.app/",
    rotateOnHover: false, 
    aboutAnimation: true,
  },
  {
    id: 3,
    name: "Daniel Kang",
    subtitle: "A simple and elegant portfolio for a photographer",
    span: "Soon",
    style: "DanielKang",
    details: [
      `Daniel Kang's photography portfolio focuses on simplicity to highlight his stunning images. The website features a unique gallery design with subtle animations, developed through continuous collaboration to maintain a balance between elegance and functionality.`,
    
      `Developing Daniel Kang's website required a deep understanding of his artistic vision and the need for simplicity. The challenge was to create a visually appealing gallery that did not overshadow the photographs. Balancing elegant animations with a simple user interface involved meticulous design and development, resulting in a website that beautifully showcases his work.`
    ],
    mainImg: [DanielKang],
    detailImgs: [Edventure1, Edventure1, Edventure1, Edventure1, Edventure1],
    techs: ["Figma", "Adobe Illustrator", "React", "Vite", "VS Code"],
    translateX: '80px', 
    translateY: '20px', 
    rotate: '-8deg', 
    width: '480px', 
    height: '480px', 
    mainLink: "",
    rotateOnHover: true, 
    aboutAnimation: true,
  },
  {
    id: 4,
    name: "Joseph Lapuz",
    subtitle: "A minimalist portfolio showcasing architectural work",
    span: "Soon",
    style: "JosephLapuz",
    details: [
      `Joseph Lapuz's portfolio website highlights his architectural projects with a minimalist design approach. Developed in close collaboration to meet his vision, the site emphasizes his work without unnecessary distractions. The backend, built using the MERN stack, provides Joseph with full control over the website content and updates.`,
    
      `Creating Joseph Lapuz's website involved understanding his aesthetic preferences and the functional requirements of an architectural portfolio. Striking a balance between simplicity and functionality was key. Ensuring the website remained lightweight while providing a robust backend for content management posed challenges that were met through iterative development and regular feedback sessions.`,

      `This was my first foray into backend development and it was... definitely a trip.`
    ],
    mainImg: [JosephLapuz],
    detailImgs: [JosephLapuz1, JosephLapuz2, JosephLapuz3, JosephLapuz4, JosephLapuz5],
    techs: ["Figma", "Adobe Illustrator", "React", "Vite", "VS Code", "MongoDB", "Express", "Node"],
    translateX: '-20px', 
    translateY: '80px', 
    rotate: '0deg', 
    width: '800px', 
    height: '800px', 
    mainLink: "https://joseph-lapuz.vercel.app/",
    rotateOnHover: false, 
    aboutAnimation: true,
  },
  {
    id: 5,
    name: "About Me",
    subtitle: "A passionate artist with a knack for creative solutions and unique storytelling",
    span: "Section",
    style: "AboutMe",
    details: [
      `Hello! I'm Jose Emmanuel B. Laurel (or just EJ or Raccai), a dedicated developer with a passion for creating meaningful human experiences. My journey in the tech world has been fueled by a love for solving complex problems relating to human connectivity and emotions, and a commitment to continuous learning in a world brimming with resources. With knowledge in both frontend and backend technologies, I specialize in crafting elegant and efficient solutions that not only meet but exceed user expectations, taking into account their unique design preferences and brand identities.`,

      `Over the past two years, I've worked on diverse projects ranging from mobile apps and websites to unique OS-like interfaces. My portfolio reflects a blend of creativity and technical proficiency, showcasing my ability to bring ideas to life through code and other forms of art that I love dearly, such as literature, film, and music.`,

      `My creative process is rooted in understanding the core needs of a project/story and iteratively refining solutions until they align perfectly with user/story requirements. Each project presents its own set of challenges, from balancing aesthetics with functionality to ensuring seamless user experiences. Navigating these challenges has honed my problem-solving skills and deepened my appreciation for well-crafted digital products. After all, every project has its own story to tell — a beginning, middle, and ending, if you will — and every story needs a great hook that can reel in an entire generation... or two.`,

      `When I'm not coding, you can find me exploring the latest design trends, collaborating with fellow developers and artists, doing calisthenics (friggin love calisthenics), producing some music, writing a screenplay, drafting a story, or... sleeping... at cafés (friggin love cafés ). I thrive in dynamic environments and am always eager to take on new challenges that push the boundaries of what's possible and what's worth telling.`,

      `Feel free to explore my work and get in touch if you'd like to collaborate or just chat about anything — from tech to history, from UI/UX to film!`
    ],
    mainImg: [AboutMe1, AboutMe2, AboutMe3],
    logoImg: [logo],
    mainImgClass: ["AboutMe1", "AboutMe2", "AboutMe3"],
    logoImgClass: ["Logo"],
    detailImgs: [AboutMe3, AboutMe4, AboutMe1, AboutMe2, AboutMe5],
    techs: ["LinkedIn", "Behance", "Instagram", "Github"],
    translateX: '10px', 
    translateY: '20px', 
    rotate: '5deg', 
    width: '800px', 
    height: '800px', 
    mainLink: "https://drive.google.com/file/d/142b96gpddDqqy6VSRUGodfkI_iIoI5pn/view?usp=sharing",
    rotateOnHover: false, 
    aboutAnimation: false,
  }
]