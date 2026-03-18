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
      "The core challenge was organizing a vast library of external video content into a coherent, searchable database. I built a Django REST Framework backend to handle the CRUD operations for tutorials and user bookmarks. On the frontend, I utilized React's state management to provide real-time filtering without additional API hits. I chose TailwindCSS to build a custom 'grid-card' layout that scales perfectly from mobile to ultra-wide displays, ensuring the content remains the hero of the page.",
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
      "For Vesta, the goal was to communicate 'trust' and 'innovation' through UI. I implemented a sophisticated glassmorphism effect using Tailwind's backdrop-blur utilities combined with custom linear gradients. I focused heavily on asset optimization, ensuring that high-resolution Web3-themed graphics didn't impact the initial LCP (Largest Contentful Paint). The navigation was built to be purely functional yet sleek, guiding users toward protocol connection points with subtle micro-interactions.",
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
      "Managing job applications requires strict data integrity. I designed a PostgreSQL schema that tracks application stages, company details, and deadlines. The Django backend provides a secure API with JWT authentication to protect user data. For the UI, I built a Kanban-style dashboard using Tailwind's flexbox and grid systems, allowing users to visualize their progress. I also integrated custom status-filtering logic to help users prioritize applications that are 'stalled' or 'pending.'",
  },
  {
    id: "unsent",
    image: unsent,
    title: "Unsent.app",
    description:
      "A smart communication assistant that helps users draft the perfect replies to difficult or important messages. By leveraging AI-driven insights, it turns complex emotions into clear, thoughtful responses, ensuring you never leave the important things 'unsent'.",
    techs: ["React .js", "TailwindCSS", "Supabase"],
    link: "https://unsent-ai.vercel.app/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo/Unsent.git",
    howIMadeIt:
      "I leveraged Supabase for rapid backend deployment, focusing on its built-in Auth and Real-time database to manage user message drafts. The frontend architecture was designed around a clean 'focus-mode' editor, built with TailwindCSS to eliminate distractions. I spent significant time fine-tuning the prompt-engineering pipeline to ensure the AI output remained empathetic and human-like, bridging the gap between raw data and genuine communication.",
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
      "Real-time interactivity was the priority here. I utilized Supabase's real-time subscriptions to push new 'rants' to all connected users instantly without requiring a page refresh. I implemented TypeScript to strictly type the data coming from the database, preventing runtime errors in the feed. The UI utilizes a staggered grid layout with TailwindCSS to handle varied text lengths, giving the platform a modern, 'social-hub' aesthetic.",
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
      "This project was an exercise in high-end UI/UX. I used ShadcnUI as a base for accessible primitives like modals and carousels, but heavily customized them with Tailwind to fit the foundation's branding. To create an immersive experience, I integrated Framer Motion for scroll-triggered animations and page transitions. I also built a custom image optimization pipeline to ensure the high-resolution educational gallery loads instantly on mobile networks.",
  },
];

export default works;
