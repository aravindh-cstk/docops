---
title: "Fetch Dynamic Content with Pinned Queries"
description: "Learn how to pin a CDA query onto a Freeform template so a Repeater can iterate over dynamic list results that refresh automatically as content changes."
url: /studio/fetch-dynamic-content-with-pinned-queries
uid: blt63ad5b30fa2414cc
---

# Fetch Dynamic Content with Pinned Queries

## Fetch Dynamic Content with Pinned Queries

Pin a query result onto a Freeform template so a Repeater inside it can iterate over the matches. Like [Pinned Entries](/docs/studio/pin-specific-entries-to-a-component), but for **lists** instead of single entries, and the list refreshes automatically as the query's underlying data changes.

## Pinned Entry vs. Pinned Query: When to Use Which

|  | Pinned Entry | Pinned Query |
| --- | --- | --- |
| What you pin | One specific entry | A query returning N entries |
| Used by | Component bindings | Repeater bindings |
| Updates as content changes | Only if you re-pin | Automatically, the query re-runs |
| Typical use | "This campaign's headline", "this featured product" | "All blog posts in this category", "top 3 products this week" |

A Freeform template often uses **both**, pin one hero entry for template-level branding, plus a query for the dynamic list below it.

## What a "query" means here

A query is a saved CDA query against your stack: a content type + optional filters + optional ordering + a limit. When the template renders, Studio re-runs the query against the current environment and locale, then feeds the results into whichever Repeater is bound to it.

## Where to Configure

```
Right panel  →  Data tab  →  Queries section
```

The Data tab only appears when Enable Freeform Feature is on; without Freeform, the right panel collapses to **Settings only**. See [The Data tab](/docs/studio/page-data-tab-for-entry-data-queries-and-external-data) for the full structure.

## Authoring Flow

1.  Open the Freeform template on the canvas
2.  Right panel → **Data** tab → **Queries** section → **\+ New Query**
3.  Either pick a content type and configure filters/order/limit by hand, **or** type a natural-language prompt and let Studio convert it into a smart query
4.  Save the pin
5.  Drop a Repeater onto the canvas → bind its source to the pinned query
6.  Drop a card or item component inside the Repeater body. Its bindings resolve against the current iteration item.

### Natural-language query prompts

Studio's New Query modal accepts a free-text prompt under "Tell me what data you need" and converts it to a CDA query at **save time**, the prompt runs once when you click Save, not on every page render. The Insert quick-prompts seed common shapes: _"Show the last 5 recent entries"_, _"List all entries from the past week"_, _"Filter the entries by specific tags"_, _"Fetch the entries containing taxonomy"_, and you can edit from there.

![New Query modal — Name + Content Type required fields at the top, large text-prompt area in the middle (with examples), Insert quick-prompts row at the bottom.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2bc35d1e116bf562/930228f575d134250c344789/pinned-queries.png)

To adjust the query later, re-open it from the Queries section and either re-enter a prompt or edit the resolved filter fields directly. The stored query (not the original prompt) drives every subsequent render.

## Pairs Well With

-   **[Section Slots](/docs/studio/section-slots)**: pin a query of products, drop a card\_grid section that auto-binds to it, fill the slot with your product\_card section. Three layers of reuse, one query as the data source.

## Next

-   [Pinned Entries](/docs/studio/pin-specific-entries-to-a-component)
-   [The Data tab](/docs/studio/page-data-tab-for-entry-data-queries-and-external-data)
-   [Section Slots](/docs/studio/section-slots)
-   [Recipe: Freeform landing template](/docs/studio/freeform-landing-page-template)
