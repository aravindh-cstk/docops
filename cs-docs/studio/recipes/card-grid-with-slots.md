---
title: "Card Grid with Slots"
description: "Build a reusable card grid pattern in Contentstack Studio using section slots, repeaters, and auto-binding to render CMS-driven card lists on any template."
url: /studio/card-grid-with-slots
---

# Card Grid with Slots

## Card Grid with Slots

A complete end-to-end build of the **list + slot** pattern: one section owns the grid layout, a second section owns the card frame with named slots, and template authors compose the cards visually on the template canvas.

This is the richest pattern Studio supports for reusable layout. Once you have it, it generalises to tabs, accordions, carousels, anything else built on "repeat this shape, but let me customise each item".

You'll build:

-   A gf\_card\_list Global Field that defines "a list of card-shaped items"
-   A gf\_card Global Field that defines "what a single card looks like as data"
-   A card\_grid section: the wrapper + iteration
-   A product\_card section: the visual card with 4 named slots
-   A landing\_page content type that uses gf\_card\_list for its featured products

End state: a single card\_grid drop on the template, with product\_card filling its slot, renders N cards with real product data.

## Step 1: Define the Global Fields in Contentstack

In your stack:

### gf\_card

![gf_card Global Field schema — title text, image file, link, and badge text.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am719abd8e112e2249/c704d231eee9176b47c8b028/recipes-card-grid-gf-card.png)

### gf\_card\_list

![gf_card_list Global Field schema — heading text and an items repeater of gf_card.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6df980dbe46baf2c/ddd31456a8d54085202fc5a4/recipes-card-grid-gf-card-list.png)

### landing\_page content type

![landing_page content type with title text plus two gf_card_list fields — featured_products and related_products.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb73677205e4743a4/7335d353dd6f40d4780bcb68/recipes-card-grid-landing-page-ct.png)

Two gf\_card\_list fields so we can verify Studio's multi-match picker later.

Populate one landing\_page entry with values in featured\_products.items\[\] (5 products) and related\_products.items\[\] (3 products).

## Step 2: Build the card\_grid Section in Studio

1.  **Compositions → Sections tab → + New Section** → name it card\_grid

![New Section modal where you name card_grid and pick its linked Global Field schema](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3e9e382fd5e52a43/9bf98eb3d72dba62717ada10/section-creation-modal.png)

1.  In the section settings, **Link Schema** → pick **gf\_card\_list** (the Global Field)
2.  On the canvas, drop a **Box** at the root: this is the grid container. Set its CSS to a grid layout via the Design panel: display: grid grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) gap: 24px
3.  Drop a **Heading** above the grid Box. Bind it to template.heading.
4.  Inside the grid Box, drop a **Repeater** from the Smart Containers palette. Bind its source to template.items\[\].
5.  Inside the Repeater, drop a **Section Slot** from Smart Containers. Label it Item template.
6.  **Save**.

![Authored card_grid section on canvas, showing Heading, grid Box, Repeater wrapping a single Item template Section Slot](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb0cc8493e6b8acbc/3bf3335c01f00846081c0dda/section-card-grid-authored.png)

![Layers panel for card_grid showing the Repeater containing the Section Slot, confirming the slot lives inside the iteration scope](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am223a13fbc0609654/545bf85546c7f873fbf2f4ff/layers-panel-card-grid.png)

Selecting the Repeater node surfaces its Properties panel, including the **Preview Mode** toggle, the **Items** source (here Related Posts), and the **Contents** descriptor showing the Condition Block child. This is where you flip Preview Mode on to see real iteration on the canvas:

![Repeater node selected in Layers: right panel shows Configuration with Preview Mode toggle, Properties with Contents=Condition Block + Items=Related Posts](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am6ff441cb7aea5a35/61d262d96cfd3e5afab9c250/repeater-properties-multi-match.png)

The section structure:

![card_grid section structure — Heading bound to template.heading, grid Box wrapping a Repeater on template.items, with an Item template Section Slot inside.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3497cffc9fd1d8fe/b8e53c42d18848a8f2633261/recipes-card-grid-section-structure.png)

## Step 3: Build the product\_card Section

1.  **Compositions → Sections tab → + New Section** → name it product\_card
2.  Link Schema → pick **gf\_card**
3.  On the canvas, drop a **Box** at the root: this is the card frame. Style it: border-radius, padding, shadow.
4.  Inside the card Box, drop four **Section Slots** (Smart Containers palette) labelled:
5.  Media
6.  Title
7.  Body (optional content)
8.  CTA
9.  **Save**.

![product_card section on canvas: card frame Box holding the four named Section Slots (Media, Title, Body, CTA)](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am25cb0844343a1c4e/e2b21c8432c309637bea5a51/section-featured-card-authored.png)

Studio's Expose Props modal opens on Save. Skip it (no props to expose yet: these are slots, not values).

The section structure:

![product_card section structure — a Box card frame holding four Section Slots labelled Media, Title, Body, and CTA.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf0783a329766f221/7255906b0f41e55f4470a215/recipes-card-grid-product-card-structure.png)

## Step 4: Build a Connected Template Against landing\_page

1.  **Compositions → Templates tab → + New Template** → pick landing\_page
2.  Drag the card\_grid section onto the canvas

Studio auto-binds: card\_grid linked to gf\_card\_list, and landing\_page has two gf\_card\_list fields. **Multi-match**: Studio binds to one of them and shows a dropdown.

1.  In the right panel for the card\_grid instance, you'll see a **Linked Field** dropdown with featured\_products and related\_products. Pick featured\_products.

The Repeater inside card\_grid is now iterating over the entry's featured products. The slot inside the Repeater renders as a single drop target: Item template.

1.  Drag your product\_card section onto the Item template slot.

Studio uses **scope-root matching**: the iteration item shape is gf\_card, which matches product\_card's linked schema. No manual binding needed; product\_card is automatically bound to the current iteration item.

1.  The product\_card's four slots now appear: **Media**, **Title**, **Body**, **CTA**. Fill them:
    
2.  **Media** → drop an **Image** component, bind src to template.image
    
3.  **Title** → drop a **Heading**, bind text to template.title
4.  **Body** → leave empty (cards in gf\_card don't have body copy)
5.  **CTA** → drop a **Button**, bind label to template.title (use as link text) and href to template.link
    
6.  **Save** the template.
    

![Connected landing_page template canvas with card_grid filled by product_card, slots resolved to real entry data](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amdab6d10d23adef72/dc57e93fd9b8ef53461589f9/connected-template-canvas.png)

## Step 5: Verify the Render

Open the route on your site that matches the template's URL pattern, for example /landing/<slug>.

You should see:

-   The page's featured\_products.heading rendered as a heading
-   5 cards in a responsive grid, one per product entry in featured\_products.items\[\]
-   Each card showing the entry's image, title, and CTA

![Card-grid section rendered output — a heading 'Featured products' from gf_card_list, with five product cards in a row beneath it. Each card has an image thumbnail, a title, and a CTA link.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am47c9a782a5d694a4/85058bf8dfae69979271eea2/recipes-card-grid-output.png)

One template, two sections, real product data, full visual control.

## Step 6: Drop the Same Section a Second Time for related\_products

Back on the template canvas:

1.  Drag a second card\_grid onto the template (below the first)
2.  In the right panel for this instance, the **Linked Field** dropdown shows the same two options; pick related\_products this time
3.  Drop a product\_card into the second grid's slot, exactly as before
4.  Fill its slots, and notice you can fill them **differently** than the first instance

Both card\_grid instances render with their own bound list. Both product\_card instances have independent slot contents. **Per-instance customisation**: same sections, different page-level fills.

## Why This Pattern Is Powerful

Three independent layers of reuse:

| Layer | Owns | Reused across |
| --- | --- | --- |
| card\_grid | Grid layout (columns, gap, responsive) + iteration wiring | Any list of gf\_card\_list |
| product\_card | Card frame (border, shadow, padding) + named regions | Any gf\_card iteration item |
| Leaf components | The actual visual content of each slot | Filled per template instance |

Change the grid's columns once and every page that uses card\_grid updates. Change the card frame's shadow once and every card on every page updates. Change one slot's binding on one page and only that page changes.

## Variants of the Same Pattern

The List + Slot pattern works for:

| Section | Wrapper | Slot |
| --- | --- | --- |
| card\_grid | Repeater + grid Box | Item template |
| tabs | Repeater over tabs | Tab content |
| accordion | Repeater over panels | Panel body |
| carousel | Repeater over slides | Slide content |
| two\_column | No Repeater | Left, Right |
| hero\_with\_cta | No Repeater | Headline, Subhead, CTA |

All built the same way: section wraps the layout, slots own the variable content, linked schemas drive auto-binding.

## See Also

-   [Section Slots](/docs/studio/section-slots): the concept reference
-   [Linked schema](/docs/studio/link-content-types-with-linked-schema): multi-schema sections
-   [Auto-binding](/docs/studio/auto-binding-by-drop-location): scope-root matching
-   [Multi-schema section](/docs/studio/multi-schema-sections-for-multiple-content-types): same product\_card across blog\_post, product, event
