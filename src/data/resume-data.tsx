import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Tamal Sen",
  initials: "TS",
  location: "Chattogram, Bangladesh",
  locationLink: "https://www.google.com/maps/place/Chattogram",
  about:
    "Software Engineer, Frontend & App Developer",
  summary:
    "Prolific software engineer following agile methodologies with a passion for React with over five years of experience in 160+ projects with 60+ clients and digital agencies in the U.S., Canada and Europe.",
  avatarUrl: "https://avatars.githubusercontent.com/u/71141953?v=4",
  personalWebsiteUrl: "https://tamalsen.dev",
  contact: {
    email: "hello@tamalsen.dev",
    tel: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/tamal-sen/",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sentamal/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Khulna University of Engineering & Technology",
      degree: "Bachelor's Degree in Building Engineering & Construction Management",
      start: "2015",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Saimon Global Ltd",
      link: "https://saimonglobal.com",
      badges: ["Full-time"],
      title: "Frontend Developer → Senior Lead Software Developer",
      start: "2019",
      end: "Present",
      description:
        "Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK.",
    },
    {
      company: "influenceTHIS Canada",
      link: "https://influencethis.ca/",
      badges: ["Remote", "Part-time"],
      title: "Web Developer",
      start: "2018",
      end: "2019",
      description:
        "Developed the UI and UX eco-system for a conference event platform using modular component structures with JS, SCSS, Gulp on Node.",
    },
    {
      company: "Palimor Design Studios",
      link: "https://influencethis.ca/",
      badges: ["Remote", "Part-time"],
      title: "Web Developer",
      start: "2018",
      end: "2019",
      description:
        "Managed 25+ web projects, implementing server deployment panel to reduce server management costs by 27%. Efficient management yielded cost and time savings, doubling client engagement through precise UX implementation over a 6-month period.",
    },
    {
      company: "Upwork",
      link: "https://tamalsen.dev/go/upwork",
      badges: ["Freelance"],
      title: "Top Rated Plus Web Developer",
      start: "2017",
      end: "Present",
      description: "Top-Rated Plus developer on Upwork specializing in Front-end (React, WordPress) technologies with a 100% job success rate and client satisfaction rating (based on 150+ Jobs, 3500+ hours).",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Dart",
    "React/Next.js",
    "Node.js",
    "Flutter",
    "GraphQL",
  ],
  projects: [
    {
      title: "Tryotel - App",
      techStack: [
        "Flutter",
        "Dart",
        "GraphQL",
      ],
      description: "A cross-platform app solution for travel booking management",
      link: {
        label: "link to tryotel app",
        href: "https://tryo.tel",
      },
    },
    {
      title: "Tryotel - Web",
      techStack: ["TypeScript", "Next.js", "GraphQL"],
      description:
        "Same travel booking solution on your web browser!",
      link: {
        label: "tryotel.com",
        href: "https://tryotel.com/",
      },
    },
    {
      title: "FlightLocal",
      techStack: ["React", "GraphQL"],
      description:
        "B2B web solution for flight, visa, hotel booking & management",
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "AI Lab Granada",
      techStack: ["WordPress"],
      description:
        "Portfolio website for AI Lab Granada, A collaborative environment that democratizes artificial intelligence",
      link: {
        label: "ailabgranada.com",
        href: "https://ailabgranada.com/",
      },
    },
    {
      title: "Khora",
      techStack: ["WordPress", "AOS"],
      description:
        "Website for Khora - Urban Thinkers Consulting Firm",
      link: {
        label: "khoraurbanthinkers.es",
        href: "https://khoraurbanthinkers.es/en/home-en/",
      },
    },
    {
      title: "Kananaskis Nordic Spa",
      techStack: ["WordPress"],
      description: "The Kananaskis Nordic Spa is your refuge from the cadence of the modern world",
      link: {
        label: "knordicspa.com",
        href: "https://knordicspa.com",
      },
    },
  ],
} as const;
