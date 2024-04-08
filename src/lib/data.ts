import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import Portfolio from "../../public/Portfolio.png"
import SudokuSolver from "../../public/SudokuSolver.png"
import WordleSolver from "../../public/WordleSolver.png"
import WordleSolver_Solved from "../../public/WordleSolver_Solved.png"

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
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const

export const projectsData = [
  {
    title: "SudokuSolver",
    description:
      "I built a Sudoku solver that can solve any Sudoku puzzle in a few seconds. It uses a backtracking algorithm to solve the puzzle. It can also automatically solve a New York Times Sudoku with Robocorp library.",
    tags: ["Python", "Algorithm", "Robocorp"],
    imageUrl: SudokuSolver,
  },
  {
    title: "WordleSolver",
    description:
      "I wanted to build an algorithm to solve Wordle as efficiently as possible. I implemented a text-based version that guesses most words in 3 tries.",
    tags: ["Scala", "Algorithm", "Hobbyproject"],
    imageUrl: WordleSolver,
  },
  {
    title: "Portfolio",
    description:
      "I built this portfolio using Next.js and Tailwind. I wanted to learn Front-End Development. I also wanted to show my projects and skills in a visually appealing way.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer"],
    imageUrl: Portfolio,
  },
] as const

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const