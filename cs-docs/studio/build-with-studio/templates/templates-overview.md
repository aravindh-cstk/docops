---
title: "Templates Overview"
description: "A template is a full page connected to a content type. One template renders every entry of that content type. Write the layout once, publish many pages."
url: /studio/templates-overview
---

# Templates Overview

## Templates

> **Two audiences on this page.** **Content authors**: read the two sentences below then jump to [For Authors: Working with Templates](/docs/studio/working-with-templates-as-an-author). The React / Next.js analogy in the callout is engineering context. You don't need it. **Developers**: keep reading. The React / Next.js callout returns the mental-model bridge.

A **template** is a full page connected to a content type. One template renders every entry of that content type. Write the layout once, publish many pages.

> ## For engineers: think of a Template as a Studio Page
> 
> Studio's terminology lines up neatly with React: a **[Section](/docs/studio/build-and-use-sections) is a Studio Component** (composed React components + binding mapper + live preview), and a **Template is a Studio Page**, the page-level unit that **composes Sections, owns the URL pattern, and carries the data-binding shape** for every entry that hits that URL.
> 
> | If you're used to thinking in | The Studio equivalent is |
> | --- | --- |
> | A React component (<Button>, <Card>) registered for use | A **registered component** in Studio |
> | A composed React component (<HeroStrip> made of <Heading> + <Subhead> + <CTA>) | A **[Section](/docs/studio/build-and-use-sections)**, a Studio Component |
> | A Next.js page (app/blog/\[slug\]/page.tsx), which owns the URL, the data fetch and the layout | A **Template**, a Studio Page |
> 
> The win: where a Next.js page bakes URL + data + layout into code that ships through git/PR/deploy, a Template stores the layout, the sections, and the bindings as **data** in the composition spec. The layout, the sections, the bindings, the per-instance overrides: all editable in the canvas, all shipped through Contentstack publish. New entries (or even brand-new content types) become new live URLs without touching the route file.
> 
> One Template renders many pages: a Connected template + N entries of the content type = N live URLs at /blog/{{entry.slug}} (or whichever pattern the template defines).

## When to use a template (and when not to)

Studio templates are ONE of several patterns for adding Studio to a site. The right pattern depends on what kind of page you're building:

| Page kind | What it is | Best Studio pattern |
| --- | --- | --- |
| **Content-driven** (blog posts, product pages, recipes, author profiles, knowledge-base articles) | "One entry per URL": page shape is constant. Content varies per entry | **Connected template** (this chapter), the canonical use case |
| **Evergreen / functional** (PDP, checkout, account, search results) | Engineered by devs, high conversion-cost, rarely re-laid-out | **Embedded composition** in a code-owned page: expose ONE bounded editable zone (a "shelf" inside the PDP). The rest stays code-owned. See [40-recipes/embedding-a-composition-in-a-code-owned-page.md](/docs/studio/embedding-a-composition-in-a-code-owned-page) |
| **Code-driven app already shipping** | You already own routes (/products/\[slug\], /collections/\[slug\]), adding Studio incrementally | **Partial adoption**: catch-all serves URLs not claimed by code routes, full-swap migration when ready. See [40-recipes/partial-adoption-coexisting-with-a-code-driven-app.md](/docs/studio/partial-adoption-coexisting-with-a-code-driven-app) |

**Templates are not the only entry point.** This chapter covers the connected-template use case in depth, but if your goal is "expose one editable band on an existing PDP" or "add Studio without taking over my routes," the embedded-composition + partial-adoption recipes are better fits.

Use templates for **content-driven pages**: blog posts, product pages, recipes, author profiles (anything where the page is "one entry per URL").

## How it works

When you create a template, you pick a content type to connect it to. After that:

-   Bindings inside the template resolve against the **current entry**: {{entry.title}}, {{entry.featured\_image}}, {{entry.author.name}}, and so on
-   The template renders at a URL Studio derives from the content type's URL settings.
-   Studio picks the right entry when a visitor lands on a URL.

## Where templates render

Templates render at real URLs on your site, **not** on the canvas URL.

![Request flow: visitor hits a URL, your route catches it, StudioComponent renders the matching composition and entry.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4a9c722a91be3780/5504af1d1d73519063db8716/templates-where-render-flow.png)

A typical Studio-powered app has:

-   One **canvas route** mounting <StudioCanvas />, for section authoring
-   **ONE catch-all template preview route** that fetches the composition via useCompositionData({ url: pathname }) (CSR) or csStudio.fetchCompositionData({ url, searchQuery }) (SSR) and passes the resolved object straight into <StudioComponent specOptions={specOptions} />: handles every URL on the site. Studio's Content Delivery API (CDA) query resolves which template matches each URL. No per-template route registration needed.

## The Templates tab

A fresh project's Templates tab is empty, showing an illustration and a **\+ New Template** button. Once one or more templates exist, the same tab becomes a list with one row per template:

![Templates list with authored templates including Blog Post (Connected to Blog Post CT), Case Study, and Product Page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb51b9929ae9fbfd4/b79d3bf01cea2e05b78db40c/templates-list.png)

Columns: **Title**, **Connected Content Type**, **Publish Status**, **Modified At**, **Actions**.

Button at top right: **\+ New Template**. Click it and Studio walks you through creating a Connected template: pick the content type it binds to, then compose the layout in the canvas.

![Create New Template modal showing Connected Template selection with the Create Connected Template button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am37eb32427c80a994/f0dbaa330e9d43471f441363/template-creation-modal.png)

Each entry of the connected content type renders as one page at the URL pattern the template defines. That's the canonical use case this chapter covers.

## What's in this chapter

-   [Connected content type](/docs/studio/connected-content-type): picking a content type, URL pattern derivation, the Edit URL modal
-   [Using sections and components](/docs/studio/using-sections-and-components-in-a-template): what you drop onto a template, how the canvas works

## Next

-   [Sections](/docs/studio/build-and-use-sections): what you drop inside templates
-   [URL variables](/docs/studio/url-variables-reference)
