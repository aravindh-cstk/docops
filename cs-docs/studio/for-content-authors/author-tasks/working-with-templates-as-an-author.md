---
title: "Work with Templates as a Content Author"
description: "A Template is a page recipe, bound to a content type and a URL pattern, composed from the Sections and components your engineering team registered."
url: /studio/working-with-templates-as-an-author
uid: blt60214ed10725d60f
---

# Work with Templates as a Content Author

## Working with Templates

**Time:** ~10 min read + 20 min practice. **Level:** Beginner+ (assumes you've done the [5-minute Quickstart](/docs/studio/author-your-first-edit)). **Glossary refresher:** [Template](/docs/studio/studio-glossary-for-authors#the-page-building-vocabulary), [Section](/docs/studio/studio-glossary-for-authors#the-page-building-vocabulary), [Bound Content Type](/docs/studio/studio-glossary-for-authors#the-advanced-patterns), [Save / Deploy](/docs/studio/studio-glossary-for-authors#save-deploy-publish).

A **Template** is a page recipe, bound to a content type and a URL pattern, composed from the Sections and components your engineering team registered. **Creating and composing Templates is author work**, done entirely in Studio's canvas: you pick a Template (or create one), drop Sections, fill values, and publish. Your engineering team's job stopped at setting up the SDK, registering components, and building any Sections. Everything from there is yours.

## Where Templates live

In Contentstack, open Studio, select **your project**, and go to **Compositions**, then the **Templates tab**.

Every Template shows in the list with its title, its bound content type, and its URL pattern. Click one to open the composition canvas.

## The parts of a Template

-   **Bound content type**: the CT whose entries the Template renders. Every entry of this CT is rendered by this Template at a URL derived from the URL pattern.
-   **URL pattern**: the shape of the URL for entries. Common examples: /blog/{{entry.slug}}, /products/{{entry.sku}}, /case-studies/{{entry.slug}}. The {{entry.<field>}} bit is where each entry's own value goes.
-   **Sections**: the actual page composition. Dropped onto the canvas by you.

The bound content type + URL pattern are set once, when the Template is created, and rarely change afterward. They're the Template's identity. Whoever creates the Template (usually you) chooses them. If you're unsure which content type or URL pattern to use, check with your engineering team, but the choice lives in Studio, not in code.

## Creating a page: what you actually do

Most of the time, "creating a page" doesn't mean creating a new Template. It means:

1.  **Publish a new entry** of an existing content type (in Contentstack, open Content, then Entries).
2.  That entry automatically renders at the URL pattern of whichever Template is bound to its content type.

So if a blog\_post Template is bound to /blog/{{entry.slug}}, publishing a new blog\_post entry with slug: hello-world makes /blog/hello-world immediately live. You didn't touch Studio.

**When you DO create a new Template:** when your team needs a genuinely different page shape, a new page type your existing Templates can't cover.

## Making a new Template

1.  Open Compositions, then Templates, then click **\+ New Template**.
2.  **Connected** (bound to a content type (the common case) or **Freeform** (no content type) only when the page has no anchor CT). Most Templates are Connected.
3.  Pick the content type.
4.  Set the URL pattern.
5.  Drop Sections from the Sections palette on the left.
6.  Save, then Deploy.

That's the whole flow. The next chapter walks through what happens per-Section.

## Editing an existing Template

Open it. Drop / remove / reorder Sections. Change exposed values in the right panel. Save, then Deploy.

**What you can change without escalation:**

-   Which Sections are on the Template.
-   The order of Sections.
-   Values of exposed properties per Section instance.
-   What goes into each Section Slot.

**What you can't change from the Template canvas:**

-   The bound content type (Template's identity).
-   The URL pattern (would break existing links).
-   The internal design of a Section (that's set by the Section author).
-   Which props are exposed (also set by the Section author).

If you need any of these changed, ask your team.

## Deploy vs Save

-   **Save**: writes your Template composition as a draft. Only you see it in Studio's canvas.
-   **Deploy**: publishes the composition to your Studio project's live environment. Now visitors hitting the URL see it.

Always Save. Deploy when the composition is ready to go live. There's no undo on Deploy other than deploying an earlier version (or rolling back, see [Publishing and preview](/docs/studio/publishing-and-preview-for-authors)).

## Common patterns

**Same Template, different pages.** One blog\_post Template renders every blog\_post entry. Publish 50 blog\_post entries and you have 50 pages with no per-page effort.

**Template variants.** Two Templates bound to the same CT but with different URL patterns (/blog/{{entry.slug}} and /preview/blog/{{entry.slug}}) or with different Section compositions (a premium variant, a mobile-first variant). You create these the same way (one Template per variant) and pick which to compose in.

**Cross-CT reuse via Sections.** A Header Section can drop on any Template regardless of content type. Same visual, different pages.

## What next

-   **[Working with Sections](/docs/studio/working-with-sections-as-an-author)**: the actual composition per Section.
-   **[Publishing and preview](/docs/studio/publishing-and-preview-for-authors)**: previewing your work before Deploy.
-   **[Troubleshooting](/docs/studio/troubleshooting-for-authors)**: "my page won't publish", "the URL doesn't work", etc.
