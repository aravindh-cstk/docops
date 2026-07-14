---
url: /studio/setup-overview
marker: Studio
heading: Setup
audience: both
---

# Setup

Studio install has two layers: your app (SDKs, canvas route, catch-all template route) feeds the Studio project (stack link, environment, language, canvas URL).

Prerequisites lists what you need from your Contentstack stack before starting (Stack API Key, Delivery Token, Preview Token, Environment, Language, Visual Editor enabled). Those are stack-side setup, covered in Contentstack's own docs.

## Reading Order

| Step | What You'll Do |
| --- | --- |
| Prerequisites | Checklist of what you need from your Contentstack stack |
| **Layer 1: Your app** | |
| → Install the Delivery SDK | Read published content from Contentstack's CDN |
| → Install Live Preview | Configure real-time updates for draft content |
| → Install the Studio SDK | Install, initialize, register components, fetch compositions, and mount the canvas |
| → Client-side vs server-side rendering | Pick a render strategy. Covers server-rendering and static-generation patterns and the `searchQuery` requirement |
| **Layer 2: Studio project** | |
| → Create a Studio project | Link it to your stack |
| → Configure environment, language, and canvas URL | Project Settings |
| → Add the section preview route | `<StudioCanvas />` mount |
| → Wire template preview routes | A single catch-all `<StudioComponent />` mount (handles every URL) |
| **Final** | |
| → Verify end to end | Layered smoke test |
| → Troubleshoot | When something doesn't work |

## Automated Setup With an AI Assistant

```bash
npx @contentstack/studio-skills install
```

Then ask your AI assistant *"install Studio in this project"*. It detects your framework, installs the three SDKs, asks for your stack credentials, and wires everything up. Works in Claude Code, Cursor, Copilot Chat, and any general-purpose AI assistant.

## Time to First Canvas

Plan on ~15 minutes total if you already have a stack:
- ~10 minutes for Layer 1 (installing and wiring the SDKs)
- ~5 minutes for Layer 2 (creating the Studio project, configuring it)

The AI assistant path is closer to 5.
