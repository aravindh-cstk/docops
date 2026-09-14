---
title: "Real-world marketing site: four scenarios end-to-end"
description: "A grounded walkthrough of how a marketing team builds blog, product, case study, and campaign landing pages in Studio using connected and freeform templates."
url: /studio/marketing-site-walkthrough-with-four-end-to-end-scenarios
---

# Real-world marketing site: four scenarios end-to-end

## Real-world marketing site: four scenarios from build to launch

A grounded walkthrough of how a marketing team actually uses Studio. Each scenario is built from the same content types and components, demonstrating how a single Studio investment ships across very different page shapes.

This recipe pairs with the composable-studio-docs provisioning suite: clone it, run npm run provision && npm run setup, and you get the exact stack + project + entries this recipe is written against. No improvising. No inventing your own test data. The fixtures match the prose.

## The setup we're building toward

A marketing site for "Studio" (the fictional product the docs use as the running example) with four kinds of pages, each demonstrating a distinct Studio pattern:

| Scenario | Pattern demonstrated | Composition kind |
| --- | --- | --- |
| 1\. **Blog post page** | Connected template + bound hero + related-posts grid | Connected template against blog\_post |
| 2\. **Product page** | Connected template + reusable Hero Strip section + testimonials | Connected template against product |
| 3\. **Case study** | Featured Card section + Testimonial Card with Expose Props overrides | Connected template against case\_study |

All four pages share the **same registered components** (Button, Card, Hero, Product Card, Testimonial Card). All four reuse the **same three sections** (Featured Card, Card Grid, Hero Strip). The section authors built them once.

## The content types you'll have after provisioning

From the docs-suite manifest:

![Six content types provisioned by the docs suite (blog_post, product, case_study, testimonial, campaign, author) with their fields listed.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amecfd60d32e8b28ba/ea637cefd1004576ad6f09b1/recipes-marketing-site-content-types.png)

Plus three Global Fields that the sections bind to:

![The three shared Global Fields that the marketing-site sections bind to: gf_hero, gf_featured_card, gf_card_list.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amaf396893a5f4e532/e6c1f92fe90b29d47ca2e3bb/recipes-marketing-site-global-fields.png)

## Scenario 1: Blog post page

**Pattern: Connected template + reusable Hero Strip section + Card Grid of related posts.**

Goal: every blog entry renders at /blog/<slug> with a hero pulling from the entry's hero Global Field and a "Related posts" grid below the body.

### Build it

In Studio's "Studio Documentation" project, create a **Connected Template** named **"Blog Post"** connected to the blog\_post content type:

![Blog Post connected template layers tree: Hero Strip section, body Box, and Card Grid section with a Repeater of Section-Slot-housed Cards.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am22cb52b36c6c5888/4c0d376a1f019c0cd7476a34/recipes-marketing-blog-post-template.png)

The Hero Strip section was built **once** by the section author (linked to gf\_hero). Now it auto-binds against every Blog Post entry. The same applies to Card Grid (linked to gf\_card\_list).

### What you see when this is deployed

Visit /blog/welcome-to-studio and the hero pulls from that entry's hero field. The body renders the rich text. The Related posts grid shows two cards (the related posts the author picked in Contentstack: "Composition beats hand-coding", "Designing for speed").

Switch URLs to /blog/composition-beats-handcoding and the same template renders but with that entry's hero + body + a different set of related posts. One template, three (or three hundred) pages.

### The canvas-overview screenshot is built from this exact pattern

The [connected-template-canvas.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amdab6d10d23adef72/dc57e93fd9b8ef53461589f9/connected-template-canvas.png) you see in [What is Studio](/docs/studio/contentstack-studio-overview) and elsewhere is the Blog Post template above, with the Hero component selected. The Properties panel on the right shows the Hero's prop bindings: headline maps to "Welcome to Studio", subhead to the welcome subhead, and CTA link to https://docs.contentstack.com/studio.

## Scenario 2: Product page

**Pattern: Connected template + same Hero Strip + testimonials repeater.**

Goal: every product entry renders at /products/<slug> with the hero pulling from the product's hero field, marketing copy, and a testimonials section.

### Build it

Create a **Connected Template** named **"Product Page"** connected to the product content type:

![Product Page connected template layers tree: Hero Strip reused, marketing copy Box, and Repeater of Testimonial Cards.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am284f2f5f13510cd0/6fbf8d1ad51f413606cafc3f/recipes-marketing-product-page-template.png)

The Hero Strip section is the same composition you used in Scenario 1. Because its linked schema (gf\_hero) matches both blog\_post.hero and product.hero, Studio auto-binds it on each template without re-configuration.

### What you see when deployed

At /products/studio-pro, the hero says "Studio Pro" / "Visual composition for small marketing teams" / Popular badge / "Start free trial" CTA. The body shows the tagline + description from the entry. The testimonials repeater renders zero or more cards depending on which testimonials the product was linked to.

/products/studio-cloud and /products/studio-enterprise render the same template against their own entries.

![Product Page template canvas: preview entry "Studio Enterprise", URL pattern /products/studio..., Hero Strip section auto-bound to entry.title + entry.description with a "Get started" Button in the CTA slot.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame7cb15da58477571/0e3ca7f2c615ef1e734fd768/product-page-canvas.png)

## Scenario 3: Case study page

**Pattern: Featured Card section with Expose Props, used to override the section's defaults per case study.**

Goal: every case study has a "featured quote" callout. The section author built **one** Featured Card section. The template author can override its headline + body + image + CTA per case study, without forking the section.

### Build it

The section author builds **Featured Card** once:

![Featured Card section: Box callout frame containing Heading, RichText, Image, and Button, each exposed as an author-friendly prop.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amaf4c7b1a6d723c82/d0dc77d5c26f2ddacae78035/recipes-marketing-featured-card-section.png)

Exposed props on Save: all four. So template authors can override any of them per case study.

Then the template author builds **Case Study** (a Connected template against case\_study):

![Case Study connected template layers tree: Hero Strip, article body Box, and Featured Card section with an exposed-prop override.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd75e79286c7f1b8c/5cbfc9da497cd0444e28ce04/recipes-marketing-case-study-template.png)

> **Schema note.** The seeded case\_study content type has hero\_image (file) but NOT a hero (gf\_hero) field. So Hero Strip won't auto-bind on Case Study. Drop a plain Image bound to entry.hero\_image instead, or extend the content type's schema with a gf\_hero Global Field if you want the Hero Strip reuse pattern to apply across all three Connected templates.

![Case Study template canvas: preview entry "How ACME shipped 200 marketing pages in two weeks", URL pattern /case-studies/acme-200-pages. Featured Card section auto-bound to entry.headline + entry.body + entry.cta with Editor's Pick eyebrow.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am18de5139e99fb3c1/fc8d55187a08e6cbcb26358a/case-study-canvas.png)

### What this demonstrates

The section author authored Featured Card **once**, with sensible defaults from gf\_featured\_card. The template author who built the Case Study template **overrode** the "Quote headline" exposed prop to compose a richer phrase that's not in the section's defaults. Other case studies (different entries) can override differently. No fork. Same Featured Card section everywhere.

### The expose-props screenshots are this exact pattern

[expose-props-modal.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1be3f9d7e0bef753/f895aecfa80cfa14295d9fdb/expose-props-modal.png) shows the Featured Card section's Save flow: four props listed, the section author deciding which to expose. Three of the four are toggled ON (headline, body, image) with "CTA label" / "CTA link" left internal (locked-in by the section).

## The full set, viewed together

After provisioning the docs suite + building the three scenarios, your Studio Documentation project's Compositions list looks like:

![Studio Documentation project Compositions list: three templates (Blog Post, Product Page, Case Study) and three sections (Hero Strip, Featured Card, Card Grid).](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am64236f37799bcdd2/38d5dce3ade7feb63544ace6/recipes-marketing-project-compositions.png)

And the canvas-app fixture serves all four URLs via <StudioComponent /> plus the /canvas route via <StudioCanvas />.

## What it costs you to get here

-   **One-time content type modelling**: six CTs, three Global Fields. ~30 minutes if you're using the docs-suite seed files, ~2 hours if you're modelling from scratch.
-   **Three sections**: Hero Strip, Featured Card, Card Grid. ~1 to 2 hours each in Studio, plus the Expose Props decisions.
-   **Three templates**: Blog Post, Product Page, Case Study. ~30 min each because sections do the heavy lifting.

Total: roughly a day's work for a designer + content lead pair to get from "fresh Studio" to "four real marketing pages live". After that, every new blog post / product / case study is a one-entry-update job for the content team. No engineering ticket per page.

## What's NOT in this recipe (intentionally)

-   **Personalize variants.** This recipe is about layout composition. Per-segment variation goes through Contentstack's Personalize, plumbed through the variantAlias in useCompositionData's second-arg CompositionQueryOptions (e.g. useCompositionData({ url }, { variantAlias })).
-   **Localisation.** Adding locale: "fr" to the SDK init gives you French variants of every bound field, no extra Studio work.
-   **A/B testing.** Same channel as Personalize. Not a Studio concern.

Once the composition layer is in place, those three run on top of it without changing any templates or sections.

## Provisioning checklist

Before you can capture screenshots that match this recipe verbatim:

1.  cd composable-studio-docs && npm install
2.  npm run provision: paste your stack credentials
3.  npm run setup: creates CTs, GFs, entries, project, composition shells
4.  In Studio, open the "Studio Documentation" project and build out each composition's canvas (the canvas trees aren't seeded in v0.1)
5.  npm run dump:compositions: snapshot the canvases back so the next person who provisions gets pre-built canvases
6.  npm run recapture: refresh PNGs in studio-docs/assets/screenshots/

See composable-studio-docs/README.md for the full pipeline.

## See also

-   [What is Studio](/docs/studio/contentstack-studio-overview): the conceptual intro this recipe makes concrete
-   [Enterprise day one](/docs/studio/enterprise-setup-from-install-to-first-authored-page): the same pattern, scaled to a real enterprise rollout
-   [Card grid with slots](/docs/studio/card-grid-with-slots): deep-dive on the section pattern used in Scenario 1
-   [Overrides without forking](/docs/studio/per-page-component-overrides-without-forking): deep-dive on the Expose Props pattern from Scenario 3
