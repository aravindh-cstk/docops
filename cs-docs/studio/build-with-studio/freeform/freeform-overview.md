---
title: "Freeform Overview"
description: "By default, every template in Studio is a Connected Template, tied to a content type, with each entry of that type rendering through the template at its."
url: /studio/freeform-overview
uid: blt5616911fc2d02d43
---

# Freeform Overview

## Freeform (optional)

By default, every template in Studio is a [**Connected Template**](/docs/studio/templates-overview), tied to a content type, with each entry of that type rendering through the template at its own URL. That's the right model for most templates: blog posts, products, profiles, anything content-driven.

**Freeform** is an optional feature you can turn on when you need templates that **aren't tied to a content type**: landing templates, campaigns, "About us", "Contact us", anything one-off.

If you don't need that, ignore this chapter. Connected templates + Sections cover everything else.

---

## Turning Freeform on

In Studio, open your project's **Settings**, go to **Configuration**, and flip **Enable Freeform Feature** to on.

![Enable Freeform Feature toggle](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcca84cd9f8fcf310/5ba9a26d2e50619f95f8e2da/project-settings.png)

One toggle. That's it.

> Freeform may be plan-dependent. If the toggle isn't writable, contact your Contentstack account owner.

## What turning it on produces

| Surface | Off | On |
| --- | --- | --- |
| Composition creation | Connected templates only | Connected templates **plus** Freeform templates |
| Composition list | Connected templates only | Mixed: Freeform templates show - in Connected Content Type |
| Canvas top bar (on a Freeform template) | n/a | A **FREEFORM MODE** badge replaces the content type chip |
| Canvas right panel | **Settings only** | Full tab chrome: **Settings + Design + Data**. The Data tab gets three template-level sections: **Additional Entry Data**, **Queries**, and **External Data** |
| URL editor (on a Freeform template) | n/a | Limited variable chips ({{composition\_uid}} only, no {{entry.\*}}) |

## What turning it off does

Existing Freeform templates aren't deleted, but the right panel collapses to **Settings only**. The **Design** and **Data** tabs both disappear. Any template that relies on Pinned Entries or Pinned Queries loses access from the canvas (and your authors lose access to the Design tab entirely). If your project ships Freeform templates, don't turn it off without migrating them first.

---

## What Freeform templates return

With Freeform on, the **\+ New Template** flow now offers two choices, Connected (the standard template, tied to a content type) and Freeform (a standalone template):

![Create New Template modal showing both Connected Template and Freeform options after Freeform is enabled](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am37eb32427c80a994/f0dbaa330e9d43471f441363/template-creation-modal.png)

Once enabled, you can create a **Freeform template** alongside regular Connected templates. A Freeform template:

-   Has no content type behind it
-   Has an auto-generated URL ({{content\_type\_uid}}/{{composition\_uid}} by default)
-   Cannot use {{entry.\*}} URL variables: there's no entry
-   Gets full right-panel chrome (**Settings + Design + Data** tabs) with three template-level pinning sections (Additional Entry Data, Queries, External Data) inside the Data tab

You still drop sections and components the same way. You still hit Save and Deploy. The difference is in **where the data comes from**.

### Getting data onto a Freeform template

A Connected template has one entry behind it. Bindings naturally reach template.<field>. A Freeform template has **no entry**, so the layout has nothing to bind to by default. You bring data in explicitly through one of these three:

| Source | What it does | When to use it |
| --- | --- | --- |
| **Pinned Entry** | Pin a specific entry onto the template. Its fields become bindable in the Data Picker like any other entry. | "This campaign's headline lives in Entry X" (single-entry references). Pick a hero entry, a CTA entry, a featured product entry. The template shows whatever's in that entry today. If you re-pin to a different entry tomorrow, the bindings remain functional. |
| **Pinned Query** | Pin a CDA query (content type + filters + order + limit). Repeaters iterate over the result. | "Show the latest five blog posts" (dynamic lists). The query re-runs on every render, so the list always reflects current published content. |
| **Component default data** | Your custom components' defaultValue props from their schema. No CMS round-trip. | Purely presentational content: decorative text, layout copy, fixed CTAs. Cheapest option. Useful for the parts of the template that won't change per render. |

Pinning happens in the canvas right panel's **Data** tab, at the template level, with nothing selected on the canvas:

![Right panel Data tab, three child sections: Additional Entry Data, Queries, External Data](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am78d9b207c0842b91/c5de559ed24b76f1ed197c75/freeform-data-tab-anatomy.png)

These three sections are siblings inside the Data tab: there isn't a separate "Page Data" tab. See [The Data tab: Additional Entry Data, Queries, External Data](/docs/studio/page-data-tab-for-entry-data-queries-and-external-data) for the full tab structure.

Both pinning surfaces are explained in their own sub-pages: [Pinned Entries](/docs/studio/pin-specific-entries-to-a-component) and [Pinned Queries](/docs/studio/fetch-dynamic-content-with-pinned-queries). The short version of which to use:

-   **One known entry**: use a Pinned Entry. (Hero entry, featured product, campaign metadata.)
-   **A list that should refresh as content changes**: use a Pinned Query. (Latest posts, top products, all entries in a tag.)
-   **A static fixed value**: type it as the prop's value (or rely on the component's defaultValue).

A typical Freeform template uses **all three**: Pinned Entry for template-level branding, Pinned Query for the dynamic content list below it, static values for decorative copy.

### URL pattern

The Edit URL modal on a Freeform template deliberately offers a smaller set of variables than a Connected template's:

![Edit URL modal for a Freeform Landing Page, pattern is /documentation_compositions/landing_page. The only Insert chip is {{composition_uid}} because Freeform has no linked entry to derive {{entry.*}} from](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf61a0b22ba5e7f84/3fa074ca2bfee99f211d0fa0/url-pattern-freeform.png)

Default pattern: {{content\_type\_uid}}/{{composition\_uid}}. **No {{entry.\*}} variables are available**. Studio doesn't show them in the Insert chip row, and typing one in manually won't resolve at render time, because a Freeform template has no entry behind it. If a Freeform template needs entry data, you bring it in via [Pinned Entries](/docs/studio/pin-specific-entries-to-a-component), not via the URL pattern. The only entry-style variable available is {{composition\_uid}} (which identifies the composition, not an entry). Context variables {{environment}} and {{branch}} can be typed manually but are inert: they resolve to nothing. {{locale}} is accepted by the pattern engine but **avoid using it**. Carry locale via your routing layer + the SDK's locale query option (see [Multi-locale at scale](/docs/studio/managing-multiple-locales-at-scale)).

### Where Freeform templates render

Same as Connected templates, at the URL the pattern resolves to, on a route in your site that mounts <StudioComponent />.

---

## Where to go next inside Freeform

-   [Pinned Entries](/docs/studio/pin-specific-entries-to-a-component): pin specific entries onto a Freeform template
-   [Pinned Queries](/docs/studio/fetch-dynamic-content-with-pinned-queries): pin a query result for Repeaters to iterate
-   [The Data tab](/docs/studio/page-data-tab-for-entry-data-queries-and-external-data): the right-panel surface that hosts the three pinning sections
-   [Freeform templates: full reference](/docs/studio/freeform-templates): URL variables, canvas chrome details
-   [Recipe: Freeform landing template](/docs/studio/freeform-landing-page-template)

---

To go back to the main docs, see [Templates](/docs/studio/templates-overview) and [Sections](/docs/studio/build-and-use-sections).
