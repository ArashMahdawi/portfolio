export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Een volledig functionele webshop met gebruikersbeheer, winkelwagen en betalingsintegratie.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/images/project1.jpg",
    githubUrl: "https://github.com/jouw-username/project1",
    liveUrl: "https://project1.vercel.app"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Een productiviteitsapp voor het beheren van taken en projecten met real-time updates.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    image: "/images/project2.jpg",
    githubUrl: "https://github.com/jouw-username/project2"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Een responsive weather app met real-time data en 7-dagen voorspelling.",
    technologies: ["JavaScript", "API Integration", "CSS Grid"],
    image: "/images/project3.jpg",
    githubUrl: "https://github.com/jouw-username/project3"
  }
]
