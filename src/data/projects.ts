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
    title: "CoachingBuddy",
    description: "Een webapplicatie voor Teamleiders om gesprekken van Agents te beoordelen en hun coachingsessies te beheren en bij te houden.",
    technologies: ["Vue.js", "PHP", "PostgreSQL", "JavaScript", "jQuery", "JSON", "HTML", "CSS", "Bootstrap"],
    image: "/images/project1.jpg",
    // githubUrl: "https://github.com/jouw-username/project1",
    liveUrl: "https://project1.vercel.app",
  },
  {
    id: 2,
    title: "Portal Analytics",
    description: "Een dashboard voor het monitoren van de besteden tijd van gebruikers per module om deze te analyseren.",
    technologies: ["Vue.js", "PHP", "PostgreSQL", "JavaScript", "Nodejs", "HTML", "CSS", "Bootstrap"],
    image: "/images/project2.jpg",
    // githubUrl: "https://github.com/jouw-username/project2",
    liveUrl: "https://project2.vercel.app"
  },
  {
    id: 3,
    title: "Avatar Module",
    description: "Een module waarin gebruikers hun avatar kunnen aanpassen en deze in hun profiel kunnen opslaan.",
    technologies: ["JavaScript", "JSON", "PHP", "PostgreSQL", "HTML", "CSS", "Bootstrap"],
    image: "/images/project3.jpg",
    githubUrl: "https://github.com/jouw-username/project3",
    liveUrl: "https://project3.vercel.app"
  }
]
