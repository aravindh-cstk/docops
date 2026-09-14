---
title: "Studio Glossary for Content Authors"
description: "Every term you'll hit as a content author, defined without engineering jargon. Bookmark this page. If a Studio doc uses a word that doesn't click, come."
url: /studio/studio-glossary-for-authors
---

# Studio Glossary for Content Authors

## Glossary: Studio in plain language

Every term you'll hit as a content author, defined without engineering jargon. Bookmark this page. If a Studio doc uses a word that doesn't click, come back here.

## The page-building vocabulary

**Template**: a reusable **page recipe**: a URL pattern (like /blog/:slug) plus the ordered list of Sections that go on it. Every page in your site is one Template applied to one piece of content. Think of it as the "shape" of a page kind (Blog Post, Product Page, Case Study).

**Section**: one **reusable block** on a page (the Hero, the Featured Cards, the Author Card, the Footer). Sections are what your engineering team registered. You drag them into place and fill them with content.

**Composition**: the general word Studio uses for both Templates and Sections. When docs say "compositions" it means "the things you compose on the canvas." Templates are compositions of type page. Sections are compositions of type section.

**Simple Section**: a Section built for **one specific type of content** (e.g., a Blog Post Hero bound to the blog\_post Content Type). Content auto-fills from the entry.

**List Section**: a Section that renders a **list** of items (e.g., a grid of related posts). Content comes from a list field on a Content Type.

**Content Type**: Contentstack's word for the **shape of a content record**, the fields a Blog Post has (title, body, cover\_image, author, etc.). Engineering defines these once. Authors fill them in the Entries area.

**Entry**: one **actual piece of content** filled against a Content Type. "This particular blog post" is an entry of the blog\_post Content Type.

## The Studio canvas

**Canvas**: the **preview area** in the middle of Studio where your page appears live as you edit. What you see is what visitors see.

**Palette**: the left-side panel listing all the Sections and components your engineering team registered. Drag from here onto the canvas.

**Layers**: the outline panel (also on the left) showing the tree of what's currently on your page. Click any layer to select it on the canvas.

**Properties panel**: the right-side panel that shows the settings, content, and styles for whatever you have selected on the canvas.

**Design Panel**: the sub-panel in Properties where you tweak visual settings (spacing, colours from your team's design tokens, alignment) without touching CSS.

## The advanced patterns

**Slot**: an **empty spot inside a Section** where you can drop other components. Like a picture frame with a blank canvas inside (Section provides the frame, you provide what goes in).

**Section Slot**: a **carved-out area of a designed Section** where authors can drop other Sections into it. Different from a regular Slot in that the surrounding design stays intact. You're filling a designated gap, not swapping the whole thing.

**Exposed Prop**: a **specific setting** the engineering team pulled out of a component so authors can control it (e.g., a Hero's variant: choice prop with primary / secondary / tertiary values). Look for these in the Properties panel.

**Repeater**: a container that **repeats one child** for every item in a list (e.g., render three cards, one per post in related\_posts). On the canvas you'll see one iteration by default. Toggle **Preview Mode** in Properties to see all iterations.

**Condition Block**: a container that **shows or hides its contents** based on a rule (e.g., "only render the Newsletter CTA if the user hasn't subscribed").

**Freeform**: a **blank canvas** page you compose from scratch, without being bound to a Content Type. Use for one-off landing pages that don't fit any existing template.

**Bound Content Type**: the Content Type a Template or Section is **connected to**. When bound, content auto-fills from the entry you're editing.

**Linked Schema**: a **structured field** (like Group, Modular Block, Reference) on a Content Type that a Section can be bound to. Auto-binding means the Section's props map directly onto that field's sub-structure, no manual wiring per binding.

**Global Field**: a **reusable field structure** shared across Content Types (e.g., an seo group used on every CT). Sections bound to a Global Field auto-bind on every CT that embeds it (one Section, many pages).

## Save / Deploy / Publish

**Save**: commit your changes to the **staging** version of the composition. Nothing goes live yet. Safe to Save often.

**Deploy**: push the current **saved** composition to a **live environment** (preview / production / your team's environments). Deploy is what makes changes visible on the running site.

**Publish**: Contentstack's word for making an **entry** (a piece of content) available on a live environment. Same shape as Deploy but for content records, not compositions.

**Versions**: Studio keeps a **history** of every Save + Deploy so you can roll back if a change caused a problem. Find it in the composition's meatball menu.

## Common phrases you'll hear from engineering

**"Register a component"**: engineering adds a React component to Studio's palette so authors can drop it on the canvas. Engineering task, not author.

**"Wire the SDK"**: engineering installs the Contentstack Studio SDK into the running site. Engineering task, not author.

**"Live Preview"**: a companion product that pipes content changes from Contentstack into your team's live site so you see them instantly as you edit.

**"Visual Editor"**: a different product from Studio (some teams use both). Visual Editor lets you click any element on the live site to edit it inline. Studio is where you compose the page structure. Visual Editor is where you edit content in place.

## Confused by a term not listed here?

Message engineering. They own the terms this page doesn't cover. If it comes up again, ask them to add it here so the next author isn't stuck.
