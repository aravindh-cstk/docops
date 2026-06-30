---
title: "only"
description: "The `only` works the same way as the Delivery SDK’s `only` query parameter. It lets you select specific fields of an entry. By default, only bound entry fields are fetched. Use `only` to include additional entry fields (field UIDs) that are not bound in the composition. Example 1 : useCompositionData( { compositionUid: \"home-page\", url: \"/home\" }, { extendQuery: { page: { includeReferences: [\"hero_image\", \"sections.author\"], only: [\"title\", \"url\", [\"hero_image\", \"url\"], [\"sections.author\", \"name\"]], }, }, } ); Example 2 : const options = { variantAlias: \"cs_personalize_a_0\", extendQuery: { page: { includeReferences: [\"hero_image\"], only: [\"title\", \"url\", [\"hero_image\", \"url\"]], }, }, }; // fetchCompositionData(for SSR) const specOptions = await studioSdk.fetchCompositionData( { compositionUid: \"home-page\", searchQuery }, options ); // useCompositionData const { specOptions, isLoading, error } = useCompositionData( { compositionUid: \"home-page\", url: \"/home\" }, options );"
url: "https://www.contentstack.com/react-studio-sdk-only"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## only

The `only` works the same way as the [Delivery SDK’s](/docs/developers/sdks/content-delivery-sdk/typescript/reference#only) `only` query parameter. It lets you select specific fields of an entry.

By default, only bound entry fields are fetched. Use `only` to include additional entry fields (field UIDs) that are not bound in the composition.

**Example 1**:

```
useCompositionData(
  { compositionUid: "home-page", url: "/home" },
  {
    extendQuery: {
      page: {
        includeReferences: ["hero_image", "sections.author"],
        only: ["title", "url", ["hero_image", "url"], ["sections.author", "name"]],
      },
    },
  }
);
```

**Example 2**:

```
const options = {
  variantAlias: "cs_personalize_a_0",
  extendQuery: {
    page: {
      includeReferences: ["hero_image"],
      only: ["title", "url", ["hero_image", "url"]],
    },
  },
};

// fetchCompositionData(for SSR)
const specOptions = await studioSdk.fetchCompositionData(
  { compositionUid: "home-page", searchQuery },
  options
);

// useCompositionData
const { specOptions, isLoading, error } = useCompositionData(
  { compositionUid: "home-page", url: "/home" },
  options
);
```

No parameters.
