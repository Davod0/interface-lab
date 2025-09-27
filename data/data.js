const tabData = [
  {
    title: "Services",
    id: "services",
    content: (
      <ul className="list-disc pl-2">
      <li>Web Development</li>
      <li>Mobile Development</li>
      <li>Backend & API Development</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>.NET</li>
        <li>React</li>
        <li>React Native</li>
        <li>Next.js</li>
        <li>C#</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>MySQL</li>
        <li>Firebase</li>
      </ul>
    ),
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>AWS Cloud Practitioner</li>
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   ),
  // },
];

export { tabData };

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "This is my personal portfolio website, built using Next.js, JavaScript and Tailwind CSS. It is fully responsive and hosted on Netlify.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Davod0/interface-lab",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Pointly Web Application",
    description: "Pointly is a web application designed to support pointing sessions for estimating the time required for different tickets, as well as retrospective meetings during development sprints. The application is built with Next.js, TypeScript and Tailwind CSS, and its backend is powered by Firebase. The application is hosted on Google Cloud Run.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Davod0/pointly",
    previewUrl: "https://pointly-357808137221.europe-north1.run.app",
  },
  {
    id: 3,
    title: "Cinema Time",
    description: `
    Cinema-Time is a modular web application where I demonstrate my skills
    in understanding and implementing a full-stack solution with .NET technologies.
    The web application has a Blazor frontend, an ASP.NET Core Web API
    and a SQLite database, structured using clean architecture with separate projects for Core logic,
    Infrastructure, API and testing. It supports unit and integration tests for reliability and includes
    a Next.js admin interface for managing salons, reservations, movies, and screenings.
    The application allows users to view upcoming movies and reserve seats for showings.
    `,
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Davod0/cinema-time",
    previewUrl: "/",
  },
  {
    id: 4,
    title: `Household Management Mobile Application`,
    description: `This is a household management mobile application project built with React Native, Expo and TypeScript, using Firebase as the backend.
    Users can create accounts, join or manage households and track chores. Owners handle join requests and assign tasks,
    while members can complete and monitor them.
    Each user has a profile with a unique avatar, theme settings and can switch between households.
    The app includes a daily chore overview and weekly/monthly statistics on tasks completed by each member.
    This app is not currently deployed.`,
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Davod0/App-Development-Household-Application",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

export { projectsData };