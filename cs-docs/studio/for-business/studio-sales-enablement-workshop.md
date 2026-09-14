---
title: "Studio Sales Enablement Workshop"
description: "Before the workshop, every attendee runs one setup script that stands up their own stack, seeds it with Red Panda content, and creates a Studio project."
url: /studio/studio-sales-enablement-workshop
uid: blt088467a51c324677
---

# Studio Sales Enablement Workshop

## Sales enablement workshop: Studio on Red Panda

-   **Format:** two 2-hour hands-on sessions
-   **Ratio:** doing ~85% / listening ~15%
-   **Environment:** every attendee gets their own pre-provisioned Red Panda stack + Studio project (setup script)
-   **Style:** lockstep, every attendee performs identical steps against identical content

Before the workshop, every attendee runs one setup script that stands up their own stack, seeds it with Red Panda content, and creates a Studio project that already has a few Sections and a Template built (see [What we need from the Studio team](#what-we-need-from-the-studio-team-before-anything-else)). So nobody starts from a blank page. The day is **familiarize-first**: work with what already exists, then build your own.

**Goal: after both sessions every AE can:**

-   Build and update Studio Templates + Sections in the Canvas themselves.
-   Run the developer-side flow via LLM Skills.
-   Pitch Studio confidently.
-   Demo cold against Red Panda for any prospect.

## The two-session arc

| Session | Focus | End state per attendee |
| --- | --- | --- |
| **1\. Studio Canvas** | Everything an author + power-author does | Has updated the pre-built Template, inspected a pre-created Section to see how it's wired, built a Section covering all four smart-container primitives + Exposed Props, understood URL patterns, built a new Template using their Section. 4 Slack screenshots. |
| **2\. Code + Skills + Agents** | Everything an engineer does, run via LLM Skills | Has built + registered a React component, generated a Section via build-section Skill, generated a Template via build-connected-template Skill, run the decompose-design orchestrator on a design brief to produce a full page in one prompt, then tweaked the result in the Canvas. 5 Slack screenshots. |

Combined: every AE has personally shipped every part of the Studio surface: from marketing composition to engineering registration to AI-driven scaffolding.

## What we need from the Studio team (before anything else)

The whole workshop starts from a **pre-provisioned, per-attendee environment**. Each attendee runs one setup script that stands up their own stack, seeds it with Red Panda content, and creates a Studio project that already has a few Sections and a Template built. Nothing below this section works until the Studio team delivers and tests these artifacts. Owner + due date in brackets for the Studio team to fill in.

-   **1\. The setup script: the single command an attendee runs.** \[owner / due\]

    -   Given the attendee's org + auth, must idempotently (safe to re-run):

        -   Create a new **stack** in the attendee's org.
        -   Seed the **Red Panda content model**: content types, fields, modular blocks, multiple groups, taxonomies.
        -   Seed **sample entries** so every binding renders real content.
        -   Create the **Studio project** on that stack.
        -   Pre-create the **Sections** in item 3.
        -   Create the **pre-built Template** in item 4.
        -   Print the attendee-specific values they'll need (stack API key, project link, Template name, preview URL), or keep them standardized so the facilitator's placeholder sheet is identical for everyone.
-   **2\. The seeded content model, documented.** \[owner / due\]

    -   A one-page list of the content types, fields, modular-block types, multiple groups, and taxonomies the script seeds.
    -   This is what the [placeholder lock-in checklist](#facilitators-placeholder-lock-in-checklist) resolves against: every {{...}} binding value in Session 1 comes from here.
-   **3\. Pre-created Sections.** \[owner / due\]

    -   **One "spare" Section** in the Palette, NOT yet placed on any Template. Attendees drop it in Session 1 Block A.
    -   **One fully-built reference Section** attendees open and inspect in Block A2. It should show a simple binding, an exposed prop, and at least one smart container (Repeater / Condition Block) so learners read a real, working example before building their own in Block B.
-   **4\. The pre-built Template.** \[owner / due\]

    -   A Connected Template with its URL pattern already set, pointed at a seeded entry, with **one empty Section Slot** for Block A to fill.
    -   This is what makes the canvas render on minute one instead of showing a blank page.
-   **5\. The canvas-app repo.** \[owner / due\]

    -   The **canvas-app** is the React front-end that Studio renders inside the Canvas. Without a running instance connected to the project, the Canvas is blank.
    -   The repo ships with the components registered, a catch-all route, and a README.
    -   Each attendee connects their Studio project's Canvas by pointing its **environment URL** at a running instance of the app, one of two ways:

        -   **Run it locally**: npm install && npm run dev, then set the environment URL to their local dev URL, or
        -   **Deploy it to Launch**: deploy the repo on Launch and set the environment URL to the Launch deployment URL.
    -   The same repo powers Session 2's Skills flow, so anyone who uses Launch for Session 1 still clones it locally before Session 2.
-   **6\. The Studio LLM Skills.** \[owner / due\]
-   register-component, build-section, build-connected-template: installed and tested against the seeded stack, so Session 2's prompts actually work.
-   **7\. Preview environment.** \[owner / due\]

    -   Configured so Deploy works from the seeded project without touching production.
-   **8\. The filled-in placeholder sheet.** \[owner / due\]

    -   All the facilitator lock-in values resolved against the seeded Red Panda content.
    -   Because the environment is standardized, this ships once and every cohort reuses it.
-   **9\. Access + permissions.** \[owner / due\]

    -   Org permission for attendees to create stacks, and the token/auth model the script uses.

## Prerequisites: 48 hrs before Session 1

The setup script does the heavy lifting: each attendee receives their own stack, seeded Red Panda data, and a Studio project that already has Sections and a Template. Because every attendee has their own environment, there are no shared-login race conditions and no per-cohort reset to babysit, but everyone must successfully run the script before Session 1.

**Non-negotiables: verify 48 hrs out, not the morning of:**

-   **Every attendee has run the setup script** and can log into their own Studio project.
-   **The pre-built Template renders**: attendee opens it, points at the seeded entry, and real content appears (not a blank canvas).
-   **The spare Section is in the Palette**, not yet dropped on any Template. Attendees drop it themselves in Block A.
-   **The reference Section exists** for the Block A2 inspection.
-   **Preview environment works**: attendees Deploy to preview freely without affecting production.
-   **Backup videos** of every hands-on step recorded, so a stuck attendee can catch up without blocking the room.
-   **Slack / Teams channel** opened for mid-session help.

## Attendee pre-work

**Before Session 1** (~20 min):

-   **Run the setup script** (facilitator sends the command).

    -   Creates your own stack.
    -   Seeds it with Red Panda content.
    -   Creates your Studio project with a few Sections and a Template already built.
    -   Confirm it finished without errors.
-   **Connect the Canvas so it renders.** Choose ONE:

    -   **Local:** git clone the canvas-app repo, run npm install, run npm run dev, then set your Studio project's environment URL to http://localhost:3000 (or whatever the dev server prints).
    -   **Launch:** deploy the canvas-app repo on Launch, copy the deployment URL, then set your Studio project's environment URL to that URL.
-   **Log in to YOUR Studio project + confirm:**

    -   The pre-built Template shows real content (not a blank canvas).
    -   You can see the pre-created Sections in the Sections tab.
    -   Ping Slack if you can't. This is the blocker to fix before the day.
-   **Skim [For Authors: Glossary](/docs/studio/studio-glossary-for-authors)**: vocabulary loaded before you walk in.
-   **Watch the 3-min recorded flyover** of Red Panda in Studio (facilitator records once).

**Between Session 1 and Session 2** (~30 min):

-   **Install** Claude Code / Cursor / Windsurf + authenticate.
-   **Local canvas-app running.**

    -   If you ran locally for Session 1, you are already set.
    -   If you used Launch, clone the repo now: git clone ... && cd ... && npm install && npm run dev.
-   **Verify Studio skills installed**: running /studio in Claude Code should trigger the router.
-   **Slack the facilitator when done.**

If any attendee's tooling isn't ready before Session 2, delay their Session 2 by a day. Broken setup kills a Session-2 workshop.

---

## SESSION 1: Build in the Studio Canvas (2 hrs)

Every attendee builds and updates real things on their own pre-provisioned Red Panda stack. The arc is **familiarize-first**:

1.  **Change what exists**: drop / replace a Section on the pre-built Template (Block A).
2.  **Look inside what exists**: open a pre-created Section and see how it's wired (Block A2).
3.  **Then build your own**: a new Section (Block B), then a new Template (Block D).

No facilitator-only moments. No code.

### Session 1 timing

| # | Block | Time | Deliverable |
| --- | --- | --- | --- |
| A | Update the pre-built Template | ~20 min | <name>-blockA.png |
| A2 | Look inside a pre-created Section | ~8 min | <name>-blockA2.png |
| B | Build a new Section from scratch | ~58 min | <name>-blockB.png |
| C | Concept moment: what is a Template URL? | ~9 min | Understanding + demo line |
| D | Build a new Template using your Section | ~22 min | <name>-blockD.png |
| E | Whip-around wrap | ~3 min | - |

Total = 120 min.

### The Exposed Props pedagogical arc

Attendees meet Exposed Props four times: as consumer, then inspector, then builder, then consumer of their own build:

| Block | Role |
| --- | --- |
| **A** | **Consumer** of someone else's exposed prop, changes it on an existing Section |
| **A2** | **Inspector**: opens a pre-created Section and views an exposed prop from the inside |
| **B** | **Builder**: marks one prop on their new Section as exposed |
| **D** | **Consumer of their own** exposed prop, overrides it on the Template they build |

---

### Session 1, Block A: Update the pre-built Template (~20 min)

The Template the setup script created for everyone. Every attendee performs the identical 8 steps.

**Attendee card (Block A):**

-   **Step 1: Open the Template we're all using.**

    -   Log in at app.contentstack.com (or your regional Studio host).
    -   In the top nav, click **Studio**.
    -   From the project dropdown, select **Red Panda**.
    -   In the left sidebar, click **Compositions**.
    -   Click the **Templates** tab (top of the Compositions view).
    -   In the list, find and click **{{TEMPLATE\_NAME}}**.
    -   Wait for the canvas to load.
    -   **Verify:** the header at the top of the canvas reads {{TEMPLATE\_NAME}} and the canvas shows some rendered content (not a blank page).
    -   **If it looks different:** blank canvas usually means your canvas-app isn't running / environment URL is wrong. Check the pre-work step "Connect the Canvas so it renders." Ping Slack.
-   **Step 2: Point the canvas at the entry we're all using.**

    -   In the top bar of the canvas, find the **entry selector**, a pill showing the currently-selected entry name.
    -   Click it to open the entry picker.
    -   In the search box, type **{{ENTRY\_NAME}}**.
    -   Click the matching entry.
    -   Wait ~2 seconds for the canvas to re-render.
    -   **Verify:** you can see the heading text {{EXPECTED\_HEADING\_TEXT}} somewhere on the canvas.
    -   **If you don't see it:** the entry may not be published to preview yet. Ask the facilitator to re-run the setup script's seed step.
-   **Step 3: Find the Section Slot we're all filling.**

    -   Open the **Layers** panel on the left of the canvas (click the Layers icon if it's collapsed).
    -   Look for a tree of composition nodes: the Template at the top, Sections nested below.
    -   Scroll the tree until you see a row labelled **Section Slot: {{SECTION\_SLOT\_NAME}}**.

        -   This is different from a regular Slot. Section Slots are named and can only accept Sections (not raw components).
    -   Click that row once to select it.
    -   **Verify:** the canvas highlights a rectangular region showing a "Drop a Section here" placeholder.
    -   **If the row is nested and collapsed:** click the expand arrow on any parent row to show its children.
-   **Step 4: Drop the Section we're all dropping.**

    -   Open the **Palette** (also on the left. Toggle if you're on the Layers view).
    -   Click the **Sections** tab in the Palette.
    -   Scroll or search for **{{SECTION\_TO\_DROP}}**.
    -   Drag {{SECTION\_TO\_DROP}} onto the highlighted "Drop a Section here" region from Step 3.
    -   Release the mouse.
    -   **Verify:** the Layers panel now shows {{SECTION\_TO\_DROP}} as a child row nested inside {{SECTION\_SLOT\_NAME}}. The canvas shows the Section's rendered content.
    -   **If nothing lands:** you may have dropped onto the wrong region. Undo (Cmd/Ctrl+Z) and try again, hovering over the exact highlighted slot region.
-   **Step 5: Change the exposed prop we're all changing.**

    -   With {{SECTION\_TO\_DROP}} still selected in Layers (or click it once), look at the right side of the screen.
    -   Open the **Properties** panel (right rail).
    -   Find the field labelled **{{EXPOSED\_PROP\_NAME}}**. Its current value should be {{OLD\_VALUE}}.
    -   Change it to {{NEW\_VALUE}}.

        -   If it's a dropdown, click and pick.
        -   If it's a text box, click, clear, type the new value.
        -   If it's a boolean, toggle.
    -   Click outside the field (or press Tab) so the change commits.
    -   **Verify:** the canvas re-renders and reflects the new value.
    -   **If Properties panel is empty:** you may have deselected. Click {{SECTION\_TO\_DROP}} in Layers again.
-   **Step 6: Save.**

    -   Look at the top-right of the canvas.
    -   You should see an **"Unsaved changes"** indicator and a **Save** button.
    -   Click **Save**.
    -   **Verify:** the "Unsaved changes" indicator disappears. A "Saved" toast may briefly appear.
-   **Step 7: Deploy to preview.**

    -   In the top-right, find the **Deploy** button (may be next to Save).
    -   Click **Deploy**.
    -   A modal opens listing environments.
    -   Select **{{PREVIEW\_ENV\_NAME}}**.
    -   Click **Confirm** (or **Deploy** inside the modal).
    -   **Verify:** a **"Deployed"** toast appears.
-   **Step 8: Open the preview URL.**

    -   Open a new browser tab.
    -   Navigate to **{{PREVIEW\_URL\_PATTERN}}**.
    -   Wait for the page to load.
    -   **Verify:** your Step-5 change is visible on the live preview page.
    -   **Screenshot:** take a screenshot of the page. Name the file <your-name>-blockA.png. Post it to Slack.

**What we all experienced:** marketing composes without a developer (Steps 1 to 6). Deploy goes live (Steps 7 to 8). No code, no ticket, no delay.

**Attendee card:**

> # Session 1: Block B, Build the {{NEW\_SECTION\_NAME}} Section
> 
> **Time:** ~62 minutes. Everyone builds the identical Section.
> 
> ## Part 1: Create the Section (5 min)
> 
> In Studio, open the **Red Panda** project, go to **Compositions**, click the **Sections** tab, then click **\+ New Section**.
> 
> -   Name: **{{NEW\_SECTION\_NAME}}**
> -   UID: **{{NEW\_SECTION\_UID}}**
> -   Linked schema, connect to content type: **{{LINKED\_CT\_UID}}**
> 
> Click **Create**. Empty canvas opens.
> 
> ## Part 2: Simple binding (10 min)
> 
> **Step 2.** In the Palette, open **Components**, then drag **{{SIMPLE\_TEXT\_COMPONENT}}** onto the canvas.
> 
> **Step 3.** Select it, open **Properties**, find its text prop, click the binding (chain-link) icon, and pick **{{LINKED\_CT\_UID}}.{{SIMPLE\_TEXT\_FIELD}}**. Success: canvas shows real content, the sample entry's actual {{SIMPLE\_TEXT\_FIELD}} value.
> 
> ## Part 2b: Expose one prop for future Template authors (8 min)
> 
> **What we're doing:** you bound the component to CMS data. Now expose ONE of its props so that when a Template drops your Section, the Template's author can override that prop per-instance without editing the Section itself.
> 
> **Step 3.5.** Select the same {{SIMPLE\_TEXT\_COMPONENT}} on the canvas.
> 
> **Step 3.6.** In Properties, find the **{{PROP\_TO\_EXPOSE}}** prop.
> 
> **Step 3.7.** Click the **expose icon** next to {{PROP\_TO\_EXPOSE}} (usually a "surface up" icon or a checkbox labelled "Expose"). This surfaces the prop up from the component to the Section level.
> 
> **Step 3.8.** Configure the exposed prop:
> 
> -   **Name at Section level:** {{EXPOSED\_PROP\_ALIAS}} (this is what Template authors see).
> -   **Default value:** leave as-is.
> 
> Confirm.
> 
> Success: Layers panel shows a new **Exposed: {{EXPOSED\_PROP\_ALIAS}}** node at the Section level.
> 
> **Conceptually:** bindings pull data FROM the CMS. Exposed props push overridability UP to the Template author. Together they cover the two directions of Section flexibility: content from CMS, per-instance settings from the Template.
> 
> **Sales positioning line worth remembering:**
> 
> > "When engineering builds a Section, they decide which props marketing can override per-Template, and which stay locked. That's how you keep brand consistency while giving marketing autonomy. Exposed props are the governance surface."
> 
> ## Part 3: Modular Blocks binding via Repeater (18 min)
> 
> **Step 4.** In the Palette, open **Smart Containers**, then drag **Repeater** below the Heading you placed.
> 
> **Step 5.** Select the Repeater, open **Properties**, find **Source**, click the binding icon, and pick **{{LINKED\_CT\_UID}}.{{MODULAR\_BLOCKS\_FIELD}}**. This tells the Repeater: "iterate over every block in {{MODULAR\_BLOCKS\_FIELD}} and render each one."
> 
> **Step 6.** Inside the Repeater, drop two components as a type-mapped children set, because Modular Blocks have per-block-type schemas:
> 
> -   Drag **{{MB\_BLOCK\_COMPONENT\_1}}** inside the Repeater. In Properties, set its **Block type** to **{{MB\_BLOCK\_TYPE\_1}}**.
> -   Drag **{{MB\_BLOCK\_COMPONENT\_2}}** inside the Repeater as a sibling. Set its **Block type** to **{{MB\_BLOCK\_TYPE\_2}}**.
> 
> Studio auto-picks which component to render per block based on the block type on each item.
> 
> **Step 7.** Toggle **Preview Mode** on the Repeater so you see all iterations, not just one. Success: canvas shows the sample entry's actual body blocks. Each block type renders through its matching component.
> 
> ## Part 4: Multiple Group binding via a second Repeater (12 min)
> 
> **Step 8.** In the Palette, open **Smart Containers**, then drag another **Repeater** below the previous one.
> 
> **Step 9.** Select this Repeater, find **Source**, click the binding icon, and pick **{{LINKED\_CT\_UID}}.{{MULTIPLE\_GROUP\_FIELD}}**. Multiple Group works identically to Modular Blocks from Studio's angle: it's a list, so a Repeater iterates it. Difference: every item has the SAME schema (no per-type dispatch).
> 
> **Step 10.** Drag **{{MG\_COMPONENT}}** inside this Repeater.
> 
> **Step 11.** Bind:
> 
> -   label prop maps to **{{MG\_SUB\_FIELD\_LABEL}}** (auto-scoped to current iteration).
> -   href prop maps to **{{MG\_SUB\_FIELD\_URL}}**.
> 
> Success: canvas shows N items, one per entry in {{MULTIPLE\_GROUP\_FIELD}}, with real labels + URLs.
> 
> ## Part 5: Condition Block (12 min)
> 
> **Step 12.** In the Palette, open **Smart Containers**, then drag **Condition Block** below the Multiple Group Repeater.
> 
> **Step 13.** Select it, open **Properties**, go to **Condition**, and build the rule:
> 
> -   Field: **{{CONDITION\_FIELD}}**
> -   Operator: **equals**
> -   Value: **{{CONDITION\_VALUE}}**
> 
> "Only render the children of this block when the entry's {{CONDITION\_FIELD}} equals {{CONDITION\_VALUE}}."
> 
> **Step 14.** Drop **{{CONDITIONAL\_COMPONENT}}** inside the Condition Block. Success: canvas shows or hides the child depending on whether the sample entry meets the condition.
> 
> ## Part 6: Save + verify (5 min)
> 
> **Step 15.** Save.
> 
> **Step 16.** Open the **Templates** tab, open any Template, then confirm **{{NEW\_SECTION\_NAME}}** appears in the Palette under Sections.
> 
> **Step 17.** Take a screenshot named <your-name>-blockB.png showing your finished Section with all constructs visible. Post to Slack.
> 
> **What we all just built:**
> 
> -   Simple field binding (Part 2)
> -   Exposed prop (Part 2b): the governance surface for downstream Template authors
> -   Modular Blocks binding via Repeater with per-block-type children (Part 3): the "list of mixed types" pattern
> -   Multiple Group binding via Repeater with a single component (Part 4): the "list of same-type items" pattern
> -   Conditional rendering via Condition Block (Part 5): "show this only when"
> 
> These five primitives cover ~90% of real Section shapes on a marketing site.

### Session 1, Block A2: Look inside a pre-created Section (~8 min)

Before building a Section from scratch in Block B, open one the setup script already built. Reading a working example first makes Block B far less abstract.

**Attendee card (Block A2):**

-   **Time:** ~8 minutes. Read-only. Nothing to Save or Deploy.
-   **Step 1: Open the reference Section.**

    -   In Studio, open the **Red Panda** project, go to **Compositions**, and click the **Sections** tab.
    -   Find and click **{{REFERENCE\_SECTION\_NAME}}**.
    -   Wait for the Section canvas to load.
    -   **Verify:** the Section canvas shows real rendered content from the seeded entry (not blank / not placeholder).
-   **Step 2: Read the Layers panel.**

    -   Open Layers (left rail).
    -   Notice the structure the setup script built. Look for these three kinds of rows:

        -   A regular component row (bound to a CT field).
        -   An **Exposed:** row at the Section level (indicating an exposed prop).
        -   A smart container row, usually **Repeater** or **Condition Block**.
-   **Step 3: Spot the binding.**

    -   In Layers, click the bound component row (Step 2, first bullet).
    -   Open the **Properties** panel (right rail).
    -   Look for a prop whose value shows a **binding icon** (chain-link) next to it, or displays as {{ct\_field\_path}}\-style syntax.
    -   Hover the icon. The tooltip usually reads something like "Bound to <field>".
    -   **Read it aloud to yourself:** "This prop's value comes from the CMS field X."
-   **Step 4: Spot the exposed prop.**

    -   Back in Layers, click the **Exposed:** row.
    -   Notice it's at the Section-level, not scoped to any single component.
    -   Read the exposed prop's name. This is the knob a Template author can turn.
    -   **Realize:** this is exactly the kind of knob you turned from the outside in Block A. Now you're seeing it from the inside.
-   **Step 5: Spot the smart container.**

    -   In Layers, click the Repeater (or Condition Block) row.
    -   In Properties, notice its **Source** field points at a repeating field on the linked CT (Repeater) or its **Condition** field defines a rule (Condition Block).
    -   If it's a Repeater: toggle **Preview Mode** in Properties. Watch the canvas render N iterations instead of one.
    -   If it's a Condition Block: notice which children are rendered vs hidden based on the seeded entry's data.
-   **Step 6: Screenshot + post.**

    -   Take a screenshot of the Layers panel with the structure visible.
    -   Name it <your-name>-blockA2.png.
    -   Post to Slack.

**What we all saw:** everything you're about to build in Block B already exists in miniature here: a binding, an exposed prop, a smart container. You're copying a working pattern, not inventing from a blank page.

---

### Session 1, Block B: Build the {{NEW\_SECTION\_NAME}} Section (~58 min)

Everyone builds the identical Section using every Studio primitive: Simple bindings, Exposed Props, Modular Blocks (via Repeater), Multiple Group (via Repeater), Condition Block.

**Attendee card (Block B):**

-   **Time:** ~58 minutes.
-   **Prereq:** you inspected the same construct set in {{REFERENCE\_SECTION\_NAME}} in Block A2. Now build them yourself.

#### Part 1: Create the Section (5 min)

-   **Step 1: Open the New Section modal.**

    -   In Studio, open the **Red Panda** project, go to **Compositions**, and click the **Sections** tab.
    -   Click the **\+ New Section** button (top-right of the Sections list).
    -   The Create New Section modal opens.
-   **Step 2: Fill in the modal.**

    -   **Name:** type {{NEW\_SECTION\_NAME}}.
    -   **UID:** type {{NEW\_SECTION\_UID}}.

        -   Must be lowercase / underscores / digits only, must start with a letter.
    -   **Linked schema, connect to content type:** open the dropdown, search for {{LINKED\_CT\_UID}}, select it.
    -   Click **Create**.
    -   **Verify:** an empty Section canvas opens with {{NEW\_SECTION\_NAME}} in the header.

#### Part 2: Simple binding (10 min)

-   **Step 3: Drop the first component.**

    -   Open the **Palette** (left rail).
    -   Click the **Components** tab.
    -   Find {{SIMPLE\_TEXT\_COMPONENT}} in the list.
    -   Drag it onto the empty canvas.
    -   Release.
    -   **Verify:** the component renders on the canvas with placeholder or default content. Layers panel shows {{SIMPLE\_TEXT\_COMPONENT}} as a child of the Section.
-   **Step 4: Bind its text prop to a CT field.**

    -   Select {{SIMPLE\_TEXT\_COMPONENT}} on the canvas (or click it in Layers).
    -   Open **Properties** (right rail).
    -   Find the text prop.
    -   Click the **binding icon** (chain-link) at the right end of the text row.

        -   Tooltip: "Bind to CMS field" or similar.
    -   The field picker opens.
    -   In the picker, drill down from **{{LINKED\_CT\_UID}}** to **{{SIMPLE\_TEXT\_FIELD}}**, then click **Bind** (or Confirm).
    -   **Verify:** the canvas re-renders. The component now shows the seeded entry's real {{SIMPLE\_TEXT\_FIELD}} value (not placeholder).

#### Part 2b: Expose one prop for future Template authors (8 min)

**What we're doing:** bindings pull data FROM the CMS. Exposed props push overridability UP to the Template author. Together they cover the two directions of Section flexibility.

-   **Step 5: Find the prop to expose.**

    -   With {{SIMPLE\_TEXT\_COMPONENT}} still selected, look at the Properties panel.
    -   Locate the prop named {{PROP\_TO\_EXPOSE}}.
-   **Step 6: Click the expose control.**

    -   To the right of {{PROP\_TO\_EXPOSE}}'s value, look for the expose icon (usually a "surface up" arrow or a toggle labelled "Expose").

        -   Hover it. The tooltip should say "Expose this prop" or "Allow Template author to override".
    -   Click it.
    -   **Verify:** an "Expose prop" configuration panel opens.
-   **Step 7: Configure the exposed prop.**

    -   **Name at Section level:** enter {{EXPOSED\_PROP\_ALIAS}} (this is what Template authors see).
    -   **Default value:** leave as-is.
    -   Click **Confirm** (or Save).
    -   **Verify:** in Layers, a new row appears at the Section level labelled **Exposed: {{EXPOSED\_PROP\_ALIAS}}**.
-   **Sales positioning line worth memorizing:**

    > "When engineering builds a Section, they decide which props marketing can override per-Template, and which stay locked. That's how you keep brand consistency while giving marketing autonomy. Exposed props are the governance surface."


#### Part 3: Modular Blocks binding via Repeater (18 min)

-   **Step 8: Drop a Repeater.**

    -   Open the Palette, then the **Smart Containers** tab.
    -   Find **Repeater**.
    -   Drag it onto the canvas, below the component you already placed.
    -   Release.
    -   **Verify:** Layers shows a Repeater row at the Section level, empty inside.
-   **Step 9: Bind the Repeater's Source to a Modular Blocks field.**

    -   Select the Repeater in Layers.
    -   In Properties, find the **Source** field.
    -   Click its binding icon (chain-link).
    -   In the field picker, drill down from **{{LINKED\_CT\_UID}}** to **{{MODULAR\_BLOCKS\_FIELD}}**, then click **Bind**.
    -   **What this does:** "iterate over every block in {{MODULAR\_BLOCKS\_FIELD}} and render one child per iteration."
    -   **Verify:** the Repeater row in Layers shows its Source is bound.
-   **Step 10: Drop the first block-type child.**

    -   Open the Palette, then the Components tab.
    -   Drag {{MB\_BLOCK\_COMPONENT\_1}} **inside** the Repeater (drop it onto the Repeater's inner drop zone in Layers).
    -   Release.
    -   Select the newly-dropped {{MB\_BLOCK\_COMPONENT\_1}}.
    -   In Properties, find the **Block type** field (only visible inside a Modular Blocks Repeater).
    -   Set it to {{MB\_BLOCK\_TYPE\_1}}.
-   **Step 11: Drop the second block-type child.**

    -   Open the Palette, then the Components tab.
    -   Drag {{MB\_BLOCK\_COMPONENT\_2}} inside the Repeater (as a sibling to the first child).
    -   Select it.
    -   Set its **Block type** to {{MB\_BLOCK\_TYPE\_2}}.
-   **Step 12: Turn on Preview Mode.**

    -   Select the Repeater itself (not its children).
    -   In Properties, find the **Preview Mode** toggle.
    -   Turn it ON.
    -   **Verify:** the canvas now shows ALL iterations: every block in the seeded entry's {{MODULAR\_BLOCKS\_FIELD}} renders, each dispatched to the matching block-type component.

#### Part 4: Multiple Group binding via a second Repeater (12 min)

-   **Step 13: Drop a second Repeater.**

    -   In the Palette, open Smart Containers, then drag another Repeater onto the canvas, below the first Repeater.
-   **Step 14: Bind Source to the Multiple Group field.**

    -   Select the new Repeater.
    -   In Properties, find **Source**, click the binding icon, pick {{LINKED\_CT\_UID}}.{{MULTIPLE\_GROUP\_FIELD}}, and click Bind.
    -   **Difference from Modular Blocks:** every item in a Multiple Group has the SAME schema. No per-type dispatch needed.
-   **Step 15: Drop the item component.**

    -   In the Palette, open Components, then drag {{MG\_COMPONENT}} inside this second Repeater.
-   **Step 16: Bind two of its props.**

    -   Select {{MG\_COMPONENT}}.
    -   In Properties, find its label prop, click the binding icon, pick {{MG\_SUB\_FIELD\_LABEL}}, and click Bind.

        -   The picker automatically scopes to the current iteration's group.
    -   Find its href prop, click the binding icon, pick {{MG\_SUB\_FIELD\_URL}}, and click Bind.
    -   **Verify:** the canvas shows N items rendered, one per entry in {{MULTIPLE\_GROUP\_FIELD}}, each with real label + URL.

#### Part 5: Condition Block (12 min)

-   **Step 17: Drop a Condition Block.**

    -   In the Palette, open Smart Containers, then drag **Condition Block** onto the canvas, below the Multiple Group Repeater.
-   **Step 18: Configure the condition.**

    -   Select the Condition Block.
    -   In Properties, go to the **Condition** section.
    -   Build the rule:

        -   **Field:** {{CONDITION\_FIELD}} (pick from a field picker).
        -   **Operator:** select **equals**.
        -   **Value:** enter {{CONDITION\_VALUE}}.
    -   **What this does:** "only render children of this block when the entry's {{CONDITION\_FIELD}} equals {{CONDITION\_VALUE}}."
-   **Step 19: Drop the conditional child.**

    -   In the Palette, open Components, then drag {{CONDITIONAL\_COMPONENT}} inside the Condition Block.
    -   **Verify:** the child renders on the canvas if the seeded entry meets the condition. Otherwise it's hidden. Switch entries via the entry selector to see both states.

#### Part 6: Save + verify (5 min)

-   **Step 20: Save the Section.**

    -   Click **Save** (top-right).
    -   **Verify:** "Unsaved changes" indicator disappears.
-   **Step 21: Confirm it's in the Palette.**

    -   Navigate to Templates tab.
    -   Open any Template.
    -   Open the Palette, then the Sections tab.
    -   Search for {{NEW\_SECTION\_NAME}}.
    -   **Verify:** it's listed.
-   **Step 22: Screenshot + post.**

    -   Screenshot the Section canvas showing all constructs (Simple binding + Exposed prop node + both Repeaters + Condition Block).
    -   Name it <your-name>-blockB.png.
    -   Post to Slack.

**What we all built:**

-   **Simple binding** (Part 2)
-   **Exposed prop** (Part 2b): the governance surface for downstream Template authors
-   **Modular Blocks via Repeater** (Part 3): "list of mixed types" pattern
-   **Multiple Group via Repeater** (Part 4): "list of same-type items" pattern
-   **Conditional rendering** (Part 5): "show this only when"

These five primitives cover ~90% of real Section shapes on a marketing site.

---

### Session 1, Block C. Concept: what is a Template URL? (~9 min)

Facilitator-led. Attendees don't click yet. This is the concept moment.

-   **1\. The problem it solves (2 min).**

    -   A visitor navigates to /blog/hello-world. Something has to answer that request.
    -   **Traditional site:**

        -   A developer wrote a route file for /blog/:slug.
        -   Fetches the entry, renders.
        -   New page kind = new route file = PR = deploy.
    -   **With Studio:**

        -   Your app has ONE catch-all route.
        -   A Studio Template with URL pattern /blog/{{entry.slug}} claims the request.
        -   Studio resolves the entry whose slug = "hello-world".
        -   Renders the Template with that entry as its data source.
    -   **Payoff:** every new entry of the connected content type becomes a new live URL automatically. Marketing publishes a blog\_post entry with slug spring-launch at 5 PM Friday, so /blog/spring-launch is live seconds later. No route file, no PR, no deploy.
-   **2\. Anatomy of a URL pattern (3 min).**

    -   Every URL pattern is plain text with {{...}} slots.
    -   Static text is literal. Slots get substituted per request.
    -   Facilitator points at a real Red Panda URL pattern on screen and walks through it aloud.
-   **3\. The five variable types (3 min).**

    | Variable | Example | Resolves to |
    | --- | --- | --- |
    | Entry field: {{entry.<field>}} | /blog/{{entry.slug}} | Value of that field on the matching entry |
    | Entry reference: {{entry.<ref>.<sub>}} | /blog/{{entry.category.slug}}/{{entry.slug}} | Follows a single-reference, reads a field on the referenced entry |
    | Entry system fields: {{entry.uid}}, {{entry.locale}} | /preview/{{entry.uid}} | Studio-managed built-ins |
    | Taxonomy: {{taxonomy.<uid>}} | /{{taxonomy.region}}/products/{{entry.slug}} | Taxonomy term slug on the entry |
    | Context: {{context.locale}} | /{{context.locale}}/blog/{{entry.slug}} | Request-side metadata (where visitor comes from) |

-   **4\. Common shapes on real customer sites (1 min).**

    | Use case | Pattern |
    | --- | --- |
    | Blog post detail | /blog/{{entry.slug}} |
    | Product PDP | /products/{{entry.slug}} (or sku) |
    | Locale-scoped blog | /{{context.locale}}/blog/{{entry.slug}} |
    | Reference-nested path | /blog/{{entry.category.slug}}/{{entry.slug}} |
    | One-off marketing page | /campaigns/spring-2026 (static, no variables) |

-   **5\. The sales demo line to memorize:**

    > "So this Template's URL pattern is /blog/{{entry.slug}}. Marketing publishes a new blog\_post entry with slug spring-launch, and /blog/spring-launch goes live automatically, rendered by this Template. No developer touch. This is what happens when marketing ships a campaign at 5 PM on a Friday and doesn't need engineering."

    -   Prospects perk up here. Save it verbatim.
-   **Facilitator "watch-for" traps:**

    -   "What if two Templates match the same URL?" Studio picks the most-specific match (more literals wins, then longer patterns). Brief answer, no detour.
    -   "Can the URL pattern change after I set it?" Yes, editable. Existing entries re-resolve.
    -   "What if two entries have the same slug?" Studio picks the first. Second silently 404s. Content-modeling issue.

---

### Session 1, Block D: Build the {{NEW\_TEMPLATE\_NAME}} Template (~22 min)

Everyone builds the identical Template using their Block-B Section + one existing Section.

**Attendee card (Block D):**

-   **Step 1: Open the New Template modal.**

    -   In Studio, open the **Red Panda** project, go to **Compositions**, and click the **Templates** tab.
    -   Click **\+ New Template** (top-right).
    -   A modal opens with template-type options.
-   **Step 2: Pick Connected Template.**

    -   In the modal, click **Create Connected Template**.
    -   A second modal opens with three fields.
-   **Step 3: Fill in the Template details.**

    -   **Name:** {{NEW\_TEMPLATE\_NAME}}.
    -   **Template UID:** {{NEW\_TEMPLATE\_UID}}.
    -   **Connect To Content Type:** open the dropdown, search for {{CONNECTED\_CT\_UID}}, select it.
    -   Click **Create**.
    -   **Verify:** an empty Template canvas opens with {{NEW\_TEMPLATE\_NAME}} in the header.
-   **Step 4: Set the URL pattern.**

    -   On the top bar of the canvas, look for the **URL** icon (link/chain icon, next to the Preview Entry chip).
    -   Click it.
    -   The **Edit URL** modal opens.
    -   In the Preview URL Pattern field, type {{URL\_PATTERN}}.

        -   You can type {{ to open an inline variable picker.
    -   Click **Save**.
    -   **Verify:** the top bar shows {{URL\_PATTERN}}.
    -   **Reminder from Block C:** this pattern is what links visitor requests to the entry Studio renders.
-   **Step 5: Point the canvas at the preview entry.**

    -   Click the entry selector in the top bar.
    -   Search for {{TARGET\_ENTRY\_FOR\_PREVIEW}} and select it.
-   **Step 6: Drop the existing Section.**

    -   Open the Palette, then the Sections tab.
    -   Find {{EXISTING\_SECTION\_ON\_TEMPLATE}}.
    -   Drag it onto the top of the canvas.
    -   **Verify:** the Section renders with the entry's real content.
-   **Step 7: Drop YOUR Block-B Section.**

    -   Open the Palette, then the Sections tab.
    -   Search for {{NEW\_SECTION\_NAME}} (the one you built in Block B).
    -   Drag it below the existing Section.
    -   **Verify:** your Section renders with {{TARGET\_ENTRY\_FOR\_PREVIEW}}'s real content. Layers panel shows both Sections in order.
-   **Step 8: Override YOUR exposed prop.**

    -   Select {{NEW\_SECTION\_NAME}} on the canvas (or in Layers).
    -   In Properties, find {{EXPOSED\_PROP\_ALIAS}}, the prop you exposed in Block B's Part 2b.
    -   Change it from its default to {{TEMPLATE\_LEVEL\_OVERRIDE\_VALUE}}.
    -   **Verify:** the canvas re-renders with the override applied.
    -   **Realize:** this override lives on THIS Template only. Other Templates that use {{NEW\_SECTION\_NAME}} still see the default.
-   **Step 9: Save.**

    -   Click **Save**.
    -   **Verify:** "Unsaved" indicator gone.
-   **Step 10: Deploy to preview.**

    -   Click **Deploy**, select {{PREVIEW\_ENV\_NAME}}, then click **Confirm**.
    -   **Verify:** "Deployed" toast.
-   **Step 11: Open the preview URL.**

    -   In a new browser tab, open {{TEMPLATE\_PREVIEW\_URL\_FOR\_ENTRY}}.
    -   **Verify:** page shows both Sections with the override applied.
    -   **Screenshot:** save it as <your-name>-blockD.png and post it to Slack.

**What we all built:**

-   A new Template that renders every entry of {{CONNECTED\_CT\_UID}} at {{URL\_PATTERN}}.
-   It composes the Section YOU built alongside an existing Red Panda Section.
-   With a per-Template override on YOUR exposed prop.
-   No engineering. No code. No deploy pipeline.

---

### Session 1, Block E: Whip-around (~3 min)

-   Each attendee, one sentence: "The thing that clicked for me was"
-   Facilitator captures for Session 2 opener.

**End-of-Session-1 deliverables per attendee:** 4 screenshots in Slack: blockA.png, blockA2.png, blockB.png, blockD.png.

---

## SESSION 2: Code + Skills + Running Claude as an Agent (2 hrs)

Session 1 taught them everything a marketer does. Session 2 shows everything an engineer does, via LLM Skills so they can run it without being engineers.

The arc is bottom-up: learn each Skill individually first (Blocks B to D), then see how one meta-Skill (decompose-design) chains them all from a design brief in a single prompt (Block E). Attendees end the session recognizing every step the orchestrator runs because they've run each one themselves.

### Session 2 timing

| # | Block | Time | Deliverable |
| --- | --- | --- | --- |
| A | Concept: Registered Components + LLM Skills | ~10 min | Understanding |
| B | Build + register a React component via register-component Skill | ~20 min | <name>-blockB.png |
| C | Build a Section via build-section Skill (individual) | ~20 min | <name>-blockC.png |
| D | Build a Template via build-connected-template Skill (individual) | ~20 min | <name>-blockD.png |
| **E** | **Orchestrator: decompose-design Skill takes a design brief + chains build-section and build-connected-template** | **~30 min** | **<name>-blockE.png** |
| F | Manual tweak in Canvas on the decompose-design output | ~15 min | <name>-blockF.png |
| G | Whip-around wrap | ~5 min | - |

Total = 120 min.

---

### Session 2, Block A. Concept: Registered Components + LLM Skills (~10 min)

Facilitator delivers on screen. Attendees don't touch keyboards yet.

-   **1\. What "registration" means (3 min).**

    -   Engineering already writes React components. Those are React functions in the repo, shipped through git/PR/deploy.
    -   **Registration** = adding one line per component telling Studio: "this component exists, has these props, expose it in the Palette."
    -   **This is the ONE-TIME engineering cost.** After registration:

        -   Marketing sees the component as a drag-and-drop tile.
        -   Marketing uses it in Sections + Templates forever without touching code.
    -   **The component library the prospect already has = the component library Studio uses.**

        -   If the prospect's team uses **Tailwind + shadcn/ui / Radix / Headless UI**, they already have Layer-1 atomics (<Heading>, <Text>, <Image>, <Button>) and Layer-2 containers (Card, Dialog, Split, the same shape as shadcn/ui compound components).
        -   Registration wraps each with a 5-line schema. The React code doesn't change. The design system stays intact.
        -   Studio "just gets a name" for each component so Marketing can find it in the palette.
    -   **Sales lines to memorize:**

        > "Engineering registers a component ONCE. After that, marketing composes with it forever. That's the split."


> "And if your team already uses Tailwind and shadcn/ui or Radix, you already have a component library. Registration is a 5-line change per component. You keep the design system, Studio gets a name for it."

-   **2\. What an LLM Skill actually does (3 min).**

    -   A **Skill** is a prompt-based capability that Claude Code / Cursor / Windsurf runs against your Contentstack stack.
    -   Not a new SDK, a wrapper around the same APIs.
    -   Skills turn "register a component" or "build a Section using this component and this CT" from a 15-line code exercise into a single English sentence.
    -   **What Skills automate that manual code doesn't:**

        -   Read existing state.
        -   Author idempotently (safe to re-run, no duplicates).
        -   Update local state file for resumability.
        -   Publish to preview when done.
    -   **Sales positioning:** Studio + Skills = "marketing composes without engineering. Engineering builds components without hand-writing every Section."
-   **3\. How Skills, Studio Canvas, and code fit together (2 min).**

    ```
    Individual skills — the building blocks:

      Component file (code) ─┐
                              ├─→ register-component skill ─→ Palette entry
      Skill prompt ──────────┘

      Palette entry ─→ build-section skill ─→ Section in Studio

      Section ─→ build-connected-template skill ─→ Template in Studio (with URL pattern)

    Orchestrator skill — one prompt runs the whole chain:

      Design brief (Figma / screenshot / description)
                            │
                            ▼
                    decompose-design skill
                            │
         ┌──────────────────┼──────────────────┐
         ▼                  ▼                  ▼
      build-section    build-section    build-connected-template
         (per Section identified)         (assembles the Template)
                            │
                            ▼
                Template in Studio (fully wired)

    Then, in any of the above paths:

      Template ─→ open in Canvas → tweak → Save + Deploy → live URL
    ```

    Blocks B to D exercise the individual skills. Block E exercises the orchestrator that chains them from a design.

-   **4\. The prospect question this answers (2 min).**

    > "Engineering owns the component library and the one-time registration file. Skills sit next to engineering: they scaffold new Sections and Templates in seconds by driving the Content Management API (CMA), and the decompose-design skill takes a Figma or a mockup and chains those Section + Template skills end-to-end to build a whole page in one prompt. Marketing owns the Studio canvas: composition, per-page tweaks, Deploy. Everyone's job gets faster because everyone's staying in their lane."


---

### Session 2, Block B: Build + register {{NEW\_COMPONENT\_NAME}} (~20 min)

**Attendee card (Block B):**

-   **Step 1: Create the component file.**

    -   Open the Red Panda canvas-app repo in your editor (Cursor / VS Code).
    -   Navigate to src/components/.
    -   Create a new file: {{NEW\_COMPONENT\_NAME}}.tsx.
    -   Paste the exact contents from the facilitator's screen:

        ```
        export function {{NEW_COMPONENT_NAME}}({ message, variant }) {
          return (
            <div className={`announcement-bar announcement-bar--${variant}`}>
              {message}
            </div>
          );
        }
        ```

    -   Save the file.
    -   **Verify:** no editor squiggles / TypeScript errors.
-   **Step 2: Open Claude Code / Cursor / Windsurf in the canvas-app repo.**
-   Confirm your terminal / IDE is cd'd into the canvas-app repo root.

    -   Open Claude Code (or your chosen LLM tool).
-   **Step 3: Paste the register-component Skill prompt.**

    -   Paste this exact prompt into Claude Code:

        > "Register a new component {{NEW\_COMPONENT\_UID}} from ./components/{{NEW\_COMPONENT\_NAME}} with props: message (string) and variant (choice of info/warning/success). Use the register-component skill."

    -   Press Enter.
    -   **Watch what happens:**

        -   The Skill reads your existing registerComponent(...) file.
        -   It inserts one new registerComponent({...}) block at the correct location.
        -   It doesn't touch existing registrations.
-   **Step 4: Verify the file edit.**

    -   Open the registration file (usually src/register-components.ts or similar).
    -   Search for type: "{{NEW\_COMPONENT\_UID}}".
    -   **Verify:** the new registerComponent block exists with the props schema you specified.
-   **Step 5: Hot-reload / restart dev server.**

    -   If dev server is running, it should hot-reload automatically.
    -   If not, restart it: press Ctrl+C, then run npm run dev.
-   **Step 6: Confirm the component in the Studio Palette.**

    -   Go to your Red Panda Studio project.
    -   Open any Template.
    -   Open the Palette, then the Components tab.
    -   Search for {{NEW\_COMPONENT\_NAME}}.
    -   **Verify:** it's listed.
    -   **Screenshot:** save it as <your-name>-blockB.png and post it to Slack.

---

### Session 2, Block C: Build a Section via build-section Skill (individual, ~20 min)

**Attendee card (Block C):**

-   **Step 1: Paste the build-section Skill prompt into Claude Code.**

    > "Build a new Section named {{SKILL\_SECTION\_NAME}} (UID {{SKILL\_SECTION\_UID}}) linked to CT {{SKILL\_SECTION\_LINKED\_CT}}. Contains one {{NEW\_COMPONENT\_UID}} component. Bind message to the CT's {{SKILL\_SECTION\_BOUND\_FIELD}} field. Expose variant for per-Template author override. Use the build-section skill."

    -   Press Enter.
    -   **Watch:** the Skill will:

        -   Query Contentstack to confirm the CT + field exist.
        -   Author a Section composition entry with the right shape.
        -   Save + publish to preview.
-   **Step 2: Verify in Studio.**

    -   In Red Panda Studio, open the Sections tab.
    -   Search for {{SKILL\_SECTION\_NAME}}.
    -   **Verify:** it's there.
    -   Click to open it.
    -   **Verify:** the canvas shows your {{NEW\_COMPONENT\_NAME}} (from Block B) bound to {{SKILL\_SECTION\_BOUND\_FIELD}} from a sample entry.
    -   **Screenshot:** save it as <your-name>-blockC.png and post it to Slack.

---

### Session 2, Block D: Build a Template via build-connected-template Skill (individual, ~20 min)

**Attendee card (Block D):**

-   **Step 1: Paste the build-connected-template Skill prompt.**

    > "Build a Connected Template named {{SKILL\_TEMPLATE\_NAME}} (UID {{SKILL\_TEMPLATE\_UID}}) connected to CT {{SKILL\_TEMPLATE\_CT}}. URL pattern: {{SKILL\_TEMPLATE\_URL\_PATTERN}}. Drop two Sections in order: first {{EXISTING\_SECTION\_FOR\_TEMPLATE}}, then {{SKILL\_SECTION\_UID}} from the previous step. Use the build-connected-template skill."

    -   Press Enter.
    -   **Watch:** the Skill will:

        -   Create the Template composition entry.
        -   Set the URL pattern.
        -   Wire both section-composition references in the Template's UI tree.
        -   Save + publish.
-   **Step 2: Verify in Studio.**

    -   In Red Panda Studio, open the Templates tab.
    -   Search for {{SKILL\_TEMPLATE\_NAME}}.
    -   **Verify:** it's there.
    -   Click to open it.
    -   **Verify:** Layers panel shows both Sections in order.
    -   **Verify:** the URL bar at the top of the canvas shows {{SKILL\_TEMPLATE\_URL\_PATTERN}} (Session 1 Block C's concept just landed).
    -   **Screenshot:** capture the Layers panel, save it as <your-name>-blockD.png, and post it to Slack.

---

### Session 2, Block E. Orchestrator: decompose-design from a design brief (~30 min)

The individual Skills in Blocks C and D each did one thing. This is the meta-Skill: hand it a design (Figma / screenshot / short description), it emits a build sheet listing every Section the page needs, then chains build-section for each new Section AND calls build-connected-template to assemble the whole page. One prompt. Everything you did manually in C and D, done as sub-steps here.

**Attendee card (Block E):**

-   **Time:** ~30 minutes.
-   **Prereq:** you already know what build-section and build-connected-template do (from Blocks C and D). This block chains them.
-   **Step 1: Get the design brief from the facilitator.**

    -   Facilitator posts a shared design brief in Slack. It's ONE of:

        -   A **Figma URL** to a specific frame.
        -   A **screenshot** of a Red Panda page (image URL).
        -   A **short description doc** (Google Doc / paste).
    -   Copy the brief URL or paste content. You'll pass it to the Skill in the next step.
    -   **Verify:** everyone in the workshop is looking at the same design.
-   **Step 2: Paste the decompose-design Skill prompt into Claude Code.**

    -   Open Claude Code in the canvas-app repo (same environment as Blocks B to D).
    -   Paste this exact prompt, substituting the design brief from Step 1:

> "Decompose this design and build the page: {{DESIGN\_BRIEF}}. Target CT: {{DECOMPOSE\_TARGET\_CT}}. URL pattern: {{DECOMPOSE\_URL\_PATTERN}}. Name the resulting Template {{DECOMPOSE\_TEMPLATE\_NAME}} (UID {{DECOMPOSE\_TEMPLATE\_UID}}). Use the decompose-design skill. It should emit a build sheet, then chain build-section for each new Section identified and build-connected-template to assemble the Template."

-   Press Enter.
-   **Step 3: Watch the build sheet emerge.**

    -   The Skill first parses the design and emits a **build sheet** in the terminal / chat output. Read it.
    -   The build sheet typically contains:

        -   **Decisions made**: governance choices (which props are content-bound, which are exposed).
        -   **Components table**: atomic components the page uses.
        -   **Per-Section drop-tree + bind tables**: one entry per Section.
        -   **Template assembly**: the order Sections appear + URL pattern.
        -   **Proposed schema**: any new fields the CT would need.
        -   **Unmapped fields**: anything the design implies but the CT doesn't have.
    -   **Verify:** you can see a plan, not a black box. The skill shows its work before writing anything.
    -   **If the build sheet looks wrong:** the facilitator's design brief may be ambiguous. Flag on Slack. In real use you'd iterate: "redo, but the Card Grid is 3-column not 2-column."
-   **Step 4: Approve the build sheet.**

    -   The Skill pauses after emitting the build sheet and asks whether to proceed.
    -   Respond **"yes proceed"** (or the exact phrase the Skill prompts for).
    -   **Verify:** the Skill logs "Proceeding to author Sections + Template."
-   **Step 5: Watch the chained sub-Skills run.**

    -   The Skill now calls build-section once per new Section identified in the build sheet.
    -   For each Section, the terminal / chat shows:

        -   Which Section it's authoring.
        -   The CMA POST it's making.
        -   Success / failure.
    -   Then it calls build-connected-template with the Section list + URL pattern.
    -   **Verify:** the Skill logs completion of every sub-call. No failures.
    -   **If a sub-call fails:** the Skill reports which Section + why. Common failures:

        -   CT field named in a binding doesn't exist, so the schema mismatches and a field has to be added first.
        -   Component named in a Section doesn't exist in the palette, so it needs register-component first.
    -   Facilitator triages on Slack.
-   **Step 6: Verify the Template in Studio.**

    -   In Red Panda Studio, open the Templates tab.
    -   Search for {{DECOMPOSE\_TEMPLATE\_NAME}}.
    -   **Verify:** it's there.
    -   Click to open.
    -   **Verify:** Layers panel shows every Section from the build sheet, in the order the build sheet specified. Canvas renders real content from a seeded entry.
-   **Step 7: Verify the new Sections in Studio.**

    -   On the Sections tab, each new Section the build sheet named should now exist.
    -   Click one to open. **Verify:** it has the bindings + exposed props the build sheet promised.
-   **Step 8: Open the live preview URL.**

    -   In a new browser tab, open {{DECOMPOSE\_PREVIEW\_URL}}.
    -   **Verify:** the page renders end-to-end with everything the design brief asked for.
    -   **Screenshot:** save it as <your-name>-blockE.png and post it to Slack. Include the Layers panel + the live preview in the same screenshot if you can (or two screenshots stitched).

**What we all just experienced:** one prompt and one design brief produced a full working page in Studio. The Skill did in 5 minutes what would take an engineer 45 minutes of manual composition-JSON authoring. And every sub-step it ran (build-section, build-connected-template) is a Skill you've already run by hand in Blocks C and D, no magic, just orchestration.

**Sales positioning line worth memorizing:**

> "Hand a designer's Figma to the decompose-design Skill. It reads the design, plans the Sections, and builds them all, chaining the individual build-section and build-connected-template Skills we used. This is the shortest possible path from a design mockup to a live URL in your Studio project."

---

### Session 2, Block F: Take over the canvas (~15 min)

Skills scaffolded the Template in Block E. Marketing takes it from here.

**Attendee card (Block F):**

-   **Step 1: Open the decompose-design-authored Template.**

    -   On the Templates tab, click {{DECOMPOSE\_TEMPLATE\_NAME}}.
-   **Step 2: Rearrange Sections.**

    -   Open Layers.
    -   Pick any two adjacent Sections and swap their order (drag one above the other).
    -   **Verify:** the canvas reflects the new order.
-   **Step 3: Override an exposed prop on one Section.**

    -   Select any Section on the canvas that has an exposed prop (the build sheet in Block E promised which ones).
    -   In Properties, change one exposed prop to a different value.
    -   **Verify:** the canvas re-renders with the override applied.
-   **Step 4: Save.**
-   **Step 5: Deploy.**

    -   Click Deploy, select {{PREVIEW\_ENV\_NAME}}, then click Confirm.
-   **Step 6: Verify live.**

    -   Open {{DECOMPOSE\_PREVIEW\_URL}} in a new tab.
    -   **Verify:** the page shows the reordered Sections + the exposed-prop override.
    -   **Screenshot:** save it as <your-name>-blockF.png and post it to Slack.

**What we all experienced:** Skills built the scaffold from a design. Marketing finished it in the canvas. This is the whole Studio value proposition landing in one workflow.

---

### Session 2, Block G: Whip-around (~5 min)

-   Each attendee: "Between the individual Skills (B/C/D) and the decompose-design orchestrator (E), the moment that surprised me most was"

**End-of-Session-2 deliverables per attendee:** 5 screenshots (blockB.png to blockF.png).

---

## Facilitator's placeholder lock-in checklist

Because the setup script provisions an identical, standardized environment for everyone, these values are resolved **once** against the seeded Red Panda content and reused every cohort (Studio-team deliverable #8).

### Session 1 lock-in

-   **Block A (10 values):**

    -   {{TEMPLATE\_NAME}}
    -   {{ENTRY\_NAME}}
    -   {{EXPECTED\_HEADING\_TEXT}}
    -   {{SECTION\_SLOT\_NAME}}
    -   {{SECTION\_TO\_DROP}}
    -   {{EXPOSED\_PROP\_NAME}}
    -   {{OLD\_VALUE}}
    -   {{NEW\_VALUE}}
    -   {{PREVIEW\_ENV\_NAME}}
    -   {{PREVIEW\_URL\_PATTERN}}
-   **Block A2 (1 value):**

    -   {{REFERENCE\_SECTION\_NAME}} (the fully-built reference Section from Studio-team deliverable #3 that attendees inspect)
-   **Block B (19 values):**

    -   {{NEW\_SECTION\_NAME}}
    -   {{NEW\_SECTION\_UID}}
    -   {{LINKED\_CT\_UID}}
    -   {{SIMPLE\_TEXT\_COMPONENT}}
    -   {{SIMPLE\_TEXT\_FIELD}}
    -   {{PROP\_TO\_EXPOSE}}
    -   {{EXPOSED\_PROP\_ALIAS}}
    -   {{MODULAR\_BLOCKS\_FIELD}}
    -   {{MB\_BLOCK\_TYPE\_1}}
    -   {{MB\_BLOCK\_COMPONENT\_1}}
    -   {{MB\_BLOCK\_TYPE\_2}}
    -   {{MB\_BLOCK\_COMPONENT\_2}}
    -   {{MULTIPLE\_GROUP\_FIELD}}
    -   {{MG\_COMPONENT}}
    -   {{MG\_SUB\_FIELD\_LABEL}}
    -   {{MG\_SUB\_FIELD\_URL}}
    -   {{CONDITION\_FIELD}}
    -   {{CONDITION\_VALUE}}
    -   {{CONDITIONAL\_COMPONENT}}
-   **Block C:** no placeholders, teach against an existing Red Panda Template URL pattern.
-   **Block D (8 values):**

    -   {{NEW\_TEMPLATE\_NAME}}
    -   {{NEW\_TEMPLATE\_UID}}
    -   {{CONNECTED\_CT\_UID}}
    -   {{URL\_PATTERN}}
    -   {{TARGET\_ENTRY\_FOR\_PREVIEW}}
    -   {{EXISTING\_SECTION\_ON\_TEMPLATE}}
    -   {{TEMPLATE\_LEVEL\_OVERRIDE\_VALUE}}
    -   {{TEMPLATE\_PREVIEW\_URL\_FOR\_ENTRY}}

### Session 2 lock-in (20 values)

-   **Block B (3 values):**

    -   {{NEW\_COMPONENT\_NAME}}
    -   {{NEW\_COMPONENT\_UID}}
    -   {{NEW\_COMPONENT\_PROPS}}
-   **Block C (4 values):**

    -   {{SKILL\_SECTION\_NAME}}
    -   {{SKILL\_SECTION\_UID}}
    -   {{SKILL\_SECTION\_LINKED\_CT}}
    -   {{SKILL\_SECTION\_BOUND\_FIELD}}
-   **Block D (6 values):**

    -   {{SKILL\_TEMPLATE\_NAME}}
    -   {{SKILL\_TEMPLATE\_UID}}
    -   {{SKILL\_TEMPLATE\_CT}}
    -   {{SKILL\_TEMPLATE\_URL\_PATTERN}}
    -   {{EXISTING\_SECTION\_FOR\_TEMPLATE}}
    -   {{TEMPLATE\_PREVIEW\_URL\_FOR\_ENTRY}} (can reuse from Session 1 Block D)
-   **Block E (6 values):**

    -   {{DESIGN\_BRIEF}}: the shared design (Figma URL / screenshot URL / description doc) the facilitator posts in Slack at the start of Block E. Every attendee decomposes the same design.
    -   {{DECOMPOSE\_TARGET\_CT}}: the CT to connect the resulting Template to.
    -   {{DECOMPOSE\_URL\_PATTERN}}: URL pattern for the resulting Template (e.g., /campaigns/{{entry.slug}}).
    -   {{DECOMPOSE\_TEMPLATE\_NAME}}: human-readable name for the Template the orchestrator produces.
    -   {{DECOMPOSE\_TEMPLATE\_UID}}: UID for that Template.
-   {{DECOMPOSE\_PREVIEW\_URL}}: resolved preview URL for one specific entry, used to verify the result in Block E Step 8 + Block F Step 6.
-   **Block F:** no additional placeholders (reuses Block E's Template + preview URL and Session 1's {{PREVIEW\_ENV\_NAME}}).

---

## Success signals

### End of Session 1. Every attendee can:

-   Show 4 screenshots proving Blocks A / A2 / B / D.
-   Open a pre-built Section and read its wiring aloud: the binding, the exposed prop, the smart container (from Block A2).
-   Explain what a URL pattern is + read one aloud.
-   Articulate the Repeater vs Condition Block distinction to a peer.
-   Explain the difference between bindings (data from CMS) and exposed props (control up to Template author).

### End of Session 2. Every attendee can:

-   Show 5 screenshots proving Blocks B / C / D / E / F.
-   Explain what "registration" means + why it's a one-time cost.
-   Explain what an LLM Skill adds on top of the plain SDK.
-   Explain the difference between an **individual Skill** (build-section, build-connected-template) and the **orchestrator Skill** (decompose-design), and why the orchestrator is the "give me a page from a Figma" story.
-   Articulate the handoff moment from Skills to Canvas (Block F): "Skills scaffold. Humans finish."
-   Read a decompose-design build sheet aloud and explain what each section (Decisions made / Components table / drop-tree / Template assembly / Unmapped fields) is doing.

### 2 weeks after Session 2:

-   Every AE has run a live 15-min demo to a colleague, recorded it, sent the link to the facilitator.
-   Facilitator has spot-checked 2 to 3 recordings for consistent vocabulary + confident URL-pattern explanation.
-   At least one Studio-attached deal has advanced a stage.

---

## What the workshop explicitly does NOT cover

Cut on purpose: sales learns these from a Solutions Consultant, not here:

-   Deep SDK internals or server-side rendering (SSR) bootstrap.
-   Framework-recipe deltas (Next.js vs Remix vs Astro details).
-   Deployment / hosting architecture.
-   Studio project + stack provisioning (the setup script does it. Attendees run it).
-   Pricing motion (separate RevOps enablement).
-   Competitive-intel deep dive.

Teaching sales to **escalate confidently** is better than teaching them everything shallowly.

## See also

-   [For Business: home](/docs/studio/studio-business-value): Studio positioning, buyer personas, competitive framing.
-   [For Authors: Glossary](/docs/studio/studio-glossary-for-authors): every Studio term in one line. Distribute to attendees as pre-work.
-   [For Authors: Quickstart](/docs/studio/author-your-first-edit): the 5-min flow the workshop deepens.
-   [For Authors: Compose a seasonal landing page in 15 minutes](/docs/studio/compose-a-seasonal-landing-page): a second worked walkthrough attendees can practise on their own before Session 1.
