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
    title: "Master's Degree in Computer Science",
    location: "Otaniemi, Espoo",
    description:
      "I'm currently doing my Master's Degree in Computer Science at Aalto University. I also did a minor in Industrial Engineering and Management.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2026",
  },
  {
    title: "Software Developer Intern",
    location: "Bonwal Oy",
    description:
      "I'm currently working as a Software Developer Intern at Bonwal Oy. I'm working with React Native, TypeScript and Robot Framework and Jest for Software testing.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
  {
    title: "Course Assistant",
    location: "Otaniemi, Espoo",
    description:
      "I'm currently working as a course assistant for the course CS-A1120 Programming 2 for the second time.",
    icon: React.createElement(FaLaptopCode),
    date: "2024",
  },
  {
    title: "Course Assistant",
    location: "Otaniemi, Espoo",
    description:
      "I worked as a course assistant for the course CS-A1120 Programming 2. I helped students with their Scala programming assignments and other technical problems they might have had.",
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
  "React Native",
  "Next.js",
  "Node.js",
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