---
title: "Create a composition"
description: "The Create Composition button on the Studio compositions list. Where it lives, what it opens, and what happens after you pick Template or Section."
url: /studio/create-composition-button
uid: bltda72fa4160f7f12e
---

# Create a composition

## Create a composition

Every Studio project's **Compositions** page has a top-right button that creates a new composition. The button's label changes with the active tab: **\+ New Template** on the Templates tab, **\+ New Section** on the Sections tab. Both routes end in a saved composition on the canvas, ready to author.

## Where it lives

Open your Studio project and go to **Compositions**. The list has two tabs, **Templates** and **Sections**, and one button in the top-right corner.

-   **Templates tab**: the button reads **\+ New Template**. Templates render full pages at URL patterns.
-   **Sections tab**: the button reads **\+ New Section**. Sections are reusable blocks with no URL of their own.

## What the button opens

### New Template

Clicking **\+ New Template** opens the **Create New Template** modal.

-   **Connected Template** (default): starts empty and connects to a Content Type you pick. Every entry of that Content Type renders at its own URL through this Template. This is the canonical use case.
-   **Freeform** (only when the project has [Freeform](/docs/studio/freeform-overview) enabled): a standalone Template not tied to a Content Type. Data comes in through Pinned Entries or Pinned Queries, not through URL binding.

Pick a Content Type (Connected) or accept the auto-generated URL (Freeform), name the Template, then **Create**. Studio saves the composition and opens the canvas ready for you to drop Sections and components.

### New Section

Clicking **\+ New Section** opens a smaller modal: name the Section, click **Create**. Studio saves an empty Section and opens the canvas.

Once inside, wire the linked schema first (the Section canvas has a **Connect A Schema** guided card in the header). See [Linked schema](/docs/studio/link-content-types-with-linked-schema) for what to pick.

## What happens after Create

-   **Save** persists the composition to the project. The canvas stays open for further edits.
-   **Deploy** publishes the composition so its rendered output goes live. See [Save vs Deploy](/docs/studio/save-vs-deploy-a-composition).

Nothing about creating a composition changes your app's code. No new files, no new routes. Studio hands the spec to your app's catch-all route at render time.

## Related

-   [What is a composition?](/docs/studio/what-is-a-composition): the two shapes (Template, Section).
-   [Templates overview](/docs/studio/templates-overview), [Sections overview](/docs/studio/build-and-use-sections).
-   [Save vs Deploy a composition](/docs/studio/save-vs-deploy-a-composition).
-   [Quickstart 5: create a Template and URL](/docs/studio/quickstart-create-a-template).
