---
title: "Setup Overview"
description: "Learn how to set up Contentstack Studio by completing both layers of installation: wiring SDKs in your app and configuring a Studio project."
url: /studio/setup-overview
uid: blt9896528ab2a75f40
---

# Setup Overview

## Setup Overview

Studio install is two layers:

![Studio install has two layers — your app (SDKs, canvas route, catch-all template route) feeds the Studio project (stack link, environment, language, canvas URL)](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1c5f70cae4e25811/1c600dabe8f77c19f1294862/setup-two-layer-install.png)

[Prerequisites](/docs/studio/review-prerequisites-before-you-start) lists what you need from your Contentstack stack before starting (Stack API Key, Delivery Token, Preview Token, Environment, Language, Visual Editor enabled). Those are stack-side setup, covered in Contentstack's own docs.

## Reading Order

| Step | What you'll do |
| --- | --- |
| [Prerequisites](/docs/studio/review-prerequisites-before-you-start) | Checklist of what you need from your Contentstack stack |
| **Layer 1: Your app** |  |
| → [Install the Delivery SDK](/docs/studio/install-the-delivery-sdk) | Read published content from Contentstack's CDN |
| → [Install Live Preview](/docs/studio/install-live-preview) | Set up real-time updates for draft content |
| → [Install the Studio SDK](/docs/studio/install-the-studio-sdk) | Install, initialize, register components, fetch compositions, and mount the canvas |
| → [CSR vs SSR](/docs/studio/choosing-between-csr-and-ssr-rendering) | Pick a render strategy; covers SSR / SSG / RSC patterns + the searchQuery requirement |
| **Layer 2: Studio project** |  |
| → [Create a Studio project](/docs/studio/create-a-studio-project) | Link it to your stack |
| → [Configure environment + language + canvas URL](/docs/studio/configure-environment-language-and-canvas-url) | Project Settings |
| → [Add the section preview route](/docs/studio/section-preview-route) | <StudioCanvas /> mount |
| → [Wire template preview routes](/docs/studio/template-preview-routes) | ONE catch-all <StudioComponent /> mount (handles every URL) |
| **Final** |  |
| → [Verify end to end](/docs/studio/verify-your-studio-setup-end-to-end) | Layered smoke test |
| → [Troubleshoot](/docs/studio/troubleshoot-common-studio-issues) | When something doesn't work |

## Automated Setup with an LLM

```
npx @contentstack/studio-skills install
```

Then ask your LLM _"install Studio in this project"_. It will detect your framework, install the three SDKs, ask for your stack credentials, and wire everything up. Works in Claude Code, Cursor, Copilot Chat, and any general-purpose LLM.

## Time to First Canvas

Plan on ~15 minutes total if you already have a stack: - ~10 minutes for Layer 1 (installing + wiring the SDKs) - ~5 minutes for Layer 2 (creating the Studio project, configuring it)

The LLM path is closer to 5.
