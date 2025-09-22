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
    title: "Next.js Portfolio Website",
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
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
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