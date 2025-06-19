export const projects: Project[] = [
  {
    id: 1,
    title: "CoachingBuddy",
    description: "Een webapplicatie voor Teamleiders om gesprekken van Agents te beoordelen en hun coachingsessies te beheren en bij te houden.",
    technologies: ["Vue.js", "PHP", "PostgreSQL", "JavaScript", "jQuery", "JSON", "HTML", "CSS", "Bootstrap"],
    image: "/images/projects/cb1.jpg", // Alleen CoachingBuddy heeft image
    screenshots: [
      "/images/projects/cb1.jpg",
      "/images/projects/cb2.jpg",
      "/images/projects/cb3.jpg",
      "/images/projects/cb4.jpg",
      "/images/projects/cb5.jpg",
      "/images/projects/cb6.jpg",
      "/images/projects/cb7.jpg",
      "/images/projects/cb8.jpg",
      "/images/projects/cb9.jpg"
    ],
    liveUrl: "https://project1.vercel.app",
  },
  {
    id: 2,
    title: "Portal Analytics",
    description: "Een dashboard voor het monitoren van de besteden tijd van gebruikers per module om deze te analyseren.",
    technologies: ["Vue.js", "PHP", "PostgreSQL", "JavaScript", "Nodejs", "HTML", "CSS", "Bootstrap"],
    // image: "/images/project2.jpg", // Weggehaald - toont nu titel
    liveUrl: "https://project2.vercel.app"
  },
  {
    id: 3,
    title: "Avatar Module",
    description: "Een module waarin gebruikers hun avatar kunnen aanpassen en deze in hun profiel kunnen opslaan.",
    technologies: ["JavaScript", "JSON", "PHP", "PostgreSQL", "HTML", "CSS", "Bootstrap"],
    // image: "/images/project3.jpg", // Weggehaald - toont nu titel
    githubUrl: "https://github.com/jouw-username/project3",
    liveUrl: "https://project3.vercel.app"
  }
]
