import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import workandchillImg from "@/public/WORKANDCHILL-LOGO.png";
import agPartyImg from "@/public/AG-Party.png";
import egtImg from "@/public/epicgaminglogo copy.png";

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
    title: "Engineering Associate",
    location: "Charlotte, NC",
    description:
      "Full-stack C#/.NET developer at Wells Fargo.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
  {
    title: "IT Support Specialist",
    location: "Charlotte, NC",
    description:
      "Part-time, on-call position as IT support at Bank of America Stadium (Carolina Panthers) and Specturm Center (Charlotte Hornets)",
    icon: React.createElement(FaReact),
    date: "2023 - present",
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
    title: "Graduated bootcamp",
    location: "Berkeley, CA",
    description:
      "A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Node.js, MySQL, MongoDB, Express, GraphQL, and ReactJS",
    icon: React.createElement(LuGraduationCap),
    date: "November 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Work and Chill",
    url:"https://workandchill.io/",
    description:
      "Workplace Entertainment Platform where companies browse and order virtual experiences for employees.",
    tags: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Stripe API"],
    imageUrl: workandchillImg,
  },
  {
    title: "AG Party Rentals",
    url:"https://agpartyrentalsllc.com/",
    description:
      "Booking website for a small bounce house rental business. Booking capability with admin dashboard for inventory management.",
    tags: ["React", "TypeScript", "Node.js", "Tailwind"],
    imageUrl: agPartyImg,
  },
  {
    title: "Epic Gaming Truck",
    url:"https://epicgamingtruck.com/",
    description:
      "Website for a video game truck business. Built using Wordpress.",
    tags: ["HTML", "CSS", "Wordpress"],
    imageUrl: egtImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "C#/.NET",
  "AWS",
  "Azure",
  "Git",
  "Github Actions",
  "Github Copilot",
  "Jest",
  "MongoDB",
  "Express",
  "REST",
  "Agile",
  "SQL",
  "Python",
  "Wordpress",
  "SEO",
  "Progressive Web Apps",
  "Replit"
] as const;