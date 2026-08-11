---
title: "Query Builder"
description: "Learn how to use the Query Builder to create Pinned Queries with filters, operators, params, and dynamic expressions for freeform compositions."
url: /studio/query-builder
---

# Query Builder

## Query Builder

The Query Builder turns a plain-English prompt, or a hand-written filter, into a saved **Pinned Query** that components can bind to. Use it to pull lists like "latest 5 posts", "blogs tagged launch", or "products under taxonomy apparel/shoes" without writing API code.

There are two ways into the same query:

1.  **Prompt path (Step 1).** Pick a content type, type what you want, click Apply. Studio generates a QuerySpec (MongoDB-style filter + params) under the hood.
2.  **Manual path (Step 2).** Edit the generated YAML directly, useful when you need an operator the prompt missed, or want to tune limit/sort.

Both paths produce the same saved artifact: a Query ({ uid, name, prompt, spec }) stored on the composition under data\_sources.contentstack\_queries.

## The QuerySpec Shape

Every Pinned Query is a QuerySpec:

```
interface QuerySpec {
  contentType: string;
  sourceType?: "content_type" | "contentstack" | "taxonomy";
  query: Record<string, any>;  // MongoDB-style filter
  params: Record<string, any>; // limit, skip, asc, desc
}
```

-   query is the filter body: keys are field paths (dot notation for nested/reference fields), values are either direct matches or $\-prefixed operators.
-   params controls paging and sort.

> only, except, and include are stripped on save. Studio manages reference includes itself based on what your components bind to.

## Supported Operators

These are the operators Studio understands in both authoring (CMA) and runtime (Delivery API) contexts:

| Operator | MongoDB form | Use it for |
| --- | --- | --- |
| equals | field: val | Exact match |
| not\_equals | $ne | Exclude a value |
| gt / gte | $gt, $gte | Numbers, dates |
| lt / lte | $lt, $lte | Numbers, dates |
| in | $in | Match any value in a list |
| contains | $regex | Substring on string fields |
| exists | $exists | Field is present (true) / absent |

Dot notation works everywhere: author.name, category.title, seo.meta\_description.

## Params

| Param | Effect |
| --- | --- |
| limit | Page size (default 10) |
| skip | Offset for pagination |
| desc | Field name to sort descending (e.g. updated\_at) |
| asc | Field name to sort ascending |

## Dynamic Expressions

Filter values can reference runtime context, resolved at fetch time both in Studio and in the SDK:

-   {{url.params.category}}: query-string parameter from the canvas/page URL
-   {{now - 30 days}}: relative time
-   {{today}}, {{this\_week}}, {{this\_month}}

Component props and user context are intentionally **not** supported here. This keeps queries deterministic and cacheable. If filter values could reference runtime component state or the current user, every render would require a fresh uncached fetch, eliminating the performance benefits of a pre-executed query.

## Common Patterns

### Latest N entries

```
params:
  limit: 5
  desc: updated_at
query: {}
```

### By tag

```
params:
  limit: 10
  desc: created_at
query:
  tags:
    $in: ["launch", "featured"]
```

### By taxonomy term

Set sourceType: taxonomy and bind the term (select from the available terms). Studio maps $eq\_below, $below, $eq\_above, $above onto the Delivery SDK's equalAndBelow / below / equalAndAbove / above helpers on taxonomies.<taxonomy\_uid>.

### Filter by URL parameter

```
params:
  limit: 12
query:
  category.title: "{{url.params.category}}"
```

### Recently modified

```
params:
  limit: 20
  desc: updated_at
query:
  updated_at:
    $gte: "{{now - 7 days}}"
```

### Substring search

```
query:
  title:
    $regex: "summer"
```

## Step 2: Preview and Refine Results

After Apply, Step 2 shows entries that match: title, modified-at, modified-by, pulled live from the CMA. If the filter is invalid, you'll see a YAML or sanitization notice above the table; fix and the table re-runs.

When the query is referenced by a component on the canvas, the SDK re-executes the same QuerySpec against the Delivery API at runtime, so what you preview is what your visitors see (subject to publish state and environment).

## See Also

-   [Pinned Queries overview](/docs/studio/fetch-dynamic-content-with-pinned-queries)
-   [Pinned Entries](/docs/studio/pin-specific-entries-to-a-component)
-   [Page Data tab](/docs/studio/page-data-tab-for-entry-data-queries-and-external-data)
-   [Freeform templates](/docs/studio/freeform-templates)
