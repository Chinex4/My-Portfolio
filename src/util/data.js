import { AiOutlineApi } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import {
  FaCss3,
  FaGit,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaSass,
} from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import investment from '../assets/investment.png'
import age from '../assets/age.png'
import calculator from '../assets/calculator.png'
import createverse from '../assets/createverse.png'
import dictionary from '../assets/dictionary.png'
import fylo from '../assets/fylo.png'
import huddle from '../assets/huddle.png'
import news from '../assets/news.png'
import weather from '../assets/weather.png'
export const technologies = [
  {
    text: "React",
    Icon: FaReact,
    color: "#61dafb",
  },
  {
    text: "HTML5",
    Icon: FaHtml5,
    color: "#e34c26",
  },
  {
    text: "CSS3",
    Icon: FaCss3,
    color: "#2965F1",
  },
  {
    text: "Javascript",
    Icon: FaJs,
    color: "#F0DB4F",
  },
  {
    text: "git",
    Icon: FaGitAlt,
    color: "#F1502F",
  },
  {
    text: "Tailwind CSS",
    Icon: SiTailwindcss,
    color: "#6D28D9",
  },
  {
    text: "github",
    Icon: FaGithub,
    color: "#171515",
  },
  {
    text: "RESTful API",
    Icon: AiOutlineApi,
    color: "#F1502F",
  },
  {
    text: "SASS",
    Icon: FaSass,
    color: "#CC6699",
  },
];

export const projects = [
  {
    image: investment,
    title: "Investment Calculator",
    description:
      "An app that calculates the total amount of money invested in a year and displays the interest of the user",
    technologies: ["React", "Javascript", "Tailwind", "Github", "Git"],
    link: "https://nex-investment-calc.netlify.app",
  },
  {
    image: fylo,
    title: "fylo",
    description:
      "A file storage application where users can upload files from their devices to the cloud storage application.",
    technologies: ["React", "Javascript", "Tailwind", "Github", "Git"],
    link: "https://nex-fylo.netlify.app",
  },
  {
    image: dictionary,
    title: "Nexford",
    description: "An app where users can search for the meaning of words",
    technologies: ["React", "Javascript", "Bootstrap", "Sass", "Github", "Git"],
    link: "https://nex-dictionary.netlify.app",
  },
  {
    image: createverse,
    title: "Create Verse",
    description: "A vibrant and innovative online marketplace dedicated to the buying, selling, and trading of NFTs.",
    technologies: ["React", "Javascript", "Tailwind", "Github", "Git"],
    link: "https://createverse21.netlify.app",
  },
  {
    image: age,
    title: "Age Calculator",
    description:
      "An app that can calculates the age of a user based on the user's date of birth.",
    technologies: ["React", "Javascript", "Tailwind", "Github", "Git"],
    link: "https://nex-age-calculator.netlify.app",
  },
  {
    image: huddle,
    title: "Huddle Chat",
    description:
      "A Community Building Platform: where users can Share content and engage in discussions within those communities.",
    technologies: ["React", "Javascript", "Tailwind", "Github", "Git"],
    link: "https://nex-huddle-chat.netlify.app",
  },
  {
    image: calculator,
    title: "Calc-Master",
    description:
      "A Versatile and user friendly calculator application designed to meet the computational needs of users across various domains",
    technologies: ["React", "Javascript", "Tailwind", "Github", "Git"],
    link: "https://nex-calculator2.netlify.app",
  },
  {
    image: weather,
    title: "Weatherify",
    description:
      "A user-friendly weather application designed to provide users with accurate and up-to-date weather information for any location worldwide.",
    technologies: ["React", "Javascript", "Tailwind", "Github", "Git"],
    link: "https://nex-weather.netlify.app",
  },
  {
    image: news,
    title: "Newslettr",
    description:
      "A powerful newsletter application designed to simplify the process of creating, managing, and distributing newsletters for individuals and businesses alike",
    technologies: ["React", "Javascript", "Tailwind", "Github", "Git"],
    link: "https://nex-newsletter-signup.netlify.app",
  },
];
