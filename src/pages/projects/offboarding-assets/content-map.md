# The High-Risk Offboarding — Content Map

## Project Overview

**Tool:** Articulate Storyline 360  
**Audience:** HR Managers and IT Directors at mid-to-large corporate organizations  
**Duration:** ~10 minutes  
**Format:** Branching scenario with JavaScript-generated audit report

---

## Learning Objectives

By the end of this module, the learner will be able to:

1. Sequence access revocation and termination meeting timing to prevent data exfiltration
2. Apply neutral, legally-compliant language during a termination conversation to reduce litigation risk
3. Execute hardware retrieval protocol before the employee exits the building
4. Interpret a post-offboarding risk audit to evaluate decision quality

---

## Variables

| Name               | Type       | Default Value | Tracks                                            |
| ------------------ | ---------- | ------------- | ------------------------------------------------- |
| `isAccessRevoked`  | True/False | False         | Whether access was revoked before the meeting     |
| `conversationTone` | Number     | 0             | 0=empathetic, 1=neutral/vague, 2=aggressive       |
| `hardwareSecured`  | True/False | False         | Whether hardware was collected during the meeting |
| `riskScore`        | Number     | 0             | Cumulative risk score based on all decisions      |

---

## Slide Structure

### SLIDE 1 — Title / Stakes

**Layout:** Title  
**Content:**

- Title: The High-Risk Offboarding
- Subtitle: You are the HR Manager. Today you will conduct a termination meeting with a senior member of your engineering team.
- Stakes: One wrong decision in the next 30 minutes could cost the company millions.
- Button: Begin

---

### SLIDE 2 — Meet Marcus Webb

**Layout:** Title Left with Large Image  
**Content:**

- Marcus Webb is a Senior DevOps Engineer with 8 years at the company. He has root access to GitHub, AWS production environments, and all client databases. The termination meeting is scheduled for 9:30 AM. It is currently 9:00 AM.
- Placeholder: corporate headshot image right

---

### SLIDE 3 — Decision Point 1: Access Timing

**Layout:** Text Question  
**Prompt:** It's 9:00 AM. The termination meeting is at 9:30 AM. What do you do first?

**Choices:**

- A: Go directly to the conference room to prepare for the meeting → Slide 4 _(riskScore += 50, isAccessRevoked = false)_
- B: Send an email to IT asking them to revoke access after the meeting → Slide 5 _(riskScore += 20)_
- C: Contact IT to coordinate simultaneous access revocation at exactly 9:30 AM → Slide 6 _(correct, isAccessRevoked = true)_

---

### SLIDE 4 — Consequence: Data Breach

**Layout:** Full Picture or Text Question  
**Trigger:** riskScore += 50, isAccessRevoked = false  
**Content:**

- At 9:18 AM, Marcus receives a Slack notification about an unusual calendar invite. He forks 47 proprietary repositories to a personal GitHub account from his phone.
- DATA BREACH ALERT — Average cost of a malicious insider breach: $4.99 million. Containment will take an average of 292 days.
- Button: Try Again → Slide 3

---

### SLIDE 5 — Consequence: Email Warning

**Layout:** Text Question  
**Trigger:** riskScore += 20  
**Content:**

- Your email sits unread in the IT queue. The access window stays open through the entire meeting. Marcus still has root access to GitHub, AWS, and all client databases.
- Button: Proceed anyway → Slide 7 _(carries elevated riskScore)_

---

### SLIDE 6 — Access Synchronized (Correct)

**Layout:** Text Question  
**Content:**

- IT confirms: access will be revoked at exactly 9:30 AM, synchronized with your meeting start. The window is closed.
- Correct revocation order: Identity Provider/SSO first → AWS/Cloud → GitHub/CI-CD → VPN/SSH → API tokens → Slack/Email → Physical badge
- Button: Proceed to meeting → Slide 7

---

### SLIDE 7 — Decision Point 2: The Conversation

**Layout:** Text Question  
**Prompt:** Marcus enters the room. He's tense. How do you open the conversation?

**Choices:**

- A: "Marcus, I'll be direct — your position has been eliminated effective today." → Slide 8 _(conversationTone = 2, riskScore += 40)_
- B: "Marcus, we have made the decision to separate your employment, effective immediately. This is a final decision. We want to support your transition." → Slide 9 _(correct, conversationTone = 0)_
- C: "Marcus, I… this is really difficult to say…" [apologetic, unclear about finality] → Slide 10 _(conversationTone = 1, riskScore += 15)_

---

### SLIDE 8 — Consequence: Legal Retaliation

**Layout:** Text Question  
**Trigger:** conversationTone = 2, riskScore += 40  
**Content:**

- Marcus responds: "Is this about the Hendricks project? Because I have emails showing I flagged those issues." You have no documentation proving the termination was performance-neutral. Vague or shifting justifications can be viewed as pretext for discrimination.
- ATTORNEY LETTER — Wrongful termination claim filed. Estimated legal cost: $180,000.
- Button: Try Again → Slide 7

---

### SLIDE 9 — Correct: Compliant Conversation

**Layout:** Text Question  
**Content:**

- Marcus is upset but composed. He reviews and signs the severance agreement.
- Button: Proceed to hardware retrieval → Slide 11

---

### SLIDE 10 — Warning: Ambiguity Risk

**Layout:** Text Question  
**Trigger:** conversationTone = 1, riskScore += 15  
**Content:**

- Marcus leaves the meeting uncertain whether he was fired or laid off. He does not sign the severance agreement. HR receives a follow-up call from his attorney three days later. Suggesting the decision is reversible or being unclear creates false hope and legal exposure.
- Button: Continue → Slide 11 _(carries riskScore)_

---

### SLIDE 11 — Decision Point 3: Hardware Retrieval

**Layout:** Text Question  
**Prompt:** Marcus says he left his laptop at his desk.

**Choices:**

- A: "I'll need you to retrieve it now, with HR present to escort you." → Slide 12 _(correct, hardwareSecured = true)_
- B: "That's fine — you can drop it off tomorrow." → Slide 13 _(hardwareSecured = false, riskScore += 25)_

---

### SLIDE 12 — Hardware Secured (Correct)

**Layout:** Text Question  
**Content:**

- Hardware collected. Serial numbers documented. For high-risk roles, the device will be held for forensic imaging for 90 days before wipe or reissue.
- Button: View your audit report → Slide 14 (JavaScript trigger fires)

---

### SLIDE 13 — Consequence: Chain of Custody Broken

**Layout:** Text Question  
**Trigger:** hardwareSecured = false, riskScore += 25  
**Content:**

- Marcus returns the laptop the next day. Chain of custody is broken. Forensic imaging is now inadmissible. Any evidence of data exfiltration on the device cannot be used in legal proceedings.
- Button: View your audit report → Slide 14 (JavaScript trigger fires)

---

### SLIDE 14 — Results: Offboarding Audit Report

**Layout:** Title Content  
**JavaScript trigger reads all four variables and outputs:**

- Color-coded risk level (green = 0, yellow = 1-30, red = 31+)
- Decision log (what the learner chose at each point)
- Financial exposure estimate
- Category pass/fail: Access Security | Conversation Compliance | Hardware Chain of Custody

---

## JavaScript — Audit Report Trigger

```javascript
var player = GetPlayer();
var accessRevoked = player.GetVar('isAccessRevoked');
var tone = player.GetVar('conversationTone');
var hardware = player.GetVar('hardwareSecured');
var risk = player.GetVar('riskScore');

// Output logic goes here — write to a text variable or manipulate DOM
// Display risk level, decision log, and financial exposure
```
