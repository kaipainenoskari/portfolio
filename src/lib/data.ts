import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaLaptopCode } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import Portfolio from "../../public/Portfolio.png"
import SudokuSolver from "../../public/SudokuSolver.png"
import WordleSolver from "../../public/WordleSolver.png"

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
] as const;

export const experiencesData = [
  {
    title: "Master's Degree in Software and Service Engineering",
    location: "Otaniemi, Espoo",
    description:
      "Currently studying for my master's degree, majoring in Software and Service Engineering. My minor is in Machine Learning, Data Science and Artificial Intelligence.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - 2026",
  },
  {
    title: "Bachelor's Degree in Computer Science",
    location: "Otaniemi, Espoo",
    description:
      "Graduated with a bachelor's degree in 2024. Minored in Industrial Engineering and Management.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
  {
    title: "Software Developer",
    location: "Bonwal Oy",
    description:
      "I'm currently working as a Software Developer at Bonwal Oy. I'm working with React Native, TypeScript, Robot Framework and Jest.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
  {
    title: "Course Assistant",
    location: "Otaniemi, Espoo",
    description:
      "Serving my second year as a Course Assistant for CS-A1120 - Programming 2, continuing to support students and assist in course delivery.",
    icon: React.createElement(FaLaptopCode),
    date: "2024",
  },
  {
    title: "Course Assistant",
    location: "Otaniemi, Espoo",
    description:
      "Course Assistant for CS-A1120 - Programming 2, where I facilitated English language workshops to support students with Scala programming exercises and address various technical challenges.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
] as const

export const projectsData = [
  {
    title: "SudokuSolver",
    description:
      "I built a Sudoku solver that can solve any Sudoku puzzle in a few seconds. It uses a backtracking algorithm to solve the puzzle. It can also automatically solve a New York Times Sudoku with Robocorp library.",
    tags: ["Python", "Algorithm", "Robocorp"],
    imageUrl: SudokuSolver,
    link: "https://github.com/kaipainenoskari/sudokuSolver",
  },
  {
    title: "WordleSolver",
    description:
      "I wanted to build an algorithm to solve Wordle as efficiently as possible. I implemented a text-based version that guesses most words in 3 tries.",
    tags: ["Scala", "Algorithm", "Hobbyproject"],
    imageUrl: WordleSolver,
    link: "https://github.com/kaipainenoskari/wordleSolverRefactored",
  },
  {
    title: "Portfolio",
    description:
      "I built this portfolio using Next.js and Tailwind. I wanted to learn Front-End Development. I also wanted to show my projects and skills in a visually appealing way.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer"],
    imageUrl: Portfolio,
    link: "https://github.com/kaipainenoskari/portfolio",
  },
] as const

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "DevOps",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "Scala",
  "Robot FrameWork",
  "Jest"
] as const