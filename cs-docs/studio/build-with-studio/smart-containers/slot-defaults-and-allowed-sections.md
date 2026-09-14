---
title: "Slot Defaults & Allowed Sections"
description: "Pre-fill an empty Section Slot with a default section and restrict which sections template authors can drop in, using the slot's Data-tab settings."
url: /studio/slot-defaults-and-allowed-sections
uid: blt3155998cec1bcc01
---

# Slot Defaults & Allowed Sections

## Slot Defaults & Allowed Sections

A [Section Slot](/docs/studio/section-slots) is an empty opening the next composer fills. Two optional settings let the section author shape that opening without giving up the "anything goes" flexibility:

-   **Slot default**: one section that pre-fills the slot when a placement leaves it empty, so the section renders something useful before anyone touches it.
-   **Allowed sections**: a whitelist of which sections a composer may drop into the slot.

Both are authored per slot and are entirely optional. A slot with neither behaves exactly as before: empty until filled, accepts anything.

## Where to set them

Author these while editing the section (not on a page). Select the Section Slot on the canvas, then in the right panel open **Settings**, then **Properties**. Two controls appear, in this order:

-   **Allowed sections**: a multi-select dropdown (placeholder Select Sections). Pick zero or more sections.
-   **Default section**: a single-select dropdown (placeholder Select a default section). Pick one section. Clear it to remove the default.

Both lists are searchable and page through your project's sections as you scroll.

Set **Allowed sections first** when you want both: saving a non-empty whitelist clears a Default section that isn't on it, so picking the default afterwards saves re-choosing it.

## Slot default

![Section Slot selected in the Hero Strip section: the right panel's Properties accordion shows the Allowed sections whitelist holding Featured Card and Card Grid, with the Default section single-select open below it and filtered to the sections matching "Card".](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ameb799ec5e8f95046/0aa421e7eacd6f117a532867/slot-default-section-picker.png)

The default is a **render-time fallback**, never a copy. It shows in the slot only while that slot is empty, and only where content is live:

| Slot state | Section authoring / Design mode | Preview mode | Deployed site |
| --- | --- | --- | --- |
| Empty | Drop placeholder (default **not** shown) | Renders the **default** | Renders the **default** |
| Filled | Dropped content + drop affordances | Dropped content | Dropped content |

So a composer who drops the section and flips to Preview gets a meaningful result immediately. Dropping their own content into the slot replaces the default, and **clearing the slot brings the default back**. The default lives only as a setting on the slot. It is never written into the placement, so editing the default later updates every empty slot that points at it.

### Worked example

You author a card section whose Media slot defaults to an image\_placeholder section. On a page:

1.  Drop card. In Design mode the Media slot shows its drop placeholder.
2.  Flip to Preview and the Media slot renders image\_placeholder.
3.  Drop a real product\_media component into the slot, which replaces the placeholder.
4.  Delete that component and image\_placeholder reappears.

The page composer never had to think about the empty state. The section shipped with a sensible one.

Here are steps 1 and 2 against a real section. In design mode the empty slot keeps its drop zone, and names the default so the composer can see what renders without it:

![Studio canvas: a placed Hero Strip whose Section Slot is empty. The slot shows a dashed drop zone reading "Drop a section here to replace it.", a hint that when the slot is empty the default section Featured Card added by the section author is shown in Preview and on the live page, then an OR divider and a "Select section" button labelled "Add from the allowed Sections".](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2f48e396cb4a767d/0ceec319483636341d96f32e/slot-default-design-mode-hint.png)

Flip the same placement to Preview and the slot renders the default instead: the Featured Card section, bound to the preview entry:

![The same placement in preview mode: where the drop zone was, the slot now renders the Featured Card section, a card titled "Designing for speed: a marketing site teardown" with an excerpt and a "Read more" link.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am31986894fb881a51/4d47667120eb21404da35870/slot-default-preview-render.png)

The default is never written into the placement, so nothing in the page's own tree changed between these two shots. Only the mode did.

### Nested defaults

Defaults chain. If section A's slot defaults to B, and B has a slot that defaults to C, then placing A and previewing expands the whole chain, A holding B and B holding C, each default filling the next empty slot. Depth is unlimited. There is no cap.

Studio keeps this cheap: the chain is resolved with a small, bounded set of batched fetches (one round per nesting level, not one per section), so a deep default tree doesn't turn into a request storm.

![Left: section A placed on a page has an empty slot that renders its default B, whose own empty slot renders its default C (unlimited depth, one batched fetch round per level). Right: a default pointing back at A renders A then B, then stops at the re-entry, so the looping default renders nothing.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd94efaea1dd99421/8dd5f224218d0dac8492d5ad/containers-slot-default-chain.png)

### Circular references resolve safely

Nothing stops you from pointing a default back at a section already in its own chain (A defaults to B, and B defaults back to A). The picker lists every section and doesn't grey out the ones that would loop. A loop can't break the page, though: Studio **stops expanding the default chain at render time** as soon as it would re-enter a section already in the chain. So the loop renders A, then B, then stops. The looping default (back to A) simply renders nothing. No repeated expansion, no hang.

## Allowed sections

![The same Section Slot with the Allowed sections multi-select open: Featured Card and Card Grid are already chosen as chips, and the list below offers the project's remaining sections with checkboxes, any number of which can be added to the whitelist.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2fbab799b761e7d1/33e7dfc4b77b3dfb62799874/slot-allowed-sections-picker.png)

By default a slot accepts anything. Set **Allowed sections** to restrict which sections a composer may drop:

-   A section whose type is **not** in a non-empty list is rejected at drop time with the message "This section isn't allowed in this slot. Choose one of the slot's allowed sections, or drop a different component."
-   **Non-section components are always allowed**: the whitelist gates sections only.
-   An **empty list means no restriction** (the default). It is not "allow nothing".
-   The check runs only when a composer drops onto a page or template. It never affects how the slot renders.

When **Allowed sections** is non-empty, the **Default section** is constrained to that set: a default must be one of the allowed sections.

## Edge cases

| Scenario | What happens |
| --- | --- |
| Empty slot, Design mode | Drop placeholder shows. The default does not (design is for building, not previewing) |
| Empty slot, Preview / deployed | The default renders |
| Composer fills the slot | The default is hidden. Dropped content wins |
| Composer clears the slot | The default returns |
| Edit the default section later | Every empty slot pointing at it updates, nothing was copied |
| Default set, then removed | Empty slots go back to rendering nothing |
| Allowed list empty | Any section (and any component) may be dropped |
| Drop a disallowed section | Rejected with a warning. Nothing is placed |
| Drop a non-section component into a restricted slot | Allowed: the whitelist gates sections only |
| Default section dropdown lists bare uids instead of titles | The option list is built before the titles for the already-selected sections resolve. Type in the box to reload it, the labels come back as titles |

## Troubleshooting

Symptom first. The [edge-case table](#edge-cases) above says what should happen. This section covers what to do when it doesn't.

### The default doesn't render on the page

Work through these in order. The first is almost always the answer:

1.  **You're in Design mode.** Design mode always shows the drop zone. The default renders in **Preview** and on the live page. Flip modes before assuming anything is wrong.
2.  **You're looking at the section's own canvas.** While authoring the section that owns the slot, the slot is an inert labelled placeholder. The default never renders there. Drop the section onto a page or template to see it.
3.  **The slot isn't actually empty.** Dropped content always wins. Check the slot's contents in the right panel and clear them.
4.  **The default section isn't published to the environment you're viewing.** Publish it, then reload.
5.  **The host section was saved before the default was set.** A slot's default is captured in the host section's linked\_sections at save time, which is what lets the nested fetch resolve it. Re-open the host section and save it again.

### The default section renders blank, or an inner Repeater throws items.map is not a function

The default resolves, but the data it receives isn't the shape it was built against. An empty slot's default gets its data through a virtual instance scoped from the surrounding context, so a mismatch between the default's linked schema and the scope the slot sits in surfaces here: a Repeater bound to a list receives a single object instead.

**Fix:**

1.  Compare the default section's linked schema against the data scope at the slot's position (page entry, or the iteration item if the slot sits inside a Repeater). See [Auto-binding](/docs/studio/auto-binding-by-drop-location).
2.  Pick a default whose schema matches that scope. A section built against a list field can't default a slot that sits in a single-item scope.
3.  If the slot is inside a Repeater, remember the scope is the item, not the collection.

### I set Allowed sections and my Default section disappeared

Expected, and deliberate: a default must be one of the allowed sections. Saving a non-empty allowed list that doesn't include the current default clears the default rather than leaving an unreachable one.

**Fix:** set **Allowed sections** first, then pick the **Default section**. The default picker then offers exactly the allowed set. Add the section to the allowed list if you want it as the default.

### "This section isn't allowed in this slot. Choose one of the slot's allowed sections, or drop a different component."

The slot has a non-empty whitelist and the dragged section isn't on it. Nothing is placed.

**Fix:** drop one of the allowed sections, use the in-canvas **Select section** button (it offers only the allowed set), or add this section to the slot's Allowed sections on the host section.

### A section I didn't allow dropped in anyway

The drop gate resolves the whitelist through the host section in the local catalog, and treats an unresolvable host as permissive, a missing or unparseable catalog entry lets the drop through rather than blocking all authoring.

**Fix:** reload Studio so the section catalog loads fully, then retry the drop. If it still passes, confirm the host section still exists and opens without error.

### The whitelist doesn't stop plain components

By design: **Allowed sections gates sections only**. Any registered component can still be dropped into a restricted slot. There is no component-level whitelist. Use the slot's placeholder label to signal what belongs there.

### An empty Allowed sections list allows everything

Also by design. Empty means no restriction, not "allow nothing". To restrict the slot, list the sections explicitly.

### I can't find these settings on the page where the section is placed

They live on the **section that owns the slot**, not on the placement. Selecting a placed section's slot on a page opens a different panel. It lists what the composer has put in the slot, and offers the picker.

**Fix:** open the host section itself, select its Section Slot, and in the **Data** tab open **Settings**, then **Properties**.

### The section I want isn't in either picker

Both pickers exclude the section you're currently editing, so a slot can't point directly at its own section. They also list only compositions placed as sections, and page through the project as you scroll.

**Fix:** search by title (the pickers are searchable). For recursion, point the default at a different section, nested defaults chain from there, and Studio stops the chain if it would re-enter a section already in it.

### A circular default renders nothing at the deepest level

Expected. The pickers don't grey out choices that would loop. Expansion stops at render time as soon as the chain would re-enter a section already in it. A → B → A renders A, then B, then stops. The looping level renders nothing rather than hanging.

**Fix:** nothing to repair unless you expected content there. Point that default at a section not already in the chain.

### Selected sections show as raw uids, or the design-mode hint has no section name

Both are cosmetic. Titles are resolved best-effort: the panel looks them up separately and falls back to the uid, and the design-mode hint drops the name when the default isn't in the locally-known catalog.

**Fix:** reload the panel. If a uid persists, confirm that section still exists, a deleted default leaves its uid behind on the slot.

### Previewing a page with defaults is slow

Nested defaults chain, and each nesting level costs a fetch round (batched within the level, not per section). A deep chain multiplies rounds.

**Fix:** keep chains one or two levels deep. If a default's own slot defaults to something that defaults again, consider whether the middle layer earns its place.

## Next

-   [Section Slots](/docs/studio/section-slots): the placeholder these settings shape
-   [Expose Section Props](/docs/studio/expose-section-props): the value-level sibling
-   [Sections overview](/docs/studio/build-and-use-sections)
-   [Troubleshoot setup](/docs/studio/troubleshoot-common-studio-issues): canvas, Live Preview and SDK-init failures underneath all of this
