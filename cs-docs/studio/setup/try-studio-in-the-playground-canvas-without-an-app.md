---
title: "Try Studio in the Playground Canvas Without an App"
description: "Learn how Playground Canvas lets you author compositions in Studio without configuring a canvas app, Canvas URL, or SDK installation."
url: /studio/try-studio-in-the-playground-canvas-without-an-app
uid: blt8d97cb3948d3e922
---

# Try Studio in the Playground Canvas Without an App

## Try Studio in the Playground Canvas Without an App

**Playground Canvas** is a built-in Studio canvas for authoring compositions without a canvas-app in your codebase. Studio hosts the iframe and ships the playground with its default components: no <StudioCanvas /> route, no Canvas URL configuration, no SDK install required in your app.

It's the fastest way to try Studio, build a demo, or sketch a composition before investing in the full integration. Once you're ready to ship to production, you graduate to a regular Canvas URL pointing at your own app.

## When You Get Playground Canvas

You're on Playground Canvas whenever **your project has no Canvas URL configured**. Studio checks:

![Decision — Canvas URL set: Website Canvas (needs the Studio SDK); not set: Playground Canvas (Studio's hosted iframe, no SDK required)](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6fc8e0203c4cf3cb/16a20638b22b395bcc1e10cd/setup-playground-vs-website-canvas.png)

You don't pick Playground explicitly; it's the default until you set a Canvas URL on the project ([Configure environment + language + canvas URL](/docs/studio/configure-environment-language-and-canvas-url)).

> **Quick start:** To begin composing in Playground, create a new Studio project and skip the Canvas URL field. Studio opens directly in Playground mode. When you're ready to connect your own app, set the Canvas URL in Project, Settings, Configuration.

## What You Can Do in Playground

| Feature | Playground | Website Canvas (your app) |
| --- | --- | --- |
| Drop Studio's built-in components onto the canvas | ✅ | ✅ |
| Drop your own [registered components](/docs/studio/bring-your-own-components) | ❌: Studio's playground iframe has no access to your component registry | ✅: Studio loads your SDK + components from your app |
| Build sections and templates | ✅ | ✅ |
| Bind components to real CMS data (entries, references) | ✅ | ✅ |
| Pin entries / pin queries (Freeform) | ✅ | ✅ |
| Save compositions | ✅ | ✅ |
| **Deploy** | ❌: disabled in playground | ✅ |
| Preview the composition against a real visitor URL | ❌: the playground is the only preview | ✅ via your template preview routes |

The deploy button is greyed out in playground mode with a tooltip:

> _"Deployment is disabled in the playground. Set up an app and configure the base URL in the settings to enable deployment."_

## Why Use Playground

-   **Onboarding:** try Studio in 60 seconds before convincing your team to wire up the SDK
-   **Sketching:** block out a section's layout while engineering is still building the components
-   **Demos & POCs:** share a composition without a deployment story
-   **Internal training:** content authors learn the UI without needing a live app
-   **Evaluation:** see whether Studio's authoring model fits your workflow before integrating

Authors who started in Playground keep their compositions when the project is later wired to a Website Canvas; the data model is the same.

## Limits of Playground

-   **Studio's default components only.** Your design system isn't in scope until you set up a Website Canvas. The cards, heroes, and buttons you see are Studio's defaults, useful for shape, but they won't match your brand.
-   **No external** [**Component Default Data**](/docs/studio/set-component-default-data)**.** The data prop on <StudioComponent /> comes from your app. Without an app, there is no place to pass external data, pricing, variants, feature flags, from. You can still bind to CMS entries via the Data Picker, but the external-data hook is not available in Playground.
-   **No deploy.** Whatever you build sits in your Studio project; visitors can't see it until you set up a Website Canvas + template preview routes ([Wire template preview routes](/docs/studio/template-preview-routes)).
-   **Internal-only preview URL.** The PLAYGROUND\_HOST\_URL is Studio-internal; you don't need to know or set it; Studio uses its own.

## Graduating to a Website Canvas

When you're ready to ship to your real site:

1.  Build your app's [canvas route](/docs/studio/section-preview-route) mounting <StudioCanvas />
2.  Wire your [template preview routes](/docs/studio/template-preview-routes) with <StudioComponent specOptions={...} />
3.  Set the **Canvas URL** on your Studio project ([Configure environment + language + canvas URL](/docs/studio/configure-environment-language-and-canvas-url)): the route **path** only, e.g. /canvas. The origin comes from the targeted environment's per-locale Base URL (your dev origin locally, your production origin in prod), not this field.
4.  [Register your components](/docs/studio/bring-your-own-components) in your canvas-app so they appear in Studio's palette
5.  The compositions you built in Playground still exist; they just now render against your components and your design tokens

The transition is one-way: once the Canvas URL is set, Studio uses it for all canvas previews on this project. You can clear the Canvas URL to drop back into Playground mode, but typical workflow is "Playground to Website Canvas, then stay there."

## Common Pitfalls

| Pitfall | Symptom | Fix |
| --- | --- | --- |
| Expecting your custom components in Playground | Palette shows only Studio's defaults | Set the Canvas URL to point at your app, then your registered components show up |
| Trying to deploy from Playground | Deploy button greyed out + tooltip about base URL | Set a Canvas URL on the project; deploy becomes available |
| Building a composition in Playground, then setting Canvas URL, components disappear | Your custom components were never in Playground; the dropped Studio-default components don't auto-swap | Re-author the canvas tree against your registered components, or set the Canvas URL first, then author |
| Confusion between Playground (Studio-hosted) and your canvas-app (<StudioCanvas /> route) | Authors don't know which iframe they're looking at | Studio's loading message reads _"Using playground environment"_ when on Playground; the canvas top bar surfaces a "Configuration" gear that lets you check + set the Canvas URL |

## How It Fits with the Rest of Setup

| Step | Where you are | What's running |
| --- | --- | --- |
| Created a new Studio project, no Canvas URL set | **Playground Canvas** | Studio's hosted iframe + Studio's defaults |
| Set a Canvas URL pointing at localhost during dev | **Website Canvas** (dev) | Your canvas-app at localhost:<port>/canvas |
| Set a production Canvas URL | **Website Canvas** (prod) | Your production canvas route |

The Canvas URL is the single switch.

## See Also

-   [Create a Studio project](/docs/studio/create-a-studio-project): making the project that defaults to Playground
-   [Configure environment + language + canvas URL](/docs/studio/configure-environment-language-and-canvas-url): the Canvas URL field is the one that graduates you out of Playground
-   [Add the section preview route](/docs/studio/section-preview-route): what you build in your app to host the Canvas URL
-   [Wire template preview routes](/docs/studio/template-preview-routes): the visitor-side rendering after Playground
-   [Bring your own components](/docs/studio/bring-your-own-components): once on Website Canvas, your components show up here
