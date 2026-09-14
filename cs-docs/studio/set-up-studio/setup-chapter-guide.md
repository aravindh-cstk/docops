---
title: "Setup Chapter Guide"
description: "Install + configure Studio + Live Preview + Delivery SDK in your app, then create + wire your Studio project."
url: /studio/setup-chapter-guide
---

# Setup Chapter Guide

## Setup: reference chapter

> **Reference, not a starting point.** If this is your first time here, do NOT start on this page. Start with **[Getting Started: Quickstart 1](/docs/studio/quickstart-set-up-studio-in-your-app)**, the 15-minute walkthrough that installs both layers end-to-end. Come back to this chapter when you need reference depth: alternate render strategies, individual SDK reference, exhaustive troubleshooting.

Install + configure Studio + Live Preview + Delivery SDK in your app, then create + wire your Studio project. This chapter is the exhaustive reference for both layers. Quickstart 1 is the linear happy path through them.

> **Before you install anything, [check that Studio is enabled for your organisation](/docs/studio/check-studio-access).** A 10-second app-switcher check that saves a 20-minute "why is the canvas blank" investigation later.

## The install has two layers

![Studio install has two layers, your app (SDKs, canvas route, catch-all template route) feeds the Studio project (stack link, environment, language, canvas URL)](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am14788841d5c7a30a/2ad0b502e8cb94e3da2bb177/setup-two-layer-install.png)

**Layer 1: Your app.** Install the three SDKs (Delivery, Live Preview, Studio), bootstrap initStudio(...), add the section preview route + the catch-all template route.

**Layer 2: Your Studio project.** Create the project in app.contentstack.com, link it to your stack, configure environment + locale + canvas URL, verify.

Plan on ~15 minutes total if you already have a stack (~10 min for Layer 1, ~5 min for Layer 2). LLM path is closer to 5 min: run curl -fsSL https://studio-documentation.contentstackapps.com/install.sh | sh and ask "install Studio in this project" in Claude Code / Cursor / Copilot Chat.

**Newcomer? Start with [Quickstart 1: Setup](/docs/studio/quickstart-set-up-studio-in-your-app)**, the 15-minute walkthrough that follows both layers end-to-end. The reference below is for depth-first readers.

## On this chapter

-   [Check that Studio is enabled for your organisation](/docs/studio/check-studio-access): 10-second app-switcher check before you install anything. Run this first.
-   [Prerequisites](/docs/studio/review-prerequisites-before-you-start): Stack-side things you need (API key, delivery token, preview token, environment) before touching Studio.

### App prerequisites: install the SDKs in your app

-   [Install the Delivery SDK](/docs/studio/install-the-delivery-sdk): Reads published content from Contentstack's content delivery network (CDN). Studio asks it to fetch.
-   [Install Live Preview](/docs/studio/install-live-preview): Wires the draft-content pipe so Studio's canvas and your standalone preview see unpublished edits.
-   [Install the Studio SDK](/docs/studio/install-the-studio-sdk): The visual editor bridge: studioSdk, <StudioCanvas />, <StudioComponent />, hooks, and registration APIs.
-   [CSR vs SSR (choosing a render strategy)](/docs/studio/choosing-between-csr-and-ssr-rendering): Pick the fetch + render combination that fits your framework.
-   [SSR composition query](/docs/studio/ssr-composition-query): Server-render compositions with fetchCompositionData + <StudioComponent /> so the first HTML already contains the page.

### Studio project: create + wire your project

-   [Create a Studio project](/docs/studio/create-a-studio-project): Link a Contentstack to a new Studio project where authors compose pages.
-   [Playground Canvas](/docs/studio/try-studio-in-the-playground-canvas-without-an-app): Try Studio without a canvas-app. Studio's hosted iframe is the default until you set a Canvas URL. Useful for setup, sketching, and demos.
-   [Configure environment, language, and canvas URL](/docs/studio/configure-environment-language-and-canvas-url): Tell Studio which environment, locale, and section preview route to load. Setting the Canvas URL graduates the project out of Playground.
-   [Add the section preview route](/docs/studio/section-preview-route): The route in your app that mounts <StudioCanvas /> for Studio's iframe.
-   [Wire template preview routes](/docs/studio/template-preview-routes): Mount <StudioComponent /> on ONE catch-all route (default) so every URL on your site renders through Studio. No per-template route registration. Studio's Content Delivery API (CDA) query resolves the matching template for each URL.
-   [Layer 2 runbook (the human-only Studio web steps)](/docs/studio/manually-configuring-the-studio-web-app): Consolidated checklist for everything that happens in app.contentstack.com after Layer 1 (code-side) is wired. Includes the explicit "LLM can vs can't do" matrix.

### Verify + troubleshoot

-   [Verify end to end](/docs/studio/verify-your-studio-setup-end-to-end): Layered smoke test from Delivery SDK up through Studio canvas. Fix the lowest failing layer first.
-   [Troubleshoot](/docs/studio/troubleshoot-common-studio-issues): Common canvas, preview, and registration problems in roughly the order you'd hit them.
-   [Serve your canvas-app over HTTPS locally](/docs/studio/serve-your-canvas-app-over-https-locally): One fix for the "Studio can't reach localhost" class of errors (mixed-content, PNA, "SDK Not Initialized"). Works in every browser. Vite, Next.js, Remix, Astro, Nuxt, Angular, Webpack, CRA, custom Node/Express, Docker.

## See also

-   [Docs home](/docs/studio/studio-documentation-home)
