---
title: "Compose a Seasonal Landing Page"
description: "The 5-minute Quickstart taught you to open an existing Template and change a headline."
url: /studio/compose-a-seasonal-landing-page
uid: blt5c26c91365436381
---

# Compose a Seasonal Landing Page

## Compose a seasonal landing page in 15 minutes

**Time:** ~15 min. **Level:** Intermediate. Assumes you've done the [5-minute Quickstart](/docs/studio/author-your-first-edit) and glanced at [Working with Templates](/docs/studio/working-with-templates-as-an-author) + [Working with Sections](/docs/studio/working-with-sections-as-an-author). **Glossary refresher:** [Template](/docs/studio/studio-glossary-for-authors#the-page-building-vocabulary), [Section](/docs/studio/studio-glossary-for-authors#the-page-building-vocabulary), [Section Slot](/docs/studio/studio-glossary-for-authors#the-advanced-patterns), [Exposed Prop](/docs/studio/studio-glossary-for-authors#the-advanced-patterns), [Save / Deploy](/docs/studio/studio-glossary-for-authors#save-deploy-publish).

The 5-minute Quickstart taught you to open an existing Template and change a headline. This walkthrough goes one level deeper: **you're building a Spring 2026 landing page from a Template that's designed for reuse**. The same Template drives Spring, Summer, Fall, and Winter campaigns. You'll pick Sections, fill Section Slots, override exposed props, save + deploy (~15 minutes).

## What you'll have at the end

A new page at /campaigns/spring-2026 (or your team's equivalent URL) with:

-   A seasonal Hero (headline, subhead, image, primary CTA).
-   Three featured product cards.
-   A short promo strip.
-   A newsletter sign-up in a Section Slot near the footer.

Live on the preview environment. Ready for your team to review before you Deploy to production.

## Prerequisites: read this first

Your engineering team must have set up:

-   A **Campaign Template** bound to a campaign content type (or an equivalent).
-   A campaign entry created and populated with Spring 2026 content (headline, subhead, featured product references, promo text). If it's not there yet, ping engineering or your CMS admin. This walkthrough won't work with an empty entry.
-   The Sections you'll use: **Seasonal Hero**, **Featured Product Card**, **Promo Strip**, **Newsletter Sign-up**. Names may differ. The walkthrough uses generic names. Substitute your team's actual Section names.

If any of those are missing, this becomes a "let me help you spec what to ask engineering for" exercise (still valuable, but not a 15-min build). Come back when everything's ready.

## Step 1: Open the Campaign Template (1 min)

-   In Contentstack, open **Studio**, select your project, and go to **Compositions**, then the **Templates tab**.
-   Find **Campaign Template**. Click to open. The canvas loads with placeholder / previous-campaign content.
-   Notice the top-right of the header: **the entry selector**. This is where you'll switch the canvas to render against the Spring 2026 entry.

## Step 2: Point the canvas at your Spring 2026 entry (30 sec)

-   Click the entry selector.
-   Search / pick **Spring 2026** (or whatever your team named the entry).
-   Canvas re-renders with Spring 2026's headline, subhead, and product references pulled from the entry.

You're now viewing the Template's layout **applied to your actual campaign content**. Every change from here forward is scoped to how the Template + this specific entry compose. The entry data itself lives in the Content module, not here.

## Step 3: Drop the Seasonal Hero (2 min)

The Hero is the topmost Section. If it's already there (Template shipped with a Hero placeholder), skip to the next step. If not:

-   Open the **Palette** (left panel).
-   Under the Sections group, find **Seasonal Hero**. Drag it onto the canvas at the top.
-   The Hero renders with the entry's hero\_headline, hero\_subhead, hero\_image, and hero\_cta auto-bound, no manual wiring needed.

**If the Hero looks empty:**

-   Open the entry (in Content, then Entries, then Spring 2026): the hero\_\* fields probably aren't filled.
-   Fill them in Contentstack. Save the entry.
-   Come back to the canvas. It auto-refreshes.

## Step 4: Configure the Featured Product Cards (3 min)

The Campaign Template usually has a **Card Grid** Section wired to a repeating list of product references. Confirm the Section is on the canvas. If it's a fresh Template, drag it in.

-   Select the Card Grid (click it on the canvas, or click the layer in the **Layers** panel on the left).
-   The **Properties panel** (right) shows the Card Grid's exposed props. Look for:

    -   **Layout**: a choice prop (2-col, 3-col, 4-col). Pick 3-col for Spring 2026.
    -   **Show price**: a boolean. Turn on.
    -   **CTA label**: a text override. Set to "Shop now".
-   The list of cards comes from the entry's featured\_products reference field. Each card auto-renders one product. To change which products appear, edit the entry's featured\_products field in Contentstack, not here.

If you don't see cards but the field has products, click the **Repeater** at the top of the Card Grid in the Layers panel and toggle **Preview Mode** in Properties: the canvas defaults to showing one iteration. Preview Mode shows all.

## Step 5: Add a Promo Strip between Hero and Card Grid (2 min)

-   In the **Palette**, go to **Sections**, then find **Promo Strip**. Drag it onto the canvas **between** the Hero and the Card Grid.
-   Select the Promo Strip. In Properties, its promo\_text field is bound to the entry. The copy comes from Spring 2026's promo\_text value.
-   If you want to override the copy for THIS page only (without editing the entry, e.g., a one-off tagline), look for an **Override** option in Properties, then the Bindings section (some Sections expose this, some don't. Ask engineering if you can't find it for a specific Section).

## Step 6: Fill the Section Slot near the footer (3 min)

The Campaign Template has a **Section Slot** designed for a per-campaign call-to-action: a newsletter sign-up, a webinar invite, a survey, etc. It's an empty carved-out region right above the footer.

-   Scroll the canvas to just above the footer. You'll see a placeholder labelled **"Drop a Section here"** (the Section Slot).
-   In the **Palette**, go to **Sections**, then find **Newsletter Sign-up**. Drag it onto the Section Slot.
-   The Newsletter Sign-up Section renders with its default headline and form. Select it and check Properties:

    -   **Headline**: override to "Get Spring drops in your inbox".
    -   **Button label**: override to "Sign up".

Section Slots differ from regular Slots: the surrounding Template design (footer margin, background, etc.) stays intact. You're only filling the carved-out region.

## Step 7: Save + preview (30 sec)

-   **Save** (top-right button). This writes your composition as a draft.
-   Your changes are now visible **to you, in this canvas**, plus in any Live Preview surface your engineering team has wired.
-   Visit your team's preview URL for /campaigns/spring-2026 in another tab. Everything you just composed should be there.

## Step 8: Deploy to preview environment (30 sec)

-   Confirm the preview looks right.
-   **Deploy**: pick the **preview** environment (not production yet). Deploy is per-environment. You can Deploy to preview freely for reviews without touching production.
-   Your team + stakeholders can now review at the preview URL.

## Step 9: Deploy to production (final ~1 min)

Once approved:

-   **Deploy** again, this time select the **production** environment.
-   Live within seconds. Content delivery network (CDN) caches may take slightly longer to serve the fresh version to everyone.

## Step 10: What if something looks off?

Every state Studio Deployed is snapshotted. If Spring 2026 looks broken on production:

-   Open the Campaign Template.
-   Open the overflow menu, then **Versions** (see [Rolling back a bad Deploy](/docs/studio/publishing-and-preview-for-authors#rolling-back-a-bad-deploy) in Publishing and preview).
-   Hover the previous version, click **Restore**, then **Deploy** to production again.

~2 clicks. This is why Deploy is safe.

## What you learned

-   Point a Template at a specific entry via the entry selector.
-   Compose a page from Sections in the palette.
-   Configure Section behavior via exposed props (choice / boolean / text overrides).
-   Fill a Section Slot without disrupting the Template's surrounding design.
-   Preview via Save, go live via Deploy, roll back via Versions.

Everything else in the author docs is deeper flavour on these five moves. When you next hit an unfamiliar Section or an override you haven't seen, the Glossary + Working-with-Sections page cover it.

## Next steps

-   **Repeat for Summer 2026.** Same Template, new entry, same steps. This is the whole point of the Template pattern. Should take <5 minutes now that you know the flow.
-   **[Publishing and preview](/docs/studio/publishing-and-preview-for-authors)**: deeper on Save vs Deploy vs Publish, environments, Versions.
-   **[Troubleshooting for Authors](/docs/studio/troubleshooting-for-authors)**: top 8 "something looks wrong" symptoms.
-   **[Glossary](/docs/studio/studio-glossary-for-authors)**: bookmark it.

## See also

-   [5-minute Quickstart](/docs/studio/author-your-first-edit): the shorter version of this walkthrough.
-   [Working with Templates](/docs/studio/working-with-templates-as-an-author): Template-level reference.
-   [Working with Sections](/docs/studio/working-with-sections-as-an-author): Section-level reference.
