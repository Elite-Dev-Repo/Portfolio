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
import akant from "./assets/akant.png";
import lemur from "./assets/lemur.png";
import paysctackfordja from "./assets/paystackfordja.png";
import driphvn from "./assets/driphvn.png";
import amber from "./assets/amber.png";
import greenarchive from "./assets/greenarchive.png";

const works = [
  {
    id: "green-archive",
    image: greenarchive,
    title: "Green Archive",
    description:
      "An AI-powered Nigerian history and current affairs quiz API — backend infrastructure for quiz apps, CBT platforms, schools, and educational games, serving WAEC/JAMB-style questions with daily AI-generated content.",
    techs: ["React.js", "TypeScript", "Django", "PostgreSQL", "DRF", "Google O-auth"],
    link: "https://naij-archive.vercel.app/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo/Naij-Archive",
    howIMadeIt:
      "I built GreenArchive to solve the lack of structured, developer-friendly access to Nigerian educational content. The frontend is built with React and TypeScript, providing an interactive API explorer and documentation interface. On the backend, I used Django and Django REST Framework to expose clean REST endpoints for question retrieval, category filtering, and AI-assisted question generation. PostgreSQL handles the question bank and metadata storage, while Google OAuth covers developer authentication. The biggest challenge was designing a schema flexible enough to support WAEC/JAMB past questions, AI-generated content, and daily current affairs — all under a single unified API.",
  },
  {
    id: "paystack-for-django",
    image: paysctackfordja,
        title: "Paystack for Django",
        description:
          "The unofficial, definitive guide to integrating Paystack with Django and Django REST Framework. This project bridges the gap in official documentation, providing developers with structured implementation patterns for transactions, subscriptions, and secure webhook handling.",
        techs: ["React.js", "Django", "DRF", "Paystack"],
        link: "https://paystack-for-django.vercel.app/",
        label: "Front End",
        git: "https://github.com/Elite-Dev-Repo/PayStack-Django-Docs",
        howIMadeIt:
          "I built this project because Paystack currently lacks dedicated, in-depth documentation specifically for the Django ecosystem. As a full-stack developer, I saw many peers struggling with the same integration hurdles, so I created a centralized resource. The documentation is built as a high-performance React SPA, featuring a custom-built, responsive sidebar navigation and a robust documentation engine. I focused on technical clarity, implementing a clean service-layer architecture for the code examples to ensure they are production-ready and easily adaptable for other developers.",
      },
  {
    id: "lemur",
    image: lemur,
    title: "Lemur",
    description:
      "A Reddit-style forum platform for tech communities, enabling users to share posts, engage in discussions, like content, and participate in community-driven conversations. Built with a focus on performance, scalability, and real-time interaction patterns.",
    techs: ["React.js", "Django", "DRF", "PostgreSQL"],
    link: "https://lemur-devs.vercel.app/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo/LemurFrontend",
    howIMadeIt:
      "I designed and built Lemur as a full-stack forum platform to explore scalable backend architecture and responsive frontend systems. On the backend, I implemented a Django REST API with optimized query handling using select_related and annotations to efficiently manage posts, likes, and comments. On the frontend, I built a React SPA with a modular architecture, custom hooks for state management, and an optimized API layer using Axios with JWT authentication. The system is structured to support real-time features and scale as a community-driven platform.",
  },
  {
    id: "amber",
    image: amber,
    title: "Amber",
    description:
      "A modern frontend landing page for an AI-assisted ticket management product. Amber presents a polished workflow for organizing tickets, collaborating with teams, tracking progress, and turning event or project requests into clear, manageable systems.",
    techs: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://amber-saas.vercel.app/",
    label: "Frontend",
    git: "https://github.com/Elite-Dev-Repo/amber",
    howIMadeIt:
      "I built Amber as a frontend-focused product experience using React, TypeScript, Tailwind CSS, and Framer Motion. I structured the interface into reusable sections for the hero, workflow cards, about content, process steps, FAQs, and footer, keeping the messaging centered on ticket organization, collaboration, automation, and tracking. I used responsive layouts, animated section reveals, hover interactions, custom illustrations, and consistent visual patterns to make the page feel like a real SaaS product while staying smooth across desktop and mobile screens.",
  },

  {
    id: "akant",
    image: akant,
    title: "Akant",
    description:
      "A full-stack expense splitting SaaS that makes shared finances effortless. Groups can track shared expenses, automatically calculate who owes who using a debt simplification algorithm, pay via bank transfer, and send payment reminders — all in one place.",
    techs: [
      "React.js",
      "Django",
      "PostgreSQL",
      "DRF",
      "TailwindCSS",

      "Paystack",
      "Resend",
    ],
    link: "https://akant.vercel.app/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo",
    howIMadeIt:
      "Built a Django REST Framework backend with a clean service layer separating business logic from views. Implemented a greedy min-cash-flow algorithm to simplify group debts, Django signals to auto-create expense splits, and JWT authentication with silent token refresh. The React frontend uses React Query for server state, Zustand for global auth state, and Zod with React Hook Form for validation. Integrated Paystack for subscription payments and Resend for transactional invite and reminder emails.",
  },
  {
    id: "learnstack",
    image: learnstack,
    title: "LearnStack",
    description:
      "A community-driven platform for discovering and sharing the most helpful YouTube tutorials. Users can explore curated content, bookmark valuable videos, and contribute tutorials to help others learn faster.",
    techs: ["React.js", "TailwindCSS", "Django", "SQLite"],
    link: "https://learnstackr.vercel.app/",
    label: "Full Stack",
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
    id: "driphvn",
    image: driphvn,
    title: "Driphvn",
    description:
      "A luxury streetwear landing page built for DRIPHVN — a Nigerian fashion brand fusing high fashion with street culture. Features editorial-style sections, smooth Framer Motion animations, and a bold black-and-red aesthetic.",
    techs: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    link: "https://driphvn-brand.vercel.app/",
    label: "Front End",
    git: "https://github.com/Elite-Dev-Repo/driphvn.git",
    howIMadeIt:
      "Built with Vite + React + TypeScript for a fast, modern setup. Used Framer Motion for scroll-triggered animations and staggered reveals. Designed with a high-contrast black and red editorial aesthetic using TailwindCSS, with custom typography via Google Fonts (Bebas Neue, Cormorant Garamond, DM Sans).",
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
  /* {
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
  },*/
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
      "Developed using a component first approach. I used TailwindCSS to build a dark-themed, sleek UI that mirrors the complexity of automation tools while keeping the user journey simple and conversion-focused.",
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
  /*{
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
  },*/
  // {
  //   id: "basic-recipes",
  //   image: recipe,
  //   title: "Basic Recipes",
  //   description:
  //     "A dynamic front-end application built to fetch and display culinary data through a seamless interface.",
  //   techs: ["React .js", "TailwindCSS", "JavaScript"],
  //   link: "https://basicrecipe.netlify.app/",
  //   label: "Front End",
  //   git: "https://github.com/Elite-Dev-Repo/Recipe.git",
  //   howIMadeIt:
  //     "Integrated a third-party recipe API to fetch real-time data. I focused on building an efficient search and filter system on the frontend to allow users to find meals by ingredients or diet.",
  // },
];

export default works;
