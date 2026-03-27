import tabbiebites from "./assets/tabbiebites.png";
import enigma from "./assets/enigma.png";
import rantsarena from "./assets/rantsarena.png";
import dashboard from "./assets/dashboard.png";
import beadchef from "./assets/beadchef.png";
import recipe from "./assets/recipe.png";
import vesta from "./assets/vesta.png";
import amanti from "./assets/amanti.png";
import soda from "./assets/soda.png";
import unsent from "./assets/unsent.png";
import velocargo from "./assets/velocargo.png";
import child from "./assets/tchild.png";
import offertrail from "./assets/offertrail.png";
import learnstack from "./assets/learnstack.png";

const works = [
  {
    id: "learnstack",
    image: learnstack,
    title: "LearnStack",
    description:
      "A community-driven platform for discovering and sharing the most helpful YouTube tutorials. Users can explore curated content, bookmark valuable videos, and contribute tutorials to help others learn faster.",
    techs: ["React.js", "TailwindCSS", "Django", "SQLite"],
    link: "https://learnstackr.vercel.app/",
    label: "FullStack",
    git: "https://github.com/Elite-Dev-Repo/",
    howIMadeIt:
      "Built with a Django REST Framework backend to manage the video repository and a React frontend for smooth discovery. I implemented a custom filtering logic to categorize tutorials and used SQLite for a lightweight, efficient data store during the initial rollout.",
  },
  {
    id: "vesta",
    image: vesta,
    title: "Vesta",
    description:
      "A forward-thinking Web3 interface designed for the next generation of decentralized finance. It features a high-performance landing page with a focus on connecting users to on-chain protocols through a secure, intuitive, and modern user experience.",
    techs: ["React .js", "TailwindCSS", "JavaScript"],
    link: "https://vesta.pxxl.click/",
    label: "Front End",
    git: "https://github.com/Elite-Dev-Repo/Vesta.git",
    howIMadeIt:
      "Focused on a 'glassmorphism' aesthetic using TailwindCSS. I leveraged high-performance React components to ensure smooth scrolling and optimized image assets to maintain a premium, high-tech feel without compromising load times.",
  },
  {
    id: "offertrail",
    image: offertrail,
    title: "OfferTrail",
    description:
      "A comprehensive job application tracker designed to streamline the career search process. It features a robust Django REST API, real-time status filtering, and a modern dashboard built with TailwindCSS to help developers manage their professional opportunities efficiently.",
    techs: ["React.js", "TailwindCSS", "Django", "PostgreSQL"],
    link: "https://offer-trail.vercel.app/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo",
    howIMadeIt:
      "I designed a relational database schema in PostgreSQL to handle multi-user application tracking. The backend uses Django's built-in authentication, while the frontend utilizes a modular dashboard architecture for real-time status updates.",
  },
  {
    id: "unsent-app",
    image: unsent,
    title: "Unsent.app",
    description:
      "A smart communication assistant that helps users draft the perfect replies to difficult or important messages. By leveraging AI-driven insights, it turns complex emotions into clear, thoughtful responses, ensuring you never leave the important things 'unsent'.",
    techs: ["React .js", "TailwindCSS", "Supabase"],
    link: "https://unsent-ai.vercel.app/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo/Unsent.git",
    howIMadeIt:
      "Integrated Supabase for rapid backend deployment, handling user sessions and message history. I focused heavily on the prompt engineering interface to ensure the UI felt intuitive for users seeking emotional clarity.",
  },
  {
    id: "enigma",
    image: enigma,
    title: "Enigma | the action agent.",
    description:
      "An AI-driven automation interface designed to streamline complex workflows. It features a high-performance landing page with interactive elements focused on conversion and user action.",
    techs: ["React .js", "TailwindCSS", "JavaScript"],
    link: "https://www.enigma-agent.tech/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo/Enigma.git",
    howIMadeIt:
      "Developed using a component-first approach. I used TailwindCSS to build a dark-themed, sleek UI that mirrors the complexity of automation tools while keeping the user journey simple and conversion-focused.",
  },
  {
    id: "soda-sphere",
    image: soda,
    title: "Soda Sphere",
    description:
      "A vibrant, immersive landing page for a fictional beverage brand. This project focuses on high-impact visual storytelling, utilizing bold typography and a crisp, refreshing UI to showcase product features and brand identity through a modern digital lens.",
    techs: ["React .js", "TailwindCSS", "JavaScript"],
    link: "https://soda-sphere.vercel.app/",
    label: "Front End",
    git: "https://github.com/Elite-Dev-Repo/soda-sphere.git",
    howIMadeIt:
      "I pushed the boundaries of Tailwind's utility classes to create complex color gradients and layout shifts that respond to scroll depth, creating a refreshing, brand-aligned experience.",
  },
  {
    id: "amanti",
    image: amanti,
    title: "Amanti",
    description:
      "A creative digital tool for generating heartfelt Valentine’s messages. This project features a responsive, mobile-first design that prioritizes ease of use and instant sharing, making it simple for anyone to create custom romantic notes on the fly.",
    techs: ["React .js", "TailwindCSS", "JavaScript"],
    link: "https://amanti-ai.vercel.app/",
    label: "Front End",
    git: "https://github.com/Elite-Dev-Repo/Amanti.git",
    howIMadeIt:
      "Implemented a lightweight state management system to handle message generation. The UI was built with a mobile-first philosophy to ensure users could generate and share messages instantly from any device.",
  },
  {
    id: "the-better-child",
    image: child,
    title: "The Better Child",
    description:
      "A sophisticated educational foundation platform built with a focus on immersive UX. It features complex Framer Motion orchestrations, a custom-built responsive navigation system, and a high-performance image gallery, all styled with a mobile-first approach using TailwindCSS.",
    techs: ["React.js", "TailwindCSS", "ShadcnUI"],
    link: "https://thebetterchild.vercel.app/",
    label: "Front End",
    git: "https://github.com/Elite-Dev-Repo/thebetterchild.git",
    howIMadeIt:
      "Utilized ShadcnUI for accessible, pre-built components and customized them heavily to match the brand. I used Framer Motion to create meaningful transitions that guide the user through the foundation's mission story.",
  },
  {
    id: "velocargo",
    image: velocargo,
    title: "VeloCargo",
    description:
      "A high-performance logistics platform designed for seamless supply chain management. Features real-time tracking, mobile-responsive, and optimized delivery workflows.",
    techs: ["React.js", "TailwindCSS", "JavaScript"],
    link: "https://velo-cargo.vercel.app/",
    label: "Front End",
    git: "https://github.com/Elite-Dev-Repo/VeloCargo",
    howIMadeIt:
      "Focused on information architecture. I built a clean, grid-based layout using Tailwind to ensure high-density logistics data remains readable and actionable for fleet managers.",
  },
  {
    id: "beadchef",
    image: beadchef,
    title: "Beadchef",
    description:
      "A modern storefront interface for an artisanal bead brand. Built with a mobile-first approach, it features clean typography and smooth transitions to provide a premium shopping feel.",
    techs: ["React .js", "TailwindCSS", "JavaScript"],
    link: "https://beadchef.vercel.app/",
    label: "Front End",
    git: "https://github.com/Elite-Dev-Repo/Beady.git",
    howIMadeIt:
      "Designed the UI to spotlight product imagery. I used custom CSS transitions and Tailwind for a minimalist aesthetic that emphasizes the craftsmanship of the artisanal products.",
  },
  {
    id: "tabbiebites",
    image: tabbiebites,
    title: "Tabbiebites",
    description:
      "A sleek, mobile-friendly landing page for a boutique bakery. Designed to showcase culinary products with high-fidelity imagery and a focus on essential decision-making details.",
    techs: ["React .js", "TailwindCSS", "JavaScript"],
    link: "https://tabbiebites.pxxl.click/",
    label: "Front End",
    git: "https://github.com/Elite-Dev-Repo/TabbieBites.git",
    howIMadeIt:
      "Crafted a layout that prioritizes visual appetite. I optimized asset loading to ensure high-fidelity food photography doesn't slow down the mobile user experience.",
  },
  {
    id: "enigma-analytics",
    image: dashboard,
    title: "Enigma Analytics",
    description:
      "A high-performance analytics interface designed for data-driven decision-making. This dashboard features a responsive layout and modular component architecture, ensuring seamless data visualization across all device types while maintaining strict type safety.",
    techs: ["React .js", "TailwindCSS", "Typescript"],
    link: "https://enigma-analytics.pxxl.click/",
    label: "Front End",
    git: "https://github.com/Elite-Dev-Repo/EnigmaDashboard.git",
    howIMadeIt:
      "Developed with TypeScript to ensure type safety across complex data visualizations. I built a modular component library using Tailwind to allow for flexible dashboard layouts.",
  },
  {
    id: "rantsarena",
    image: rantsarena,
    title: "Rantsarena",
    description:
      "A dynamic social platform where users can share thoughts in real-time. Built with Supabase for instant data synchronization and secure authentication across a seamless UI.",
    techs: ["TypeScript", "TailwindCSS", "Supabase"],
    link: "https://rantsarena.pxxl.click/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo/Rants.git",
    howIMadeIt:
      "Leveraged Supabase real-time subscriptions to create a live-feed experience. I used TypeScript for robust state handling and Tailwind for a fast-loading, social-media-ready interface.",
  },
  {
    id: "basic-recipes",
    image: recipe,
    title: "Basic Recipes",
    description:
      "A dynamic front-end application built to fetch and display culinary data through a seamless interface.",
    techs: ["React .js", "TailwindCSS", "JavaScript"],
    link: "https://basicrecipe.netlify.app/",
    label: "Front End",
    git: "https://github.com/Elite-Dev-Repo/Recipe.git",
    howIMadeIt:
      "Integrated a third-party recipe API to fetch real-time data. I focused on building an efficient search and filter system on the frontend to allow users to find meals by ingredients or diet.",
  },
];

export default works;
