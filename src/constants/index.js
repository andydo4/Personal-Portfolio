import {
  C,
  css,
  flask,
  html,
  java,
  javascript,
  nltk,
  nodejs,
  python,
  pytorch,
  react,
  tailwind,
  vite,
} from "../assets/languages";
import { behance, linkedin, github } from "../assets/icons";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const languages = [
  {
    logo: C,
    name: "C",
    project: "Vehicle/Garage Management System",
    description:
      "Developed a C-based system to manage vehicle registrations and garage utilization on a university campus",
  },
  {
    logo: css,
    name: "CSS",
    project: "AI Chatbot Coffee Shop Website, Nike Concept Website",
    description: "Developed a Nike concept website",
  },
  {
    logo: html,
    name: "HTML",
    project: "AI Chatbot Coffee Shop Website",
    description: "Developing a coffee shop website with an AI chatbot",
  },
  {
    logo: java,
    name: "Java",
    project: "F1 Mod in Minecraft",
    description:
      "Developing a custom Formula 1 mod in minecraft by utilizing Blockbench and Minecraft API",
  },
  {
    logo: javascript,
    name: "JavaScript",
    project: "Nike Concept Website",
    description: "Developed a Nike concept website",
  },
  {
    logo: python,
    name: "Python",
    project: "AI Chatbot Coffee Shop Website",
    description: "Developing back-end of AI Chatbot Coffee Shop Website",
  },
  {
    logo: flask,
    name: "Flask",
    project: "AI Chatbot Coffee Shop Website",
    description: "Utilized to manage communication between user and chatbot",
  },
  {
    logo: nltk,
    name: "NLTK",
    project: "AI Chatbot Coffee Shop Website",
    description:
      "Utilized in conjunction with Flask to handle text-based user inquiries",
  },
  {
    logo: nodejs,
    name: "Node.js",
    project: "Nike Concept Website",
    description:
      "Utilized to install dependencies such as Tailwind CSS, and to manage packages",
  },
  {
    logo: pytorch,
    name: "Pytorch",
    project: "AI Chatbot Coffee Shop Website",
    description: "Utilized to define and train chatbot model",
  },
  {
    logo: react,
    name: "React",
    project: "Nike Concept Website",
    description: "Utilized its components while making the website",
  },
  {
    logo: tailwind,
    name: "Tailwind CSS",
    project: "Nike Concept Website",
    description:
      "Made styling components much more convenient and streamlined than traditional CSS",
  },
  {
    logo: vite,
    name: "Vite",
    project: "Nike Concept Website",
    description: "Utilized to set up React in VSCode to begin project",
  },
];

// export const frameworks = [
//     {
//         logo: flask,
//         name: "Flask",
//         project: "AI Chatbot Coffee Shop Website",
//         description: "Utilized to manage communication between user and chatbot"
//     },
//     {
//         logo: nltk,
//         name: "NLTK",
//         project: "AI Chatbot Coffee Shop Website",
//         description: "Utilized in conjunction with Flask to handle text-based user inquiries"
//     },
//     {
//         logo: nodejs,
//         name: "Node.js",
//         project: "Nike Concept Website",
//         description: "Utilized to install dependencies such as Tailwind CSS, and to manage packages"
//     },
//     {
//         logo: pytorch,
//         name: "Pytorch",
//         project: "AI Chatbot Coffee Shop Website",
//         description: "Utilized to define and train chatbot model"
//     },
//     {
//         logo: react,
//         name: "React",
//         project: "Nike Concept Website",
//         description: "Utilized its components while making the website"
//     },
//     {
//         logo: tailwind,
//         name: "Tailwind CSS",
//         project: "Nike Concept Website",
//         description: "Made styling components much more convenient and streamlined than traditional CSS"
//     },
//     {
//         logo: vite,
//         name: "Vite",
//         project: "Nike Concept Website",
//         description: "Utilized to set up React in VSCode to begin project"
//     },
// ];

export const projects = [
    {
      title: "Nike Concept Website",
      source: {
        label: "View the code",
        link: "https://github.com/andydo4/Nike-Concept-Site",
      },
      tools: [
        { name: "React", logo: react },
        { name: "Tailwind CSS", logo: tailwind },
        { name: "JavaScript", logo: javascript },
        { name: "HTML", logo: html },
      ],
    },
    {
      title: "AI Chatbot Coffee Shop Website",
      source: {
        label: "View the code",
        link: "https://github.com/andydo4/CoffeeShopAI",
      },
      tools: [
        { name: "Python", logo: python },
        { name: "HTML", logo: html },
        { name: "CSS", logo: css },
        { name: "JavaScript", logo: javascript },
        { name: "Flask", logo: flask },
        { name: "PyTorch", logo: pytorch },
        { name: "NLTK", logo: nltk },
      ],
    },
    {
      title: "F1 Mod in Minecraft",
      source: {
        label: "View the code",
        link: "https://github.com/andydo4/Formula1MinecraftMod",
      },
      tools: [{ name: "Java", logo: java }],
    },
  ];

export const footerLinks = [
  {
    title: "Get in touch",
    links: [
      { name: "andrewhuudo@gmail.com", link: "mailto:andrewhuudo@gmail.com" },
    ],
  },
];

export const socialMedia = [
  { src: linkedin, alt: "linkedin logo", link: "https://www.linkedin.com/in/andrew-do-8a268a268/"},
  { src: github, alt: "github logo", link: "https://github.com/andydo4" },
  { src: behance, alt: "behance logo", link: "https://www.behance.net/andy-do"},
];
