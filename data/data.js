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
    title: "Portfolio",
    description: "This is my personal portfolio website, built using Next.js, JavaScript and Tailwind CSS. It is fully responsive and hosted on Netlify.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Davod0/interface-lab",
    previewUrl: "https://davodnikoyi.com",
  },
  {
    id: 2,
    title: "Pointly",
    description: "Pointly is a web application designed to support pointing sessions for estimating the time required for different tickets, as well as retrospective meetings during development sprints. The application is built with Next.js, TypeScript and Tailwind CSS, and its backend is powered by Firebase. The application is hosted on Google Cloud Run.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Davod0/pointly",
    previewUrl: "https://pointly-357808137221.europe-north1.run.app",
  },
  {
    id: 3,
    title: "Snap Store",
    description: `
    Snap Store is a web application built with Next.js, TypeScript and MUI. Prisma is used for data modeling
    and MongoDB serves as the database provider.
    Snap store enables users to browse and order electronic products. This project was created purely
    for practice purposes and is not a real online store. A live version of the application is hosted on Vercel.
    `,
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Davod0/snap-store",
    previewUrl: "https://snap-store-eta.vercel.app",
  },
  {
    id: 4,
    title: `Household Management`,
    description: `This is a household management mobile application project built with React Native, Expo and TypeScript, using Firebase as the backend.
    Users can create accounts, join or manage households and track chores. Owners handle join requests and assign tasks,
    while members can complete and monitor them.
    Each user has a profile with a unique avatar, theme settings and can switch between households.
    The app includes a daily chore overview and weekly/monthly statistics on tasks completed by each member.`,
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Davod0/App-Development-Household-Application",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Renting Fire Extinguishers",
    description: `
    This project is a web application developed with Vue.js and Nuxt.js using JavaScript.
    This application simulates the process of renting fire extinguishers. It enables users to browse available
    products, view detailed information and rent each extinguisher for a period. The project was
    created as a learning exercise to practice working with the Vue framework and to explore the capabilities of Nuxt.js.
    This application is hosted on Netlify.`,
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Davod0/Nuxt-Vue-Client-Application",
    previewUrl: "https://fireextinguisher.netlify.app",
  },
  {
    id: 6,
    title: "Cinema Time",
    description: `
    Cinema-Time is a modular web application where I demonstrate my skills
    in understanding and implementing a full-stack solution with .NET technologies.
    The web application has a Blazor frontend, an ASP.NET Core Web API
    and a SQLite database, structured using clean architecture with separate projects for Core logic,
    Infrastructure, API and testing. It supports unit and integration tests for reliability and includes
    a Next.js admin interface for managing salons, reservations, movies, and screenings.
    The application allows users to view upcoming movies and reserve seats for showings.`,
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Davod0/cinema-time",
    previewUrl: "",
  },
];

export { projectsData };
