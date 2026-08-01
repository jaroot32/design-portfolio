// Live instruction session catalog — shared by /projects and /projects/live-instruction
export const liveInstruction = [
  {
    icon: 'tabler:layout-columns',
    title: 'Personal Blog Project Walkthrough — Masterschool',
    description:
      'A live project walkthrough and Q&A session for Masterschool students on the Udacity Personal Blog project — covering CSS architecture, mobile-first responsive design, CSS Grid, and Flexbox with real-time student questions throughout.',
    href: '/projects/masterschool-personal-blog',
    tags: ['css', 'projects'],
    group: 'project',
  },
  {
    icon: 'tabler:layout-columns',
    title: 'CSS Flexbox & Responsive Design — Masterschool',
    description:
      'A live 57-minute session teaching career-changers how to build responsive layouts with CSS Flexbox — covering every major parent and child property, mobile-first design thinking, and media queries through live CodePen demos with active student Q&A.',
    href: '/projects/masterschool-css-flexbox',
    tags: ['css'],
    group: 'open-gym',
  },
  {
    icon: 'tabler:test-pipe',
    title: 'Testing in JavaScript — Live Coding Session with Jest',
    description:
      'A live group session introducing Masterschool students to test-driven development — covering the red/green/refactor cycle, unit vs. integration tests, and a hands-on code-along building and passing a Jest test from scratch before the React/Redux capstone.',
    href: '/projects/masterschool-testing-javascript',
    tags: ['javascript'],
    group: 'deep-dive',
  },
  {
    icon: 'tabler:brand-css3',
    title: 'CSS Selectors and the Cascade — Masterschool',
    description:
      "A live one-hour session introducing an international bootcamp cohort to CSS selectors, specificity, and the cascade — taught with real-time Slido polls, live Replit demos, and a chat full of students answering each other's questions.",
    href: '/projects/masterschool-css-selectors',
    tags: ['css'],
    group: 'deep-dive',
  },
  {
    icon: 'tabler:layout-navbar',
    title: 'Landing Page Project — JavaScript DOM & Scroll Events',
    description:
      'A live open gym session on the Udacity Landing Page project — covering dynamic nav generation, getBoundingClientRect() for viewport detection, scrollIntoView() for smooth scrolling, and toggling active state classes as sections come into view.',
    href: '/projects/masterschool-landing-page',
    tags: ['javascript', 'projects'],
    group: 'project',
  },
  {
    icon: 'tabler:puzzle',
    title: 'JavaScript Brain Teasers — Catchup Week Open Gym | Masterschool',
    description:
      'A live open gym session covering JavaScript prototypes in response to a student question, then working through two interview-style brain teasers live: a vowel frequency counter and a total uppercase letter counter, with full student participation throughout.',
    href: '/projects/masterschool-brain-teasers',
    tags: ['javascript'],
    group: 'open-gym',
  },
  {
    icon: 'tabler:circles-relation',
    title: 'Object-Oriented JavaScript — Prototypes, Closures & the Revealing Module Pattern | Masterschool',
    description:
      'A live group session covering four ways to create objects (object literals, factory functions, Object.create(), constructor functions, and ES6 class syntax), prototypical inheritance, scope, closures via IIFEs, and the Revealing Module Pattern — closing with a direct connection to React class components.',
    href: '/projects/masterschool-oop-javascript',
    tags: ['javascript'],
    group: 'deep-dive',
  },
  {
    icon: 'tabler:brackets',
    title: 'JavaScript Closures — Live Practice Session',
    description:
      'A live Q&A and coding session working through JavaScript closures — from functions returning functions to a DOM font-size demo, and fixing the classic setTimeout loop bug using closures and IIFEs. Audience participation throughout.',
    href: '/projects/masterschool-closures',
    tags: ['javascript'],
    group: 'open-gym',
  },
  {
    icon: 'tabler:user',
    title: 'JavaScript Closures — One-on-One Practice Session | Masterschool',
    description:
      'A one-on-one Masterschool session working through six closure practice problems live: createFunction, createFunctionWithInput, a counter with separate IIFE instances, addByX, the complex saveOutput cache with password gating, and deDup with a live debugging moment.',
    href: '/projects/masterschool-closures-practice',
    tags: ['javascript'],
    group: 'open-gym',
  },
  {
    icon: 'tabler:bolt',
    title: 'ES6 Features Open Gym — Masterschool',
    description:
      'Two live open gym sessions covering the core ES6 feature set: destructuring, spread, rest parameters, for...of loops, arrow functions, default parameters, and template literals with live coding and real-time student Q&A.',
    href: '/projects/masterschool-es6',
    tags: ['javascript'],
    group: 'open-gym',
  },
  {
    icon: 'tabler:bolt',
    title: 'ES6 Exercises — Destructuring, Ternary, and Defensive Programming | Masterschool',
    description:
      'A live exercise session working through ES6 problems with students presenting answers live — object and array destructuring, arrow function shorthand, default parameters, rest and spread, the ternary operator, and the nullish coalescing operator, with a React preview at the close.',
    href: '/projects/masterschool-es6-exercises',
    tags: ['javascript'],
    group: 'open-gym',
  },
  {
    icon: 'tabler:package',
    title: 'Node, npm, and Higher-Order Functions — Live Coding Session | Masterschool',
    description:
      'A live session covering Node.js, npm, and module loading — then rebuilding map, forEach, filter, and reduce from scratch using plain for loops and callbacks, as preparation for understanding promises and async/await.',
    href: '/projects/masterschool-npm-higher-order',
    tags: ['javascript', 'node'],
    group: 'deep-dive',
  },
  {
    icon: 'tabler:clock-pause',
    title: 'JavaScript Async — Promises, .then/.catch, and Promise.all | Masterschool',
    description:
      'A live open gym session working through JavaScript async patterns — promise states, executor functions, handling success and failure with .then and .catch, and running concurrent promises with Promise.all, with real-time student Q&A and live code.',
    href: '/projects/masterschool-async-promises',
    tags: ['javascript'],
    group: 'open-gym',
  },
  {
    icon: 'tabler:layout-grid',
    title: 'Dinosaur Infographic Project Intro — OOP, Constructor Functions & DOM Integration | Masterschool',
    description:
      'A live project kickoff session for the Udacity Dinosaur Infographic assignment — demoing the finished app, walking the rubric, and mapping the build strategy to OOP concepts. Covers loading JSON via import vs. Fetch API, constructor functions vs. ES6 classes, IIFE and the Revealing Module Pattern, three comparison methods, tile generation, and version control with GitHub.',
    href: '/projects/masterschool-dino-intro',
    tags: ['javascript', 'projects'],
    group: 'project',
  },
  {
    icon: 'tabler:bug',
    title: 'Dinosaur Infographic — Live Debugging and OOP Walkthrough | Masterschool',
    description:
      'A small-group support session for students blocked on the Udacity Dinosaur Infographic project — working through two methods for loading JSON data, building the Dino constructor live, implementing the IIFE pattern for form handling, and debugging with the Chrome debugger as students watched in real time.',
    href: '/projects/masterschool-dino-infographic',
    tags: ['javascript', 'projects'],
    group: 'project',
  },
  {
    icon: 'tabler:server',
    title: 'Teaching Node and Express — Masterschool',
    description:
      'A live 32-minute session introducing career-changers to server-side development with Node.js and Express — the hardest conceptual shift in the bootcamp curriculum, taught with scaffolded mental models, live code demos, and real-time student interaction.',
    href: '/projects/masterschool-node-express',
    tags: ['node'],
    group: 'deep-dive',
  },
  {
    icon: 'tabler:brand-react',
    title: 'Intro to Epic React — Live Group Session',
    description:
      "A live one-hour group onboarding session for Masterschool students — watching Kent C. Dodds' welcome video together and completing every setup step live, so no one hit a wall before the first exercise.",
    href: '/projects/masterschool-epic-react-intro',
    tags: ['react'],
    group: 'project',
  },
  {
    icon: 'tabler:book',
    title: 'myReads Book Tracker — React Project Intro',
    description:
      'A live session introducing Masterschool students to the myReads React project — demoing the finished app first, walking the rubric, and mapping each feature to the specific React concept needed to build it.',
    href: '/projects/masterschool-myreads-book-tracker',
    tags: ['react', 'projects'],
    group: 'project',
  },
  {
    icon: 'tabler:brand-react',
    title: 'React Fundamentals Review — Virtual DOM, JSX, Props, and Component Design | Masterschool',
    description:
      'A review week session using breakout rooms and full-group debrief to cover core React concepts — virtual DOM, composition, one-way data flow, JSX, Babel, and declarative vs imperative code, with fill-in-the-blank exercises on props, conditional rendering, list keys, and className.',
    href: '/projects/masterschool-react-fundamentals',
    tags: ['react'],
    group: 'deep-dive',
  },
  {
    icon: 'tabler:rocket',
    title: 'UdaciRacer Project Walkthrough — Masterschool',
    description:
      'A live project walkthrough and Q&A session for Masterschool students on the UdaciRacer JavaScript racing game — covering async programming, the Fetch API, DOM manipulation, and working with a Node.js server.',
    href: '/projects/masterschool-udaciracer',
    tags: ['javascript', 'projects'],
    group: 'project',
  },
  {
    icon: 'tabler:box',
    title: 'Redux and State Management — Group Review and Q&A | Masterschool',
    description:
      'A group review session covering Redux fundamentals — the three core principles, the full action/dispatch/reducer flow, middleware, useReducer, and the Context API — using breakout rooms for collaborative Q&A followed by a full-group debrief.',
    href: '/projects/masterschool-redux',
    tags: ['react'],
    group: 'deep-dive',
  },
  {
    icon: 'tabler:shield-lock',
    title: 'Common Security Attacks — Securing Web Apps with OWASP | Masterschool',
    description:
      'A live webinar introducing Masterschool students to the OWASP Top Ten — injection, broken authentication, XSS/CSRF, broken access control, data exposure, and three new 2021 categories — with a business-case framing using the ALE risk formula and hands-on exploration via hacksplaining.com.',
    href: '/projects/masterschool-web-security',
    tags: ['security'],
    group: 'deep-dive',
  },
];

export const groupMeta: Record<string, { label: string; style: string }> = {
  'open-gym': {
    label: 'Open Gym Practice & Review',
    style: 'bg-amber-500 dark:bg-amber-600 text-white font-semibold',
  },
  project: {
    label: 'Project Walkthroughs',
    style: 'bg-emerald-600 dark:bg-emerald-700 text-white font-semibold',
  },
  'deep-dive': {
    label: 'Concept Introduction & Deep Dive',
    style: 'bg-violet-700 dark:bg-violet-800 text-white font-semibold',
  },
};
