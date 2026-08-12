---
title: "Marketing Site Walkthrough With Four End-to-End Scenarios"
description: "A grounded walkthrough of how a marketing team builds blog, product, case study, and campaign landing pages in Studio using connected and freeform templates."
url: /studio/marketing-site-walkthrough-with-four-end-to-end-scenarios
---

# Marketing Site Walkthrough With Four End-to-End Scenarios

## Marketing Site Walkthrough With Four End-to-End Scenarios

A grounded walkthrough of how a marketing team actually uses Studio. Each scenario is built from the same content types and components, demonstrating how a single Studio investment ships across very different page shapes.

This recipe pairs with the composable-studio-docs provisioning suite, clone it, run npm run provision && npm run setup, and you get the exact stack + project + entries this recipe is written against. No improvising; no inventing your own test data; the fixtures match the prose.

## The Setup We're Building Toward

A marketing site for "Studio" (the fictional product the docs use as the running example) with four kinds of pages, each demonstrating a distinct Studio pattern:

| Scenario | Pattern demonstrated | Composition kind |
| --- | --- | --- |
| 1\. **Blog post page** | Connected template + bound hero + related-posts grid | Connected template against blog\_post |
| 2\. **Product page** | Connected template + reusable Hero Strip section + testimonials | Connected template against product |
| 3\. **Case study** | Featured Card section + Testimonial Card with Expose Props overrides | Connected template against case\_study |
| 4\. **Spring 2026 campaign landing** | Freeform template + Pinned Entry hero + Pinned Query products | Freeform template, no content type |

All four pages share the **same registered components** (Button, Card, Hero, Product Card, Testimonial Card). All four reuse the **same three sections** (Featured Card, Card Grid, Hero Strip), the section authors built them once.

## The Content Types You'll Have After Provisioning

From the docs-suite manifest:

![Six content types provisioned by the docs suite — blog_post, product, case_study, testimonial, campaign, author — with their fields listed.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am51957e6a39129e49/443eb1a54ae5ef8f92c5c3e7/recipes-marketing-site-content-types.png)

Plus three Global Fields that the sections bind to:

![The three shared Global Fields that the marketing-site sections bind to — gf_hero, gf_featured_card, gf_card_list.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am817351bd104305b3/e5bae829ee404e1783f2430f/recipes-marketing-site-global-fields.png)

## Scenario 1: Blog Post Page

**Pattern: Connected template + reusable Hero Strip section + Card Grid of related posts.**

Goal: every blog entry renders at /blog/<slug> with a hero pulling from the entry's hero Global Field and a "Related posts" grid below the body.

### Build it

In Studio's "Studio Documentation" project, create a **Connected Template** named **"Blog Post"** connected to the blog\_post content type:

![Blog Post connected template layers tree — Hero Strip section, body Box, and Card Grid section with a Repeater of Section-Slot-housed Cards.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3617e653effc9049/e929ca9b8cdd049c6ad2507d/recipes-marketing-blog-post-template.png)

The Hero Strip section was built **once** by the section author (linked to gf\_hero); now it auto-binds against every Blog Post entry. The same applies to Card Grid (linked to gf\_card\_list).

### What you see when this is deployed

Visit /blog/welcome-to-studio and the hero pulls from that entry's hero field; the body renders the rich text; the Related posts grid shows two cards (the related posts the author picked in Contentstack: "Composition beats hand-coding", "Designing for speed").

Switch URLs to /blog/composition-beats-handcoding and the same template renders but with that entry's hero + body + a different set of related posts. One template, three (or three hundred) pages.

### The canvas-overview screenshot is built from this exact pattern

The connected-template-canvas.png you see in [What is Studio](/docs/studio/contentstack-studio-overview) and elsewhere is the Blog Post template above, with the Hero component selected. The Properties panel on the right shows the Hero's prop bindings: headline "Welcome to Studio", subhead the welcome subhead, CTA link https://docs.contentstack.com/studio.

## Scenario 2: Product Page

**Pattern: Connected template + same Hero Strip + testimonials repeater.**

Goal: every product entry renders at /products/<slug> with the hero pulling from the product's hero field, marketing copy, and a testimonials section.

### Build it

Create a **Connected Template** named **"Product Page"** connected to the product content type:

![Product Page connected template layers tree — Hero Strip reused, marketing copy Box, and Repeater of Testimonial Cards.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amef857f7d7b5089ac/d53c6ca7c09ad1d7cde5a564/recipes-marketing-product-page-template.png)

The Hero Strip section is the same composition you used in Scenario 1. Because its linked schema (gf\_hero) matches both blog\_post.hero and product.hero, Studio auto-binds it on each template without re-configuration.

### What you see when deployed

/products/studio-pro renders a hero saying "Studio Pro" / "Visual composition for small marketing teams" / Popular badge / "Start free trial" CTA. The body shows the tagline + description from the entry. The testimonials repeater renders zero or more cards depending on which testimonials the product was linked to.

/products/studio-cloud and /products/studio-enterprise render the same template against their own entries.

![Product Page template canvas — preview entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame7cb15da58477571/0e3ca7f2c615ef1e734fd768/product-page-canvas.png)

## Scenario 3: Case Study Page

**Pattern: Featured Card section with Expose Props, used to override the section's defaults per case study.**

Goal: every case study has a "featured quote" callout. The section author built **one** Featured Card section. The template author can override its headline + body + image + CTA per case study, without forking the section.

### Build it

The section author builds **Featured Card** once:

![Featured Card section — Box callout frame containing Heading, RichText, Image, and Button, each exposed as an author-friendly prop.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am58d72ed6fb7ccbc6/b10febeb35d773c62d1f6072/recipes-marketing-featured-card-section.png)

Exposed props on Save: all four. So template authors can override any of them per case study.

Then the template author builds **Case Study** (a Connected template against case\_study):

![Case Study connected template layers tree — Hero Strip, article body Box, and Featured Card section with an exposed-prop override.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am25eb7c35cd4df7cf/66867eb41400d6304360b950/recipes-marketing-case-study-template.png)

> **Schema note.** The seeded case\_study content type has hero\_image (file) but NOT a hero (gf\_hero) field. So Hero Strip won't auto-bind on Case Study; drop a plain Image bound to entry.hero\_image instead, or extend the content type's schema with a gf\_hero Global Field if you want the Hero Strip reuse pattern to apply across all three Connected templates.

![Case Study template canvas — preview entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am18de5139e99fb3c1/fc8d55187a08e6cbcb26358a/case-study-canvas.png)

### What this demonstrates

The section author authored Featured Card **once**, with sensible defaults from gf\_featured\_card. The template author who built the Case Study template **overrode** the "Quote headline" exposed prop to compose a richer phrase that's not in the section's defaults. Other case studies (different entries) can override differently. No fork; same Featured Card section everywhere.

### The expose-props screenshots are this exact pattern

expose-props-modal.png shows the Featured Card section's Save flow, with four props listed and the section author deciding which to expose. Three of the four are toggled ON (headline, body, image) with "CTA label" / "CTA link" left internal (locked-in by the section).

## Scenario 4: Spring 2026 Campaign Landing (Freeform)

**Pattern: Freeform template + Pinned Entry for the campaign hero + Pinned Query for featured products.**

Goal: marketing wants a one-off campaign landing template at /campaigns/spring-2026 that pulls hero copy from the campaign:spring\_2026 entry and shows the current top-3 featured products. No new content type to model; no Connected template; no engineering tickets.

### Build it

Create a **Freeform Template** named **"Spring 2026 Landing"**:

1.  **Set URL pattern** to /campaigns/spring-2026 (Edit URL modal, only {{composition\_uid}} chip available because there's no entry).
    
2.  **Pin the campaign entry**: right panel → **Data** tab → **Additional Entry Data** section → Link Entry → pick campaign:spring\_2026.
    
3.  **Pin the products query**: right panel → **Data** tab → **Queries** section → Add Query → content\_type product, filter featured = true, order by price asc, limit 3.
    
4.  **Build the canvas**:
    

![Spring 2026 Landing Freeform template layers tree — Hero bound to pinned campaign entry, Featured plans heading, and a Repeater of Product Cards bound to the pinned products query.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5632c976051eb0fc/3247faff99b24ba1c496c767/recipes-marketing-spring-2026-landing.png)

### What deploying gives you

Visit /campaigns/spring-2026 on your live site and the hero pulls from the campaign entry (so marketing can swap the campaign copy in Contentstack without touching the template), and the products grid shows the current featured products (so when marketing publishes a new featured product, it appears here automatically).

The same Freeform pattern works for any one-off campaign: Black Friday, product launch, year-in-review. New campaign means a new Freeform template, re-pin to the new campaign entry, re-pin to a new query. No CT modeling.

### The site-template-rendered screenshot is similar to this

site-template-rendered.png shows a Connected template's rendered output (Blog Post on /blog/...), but the same <StudioComponent /> rendering applies to a Freeform Spring 2026 page at /campaigns/spring-2026.

![Spring 2026 Landing canvas — FREEFORM PAGE,](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am58eef4675e814081/a7501a8ecf25288441b7b021/spring-2026-landing-canvas.png)

## The Full Set, Viewed Together

After provisioning the docs suite + building all four scenarios, your Studio Documentation project's Compositions list looks like:

![Studio Documentation project Compositions list — four templates (Blog Post, Product Page, Case Study, Spring 2026 Landing) and three sections (Hero Strip, Featured Card, Card Grid).](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama45310802c6d6a62/c77db33f5734f949e9230e25/recipes-marketing-project-compositions.png)

And the canvas-app fixture serves all four URLs via <StudioComponent /> plus the /canvas route via <StudioCanvas />.

## What It Costs You to Get Here

-   **One-time content type modelling:** six CTs, three Global Fields. About 30 minutes if you're using the docs-suite seed files; about 2 hours if you're modelling from scratch.
-   **Three sections:** Hero Strip, Featured Card, Card Grid. About 1 to 2 hours each in Studio, plus the Expose Props decisions.
-   **Four templates:** Blog Post, Product Page, Case Study (Connected) + Spring 2026 Landing (Freeform). About 30 min each because sections do the heavy lifting.

Total: roughly a day's work for a designer + content lead pair to get from "fresh Studio" to "four real marketing pages live". After that, every new blog post / product / case study is a one-entry-update job for the content team. No engineering ticket per page.

## What's NOT in This Recipe (Intentionally)

-   **Personalize variants.** This recipe is about layout composition; per-segment variation goes through Contentstack's Personalize, plumbed through useCompositionData's variantAlias.
-   **Localisation.** Adding locale: "fr" to the SDK init gives you French variants of every bound field, with no extra Studio work.
-   **A/B testing.** Same channel as Personalize; not a Studio concern.

Once the composition layer is in place, those three sit on top of it without changing any templates or sections.

## Provisioning Checklist

Before you can capture screenshots that match this recipe verbatim:

1.  cd composable-studio-docs && npm install
2.  npm run provision: paste your stack credentials
3.  npm run setup: creates CTs, GFs, entries, project, composition shells
4.  Open Studio → "Studio Documentation" project → build out each composition's canvas (the canvas trees aren't seeded in v0.1)
5.  npm run dump:compositions: snapshot the canvases back so the next person who provisions gets pre-built canvases
6.  npm run recapture: refresh PNGs in studio-docs/assets/screenshots/

## See Also

-   [What is Studio](/docs/studio/contentstack-studio-overview): the conceptual intro this recipe makes concrete
-   [Enterprise day one](/docs/studio/enterprise-setup-from-install-to-first-authored-page): the same pattern, scaled to a real enterprise rollout
-   [Card grid with slots](/docs/studio/card-grid-with-slots): deep-dive on the section pattern used in Scenarios 1 and 4
-   [Overrides without forking](/docs/studio/per-page-component-overrides-without-forking): deep-dive on the Expose Props pattern from Scenario 3
-   [Freeform landing template](/docs/studio/freeform-landing-page-template): deep-dive on Scenario 4
