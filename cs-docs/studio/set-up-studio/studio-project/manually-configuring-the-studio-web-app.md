---
title: "Layer 2 runbook: the human-only Studio web steps"
description: "A step-by-step runbook for the manual Studio web app configuration steps: creating a project, linking a stack, setting up environments, building sections and templates, and publishing compositions."
url: /studio/manually-configuring-the-studio-web-app
uid: blt3b3e64115e2a1a4b
---

# Layer 2 runbook: the human-only Studio web steps

## Layer 2 runbook: the human-only Studio web steps

Studio setup happens in two layers:

-   **Layer 1 (code)**: install SDKs, register components, write the canvas + template routes, configure .env, studioSdk.init. **An LLM or CLI script can do all of this.** The skills (install-studio, register-component, setup-section-preview, setup-template-preview-routes, configure-csr-vs-ssr) cover it.
-   **Layer 2 (Studio web app)**: create the project, link the stack, configure environment + locale + Canvas URL, drop components on a canvas, save sections, save templates, publish. **A human in a logged-in browser session must do all of this.** No LLM can drive Studio's canvas reliably (the drag-drop iframe doesn't honour synthetic events. The project + composition primitives are session-scoped).

This page is the consolidated **Layer 2 runbook**. Walk it once per stack after Layer 1 is complete. Verify each step in the live product.

## What an LLM / CLI can (and cannot) do

| Step | Who does it |
| --- | --- |
| install-studio: install the three SDKs into your app | LLM / CLI |
| register-component: read your component, write registration | LLM / CLI |
| setup-section-preview: add /canvas route | LLM / CLI |
| setup-template-preview-routes: add template render routes | LLM / CLI |
| configure-csr-vs-ssr: pick + wire the render path | LLM / CLI |
| import-design-tokens: register tokens from your design system | LLM / CLI |
| **Create the Studio project, link to a stack** | Human in app.contentstack.com |
| **Set Environment / Language / Canvas URL on the project** | Human in Studio Settings |
| **Drop sections / components on a canvas** | Human in Studio canvas |
| **Save sections / templates** | Human in Studio canvas |
| **Publish compositions** | Human in Studio canvas |
| verify-setup: confirm all four layers green | LLM / CLI (after Layer 2 is done) |
| troubleshoot-canvas: symptom-mapped diagnostic | LLM / CLI |

Skills like build-section, build-connected-template, use-repeater, use-condition-block, use-section-slot are **author guides**: they describe what a human should do in Studio's UI step-by-step. An LLM can read these to coach the user. It cannot execute them.

## The runbook: do these in order, in app.contentstack.com

### 1\. Create the Studio project (~1 min)

In Studio, open **New Project**, then pick the stack you wired in Layer 1.

Provisioning creates the **compositions content type** in your stack. Note the UID. To find it, open your project, go to Settings, then Configuration, and read "Composition Content Type". If it isn't compositions, set <PREFIX>\_CONTENTSTACK\_STUDIO\_CONTENT\_TYPE=<uid> in your app's .env.local (the install-studio skill writes a reasonable default that you may need to override).

### 2\. Configure the project (~2 min)

Open your project, then **Settings**, then **Configuration**:

-   **Environment**: pick the environment your app reads from (typically preview for authoring, production for visitor surfaces).
-   **Language**: pick your default locale (e.g. en-us). The UI calls this "Language". The SDK/API call it "locale". Same thing.
-   **Canvas URL**: the **path** of the route setup-section-preview mounted <StudioCanvas /> on (e.g. /canvas), NOT a full origin. Studio composes the iframe address as **Base URL (origin) + Canvas URL (path)**. The origin is the per-locale URL on the environment selected above. To find that value, open your stack, go to Settings, then Environments, then <env>, and read the URL for <locale>. Locally that is your dev origin (e.g. http://localhost:5173). An empty env Base URL = blank canvas.

Save. The Save button greys out post-save. That's confirmation.

### 3\. Confirm your components appear (~30 sec)

Open any section workspace. In the palette, expand **Registered Components**. Every component you registered in Layer 1 should appear as a tile with its displayName + thumbnailUrl. If you see blank tiles, the registration didn't take. Re-run register-component and check troubleshoot-canvas for the "bootstrap-missing" symptom.

### 4\. Build a section (~3-10 min, depending on complexity)

Open Sections, then **New Section**:

1.  **Connect A Schema**: pick a structural shape (Content Type / Global Field / Group / Modular Block / Block / Reference). NOT a scalar field (a section composes against a shape, not a value).
2.  **Drop components**: drag your registered components from the palette onto the section canvas.
3.  **Bind props**: for each component, the right-panel Data picker maps its props to fields on the linked schema via template.<field> paths. (Inside a Repeater, use repeater.<field> instead.)
4.  **Expose Section Props** (on Save): choose which component props template authors can override per-instance. Skip this and the section is locked at template-drop time.

Skill counterparts: build-section for the full task, use-repeater + use-condition-block + use-section-slot for the smart-container patterns inside a section.

### 5\. Build a template (~3-10 min)

Open Templates, then **New Template**:

1.  **Pick the connected content type.**
2.  **Pick a preview entry** to author against.
3.  **Drop sections** on the template canvas.
4.  **Set the URL pattern**: e.g. /blog/{{entry.slug}}, /products/{{entry.sku}}. This must match the route shape your app handles for <StudioComponent />. See [URL variables reference](/docs/studio/url-variables-reference) for everything you can put in the pattern.
5.  **Save.**

Skill counterparts: build-connected-template, wire-external-data.

### 6\. Publish + visit (~30 sec)

**Deploy** the composition (top-right in Studio canvas). Then hit the URL your template's pattern resolves to. Your app's <StudioComponent /> route should render the composition.

If it doesn't:

-   422 "compositions content type not found": see the [422 entry in Troubleshoot](/docs/studio/troubleshoot-common-studio-issues).
-   Canvas blank / wrong content: run verify-setup to walk the four-layer smoke test.
-   "Component 'X' is not registered": run troubleshoot-canvas with the symptom.

## Common questions

**Q: Can I script this with the Content Management API (CMA)?** A: Most steps yes (project creation + configuration + composition writes are all CMA-accessible), but the canvas-authoring UX (drag-drop, exposed props, preview entry selection) is intentionally human-driven. Studio is built so authors compose. Engineers prep. Don't try to script Layer 2 wholesale.

**Q: Can the LLM watch me do this and verify?** A: Yes. After each step, the LLM can call verify-setup to confirm the wiring downstream of that step is consistent. It can also drop into troubleshoot-canvas if anything looks off.

**Q: I'm provisioning a project from a continuous integration (CI) script. Can I skip Layer 2?** A: Partially. CMA endpoints exist for project creation + linking + environment/locale/canvas-URL setting. You can automate steps 1-2. Steps 4-6 (the actual composition authoring) are author-driven and shouldn't be in CI.

## See also

-   [Setup overview](/docs/studio/setup-overview): Layer 1 + Layer 2 framing.
-   [build-section](https://studio-documentation.contentstackapps.com/prompts/build-section.html), [build-connected-template](https://studio-documentation.contentstackapps.com/prompts/build-connected-template.html): the skill counterparts the LLM can read while you do Layer 2.
-   [verify-setup](https://studio-documentation.contentstackapps.com/prompts/verify-setup.html): run after each Layer 2 milestone.
-   [troubleshoot-canvas](https://studio-documentation.contentstackapps.com/prompts/troubleshoot-canvas.html): when something's not rendering right.
