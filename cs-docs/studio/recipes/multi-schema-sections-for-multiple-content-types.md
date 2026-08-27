---
title: "Multi-Schema Sections for Multiple Content Types"
description: "Learn how to build a single section that auto-binds to multiple content types using a shared Global Field and Studio's structural matching."
url: /studio/multi-schema-sections-for-multiple-content-types
uid: blt77014a389407ec03
---

# Multi-Schema Sections for Multiple Content Types

## Multi-Schema Sections for Multiple Content Types

Build a single "Featured Card" section that auto-binds correctly when dropped onto a blog post, a product page, or an event page. The section's linked schema is a Global Field embedded in all three content types; structural matching does the rest.

This is the pattern that makes content-type-shaped sections reusable across an enterprise.

## The Setup

### A Global Field shared across content types

![gf_featured_card Global Field schema — heading, description, image, cta_url.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1e0d49cff7ac8130/01d84b2ef0f035d9fd020f43/recipes-multi-schema-gf-featured-card.png)

### Three content types, each embedding the Global Field under a different local name

![Three content types — blog_post, product, event — each embedding gf_featured_card under a different local field name.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8f0e7258937d9d3f/9dd1af27f2b2bfedb9d028d2/recipes-multi-schema-three-content-types.png)

Same shape, different local field names. This is exactly what Studio's structural matching is designed for.

## Step 1: Build the Section

1.  **Compositions → Sections tab → + New Section** → name it featured\_card
2.  **Link Schema** → pick **gf\_featured\_card**

![Section creation modal with Link Schema set to the shared Global Field gf_featured_card — this is what anchors the section to a shape rather than a specific content type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3e9e382fd5e52a43/9bf98eb3d72dba62717ada10/section-creation-modal.png)

Studio is now bound to the Global Field's shape, not any one content type's field.

1.  On the canvas, drop a **Box** at the root (the card frame) and inside it:
2.  An **Image** component, bind src to template.image
3.  A **Heading**, bind text to template.heading
4.  A **Text**, bind to template.description
5.  A **Button**, bind href to template.cta\_url, label can be a static "See product details" or another binding

6.  **Save**.


![Authored featured_card section on canvas — Box wrapping Image, Heading, Text, and Button, all bound under template.* paths on the linked Global Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am25cb0844343a1c4e/e2b21c8432c309637bea5a51/section-featured-card-authored.png)

The section is now anchored on gf\_featured\_card. Its bindings reference template.<field>, which are the Global Field's children, so they resolve cleanly wherever the field is embedded.

## Step 2: Use It on a blog\_post Template

1.  **Compositions → Templates tab → + New Template** → pick blog\_post
2.  On the canvas, drop a featured\_card section

Studio auto-binds: featured\_card linked to gf\_featured\_card, and blog\_post has exactly one gf\_featured\_card field (hero\_card). **Single match → auto-pick.**

The section renders bound to hero\_card. No manual binding step. Open a blog\_post entry as the Preview Entry, and you see the featured card render with that entry's hero\_card data.

![Templates list showing blog_post, product, and event templates all consuming the same featured_card section](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb51b9929ae9fbfd4/b79d3bf01cea2e05b78db40c/templates-list.png)

## Step 3: Use the Same Section on a product Template

1.  **\+ New Template** → pick product
2.  Drag the same featured\_card section onto the canvas

Same auto-bind, different field: product has one gf\_featured\_card field (promo\_card). Studio picks it automatically. The section renders.

No edits to the section. No fork. Same featured\_card composition, bound to a different field on a different content type.

## Step 4: Same Again for Events

1.  **\+ New Template** → pick event
2.  Drag featured\_card onto the canvas
3.  Auto-bound to event.banner

Three content types, one section, zero manual binding work. Studio's structural matcher finds the right field on each page CT.

## Step 5: The Multi-Match Case

Now extend product to expose the Global Field **twice**, adding a second field secondary\_card of type gf\_featured\_card.

Go back to the product template, drop a fresh featured\_card instance. Studio finds **two** matches (promo\_card, secondary\_card) and:

-   Binds to one of them (the first match)
-   Shows a **DATA SOURCE dropdown** in the section's right-panel **Settings → Properties** section, listing both matches so the author can pick which field this instance should bind to.

The dropdown surfaces on every section drop regardless of match count, it shows the currently-bound source. In the single-match case there's one option; in the multi-match case there are two or more, and the author picks:

![Section selected on a template canvas — right-panel Settings → Properties shows the DATA SOURCE dropdown listing the matching field(s) from the template's content type. In the multi-match case this dropdown lists all matches and the author selects which one this section instance binds to.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1dd710418fc692c5/62f6f6d243bcf621f557df4a/section-data-source-dropdown.png)

Drop another featured\_card below, pick the other field for it from the same dropdown. Two instances, two different bindings, one section.

The dropdown lives in the section's top bar: clicking the schema chip opens a Search Schema picker listing every linked schema attached to this section (one row per content type). On a single-CT section there's one row; on a multi-schema section, all matching CTs appear here:

![Section schema picker dropdown — clicking the schema chip in the canvas top bar opens a Search Schema list of every linked schema; here showing the Blog Post schema bound to the section](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfb7c2ac14de162d6/d78f61d526bc3cd01ce30d50/section-linked-schema-picker.png)

![Sections list showing the single featured_card section reused across blog_post, product, and event templates](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc477bf79a781ef01/de93b1ad0bec5dc4d3218990/sections-list.png)

## What "Matching Structure" Did

| Field on page CT | What Studio checked |
| --- | --- |
| hero\_card (blog\_post) | Same data\_type (global\_field) + same child shape (heading, description, image, cta\_url) → ✅ match |
| promo\_card (product) | Same → ✅ match |
| banner (event) | Same → ✅ match |
| title (blog\_post) | Different data\_type → ❌ skip |
| start\_date (event) | Different data\_type → ❌ skip |

Because the field uses a **Global Field**, the shape is literally identical at all three sites. Studio's positional UID remap doesn't even kick in, as it doesn't need to. This is the strongest auto-bind path.

## When This Pattern Shines

-   **Shared marketing surfaces.** "Featured card", "callout banner", "newsletter signup card" appear on many content types with the same shape.
-   **Multi-brand sites.** Multiple content types per brand, all using shared Global Fields.
-   **Design system widgets.** Anything that maps to one consistent data shape.

When the shape varies, build separate sections instead: Studio's auto-binder won't pretend a mismatched shape works.

## A Close Cousin: Different Content Types, Similar but Not Identical Shapes

If the underlying fields are **Groups** (not Global Fields), and they have the same child types in the same order with different names, Studio's positional UID remap kicks in:

![Two content types with Group fields containing children of the same types in the same order but different names — Studio's positional UID remap binds them across CTs.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfd2eb45ac38ad974/e453f46a2f59134d0e1a84bd/recipes-multi-schema-groups-remap.png)

Studio binds featured\_card to hero\_card on blog\_post and to promo\_card on product, remapping by position:

| Section binding | blog\_post remap | product remap |
| --- | --- | --- |
| template.title | template.title | template.heading |
| template.body | template.body | template.desc |
| template.image | template.image | template.cover |

**Use a Global Field if you can**, as it gives the same shape everywhere with no remap needed and nested structures stay sane. Use Groups with the remap only when you can't centralise the shape.

## See Also

-   [Linked schema](/docs/studio/link-content-types-with-linked-schema): the matching rules in detail
-   [Auto-binding](/docs/studio/auto-binding-by-drop-location): scope-aware binding behaviour
-   [Card grid with slots](/docs/studio/card-grid-with-slots): combine multi-schema sections with the List + Slot pattern
