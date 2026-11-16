import tabbiebites from "./assets/tabbiebites.png";
import vesta from "./assets/vesta.png";
import child from "./assets/tchild.png";
import offertrail from "./assets/offertrail.png";
import learnstack from "./assets/learnstack.png";
import akant from "./assets/akant.png";
import paysctackfordja from "./assets/paystackfordja.png";
import driphvn from "./assets/driphvn.png";
import amber from "./assets/amber.png";
import square from "./assets/square.png";
import cortex from "./assets/cortex.png";
import voyant from "./assets/voyant.png";
import lexiq from "./assets/lexiq.png";
import kora from "./assets/kora.png";
import pseudopay from "./assets/pseudopay.png";
import digitallair from "./assets/digitallair.png";
import elucid from "./assets/elucid.png";
import bnxn from "./assets/bnxn.png";
import noodli from "./assets/noodli.png";

const works = [
  {
    id: "noodli",
    top: 0,
    image: noodli,
    title: "Noodli - Screen Time & Focus Tracker",
    description:
      "A Windows app and web dashboard that show how you spend time across your apps. Noodli tracks active app usage automatically, then helps you review your habits, set screen time goals, and compare progress with others.",
    techs: ["React", "Tailwind CSS", "Python", "Django", "PostgreSQL"],
    link: "https://noodli.vercel.app/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo/NoodliFrontend",
    howIMadeIt:
      "I built a Windows app that records which applications are actively being used, then connects it to an online dashboard where people can review their screen time. The dashboard turns that activity into daily insights, personal goals, and a shared leaderboard, helping people understand their habits and make more intentional use of their time.",
  },
  {
    id: "kora",
    top: 0,
    image: kora,
    title: "Kora - Personalized AI Agent for Websites",
    description:
      "A personal AI assistant that website owners can add to their site to answer visitor questions using their own information and resources.",
    techs: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Axios",
      "JWT",
      "Google OAuth",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "tsup",
      "npm",
    ],
    link: "https://kora-ai-agent.vercel.app/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo/KoraFrontend",
    howIMadeIt:
      "I built Kora as a website for creating a personal AI assistant and a chat tool that can be added to other websites. Owners can provide information about themselves, their work, and their services, then give visitors a simple way to ask questions and get relevant answers. This makes it easier for a site to offer helpful, personalized responses without the owner needing to answer every question by hand.",
  },
  {
    id: "pseudopay",
    top: 0,
    image: pseudopay,
    title: "PseudoPay - Mock Payment Gateway for Developers",
    description:
      "A practice payment platform where merchants can create wallets, test purchases through a checkout page, and receive payment updates.",
    techs: [
      "React",
      "Django",
      "Django REST Framework",
      "Tailwind CSS",
      "PostgreSQL",
      "Webhooks",
      "Google OAuth",
    ],
    link: "https://pseudo-pay.vercel.app/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo/PseudoPayFrontend",
    howIMadeIt:
      "I built PseudoPay as a safe place for merchants to try a payment flow before using a real payment service. They can create a wallet, start a sample transaction, and see how a customer moves through checkout. The project also demonstrates payment updates, so developers can understand how their store would be notified when a transaction succeeds.",
  },
  {
    id: "square",
    top: 0,
    image: square,
    title: "Square - The Nigerian Freelance Marketplace",
    description:
      "A marketplace that helps people in Nigeria find and hire trusted local tradespeople, from plumbers and electricians to mechanics and carpenters.",
    techs: [
      "React",
      "TypeScript",
      "Django",
      "PostgreSQL",
      "Django REST Framework",
      "Paystack",
      "WebSocket",
      "Google OAuth",
    ],
    link: "https://square-marketplace.vercel.app/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo/square",
    howIMadeIt:
      "I built Square to help people find and hire trusted local tradespeople. Clients can post jobs, compare artisan profiles and reviews, chat about the work, and make payments through the platform. Bringing these steps together helps clients choose with more confidence and gives skilled workers a clearer way to find opportunities.",
  },
  {
    id: "bnxn",
    top: 0,
    image: bnxn,
    title: "BNXN - Un-official Artist Website",
    description:
      "A fan-made website celebrating Nigerian artist BNXN, with music, career highlights, photos, and an interactive guide to his work.",
    techs: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Hugeicons",
    ],
    link: "https://bnxn.pxxl.click/",
    label: "Front End",
    git: "https://github.com/Elite-Dev-Repo/BNXN_CAPTAIN",
    howIMadeIt:
      "I designed and built a fan site that brings the music and story of BNXN together in one place. Visitors can browse his releases, explore career highlights and photos, listen to featured music, and find answers to common questions. The responsive layout makes the experience easy to explore on phones and larger screens.",
  },
  {
    id: "elucid",
    top: 0,
    image: elucid,
    title: "Elucid - AI LinkedIn Post Writer",
    description:
      "An AI writing assistant that helps people create, personalize, and publish LinkedIn posts, with tools to manage drafts and past posts.",
    techs: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Hugeicons",
      "Django 6",
      "Django REST Framework",
      "PostgreSQL",
      "SimpleJWT",
      "OpenRouter AI",
      "LinkedIn REST API",
    ],
    link: "https://elucid-ai.vercel.app/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo/elucidfrontend",
    howIMadeIt:
      "I built Elucid to help people turn an idea into a polished LinkedIn post and publish it without switching between several tools. Users can shape a draft with AI, add images, preview the result, and revisit posts they have created before. The guided writing flow helps make publishing more consistent while letting each person retain control over the final message.",
  },
  {
    id: "digital-lair",
    top: 0,
    image: digitallair,
    title: "Digital Lair - Premium Digital Products Marketplace",
    description:
      "An online store for digital products, with category browsing, a shopping cart, and a straightforward checkout experience.",
    techs: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Hugeicons",
    ],
    link: "https://digital-lair.vercel.app/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo/DigitalLairFrontend",
    howIMadeIt:
      "I built Digital Lair as an online shop for digital products. Visitors can browse collections, narrow down what they are looking for, and keep selected products in a shopping cart before placing an order. The clear product layout and straightforward path to checkout make it easier to discover and buy downloadable items.",
  },
  {
    id: "Cortex",
    top: 0,
    image: cortex,
    title: "Cortex - Mind Mapping Tool for Developers",
    description:
      "A visual planning space for turning project ideas into manageable tasks and keeping track of progress.",
    techs: [
      "React",
      "Django",
      "Framer Motion",
      "Django REST Framework",
      "PostgreSQL",
      "Lucide Icons",
    ],
    link: "https://cortex-appio.vercel.app/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo/CortexFrontend",
    howIMadeIt:
      "I built Cortex as a visual workspace for turning a project idea into a plan. People can break an idea into smaller tasks, arrange those tasks on a board, and follow their progress as work moves forward. This gives individuals and teams a clearer view of what needs doing and what has already been completed.",
  },
  {
    id: "lexiq",
    top: 0,
    image: lexiq,
    title: "Lexiq - Vocabulary Building Quiz Application",
    description:
      "A multiplayer word quiz where friends can create rooms, choose word lists, and compete to test their vocabulary.",
    techs: [
      "React",
      "Tailwind CSS",
      "Django REST Framework",
      "Django",
      "Django Channels",
      "WebSockets",
      "Axios",
    ],
    link: "https://lexiq-appio.vercel.app/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo/LexiqFrontend",
    howIMadeIt:
      "I built Lexiq as a live multiplayer word quiz where friends can meet in a game room and compete using shared word lists. Players answer timed questions and see scores update as they play. The live format turns vocabulary practice into a social challenge and helps make learning new words more engaging.",
  },
  {
    id: "Voyant",
    top: 0,
    image: voyant,
    title: "Voyant - Predict your Spotify Wrapped.",
    description:
      "A playful Spotify Wrapped predictor where music fans choose their top artists, songs, or albums and create a shareable prediction card.",
    techs: [
      "React",
      "Tailwind CSS",
      "Vite",
      "Axios",
      "Canvas API",
      "RapidAPI",
    ],
    link: "https://voyant-not-clair.vercel.app/",
    label: "Front End",
    git: "https://github.com/Elite-Dev-Repo/Voyant",
    howIMadeIt:
      "I built Voyant to let music fans create their own predictions for Spotify Wrapped. They can search for artists, songs, or albums, choose their top picks, and arrange them into a personalized card. The finished image can be downloaded and shared, giving users a fun way to compare their predictions with friends.",
  },
  {
    id: "paystack-for-django",
    top: 6,
    image: paysctackfordja,
    title: "Paystack for Django",
    description:
      "A practical guide that helps Django developers add Paystack payments to their websites, including subscriptions and payment confirmations.",
    techs: ["React", "Django", "Django REST Framework", "Paystack"],
    link: "https://paystack-for-django.vercel.app/",
    label: "Front End",
    git: "https://github.com/Elite-Dev-Repo/PayStack-Django-Docs",
    howIMadeIt:
      "I created this guide to help Django developers add Paystack payments to their projects with less guesswork. It walks through common payment tasks such as starting a transaction, handling subscriptions, and confirming payment notifications. The examples give developers a clear starting point for building payment features into their own websites.",
  },
  {
    id: "amber",
    top: 18,
    image: amber,
    title: "Amber",
    description:
      "A product concept for organizing requests and tickets, helping teams work together, follow progress, and keep projects on track.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://amber-saas.vercel.app/",
    label: "Front End",
    git: "https://github.com/Elite-Dev-Repo/amber",
    howIMadeIt:
      "I built Amber as a product website for a ticket and request management tool. It explains how teams can collect requests, organize them into clear steps, work together, and see what still needs attention. The page presents the product as a complete service, helping visitors quickly understand how it could make shared work easier to manage.",
  },
  {
    id: "akant",
    top: 24,
    image: akant,
    title: "Akant",
    description:
      "A shared expense app that helps groups record bills, see who owes what, and settle up with payment reminders.",
    techs: [
      "React",
      "Django",
      "PostgreSQL",
      "Django REST Framework",
      "Tailwind CSS",
      "Paystack",
      "Resend",
    ],
    link: "https://akant.vercel.app/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo",
    howIMadeIt:
      "I built Akant to make shared expenses easier for groups to manage. Members can record what they have paid, see how the costs are divided, and understand who needs to pay whom. The app simplifies the group balance and supports payment reminders, helping friends and teams settle up without doing the calculations themselves.",
  },
  {
    id: "learnstack",
    top: 30,
    image: learnstack,
    title: "LearnStack",
    description:
      "A community library of useful YouTube tutorials where people can discover, save, and share videos that help them learn.",
    techs: ["React", "Tailwind CSS", "Django", "SQLite"],
    link: "https://learnstackr.vercel.app/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo/",
    howIMadeIt:
      "I built LearnStack as a community space for finding useful YouTube tutorials. People can browse lessons, save videos they want to return to, and share helpful resources with others. The organized library makes it easier to discover learning material without relying only on recommendations from a video platform.",
  },
  {
    id: "vesta",
    top: 36,
    image: vesta,
    title: "Vesta",
    description:
      "A modern landing page concept for a digital finance product, designed to introduce its services in a clear and approachable way.",
    techs: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://vesta.pxxl.click/",
    label: "Front End",
    git: "https://github.com/Elite-Dev-Repo/Vesta.git",
    howIMadeIt:
      "I designed Vesta as a landing page for a digital finance product. It introduces the service through clear sections, approachable language, and a visual style inspired by modern online finance. The page gives visitors a simple path to understand what the product offers and where to learn more.",
  },
  {
    id: "driphvn",
    top: 42,
    image: driphvn,
    title: "Driphvn",
    description:
      "A bold landing page for Nigerian streetwear brand DRIPHVN, bringing its latest style and brand story together in one place.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://driphvn-brand.vercel.app/",
    label: "Front End",
    git: "https://github.com/Elite-Dev-Repo/driphvn.git",
    howIMadeIt:
      "I built a bold online brand experience for DRIPHVN, a Nigerian streetwear label. The page uses editorial imagery, strong typography, and clear sections to introduce the brand and showcase its style. The responsive design keeps the visual identity and product story easy to explore across screen sizes.",
  },
  {
    id: "tabbiebites",
    top: 48,
    image: tabbiebites,
    title: "Tabbiebites",
    description:
      "A welcoming, mobile-friendly website for a boutique bakery, designed to showcase its baked goods and help customers explore the menu.",
    techs: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://tabbiebites.pxxl.click/",
    label: "Front End",
    git: "https://github.com/Elite-Dev-Repo/TabbieBites.git",
    howIMadeIt:
      "I created a mobile-friendly website for a boutique bakery, with the baked goods and menu at the center of the experience. I focused on clear product imagery, simple navigation, and a layout that works comfortably on phones. This helps customers get a feel for the bakery and find the details they need before placing an order.",
  },
  {
    id: "offertrail",
    top: 54,
    image: offertrail,
    title: "OfferTrail",
    description:
      "A job search companion that helps people keep track of applications and see the latest status of each opportunity.",
    techs: ["React", "Tailwind CSS", "Django", "PostgreSQL"],
    link: "https://offer-trail.vercel.app/",
    label: "Full Stack",
    git: "https://github.com/Elite-Dev-Repo",
    howIMadeIt:
      "I built OfferTrail to help job seekers keep their applications organized in one place. They can save an opportunity and update its progress as they apply, interview, or hear back. The dashboard makes it easier to see what needs a follow-up and keep track of a busy job search.",
  },
  {
    id: "the-better-child",
    top: 72,
    image: child,
    title: "The Better Child",
    description:
      "A welcoming website for an educational foundation, sharing its mission and helping visitors explore its work and photo gallery.",
    techs: ["React", "Tailwind CSS", "shadcn/ui"],
    link: "https://thebetterchild.vercel.app/",
    label: "Front End",
    git: "https://github.com/Elite-Dev-Repo/thebetterchild.git",
    howIMadeIt:
      "I designed and built a welcoming website for The Better Child foundation. It introduces the organization and its mission, shares information about its programs, and gives visitors a photo gallery to explore. Clear navigation and a responsive layout help families, supporters, and partners learn about the foundation and its work.",
  },
];

export default works;
