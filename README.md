# Jonathan Root — Learning Experience Designer

**Live site: [jonathanrootdesign.com](https://jonathanrootdesign.com)**

I make technical things learnable. Most instructional designers stop at what an authoring
tool does natively; I extend Articulate Storyline with custom HTML, CSS, and JavaScript —
and debug it in the published output when it breaks.

This repo is the portfolio site itself: Astro, TypeScript, and Tailwind on Vercel, serving
five published Storyline and Rise course builds from my own domain.

## Selected work

| Project | What it demonstrates |
|---|---|
| [A Healthcare Patient Journey](https://jonathanrootdesign.com/projects/healthcare-patient-journey) | Storyline 360 built from a design studio's Illustrator handoff — custom JavaScript, GSAP 3D animation, an embedded JS game running as a Web Object. Every element a native, editable Storyline object. [Build walkthrough](https://youtu.be/iT0Bw3qHh6Q) |
| [The High-Risk Offboarding](https://jonathanrootdesign.com/projects/high-risk-offboarding-storyline) | Branching compliance scenario — needs analysis through evaluation, three tracked decision points, and a JavaScript-generated audit report personalized to the learner's path |
| [Rumie-Learn Microlearning](https://jonathanrootdesign.com/projects/rumie-better-listener-byte) | Two Bytes published on a global OER platform, distributed across 180+ countries, each through a two-tier peer review |
| [Work Smarter with Gemini](https://jonathanrootdesign.com/projects/gemini-rise-course) | Rise 360 course on AI adoption for a large health organization, scoped around repeatable workflows and documented with a Kirkpatrick measurement plan |

## How it's built

- **Astro** + TypeScript + Tailwind, statically generated
- **Vercel**, auto-deploying from `main`, custom domain
- Published Storyline and Rise builds served from `public/`, embedded through a lazy-loading
  iframe facade so multi-megabyte courses don't block page load
- Generated SEO metadata and Open Graph images

## Background

Eight years teaching technical content to adult learners — Masterschool, Udacity, Springboard,
Chegg — plus front-end contract development for NetMotion Software, Boeing, and Freeride
Entertainment. Currently SME on a web development certification program at LearningMate and
completing an M.S. in Learning Design & Technology.

📍 New York · [Portfolio](https://jonathanrootdesign.com) · [LinkedIn](https://linkedin.com/in/jonathanroot)
