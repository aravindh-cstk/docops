---
title: "Freeform landing template with Pinned Data"
description: "Build a Freeform landing page template that assembles content from pinned entries and a live pinned query, with no connected content type required."
url: /studio/freeform-landing-page-template
uid: bltbcb254d60a231f92
---

# Freeform landing template with Pinned Data

## Freeform landing template with Pinned Data

A complete walkthrough for the most common Freeform use case: a campaign landing template that assembles content from several entries and a dynamic query, with no single connected content type behind it.

You'll build:

-   A Freeform template at /campaigns/spring-2026
-   One **Pinned Entry** providing the template-level hero
-   One **Pinned Query** pulling the current top 3 products
-   Reusable sections binding to both sources
-   Lives at a real route on your site

Prerequisite: **Enable Freeform Feature** is on in your Studio project ([Enabling Freeform](/docs/studio/freeform-overview)). If you haven't enabled it, do that first. The Design and Data tabs both disappear without it, so the Additional Entry Data / Queries sections you'll need below are unreachable.

## The setup

Two existing content types in your stack:

![Two content types (campaign and product) with their fields listed.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc5cc00561812a4e3/fa0064d98aad5b04c8d2c777/recipes-freeform-content-types.png)

A campaign entry exists with a hero ready to go. Multiple product entries exist. Some have featured: true.

## Step 1: Create the Freeform template

1.  In **Compositions**, open the **Templates tab** and select **\+ New Template**
2.  In the create dialog, pick **Freeform** (not "Connected Template")
3.  Name it spring\_2026\_campaign

Studio opens a canvas with the **FREEFORM MODE** badge in the top bar and an empty canvas with setup helpers: "Add Components To Canvas, Pin Data".

![Freeform option selected in the template creation modal, distinct from Connected Template](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8b32530e9fc94e45/aba788501e0326fa7969e471/template-creation-modal-freeform.png)

## Step 2: Set the URL

Click the URL editor (pencil icon in the canvas toolbar). The Edit URL modal opens with the default Freeform pattern:

```
{{composition_uid}}
```

Replace it with a clean campaign URL:

```
/campaigns/spring-2026
```

Save. Studio reloads the iframe at the new path.

![Edit URL modal showing the Freeform default `{{composition_uid}}` pattern being replaced with a clean campaign path](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf61a0b22ba5e7f84/3fa074ca2bfee99f211d0fa0/url-pattern-freeform.png)

Detail: [Freeform templates: URL pattern](/docs/studio/freeform-templates)

## Step 3: Pin the campaign entry

1.  In the right panel, open the **Data** tab and find the **Additional Entry Data** section
2.  Click **Link Entry**
3.  In the search dialog, pick the campaign content type
4.  Search for "Spring 2026", then confirm

The pinned entry appears in the list. Studio gives it a binding handle you can use anywhere on the template.

![Data tab in Freeform mode showing the Additional Entry Data and Pinned Queries sections](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am95a1510e15a794cf/dc125533f0523597f4deabcd/data-tab-freeform.png)

![Pinned Entries list with the linked campaign entry available as a binding source](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am231d31c6b48b1eb0/a6f147e777828c545dfc30b5/pinned-entries.png)

## Step 4: Pin the products query

1.  In the **Data** tab, find the **Pinned Queries** section
2.  Click **Create Query**
3.  Configure:

    -   Content type: product
    -   Filter: featured = true
    -   Order by: price ascending
    -   Limit: 3
4.  Save the pin

The query result is now bindable from any Repeater on the template.

![Pinned Queries list with the featured-products query saved and available to Repeaters](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2bc35d1e116bf562/930228f575d134250c344789/pinned-queries.png)

## Step 5: Add a hero section bound to the pinned campaign

If you already have a landing\_hero section ([built in the overrides recipe](/docs/studio/per-page-component-overrides-without-forking)), drop it. Otherwise build one inline:

1.  Drop a **Box** at the root and style it as a hero
2.  Inside:

    -   **Heading**, bind text to Pinned Entry → Spring 2026 → headline
    -   **Text**, bind to Pinned Entry → Spring 2026 → subhead
    -   **Image**, bind src to Pinned Entry → Spring 2026 → hero\_image
    -   **Button**, bind href to Pinned Entry → Spring 2026 → primary\_cta

Studio's data picker shows pinned entries alongside template and other data sources.

## Step 6: Add the products grid bound to the pinned query

Below the hero:

1.  Drop a **Heading**, text: "Featured products"
2.  Drop a **Box** with a grid layout
3.  Inside the Box, drop a **Repeater**
4.  Bind the Repeater's source to the **Featured Products** pinned query
5.  Inside the Repeater, drop a **Box** (the card frame), and inside that:

    -   **Image**, bind to repeater.image (picker root: **Repeater Data**)
    -   **Heading**, bind to repeater.name
    -   **Text**, bind to repeater.price (your component can format it)
    -   **Button**, bind href to repeater.url

The Repeater iterates the query result: repeater.\* (Repeater Data) refers to the current iteration item (a product entry). The SDK marks these as RepeaterBindingValue, distinct from template-level bindings.

Alternative: if you have a product\_card section ([built in the card-grid recipe](/docs/studio/card-grid-with-slots)) anchored on a product-shaped Global Field, drop it inside the Repeater instead. Studio scope-root matches it against the iteration item.

## Step 7: Save and view

**Save** the composition.

![Spring 2026 Freeform landing template assembled on the canvas, hero bound to the pinned entry and product grid bound to the pinned query](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am58eef4675e814081/a7501a8ecf25288441b7b021/spring-2026-landing-canvas.png)

Open http://localhost:3000/campaigns/spring-2026 in your browser.

You should see:

![Spring 2026 freeform landing page render, a hero band with a headline, subline, and Get access CTA, plus three Featured-products cards beneath with image, name, price, and Shop link.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4fa49bd72d233fa9/502e3a98946610516b36f8b0/recipes-freeform-landing-output.png)

The hero is bound to the campaign entry. The grid auto-refreshes whenever the underlying products query result changes. Publish a new featured product and it shows up here on next render.

## What this produces

-   **No new content type needed.** You didn't model "campaign landing template" as a CT. You composed it from existing entries.
-   **The query stays live.** Marketing publishes a new featured product, and it appears on this template automatically.
-   **One section can serve many templates.** The card layout you built here works on any other Freeform or Connected template that pins products.
-   **Per-template branding.** This template can use one hero design. The next campaign uses a completely different layout (both Freeform, no shared CT constraint).

## Common patterns

**One pinned entry for template metadata + N pinned queries for content.** A campaign template pins the campaign entry (title, headline, theme image), plus queries for featured items, top stories, related links.

**Multiple pinned entries assembled into one template.** Pin a hero entry, a testimonial entry, and a CTA entry. Compose them into a single template where each section binds to its own pinned entry.

**A "compare" template with two pinned entries side by side.** Pin two products. Build a side-by-side layout. The same template works for any pair you choose.

## When Freeform is NOT the right choice

| Symptom | Better choice |
| --- | --- |
| Every campaign has the same structure with different content | Build a campaign content type, use a Connected template |
| You're modelling repeating, content-driven templates | Connected template |
| The template is content-driven enough to deserve a CT | Connected template |
| You'd be making the same Freeform composition over and over | Connected template |

Freeform is for **genuinely one-off templates**. If you find yourself copying a Freeform composition to make a similar one, that's a signal. Make a content type instead.

## See also

-   [Freeform overview](/docs/studio/freeform-overview)
-   [Pinned Entries](/docs/studio/pin-specific-entries-to-a-component)
-   [Pinned Queries](/docs/studio/fetch-dynamic-content-with-pinned-queries)
-   [Card grid with slots](/docs/studio/card-grid-with-slots): reuse the product grid pattern in Connected templates too
