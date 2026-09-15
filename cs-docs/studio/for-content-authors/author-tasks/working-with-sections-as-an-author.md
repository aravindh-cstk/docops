---
title: "Work with Sections as a Content Author"
description: "A Section is a reusable piece of a page: a Hero, a Card Grid, a Related-Posts list."
url: /studio/working-with-sections-as-an-author
uid: blt8a937c552d7b99f6
---

# Work with Sections as a Content Author

## Working with Sections

**Time:** ~12 min read + 30 min practice. **Level:** Beginner+ (best after [Working with Templates](/docs/studio/working-with-templates-as-an-author)). **Glossary refresher:** [Section](/docs/studio/studio-glossary-for-authors#the-page-building-vocabulary), [Simple vs List Section](/docs/studio/studio-glossary-for-authors#the-page-building-vocabulary), [Slot](/docs/studio/studio-glossary-for-authors#the-advanced-patterns), [Section Slot](/docs/studio/studio-glossary-for-authors#the-advanced-patterns), [Exposed Prop](/docs/studio/studio-glossary-for-authors#the-advanced-patterns), [Repeater](/docs/studio/studio-glossary-for-authors#the-advanced-patterns).

A **Section** is a reusable piece of a page: a Hero, a Card Grid, a Related-Posts list. Your engineering team builds Sections. You drop them onto Templates and customize per instance.

## Where Sections live

In Contentstack, open Studio, select **your project**, and go to **Compositions**, then the **Sections tab**.

Every Section shows in the list with its title, its bound schema (which content-type field or Global Field it renders from), and its type (Simple or List).

You typically won't create Sections. That's a developer task. You will drop them, fill them, and override values.

## Two shapes you'll see

-   **Simple Section**: renders one thing, one time. A Hero, a Header, a Footer.
-   **List Section**: renders N things via a Repeater. A Card Grid, an Article List, a Feature Row.

You don't need to know which is which when using them. Studio handles the difference. If you see a Repeater icon in the composition tree, it's a List.

## Dropping a Section on a Template

1.  Open the Template.
2.  Drag any Section from the palette (left panel, then the Sections tab).
3.  Drop it onto the canvas.

Studio auto-binds the Section to matching entry data. You'll see the Section render with real content from the connected content type, no wiring on your part.

## Overriding a value (Exposed Prop)

Some Sections expose specific values for you to override per Template instance. When you drop the Section, the right panel shows those values as editable fields.

-   Type into the field, and the Section re-renders with the new value.
-   Leave it alone, and the value stays at whatever the Section author set as default.
-   To bind it to a different entry field, click the Data Picker icon and pick a field.

Only the values your engineering team **exposed** are editable. Everything else is locked at whatever the Section author decided.

## Filling a Section Slot

Some Sections have **Section Slots**: empty regions the Section author left for you to fill per Template.

-   A Section Slot renders as a labelled drop-zone inside the Section ("Drop content here" / "Media" / "CTA").
-   Drag any registered component or another Section into the slot.
-   Drop different content into the slot per Template: same Section, different content per page.

If a Section has no Section Slot, it doesn't need one. Its design is fully set by the Section author.

## Same Section, different Templates

The most common pattern:

1.  A hero\_section Section is dropped on 5 Templates.
2.  Each Template overrides the exposed headline prop with a different string.
3.  Each Template fills the Section Slot with a different CTA.

Result: 5 Templates, 5 different Heroes, 1 Section composition. When engineering ships a new Hero design, they update the Section. All 5 Templates get the new design for free.

## What to do when a Section doesn't work as expected

-   **Section is empty**: the entry field it binds to is empty. Fill the entry in Contentstack: open Content, then Entries.
-   **The exposed prop I typed doesn't save**: click Save AND Deploy. Save alone doesn't publish.
-   **A component I want isn't in the palette**: your engineering team hasn't registered it yet. Ask them.
-   **The Section renders differently than expected**: the Section may have been updated. Refresh Studio. Or engineering shipped a code change. Ask them what changed.

Full troubleshooting for author-facing issues: [Troubleshooting for authors](/docs/studio/troubleshooting-for-authors).

## Next

-   **[Publishing and preview](/docs/studio/publishing-and-preview-for-authors)**: draft vs live, previewing before publish.
-   **[Troubleshooting](/docs/studio/troubleshooting-for-authors)**: top 8 "something looks wrong" symptoms + fixes.
