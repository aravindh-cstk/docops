---
title: "Choosing Your Studio Setup Path"
description: "Compare the Enterprise and Quickstart setup paths in Contentstack Studio to choose the right starting point for your project or evaluation."
url: /studio/choosing-your-studio-setup-path
uid: blt80d3f8dc34928c4d
---

# Choosing Your Studio Setup Path

## Choosing Your Studio Setup Path

Pick the path that matches your situation.

## Enterprise: Bring Your Own Components First

You already have a React component library (Storybook, design system package, Pattern Lab, etc.) and you want authors composing against **your** components, not Studio's defaults.

**The order:**

1.  **[Set up Studio](/docs/studio/setup-overview)**: install the SDKs, configure your stack, create a project.
2.  **[Register your components](/docs/studio/register-components)**: your Button, Card, Hero appear in Studio's palette.
3.  **[Start authoring](/docs/studio/using-sections-and-components-in-a-template)**: build templates and sections using your registered components.

Skipping step 2 means rebuilding components you've already designed. Use Studio's defaults to validate your approach, not for shipping.

Recipe: [**enterprise-day-one**](/docs/studio/enterprise-setup-from-install-to-first-authored-page) walks the full flow end to end.

## Just Exploring

You're evaluating Studio, building a demo, or running a proof of concept.

> **Glossary:** A **canvas-app** is your own React application that hosts the Studio SDK. The **Playground Canvas** is a Studio-hosted iframe for authoring without a canvas-app configured. The **Website Canvas** is the canvas-app you own and deploy, used once you move beyond evaluation.

1.  **[Set up Studio](/docs/studio/setup-overview)**: create a project; no canvas-app required yet.
2.  **[Playground Canvas](/docs/studio/try-studio-in-the-playground-canvas-without-an-app)**: author compositions directly against Studio's hosted iframe with no Canvas URL configured. Studio's default components are the palette. You cannot deploy from Playground, but you can author and test (authoring, binding to CMS data, and saving all work).
3.  **[First page in 5 minutes](/docs/studio/quickstart-guide-to-creating-your-first-page)**: when you're ready, wire a canvas-app and template preview route to see a real page render.

You can graduate to the enterprise path anytime, registering your components doesn't remove Studio's defaults; both coexist in the palette. Compositions you build in Playground keep working once you switch to a Website Canvas (your own app).

## How the Docs Treat Both Audiences

Every page has an audience tag at the top:

-   **both**: works for either path
-   **author**: content-authoring focused
-   **developer**: code-focused

Use the audience tag (or just the table of contents) to find the right page for what you're doing.

## Next

-   [Set up Studio](/docs/studio/setup-overview)
-   [Bring your own components](/docs/studio/bring-your-own-components)
