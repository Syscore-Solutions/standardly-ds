# Proof-of-Concept Plan: Org-Wide Design-to-Code Workflow

**Who this is for:** You — a designer testing this solo before pitching it to your org.
**What you're building:** A small working loop where Figma, Claude Design, and Claude Code all share one design system and talk to each other.
**Time to complete:** Roughly 2–3 days of focused work, or spread across a week.

---

## How the finished system will look

```
┌─────────────────────────────────────────────────────────────┐
│                        YOUR FIGMA                           │
│              (Design system lives here first)               │
└─────────────────────────┬───────────────────────────────────┘
                          │
                    You export tokens
                    (one manual step)
                          │
┌─────────────────────────▼───────────────────────────────────┐
│                      GITHUB REPO                            │
│         The shared hub everything else reads from           │
│                                                             │
│  📄 DESIGN.md       — written design system spec            │
│  📁 tokens/         — colors, fonts, spacing as code        │
│  📁 storybook/      — components built and documented       │
└──────────────┬──────────────────────────┬───────────────────┘
               │                          │
               ▼                          ▼
  ┌────────────────────┐      ┌────────────────────────┐
  │   CLAUDE DESIGN    │      │      CLAUDE CODE        │
  │                    │      │                         │
  │ PMs, designers,    │      │ Devs build from         │
  │ non-dev teams      │      │ handoff bundles         │
  │ prototype here     │      │ and push back to repo   │
  └────────────┬───────┘      └────────────────────────┘
               │                          ▲
               │   handoff bundle         │
               └──────────────────────────┘
```

---

## Phase 1 — Set up your Figma design system

*Goal: Have a small, clean design system in Figma that you can export.*

This phase is about creating something minimal but real. You don't need a full design system — just enough to prove the concept.

### Step 1.1 — Create a dedicated Figma file

- Open Figma and create a new file called something like `POC Design System`
- This file will be your single source of truth for all visual decisions

### Step 1.2 — Define your core design tokens

Tokens are the basic building blocks — think of them as named values your whole system shares.

Create these as **Figma Variables** (not just styles):

| Token type | Examples to create |
|---|---|
| **Colors** | `color/primary`, `color/secondary`, `color/background`, `color/text` |
| **Typography** | `font/size/sm`, `font/size/md`, `font/size/lg`, `font/weight/regular`, `font/weight/bold` |
| **Spacing** | `space/xs`, `space/sm`, `space/md`, `space/lg` |

> **Why Figma Variables specifically?** Variables (not just colour styles) can be exported as structured data files. This is what makes the Figma → GitHub step possible.

### Step 1.3 — Build 3–4 simple components

Keep it very small for the POC. Suggested components:

- A **Button** (primary and secondary variants)
- A **Card** (with a title, body text, and optional image slot)
- A **Navigation bar**
- A **Form input field**

Apply your tokens to these components — use `color/primary` for the button background, `space/md` for padding, and so on. This is important: if the tokens aren't applied to components, the export won't carry the relationship between them.

---

## Phase 2 — Set up your GitHub repository

*Goal: A GitHub repo that will become the hub for everything else.*

> **No coding experience needed for this phase.** GitHub has a web interface you can do all of this from.

### Step 2.1 — Create a free GitHub account

If you don't have one, go to [github.com](https://github.com) and sign up.

### Step 2.2 — Create a new repository

- Click the **+** icon in the top right → **New repository**
- Name it something like `poc-design-system`
- Set it to **Private**
- Check **Add a README file**
- Click **Create repository**

### Step 2.3 — Create your folder structure

You need three folders. You can create them directly in GitHub's web interface by clicking **Add file → Create new file** and typing the folder name followed by a `/` before the filename.

```
poc-design-system/
├── readme.md          ← already created
├── DESIGN.md          ← you'll write this in Phase 3
└── tokens/            ← exported Figma tokens go here
```

To create the `tokens/` folder: click **Add file → Create new file**, type `tokens/placeholder.txt` in the filename box, add any text, and commit. This creates the folder.

---

## Phase 3 — Write your DESIGN.md

*Goal: A plain-English document in your repo that describes your design system.*

This file is read by both Claude Design and Claude Code. It tells them what your brand looks and feels like without them having to guess.

### Step 3.1 — Create DESIGN.md in your repo

Click **Add file → Create new file**, name it `DESIGN.md`, and paste in a structure like this (fill in your own values):

```markdown
# Design System — POC

## Brand personality
[Your brand in 2–3 sentences. E.g. "Clean and professional. We prioritise clarity 
over decoration. Friendly but not casual."]

## Colors
- Primary: #[your hex code]   — used for main actions, buttons, links
- Secondary: #[your hex code] — used for accents and highlights
- Background: #[your hex code]
- Text: #[your hex code]

## Typography
- Font family: [e.g. Inter, Roboto]
- Small text: [e.g. 14px]
- Body text: [e.g. 16px]
- Heading: [e.g. 24px]
- Bold weight: [e.g. 600]

## Spacing scale
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 40px

## Components
### Button
- Primary: [color/primary] background, white text, [space/sm] padding
- Secondary: transparent background, [color/primary] border and text
- Border radius: 6px

### Card
- White background, 1px border in [color/secondary], [space/md] padding
- Drop shadow: subtle (0 2px 8px rgba(0,0,0,0.08))

### Navigation bar
- [color/background] background, [space/md] horizontal padding
- Logo left, links right

### Form input
- 1px border, [space/sm] padding, border highlights [color/primary] on focus

## Rules
- Never use more than 2 font weights on one screen
- Primary color is for one focal action per screen only
- All interactive elements must have a visible focus state
```

### Step 3.2 — Commit the file

Scroll down, add a short commit message like `Add DESIGN.md`, and click **Commit new file**.

---

## Phase 4 — Export Figma tokens to GitHub

*Goal: Get your Figma token values into the `tokens/` folder as an actual file.*

This is the link between Figma and GitHub. It's a one-time setup, then repeatable in seconds.

### Step 4.1 — Install the Tokens Studio plugin in Figma

- In Figma, go to **Plugins → Browse plugins**
- Search for **Tokens Studio for Figma**
- Click **Install**

### Step 4.2 — Connect Tokens Studio to your GitHub repo

- Open the plugin in your Figma file
- Go to **Settings → Sync → GitHub**
- You'll need a GitHub **Personal Access Token** (a password that lets the plugin write to your repo)
  - Go to GitHub → your profile photo → **Settings → Developer settings → Personal access tokens → Generate new token**
  - Give it `repo` access
  - Copy the token and paste it into Tokens Studio
- Set the **repository** to `poc-design-system`, branch to `main`, and file path to `tokens/tokens.json`

### Step 4.3 — Push your tokens

- Back in Tokens Studio, click **Push to GitHub**
- Go to your GitHub repo and check the `tokens/` folder — you should see a `tokens.json` file with all your color, typography, and spacing values inside

> **What this file looks like:** It's a structured list of all your token names and values. You don't need to read or edit it — it's there for Claude Design and Claude Code to read automatically.

---

## Phase 5 — Connect Claude Design to your repo

*Goal: Claude Design can read your design system and let you prototype with it.*

### Step 5.1 — Open Claude Design

Go to [claude.ai/design](https://claude.ai/design). You need a Pro, Max, Team, or Enterprise Claude subscription.

### Step 5.2 — Create a new project

Click **Create new project** and give it a name matching your POC.

### Step 5.3 — Import your GitHub repo

- Click the **Import** button
- Choose **GitHub**
- Connect your GitHub account if prompted
- Select your `poc-design-system` repo

Claude Design will read your repo — including `DESIGN.md` and `tokens/tokens.json` — and build a design system context from it.

### Step 5.4 — Test that it worked

Type a prompt like:

> *"Create a simple dashboard page with a navigation bar at the top, three summary cards in a row, and a data table below. Use our design system."*

Check that the output uses your brand colors and matches the component descriptions in your `DESIGN.md`. If it doesn't, your `DESIGN.md` may need more detail — go back and add specifics.

---

## Phase 6 — Run one full loop

*Goal: Go from a Claude Design prototype all the way to Claude Code and back. This is the core of the POC.*

```
Claude Design → handoff bundle → Claude Code → GitHub push → Claude Design
      ↑                                                              │
      └──────────────── loop repeats from here ─────────────────────┘
```

### Step 6.1 — Design something in Claude Design

Pick a simple screen — a settings page, a sign-up form, a dashboard. Iterate until you're happy with it.

### Step 6.2 — Hand off to Claude Code

- Click **Export → Send to Claude Code** (or **Send to Claude Code Web**)
- Claude Code receives the handoff bundle

### Step 6.3 — Let Claude Code build it

Claude Code will implement the design as actual code against your repo. Review the output — it should reference your real component names and token values, not make up new ones.

### Step 6.4 — Commit and push

Once you're happy, commit the code to your GitHub repo and push.

### Step 6.5 — Return to Claude Design

Go back to your Claude Design project. Because it's linked to your repo, it will re-read the updated codebase on your next prompt — your new components are now available to reference in future designs.

---

## Phase 7 (Optional but recommended) — Add Storybook

*Goal: Document your built components so they're visible, testable, and shareable with your org.*

> **Note:** This phase requires some developer help, or confidence following a tutorial. It's worth including in the POC because it makes the system much more convincing to pitch — stakeholders can see and interact with real components in a browser.

### What Storybook is

```
┌──────────────────────────────────────────────┐
│                  STORYBOOK                   │
│                                              │
│  A website (hosted privately or publicly)    │
│  that shows every component in your system  │
│  in isolation, with all its variants.        │
│                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │  Button  │  │   Card   │  │  Navbar  │  │
│  │ primary  │  │ default  │  │ desktop  │  │
│  │ secondary│  │ featured │  │ mobile   │  │
│  └──────────┘  └──────────┘  └──────────┘  │
│                                              │
└──────────────────────────────────────────────┘
```

### Step 7.1 — Set up Storybook

Follow the official quickstart at [storybook.js.org/docs](https://storybook.js.org/docs) — it installs into your existing codebase with one command. If you have a developer helping with the POC, hand this step to them.

### Step 7.2 — Write stories for your components

A "story" is just a file that shows a component in a specific state. Claude Code can actually write these for you — prompt it with:

> *"Write Storybook stories for the Button and Card components, covering all variants defined in our DESIGN.md."*

### Step 7.3 — Push Storybook to GitHub

Once your stories are written and committed, your repo now contains a full living component library. Claude Design will pick this up on the next import.

---

## What the finished POC proves

Once you've run through Phases 1–6 (and optionally 7), you'll have demonstrated:

| Claim | How the POC shows it |
|---|---|
| Figma can feed a shared design system | Tokens Studio export to GitHub |
| Non-dev teams can prototype from the real design system | Claude Design reading the repo |
| Prototypes can become real code without a full rebuild | Claude Code handoff bundle |
| The loop is repeatable, not a one-way street | Going back to Claude Design after a code push |
| The system scales to multiple audiences | Different tools, same GitHub hub |

---

## What to flag as limitations when you pitch it

Be honest about these — it makes the pitch more credible:

- **The Figma → GitHub sync is manual.** Someone has to push tokens after every design system update. Automating this is possible but requires developer setup.
- **`DESIGN.md` needs maintaining.** It doesn't update itself when Figma changes. Someone owns it.
- **Claude Design is still a research preview.** There are known rough edges (Anthropic lists them publicly). It's not a mature production tool yet — pitch this as a forward-looking workflow, not a finished one.
- **Storybook requires developer time to set up and maintain.**

---

## Suggested timeline

| Day | Work |
|---|---|
| **Day 1 (morning)** | Phase 1 — Figma design system |
| **Day 1 (afternoon)** | Phase 2 + 3 — GitHub repo + DESIGN.md |
| **Day 2 (morning)** | Phase 4 + 5 — Token export + Claude Design setup |
| **Day 2 (afternoon)** | Phase 6 — Run the full loop end to end |
| **Day 3 (optional)** | Phase 7 — Storybook, and preparing the pitch |