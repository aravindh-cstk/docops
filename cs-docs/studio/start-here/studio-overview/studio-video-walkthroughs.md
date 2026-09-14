---
title: "Studio Video Walkthroughs"
description: "Six recorded walkthroughs, about 34 minutes in total. Each one runs against a real stack and mirrors a written guide, so you can watch, read, or do both."
url: /studio/studio-video-walkthroughs
---

# Studio Video Walkthroughs

## Video walkthroughs

Six recorded walkthroughs, about 34 minutes in total. Each one runs against a real stack and mirrors a written guide, so you can watch, read, or do both.

Pick your track. If you author content, you need one video. If you're a developer wiring Studio into an app, there are five and the order matters.

## If you author content

You don't need any of the developer videos. This one assumes a developer has already set Studio up and built some Sections for you.

Your browser can't play this video. [Download it instead](https://assets.contentstack.io/v3/assets/blt54a810a25f9de55a/bltb8b0ce603e95d36b/6a6b93cceafa8023d29bf4ca/06-author-first-page.mp4).

**Author your first page (3:55).** Build a page out of ready-made Sections. The content comes from the CMS automatically, so there's no data binding to do. Toggle preview mode to see real content fill in, change one exposed property, deploy.

Written guide: [Your first edit in 5 minutes](/docs/studio/author-your-first-edit).

## If you're a developer

**Watch these in order.** Unlike the written guides, each video picks up where the last one stopped. They refer back to what was built and forward to what's coming. Watching out of order means missing the setup a video assumes.

### 1\. Set up Studio in your app (8:00)

Your browser can't play this video. [Download it instead](https://assets.contentstack.io/v3/assets/blt54a810a25f9de55a/bltce3163d804cf475a/6a6b939942e0b5067cad0c88/01-quickstart-setup.mp4).

Everything you need before writing code (a stack, an environment with your app's base URL, a delivery token with preview enabled), then a Studio project, three SDKs, one contentstack/ folder, and a catch-all route. Ends on the empty canvas that tells you it worked.

Written guide: [Quickstart 1: Set up Studio in your app](/docs/studio/quickstart-set-up-studio-in-your-app).

### 2\. Register a component with a Slot (4:42)

Your browser can't play this video. [Download it instead](https://assets.contentstack.io/v3/assets/blt54a810a25f9de55a/blt0cc031f8b5bb9bce/6a6b93bf7af7623dc1b6479a/02-quickstart-registering.mp4).

Starts with why: Studio's built-in components are a fine starting point, but you want your own. Then registers five small single-purpose components rather than one big Hero, and composes them on the canvas. Explains what each part of a registration declares, including the slot that lets one component hold another.

Written guide: [Quickstart 2: Register a component with a Slot](/docs/studio/quickstart-register-a-component-with-a-slot).

### 3\. Build a Simple Section and expose props (7:26)

Your browser can't play this video. [Download it instead](https://assets.contentstack.io/v3/assets/blt54a810a25f9de55a/blte3d3e645862b1807/6a6b93c3724440e94b83ea3d/03-quickstart-simple-section.mp4).

Solves the repetition left over from video 2: build the Hero once as a Section, link it to a schema, and every Template on that schema binds the data itself. Also sets up the section canvas route and finally explains what the Canvas URL is for, turns a button into a Section Slot the Template fills, and exposes a property the Template can control.

Written guide: [Quickstart 3: Build a Simple Section + Expose Props](/docs/studio/quickstart-build-a-simple-section).

### 4\. Smart Containers (Repeaters and Condition Blocks) 5:31

Your browser can't play this video. [Download it instead](https://assets.contentstack.io/v3/assets/blt54a810a25f9de55a/blta12f42e43e98b8b6/6a6b93c64d864f52430e9a1f/04-quickstart-list-section.mp4).

Builds three cards manually first, so you can see the flaw: add a fourth card later and none of the bindings follow. Replaces them with a Repeater bound to the list, then shows why modular blocks additionally need Condition Blocks: each block-type has a different shape, so a Condition Block controls which design renders. Finishes by assembling a full page.

Written guides: [Quickstart 4: Build a List Section with Section Slots](/docs/studio/quickstart-build-a-list-section) and [Smart Containers](/docs/studio/smart-containers-overview).

### 5\. Create a Template and its URL (4:15)

Your browser can't play this video. [Download it instead](https://assets.contentstack.io/v3/assets/blt54a810a25f9de55a/blt8aadda129e3f7baa/6a6b93c9c40efb34e5d32c5a/05-quickstart-template.mp4).

Why a Template binds to a content type rather than a page: one Template serves every entry, with the data swapped at request time. Then the URL half in detail, the two places a pattern may already be configured, why Studio picks it up for you, and how URL variables identify the right entry. Ends deployed and live.

Written guide: [Quickstart 5: Create a Template + URL](/docs/studio/quickstart-create-a-template).

## Accessibility

These videos don't have captions yet. Every step in all six is also written out in the guides linked above, so nothing here is only available as audio.

## See also

-   [Getting Started](/docs/studio/getting-started-with-studio): the written path, including the LLM-driven fast route
-   [Docs home](/docs/studio/studio-documentation-home)
