# The High-Risk Offboarding: A Branching Scenario

_Articulate Storyline 360 | Scenario-Based Learning | JavaScript Integration_

## The Problem

Organizations face significant legal and financial exposure when senior employees with privileged system access are offboarded without proper sequencing. A single misstep — a delayed access revocation or a legally ambiguous conversation — can cost millions and trigger litigation.

## The Approach

I designed a branching scenario that places the learner in the role of HR Manager responsible for offboarding a Senior DevOps Engineer with root access to GitHub, AWS, and client databases. Rather than presenting policy as content to memorize, every principle is embedded in a decision with real consequences.

## Design Decisions

- Three branching decision points track distinct risk categories: data security, legal compliance, and chain of custody
- Four Storyline variables (`isAccessRevoked`, `conversationTone`, `hardwareSecured`, `riskScore`) track learner choices across the full scenario
- A custom JavaScript trigger reads all variables at the end and generates a dynamic Offboarding Audit Report — personalized to the learner's exact decision path
- Source content was synthesized using NotebookLM from IBM breach cost data and SHRM employment law guidelines to ensure scenario accuracy

## The Result

A 10-minute scenario that teaches HR and IT professionals how to execute a high-risk termination without triggering a data breach or wrongful termination claim — and shows them exactly where they went wrong when they don't.
