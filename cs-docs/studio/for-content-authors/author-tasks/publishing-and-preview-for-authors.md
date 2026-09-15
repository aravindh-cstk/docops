---
title: "Publish and Preview Studio Pages"
description: "Studio compositions have two states: draft (only you see them in the canvas) and deployed (visitors see them on the live site)."
url: /studio/publishing-and-preview-for-authors
uid: bltce9b079e196db337
---

# Publish and Preview Studio Pages

## Publishing and preview

**Time:** ~8 min read + 15 min practice. **Level:** Beginner+ (best after [Working with Templates](/docs/studio/working-with-templates-as-an-author)). **Glossary refresher:** [Save / Deploy / Publish / Versions](/docs/studio/studio-glossary-for-authors#save-deploy-publish).

Studio compositions have two states: **draft** (only you see them in the canvas) and **deployed** (visitors see them on the live site). This page covers the flow from one to the other.

## Save vs Deploy

Two distinct actions in Studio's canvas:

| Action | What it does | Visible to |
| --- | --- | --- |
| **Save** | Writes your composition changes as a draft. | You, in Studio's canvas. |
| **Deploy** | Publishes the composition to your Studio project's live environment. | Every visitor on your live site. |

**Always Save.** Save often. You won't lose work. Deploy when you're ready for visitors to see the change.

> **Nervous about clicking Deploy the first time?** You should be: it goes live. But Deploy is **fully reversible via Versions** (next section), and Studio keeps every prior deploy indefinitely. Worst case after a bad Deploy: you open Versions, pick the previous entry from the list, click Deploy again. Restoration is ~2 clicks + a few seconds of caching delay. You cannot permanently break a live page from Studio. Every state is snapshotted.

## Previewing before Deploy

Save works as a preview. The Studio canvas shows your unpublished changes rendering with real entry data. That's your preview surface. Compare against the live site (open in another tab) to see the diff before you Deploy.

If you have Live Preview installed in your app, unpublished entry changes also pipe through, so you can preview both composition changes (via Save) and content changes (via unpublished entries) together.

## Rolling back a bad Deploy

Studio keeps a **version history per composition**: every Save and every Deploy is snapshotted so you can go back. This is your safety net. Every author should know this flow before their first Deploy.

To roll back:

1.  **Open the composition** (Template or Section) in the Studio canvas.
2.  **Click the meatball menu** (⋯) at the top-right of the composition header, then **Versions**. A right-side panel opens listing every prior state, newest at the top, each row labelled with a timestamp, the author, and whether it was a Save (draft) or a Deploy (published).
3.  **Hover a version row** to preview it in the canvas without committing. The canvas re-renders with that version's Sections + values so you can confirm it's the one you want.
4.  **Click Restore** on the row. The canvas snaps to that version as your current draft state (older versions remain in history, they're not deleted).
5.  **Deploy** to make the restored version live. Same button as normal Deploy. The target environment gets the restored layout.

Rollbacks take effect the next time a visitor loads the URL, usually within seconds. If your app has aggressive caching, users on cached responses may see the old version for a bit longer.

**What Versions saves you from:**

-   **Accidentally deleting a Section**: Restore the previous version, redeploy.
-   **A Deploy that broke layout**: Restore, redeploy.
-   **A colleague overwrote your work**: Every author's Save is in history. Find yours by timestamp, Restore.

**What Versions does NOT save:**

-   **Content changes made in Entries**: those are entry-level, versioned separately. In Contentstack, open Content, go to Entries, and open the entry's own Versions.
-   **Global Field / Content Type schema changes**: those need engineering + a schema migration.

If Versions doesn't show what you expect (e.g., the Restore button is greyed out, or the panel is empty), ping engineering. The composition's history may have been rebuilt during a migration.

## Publishing entries (content changes)

**Composition changes** (a new Section, a rearranged Template) belong in Studio: Save, then Deploy.

**Content changes** (a new blog post, an updated headline in an entry) belong in Contentstack: open Content, then Entries, and publish the entry.

Publishing an entry is separate from Deploying a composition. Publishing an entry makes new content appear at existing URLs (or creates new URLs matching a Template's pattern). Deploying a composition changes the layout / arrangement.

## What "live" actually means

-   **Deployed composition**: the Template + Sections' current authored state.
-   **Published entries**: the content Studio pulls into that composition at request time.

Both need to be in the state you want. A Deployed composition with unpublished entries = layout is live, content is still on the old version. A published entry with an undeployed composition change = new content in the OLD layout.

Rule of thumb: Deploy composition changes AND publish related entries before considering a change "live."

## Environments (if your setup has multiple)

If your team runs multiple Contentstack environments (development / staging / production), Deploy targets the environment your Studio project is configured for. To promote a change between environments, your team's release process usually handles it. Ask.

## Troubleshooting Deploy

-   **Deploy button greyed out**: no unsaved changes to deploy. Save first.
-   **Deployed but visitors don't see the change**: Content delivery network (CDN) or your app's cache. Wait a minute. Hard-refresh the page.
-   **Deployed but the page 404s**: the Template's URL pattern doesn't match the entry's URL. Check the Template's URL pattern and the entry's slug (or whichever field the pattern uses).

More: [Troubleshooting for authors](/docs/studio/troubleshooting-for-authors).
