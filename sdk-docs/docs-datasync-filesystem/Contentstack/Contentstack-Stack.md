---
title: "Stack"
description: "A stack is a repository or a container that holds all the entries / assets of your site. It allows multiple users to create , edit , approve , and publish their content within a single space. The `Stack` instance provides access to all query methods for fetching entries, assets, and content type data from the local filesystem."
url: "https://www.contentstack.com/datasync-filesystem-contentstack-stack"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Stack

A [stack](/docs/developers/set-up-stack/about-stack) is a repository or a container that holds all the [entries](/docs/content-managers/author-content/about-entries)/[assets](/docs/content-managers/working-with-assets/about-assets) of your site. It allows multiple users to [create](/docs/content-managers/working-with-entries/create-an-entry), [edit](/docs/content-managers/working-with-entries/edit-an-entry), [approve](/docs/content-managers/use-workflows/send-an-entry-for-publish-or-unpublish-approval), and [publish](/docs/content-managers/publish-content) their content within a single space.

The `Stack` instance provides access to all query methods for fetching entries, assets, and content type data from the local filesystem.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| baseDir | string | No | — | Base directory of the folder where data is stored |
| locale | string | No | — | Default locale to use when `.language()` is not specified in a query |
| referenceDepth | number | No | — | The default nested reference field depth considered when calling `.includeReferences()` . This can be overridden by passing a numerical argument to `.includeReferences(n)` |
| projections | object | No | — | Keys that by default would be removed from results. Pass `key: 0` to remove, `key: 1` to override the existing |

Returns:
Type
Stack

**Example:**

```
import { Contentstack } from "@contentstack/datasync-filesystem-sdk";
const config = {
  contentStore: {
    baseDir: './_contents',
    defaultSortingField: 'updated_at',
    locale: 'en-us',
    projections: {
      _content_type_uid: 0,
    },
    referenceDepth: 2,
  },
}

const Stack = Contentstack.Stack(config);
```
