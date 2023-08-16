import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import gowatlImg from "@/public/gowatl-logo.png";
import dt2Img from "@/public/dt2-logo.png";
import shopifyImg from "@/public/shopify-logo.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Berkeley, CA",
    description:
      "A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Node.js, MySQL, MongoDB, Express, GraphQL, and ReactJS",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Freelance Developer",
    location: "",
    description:
      "Building websites for people using my knowledge of full stack technologies as well as builders like Wordpress and integrated backends like AWS",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
  {
    title: "IT Support Specialist",
    location: "Charlotte, NC",
    description:
      "Part-time, on-call position as IT support at Bank of America Stadium (Carolina Panthers) and Specturm Center (Charlotte Hornets)",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "GamezOnWheelz ATL",
    description:
      "Official website for the Atlanta's #1 Game Truck. Powered by Wordpress.",
    tags: ["Wordpress", "Elementor", "HTML", "CSS"],
    imageUrl: gowatlImg,
  },
  {
    title: "DT2 Hospitality Solutions",
    description:
      "Official website for a hospitality taskforce consulting agency. Powered by AWS Amplify.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Node.js", "GraphQL", "AWS"],
    imageUrl: dt2Img,
  },
  {
    title: "Puppy Buddy™",
    description:
      "Working ecommerce store built for a client. Built on Shopify.",
    tags: ["Shopify", "Ecommerce"],
    imageUrl: shopifyImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "JQuery",
  "React",
  "Next.js",
  "Node.js",
  "AWS",
  "Git",
  "Tailwind",
  "MongoDB",
  "Mongoose",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "REST",
  "SQL",
  "MySQL",
  "Sequelize",
  "Python",
  "Framer Motion",
  "Wordpress",
  "Progressive Web Apps",
] as const;