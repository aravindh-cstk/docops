---
title: "Quickstart 4: Build a List Section with Section Slots"
description: "Iterate a Modular Block (or multi-Reference) field. Let each Template drop different content per block-type via a Section Slot."
url: /studio/quickstart-build-a-list-section
uid: blt0b495faa6fcefbee
---

# Quickstart 4: Build a List Section with Section Slots

## Quickstart 4: Build a List Section with Section Slots

Iterate a **Modular Block** (or **multi-Reference**) field. Let each Template drop different content per block-type via a **Section Slot**. Optionally expose props on the wrapper.

**Time:** ~15 minutes. **Prereq:** [Quickstart 3: Build a Simple Section](/docs/studio/quickstart-build-a-simple-section). **Next:** [Create a Template](/docs/studio/quickstart-create-a-template).

Your browser can't play this video. [Download it instead](https://assets.contentstack.io/v3/assets/blt54a810a25f9de55a/blta12f42e43e98b8b6/6a6b93c64d864f52430e9a1f/04-quickstart-list-section.mp4).

**Watch the walkthrough (5:31)**: it starts by building three cards the hard way, shows why that breaks, then replaces them with a Repeater and adds Condition Blocks per block-type. [See all six videos](/docs/studio/studio-video-walkthroughs).

![Card Grid List Section open in the Studio canvas: the section wraps a Repeater at its root iterating a Modular Block field, ready for Condition Blocks and Section Slots per block-type.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2a9b91e98eb86c22/806b5726851a334fe4a88ff2/quickstart-card-grid-canvas.png)

Later in the flow, switch the left panel to the **Layers** tab to see the composition tree (the Repeater, then its Condition Blocks, then the Section Slots inside them, visible in order):

![Card Grid Layers panel. The composition tree rendered in the sidebar's Layers tab: root Repeater node with one Condition Block per block-type and a Section Slot inside each CB.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame6b1359da0345430/3522ca8e006086364ed0b653/quickstart-card-grid-layers.png)

## What you'll have at the end

-   A sections\_list **List Section** that iterates blog\_post.sections (a Modular Block with two block-types: hero\_block, feature\_block).
-   Inside each block-type's rendering path: a **Section Slot** each Template can fill with whatever component fits that Template's design.
-   Two Templates using the same List Section, dropping different components per block-type per instance.

## Prerequisites

-   \[ \] Quickstart 3 done. You know how to create a Section, link a schema, save.
-   \[ \] A blog\_post CT with a sections **Modular Block** field. Two allowed block-types: hero\_block (fields: headline, subhead) and feature\_block (fields: title, description).
-   \[ \] Registered components for the block-types: <Hero> (from Quickstart 3) and <FeatureBox>. Register <FeatureBox> the same way as Hero if you haven't.

## The three primitives you'll compose

**Repeater**: iterates the N items in the field. Bound to sections, returns one iteration per Modular Block item.

**Condition Block (CB)**: inside the Repeater, branches based on which block-type the item is. CB(hero\_block) renders only when the item is a hero\_block. CB(feature\_block) renders only when it's a feature\_block.

**Section Slot**: inside a CB, an empty drop-zone the **Template** author fills per instance. NOT a Component Slot (which is filled at Section time). This one is filled later.

Together: Repeater → CB per block-type → Section Slot for each CB.

Full detail on each: [Smart Containers chapter](/docs/studio/smart-containers-guide).

## Steps (in Studio's canvas)

### 1\. Create the Section, link to the Modular Block

-   New Section. Set **Title:** to Sections List and **Composable UID:** to sections\_list.
-   Link to schema: the blog\_post CT, then Selected field: sections (the Modular Block).

Save.

### 2\. Drop a Repeater at the root

In the left palette, open **Smart Containers**, then drag **Repeater** onto the empty canvas.

Because the Section is linked to sections, Studio auto-binds the Repeater's items prop to the Modular Block's items. You'll see one placeholder iteration on the canvas.

**Select the Repeater via the Layers tab** (not by clicking the canvas: the Repeater renders no DOM of its own, so canvas clicks miss it). In the right panel, toggle **Preview Mode ON**, which re-renders the canvas showing every actual item in the connected entry:

![Card Grid Section canvas with the Repeater selected in the Layers tab (highlighted as "Repeater: Iterates Related Posts"). The right panel shows Configuration with the Preview Mode toggle ON, and Properties with Contents: Condition Block, Items: Related Posts. The canvas iterates two real items from the connected Blog Post entry's Related Posts.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8092c4561e023a51/61461be97ef9413fc7a67a08/step-repeater-preview-mode.png)

### 3\. Add a Condition Block per block-type

Inside the Repeater, drop a **Condition Block**. Select it (via the Layers tab). The right panel Properties shows a **When** clause. Configure it to match the block-type you're targeting:

-   **Condition type:** Modular Block.
-   **Block type value:** hero\_block.

![Card Grid Section canvas with a Condition Block selected in Layers ("When Blog Post" is the current condition). The right panel Configuration shows the When rule: "Related Posts.Content Type == Blog Post", the discriminator matching a specific target CT for this iteration branch. Preview Mode is ON.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcb8049fde6722183/1c034b3b3864dd10ca554319/step-condition-block-props.png)

That CB now renders only for hero\_block items. Repeat for feature\_block: drop a second CB inside the Repeater, condition on feature\_block.

### 4\. Add a Section Slot inside each Condition Block

Inside CB(hero\_block), drop a **Section Slot** from the palette. Give it a label: "Hero content".

Inside CB(feature\_block), drop another **Section Slot** and label it "Feature content".

![Hero Strip Section canvas with a Section Slot selected in Layers. The canvas center shows the Section Slot chip labelled "Drop CTA button or Link", the exact placeholder text Template authors see. The right panel Properties shows a "Drop placeholder label" input holding the same label text.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am78566449d58da22f/359f0124d36ca53434401c77/step-section-slot-selected.png)

Each Section Slot is an empty region the Template author will fill later. The Drop placeholder label input on the right panel controls the text they see.

### 5\. (Optional) Expose props on the wrapper

Say the wrapper needs a heading above the iteration. Drop a <SectionHeader title="…" /> above the Repeater. Save, then in the Expose Props modal, expose SectionHeader.title as **"List heading"**. Now each Template can name the list ("Latest posts", "Featured stories") per instance.

Save the whole Section.

### 6\. Drop the Section on two Templates + fill the Slots

Open Template A (from Quickstart 5, or create one now):

-   Drop sections\_list. Canvas shows the iteration with two empty drop-zones per item (one for hero\_block, one for feature\_block).
-   Into CB(hero\_block)'s Slot, drop <Hero>. Auto-binds to the hero\_block's fields.
-   Into CB(feature\_block)'s Slot, drop <FeatureBox>.
-   Right panel shows "List heading". Type "Latest posts". Save.

Open Template B:

-   Same Section, different fills. Drop <PremiumHero> (a different registered component) in CB(hero\_block)'s Slot. Drop <CompactFeature> in CB(feature\_block)'s Slot.
-   Type "Featured stories" in the exposed list-heading prop. Save.

Same List Section. Two Templates. Different renders per block-type.

## Reference variant

A **multi-Reference field** works the same shape:

-   Link the Section to the reference field.
-   Condition Block's discriminator becomes **target CT** instead of block-type: CB(target\_ct = "article"), CB(target\_ct = "podcast").
-   Everything else (Repeater, Section Slots, Expose Props) identical.

Full detail: [References](/docs/studio/rendering-reference-fields).

## Verify

-   \[ \] The Section's linked\_schemas points to blog\_post.sections.
-   \[ \] The Section's ui tree contains a Repeater holding two Condition Blocks, CB(hero\_block) and CB(feature\_block), each with a SectionSlot inside it.
-   \[ \] Preview Mode on the Repeater renders every item in the connected entry.
-   \[ \] Two Templates dropping the same Section render different components per block-type.

## What happened

-   **List Section = Repeater at the root.** That's the only difference from a Simple Section: one iterates, the other doesn't.
-   **Condition Block** narrows the iteration to a specific block-type or target CT before child bindings resolve. Every non-trivial iteration needs one CB per allowed type.
-   **Section Slot** is the Template-authored drop-zone. It's what makes the same Section reusable across Templates with different content per instance.
-   **Expose Props** works on the wrapper the same way it did in Quickstart 3.

## Next

**[Quickstart 5: Create a Template + URL](/docs/studio/quickstart-create-a-template)** (~5 min).

## Full-detail references

-   [Smart Containers chapter](/docs/studio/smart-containers-guide)
-   [Repeaters](/docs/studio/create-repeatable-content-with-repeaters)
-   [Condition Blocks](/docs/studio/control-visibility-with-condition-blocks)
-   [Section Slots](/docs/studio/section-slots)
-   [Modular Blocks](/docs/studio/rendering-modular-block-fields)
-   [References](/docs/studio/rendering-reference-fields)
-   [Expose Section Props](/docs/studio/expose-section-props)
