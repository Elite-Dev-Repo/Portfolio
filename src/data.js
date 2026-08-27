import tabbiebites from "./assets/tabbiebites.png";
import vesta from "./assets/vesta.png";
import soda from "./assets/soda.png";
import child from "./assets/tchild.png";
import offertrail from "./assets/offertrail.png";
import learnstack from "./assets/learnstack.png";
import akant from "./assets/akant.png";
import lemur from "./assets/lemur.png";
import paysctackfordja from "./assets/paystackfordja.png";
import driphvn from "./assets/driphvn.png";
import amber from "./assets/amber.png";
import greenarchive from "./assets/greenarchive.png";
import square from "./assets/square.png";
import cortex from "./assets/cortex.png";
import voyant from "./assets/voyant.png";
import lexiq from "./assets/lexiq.png";
import pseudopay from "./assets/pseudopay.png";
import digitallair from "./assets/digitallair.png";
const works = [
  {
    id: "pseudopay",
    top: 0,
    image: pseudopay,
    title: "PseudoPay - Mock Payment Gateway for Developers",
    description:
      "A developer utility replicating a payment processor (like Paystack or Stripe) that lets merchants create currency wallets, generate API keys, initialize transactions, redirect customers to a hosted checkout, and receive payment notifications in real-time via webhooks.",
    techs: [
      "React.js",
      "Vite",
      "TailwindCSS",
      "Django",
      "DRF",
      "PostgreSQL",
      "Webhook",
      "Google OAuth",
    ],
    link: "https://pseudo-pay.vercel.app/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo/PseudoPayFrontend",
    howIMadeIt:
      "I built PseudoPay to solve the lack of mock payment API testing environments for developers building Django and React apps. The frontend is built on Vite, React 19, and Tailwind CSS v4, utilizing Lucide and Hugeicons. For authentication, I integrated Google OAuth and raw email registration secured with JWT access/refresh tokens. The backend is run on Django and Django REST Framework with a PostgreSQL database, exposing REST endpoints for merchant profiles, wallet management, and API key generation. A core highlight of the project is the transaction gateway: when a merchant initializes a transaction with their secret API key, they receive a checkout URL; when the mock checkout resolves, the database updates balances atomically and triggers an asynchronous webhook notifying the customer's endpoint. The biggest challenge was implementing secure, prefix-based API key validation (using SHA-256 hashes) and designing robust API rate limiters across different endpoint scopes.",
  },
  {
    id: "square",
    top: 0,
    image: square,
    title: "Square - The Nigerian Freelance Marketplace",
    description:
      "A full-stack freelance marketplace connecting Nigerian clients with verified artisans — plumbers, electricians, mechanics, carpenters, and AC technicians. Features job posting, artisan discovery, reviews, real-time chat, and Paystack-powered escrow payments for secure transactions.",
    techs: [
      "React.js",
      "TypeScript",
      "Django",
      "PostgreSQL",
      "DRF",
      "Paystack",
      "WebSocket",
      "Google OAuth",
    ],
    link: "https://square-marketplace.vercel.app/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo/square",
    howIMadeIt:
      "I built Square to solve the trust and verification gap in Nigeria's artisan economy. The frontend is built with React and TypeScript using Vite, with shadcn/ui components and Tailwind CSS for the design system. Framer-motion powers scroll-triggered animations throughout the landing page. For auth, I integrated Google OAuth alongside JWT token-based authentication with automatic refresh handling via axios interceptors. The backend runs on Django REST Framework with PostgreSQL. Key features include an escrow payment system backed by Paystack (with transaction initialization, verification, and dispute resolution), real-time messaging via Django Channels WebSockets, and role-based workflows for clients vs artisans. The biggest challenge was designing the escrow lifecycle — from pending funding through funded, in-progress, completed, and disputed states — ensuring both parties have clear confirmation steps before funds are released.",
  },
  {
    id: "digital-lair",
    top: 0,
    image: digitallair,
    title: "Digital Lair - Premium Digital Products Marketplace",
    description:
      "A premium e-commerce storefront for buying high-quality digital goods. It features a catalog with dynamic category filtering, paginated browsing, a persistent shopping cart, secure order placement, and user authentication in a sleek, modern UI.",
    techs: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Django",
      "DRF",
      "PostgreSQL",
      "Hugeicons",
    ],
    link: "https://digital-lair.vercel.app/", // Replace with the actual deployment link if necessary
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo/DigitalLairFrontend",
    howIMadeIt:
      "I built Digital Lair as a performant, high-end marketplace storefront. The frontend is powered by Next.js and Tailwind CSS (v4) with TypeScript for complete type safety. I designed a paginated product catalog with reactive category changes to ensure super-fast loading and dynamic filtering. The main challenges included constructing a responsive landing page layout containing featured alternating showcases (like Electronics and Logistics) with fluid zoom-hover animations, as well as fixing state synchronization for category filtering during pagination transitions.",
  },
  {
    id: "Cortex",
    top: 0,
    image: cortex,
    title: "Cortex - Mind Mapping Tool for Developers",
    description:
      "A project structure planner and visual workspace helper for developers. It enables teams to brainstorm ideas in seconds, break them down into granular features, and visually track developmental status and progress in a clean cards-based workflow.",
    techs: [
      "React.js",
      "Django",
      "Framer Motion",
      "DRF",
      "PostgreSQL",
      "Lucide Icons",
    ],
    link: "https://cortex-appio.vercel.app/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo/CortexFrontend",
    howIMadeIt:
      "I built Cortex to help developers seamlessly scaffold project ideas and establish clear plans. The frontend is powered by React and Tailwind CSS, leveraging Vite for lightning-fast bundling. Smooth UI transitions are handled by Framer Motion, and drag-and-drop functionality for managing feature task boards is powered by @dnd-kit/react. The biggest design challenge was resolving container positioning context bugs to make card stacks stick gracefully during page scroll, and constructing a responsive collapsible navbar.",
  },
  {
    id: "Lexiq - Vocabulary Building Quiz Application",
    top: 0,
    image: lexiq,
    title: "Lexiq - Vocabulary Building Quiz Application",
    description:
      "A real-time multiplayer vocabulary quiz application where players can create game rooms, choose custom word decks, and compete in fast-paced head-to-head word list challenges.",
    techs: [
      "React.js",
      "Tailwind CSS",
      "DRF",
      "Django",
      "Django Channels",
      "WebSockets",
      "Axios",
    ],
    link: "https://lexiq-appio.vercel.app/",
    label: "Fullstack",
    git: "https://github.com/Elite-Dev-Repo/LexiqFrontend",
    howIMadeIt:
      "I built Lexiq to make mastering advanced SAT, GRE, and literary-level vocabulary interactive and competitive. The development features a React and Tailwind CSS frontend powered by a Django backend. I implemented Django Channels and WebSockets to coordinate real-time lobbies, synchronize room status transitions, track quick-time player submissions, and broadcast immediate score updates. Backend services support JWT-authenticated rooms, customizable question countdowns, and modular vocabulary decks with multiple plausible distractors.",
  },
  {
    id: "Voyant",
    top: 0,
    image: voyant,
    title: "Voyant - Predict your Spotify Wrapped.",
    description:
      "An interactive Spotify Wrapped predictor that lets you guess and curate your top 5 artists, songs, or albums for the year, and generate a customized shareable card.",
    techs: [
      "React.js",
      "Tailwind CSS",
      "Vite",
      "Axios",
      "Canvas API",
      "RapidAPI",
    ],
    link: "https://voyant-not-clair.vercel.app/",
    label: "Frontend",
    git: "https://github.com/Elite-Dev-Repo/Voyant",
    howIMadeIt:
      "I built Voyant to let music lovers guess and visualize their Spotify Wrapped predictions. The frontend is built using React and styled with Tailwind CSS to offer a sleek, responsive interface. I integrated the Spotify Scraper API via RapidAPI using Axios to let users search for any artist, song, or album in real-time. Once the user curates their top 5 slots, the custom card is generated dynamically on the client-side using the HTML5 Canvas API, allowing them to download high-quality images of their predictions on their choice of custom-designed backgrounds.",
  },
  {
    id: "green-archive",
    top: 0,
    image: greenarchive,
    title: "Green Archive",
    description:
      "An AI-powered Nigerian history and current affairs quiz API — backend infrastructure for quiz apps, CBT platforms, schools, and educational games, serving WAEC/JAMB-style questions with daily AI-generated content.",
    techs: [
      "React.js",
      "TypeScript",
      "Django",
      "PostgreSQL",
      "DRF",
      "Google O-auth",
    ],
    link: "https://naij-archive.vercel.app/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo/Naij-Archive",
    howIMadeIt:
      "I built GreenArchive to solve the lack of structured, developer-friendly access to Nigerian educational content. The frontend is built with React and TypeScript, providing an interactive API explorer and documentation interface. On the backend, I used Django and Django REST Framework to expose clean REST endpoints for question retrieval, category filtering, and AI-assisted question generation. PostgreSQL handles the question bank and metadata storage, while Google OAuth covers developer authentication. The biggest challenge was designing a schema flexible enough to support WAEC/JAMB past questions, AI-generated content, and daily current affairs — all under a single unified API.",
  },
  {
    id: "paystack-for-django",
    top: 6,
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
    top: 12,
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
    top: 18,
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
    top: 24,
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
    top: 30,
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
    top: 36,
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
    top: 42,
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
    top: 48,
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
    top: 54,
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
    id: "soda-sphere",
    top: 66,
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
    top: 72,
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

  // {
  //   id: "velocargo",
  //   top: 84,
  //   image: velocargo,
  //   title: "VeloCargo",
  //   description:
  //     "A high-performance logistics platform designed for seamless supply chain management. Features real-time tracking, mobile-responsive, and optimized delivery workflows.",
  //   techs: ["React.js", "TailwindCSS", "JavaScript"],
  //   link: "https://velo-cargo.vercel.app/",
  //   label: "Front End",
  //   git: "https://github.com/Elite-Dev-Repo/VeloCargo",
  //   howIMadeIt:
  //     "Focused on information architecture. I built a clean, grid-based layout using Tailwind to ensure high-density logistics data remains readable and actionable for fleet managers.",
  // },

  // {
  //   id: "enigma-analytics",
  //   top: 96,
  //   image: dashboard,
  //   title: "Enigma Analytics",
  //   description:
  //     "A high-performance analytics interface designed for data-driven decision-making. This dashboard features a responsive layout and modular component architecture, ensuring seamless data visualization across all device types while maintaining strict type safety.",
  //   techs: ["React .js", "TailwindCSS", "Typescript"],
  //   link: "https://enigma-analytics.pxxl.click/",
  //   label: "Front End",
  //   git: "https://github.com/Elite-Dev-Repo/EnigmaDashboard.git",
  //   howIMadeIt:
  //     "Developed with TypeScript to ensure type safety across complex data visualizations. I built a modular component library using Tailwind to allow for flexible dashboard layouts.",
  // },
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
  // {
  //   id: "amanti",
  //   top: 78,
  //   image: amanti,
  //   title: "Amanti",
  //   description:
  //     "A creative digital tool for generating heartfelt Valentine’s messages. This project features a responsive, mobile-first design that prioritizes ease of use and instant sharing, making it simple for anyone to create custom romantic notes on the fly.",
  //   techs: ["React .js", "TailwindCSS", "JavaScript"],
  //   link: "https://amanti-ai.vercel.app/",
  //   label: "Front End",
  //   git: "https://github.com/Elite-Dev-Repo/Amanti.git",
  //   howIMadeIt:
  //     "Implemented a lightweight state management system to handle message generation. The UI was built with a mobile-first philosophy to ensure users could generate and share messages instantly from any device.",
  // },
  // {
  //   id: "beadchef",
  //   top: 90,
  //   image: beadchef,
  //   title: "Beadchef",
  //   description:
  //     "A modern storefront interface for an artisanal bead brand. Built with a mobile-first approach, it features clean typography and smooth transitions to provide a premium shopping feel.",
  //   techs: ["React .js", "TailwindCSS", "JavaScript"],
  //   link: "https://beadchef.vercel.app/",
  //   label: "Front End",
  //   git: "https://github.com/Elite-Dev-Repo/Beady.git",
  //   howIMadeIt:
  //     "Designed the UI to spotlight product imagery. I used custom CSS transitions and Tailwind for a minimalist aesthetic that emphasizes the craftsmanship of the artisanal products.",
  // },
];

export default works;
