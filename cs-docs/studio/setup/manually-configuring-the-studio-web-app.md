---
title: "Manually Configuring the Studio Web App"
description: "A step-by-step runbook for the manual Studio web app configuration steps: creating a project, linking a stack, setting up environments, building sections and templates, and publishing compositions."
url: /studio/manually-configuring-the-studio-web-app
uid: blt3b3e64115e2a1a4b
---

# Manually Configuring the Studio Web App

## Manually Configuring the Studio Web App

Studio setup happens in two phases:

-   **Code setup:** install SDKs, register components, write the canvas and template routes, configure .env, studioSdk.init. **An LLM or CLI script can do all of this.** The skills (install-studio, register-component, setup-section-preview, setup-template-preview-routes, configure-csr-vs-ssr) cover it.
-   **Studio web app setup:** create the project, link the stack, configure environment, locale, and Canvas URL, drop components on a canvas, save sections, save templates, publish. **A human in a logged-in browser session must do all of this.** No LLM can drive Studio's canvas reliably (the drag-drop iframe doesn't honour synthetic events; the project and composition primitives are session-scoped).

This page is the consolidated runbook for Studio web app setup. Walk it once per stack after the code setup is complete. Verify each step in the live product per the anti-hallucination rule.

## What an LLM / CLI Can and Cannot Do

| Step | Who does it |
| --- | --- |
| install-studio: install the three SDKs into your app | ✅ LLM / CLI |
| register-component: read your component, write registration | ✅ LLM / CLI |
| setup-section-preview: add /canvas route | ✅ LLM / CLI |
| setup-template-preview-routes: add template render routes | ✅ LLM / CLI |
| configure-csr-vs-ssr: pick and wire the render path | ✅ LLM / CLI |
| import-design-tokens: register tokens from your design system | ✅ LLM / CLI |
| **Create the Studio project, link to a stack** | ❌ Human in app.contentstack.com |
| **Set Environment / Language / Canvas URL on the project** | ❌ Human in Studio Settings |
| **Toggle Enable Freeform** | ❌ Human in Studio Settings |
| **Drop sections / components on a canvas** | ❌ Human in Studio canvas |
| **Save sections / templates** | ❌ Human in Studio canvas |
| **Publish compositions** | ❌ Human in Studio canvas |
| verify-setup: confirm all four layers green | ✅ LLM / CLI (after web app setup is done) |
| troubleshoot-canvas: symptom-mapped diagnostic | ✅ LLM / CLI |

Skills like build-section, build-connected-template, build-freeform-template, use-repeater, use-condition-block, use-section-slot are **author guides**; they describe what a human should do in Studio's UI step-by-step. An LLM can read these to coach the user; it cannot execute them.

## The Runbook: Do These in Order in app.contentstack.com

### 1\. Create the Studio project _(~1 min)_

Studio → **New Project** → pick the stack you wired in the code setup phase.

Provisioning creates the **compositions content type** in your stack. Note the UID, it appears at Project → Settings → Configuration → "Composition Content Type". If it isn't compositions, set <PREFIX>\_CONTENTSTACK\_STUDIO\_CONTENT\_TYPE=<uid> in your app's .env.local (the install-studio skill writes a reasonable default that you may need to override).

### 2\. Configure the project _(~2 min)_

Project → **Settings** → **Configuration**:

-   **Environment:** pick the environment your app reads from (typically preview for authoring, production for visitor surfaces).
-   **Language:** pick your default locale (e.g. en-us). The UI calls this "Language"; the SDK/API call it "locale". Same thing.
-   **Canvas URL:** the **path** of the route setup-section-preview mounted <StudioCanvas /> on (e.g. /canvas), NOT a full origin. Studio composes the iframe address as **Base URL (origin) + Canvas URL (path)**; the origin is the per-locale URL on the environment selected above (_Stack → Settings → Environments →_ _<env>_ _→ URL for_ _<locale>_, your dev origin locally, e.g. http://localhost:5173). An empty env Base URL = blank canvas.
-   **Enable Freeform:** toggle ON if you plan to author pages NOT tied to a content type (campaign landings, marketing, etc.). OFF by default, connected-only.

Save. The Save button greys out post-save; that's confirmation.

### 3\. Confirm your components appear _(~30 sec)_

Open any section workspace. Palette → expand **Registered Components**. Every component you registered in the code setup phase should appear as a tile with its displayName + thumbnailUrl. If you see blank tiles, the registration didn't take; re-run register-component and check troubleshoot-canvas for the "bootstrap-missing" symptom.

### 4\. Build a section _(~3-10 min, depending on complexity)_

Sections → **New Section**:

1.  **Connect a schema:** pick a structural shape (Content Type / Global Field / Group / Modular Block / Block / Reference). NOT a scalar field, a section composes against a shape, not a value.
2.  **Drop components:** drag your registered components from the palette onto the section canvas.
3.  **Bind props:** for each component, the right-panel Data picker maps its props to fields on the linked schema via template.<field> paths. (Inside a Repeater, use repeater.<field> instead.)
4.  **Expose section props** (on Save): choose which component props template authors can override per-instance. Skip, and the section is locked at template-drop time.

Skill counterparts: build-section for the full task, use-repeater + use-condition-block + use-section-slot for the smart-container patterns inside a section.

### 5\. Build a template _(~3-10 min)_

Templates → **New Template**:

1.  **Connected vs. freeform:** Connected if the page is one-of-N entries of a content type; Freeform if it's a one-off page. See choose-connected-vs-freeform.
2.  **Pick the connected content type** (Connected only).
3.  **Pick a preview entry** to author against.
4.  **Drop sections** on the template canvas.
5.  **Set the URL pattern:** e.g. /blog/{{entry.slug}}, /products/{{entry.sku}}. This must match the route shape your app handles for <StudioComponent />. See [URL variables reference](/docs/studio/url-variables-reference) for everything you can put in the pattern.
6.  **Save.**

Skill counterparts: build-connected-template, build-freeform-template, pin-entry-to-freeform, pin-query-to-freeform, wire-external-data.

### 6\. Publish and visit _(~30 sec)_

**Deploy** the composition (top-right in Studio canvas). Then hit the URL your template's pattern resolves to: your app's <StudioComponent /> route should render the composition.

If it doesn't:

-   422 "compositions content type not found" → see [troubleshoot.md → 422 entry](/docs/studio/troubleshoot-common-studio-issues).
-   Canvas blank / wrong content → run verify-setup to walk the four-layer smoke test.
-   "Component 'X' is not registered" → troubleshoot-canvas with the symptom.

## Common Questions

**Q: Can I script this with the CMA?** A: Most steps yes (project creation, configuration, and composition writes are all CMA-accessible), but the canvas-authoring UX (drag-drop, exposed props, preview entry selection) is intentionally human-driven. Studio is built so authors compose; engineers prep. Don't try to script the web app setup wholesale.

**Q: Can the LLM watch me do this and verify?** A: Yes, after each step the LLM can call verify-setup to confirm the wiring downstream of that step is consistent. It can also drop into troubleshoot-canvas if anything looks off.

**Q: I'm provisioning a project from a CI script. Can I skip this runbook?** A: Partially. CMA endpoints exist for project creation, linking, and environment/locale/canvas-URL setting; you can automate steps 1-2. Steps 4-6 (the actual composition authoring) are author-driven and shouldn't be in CI.

## See Also

-   [Setup overview](/docs/studio/setup-overview): code setup and web app setup framing.
-   [build-section](/docs/studio/build-and-use-sections), [build-connected-template](/docs/studio/connected-content-type), [build-freeform-template](/docs/studio/freeform-templates): the skill counterparts the LLM can read while you do the web app setup.
-   [verify-setup](/docs/studio/verify-your-studio-setup-end-to-end): run after each web app setup milestone.
-   [troubleshoot-canvas](/docs/studio/troubleshoot-common-studio-issues): when something's not rendering right.
