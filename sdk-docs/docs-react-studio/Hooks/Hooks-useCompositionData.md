---
title: "useCompositionData"
description: "The `useCompositionData` React hook fetches composition data and specifications. Use this as the primary method to load a composition along with its SEO and meta information."
url: "https://www.contentstack.com/react-studio-sdk-usecompositiondata"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## useCompositionData

The `useCompositionData` React hook fetches composition data and specifications. Use this as the primary method to load a composition along with its SEO and meta information.

No parameters.

**Returns**

| **Name** | **Type** | **Description** |
|---|---|---|
| specOptions | `StudioComponentSpecOptions` | The fetched composition specification. |
| seo | `SeoMetadata` | SEO metadata for the composition. |
| hasSpec | `boolean` | Indicates whether the composition returned a UI spec. Used to determine 404 handling. |
| hasTemplate | `boolean` | Indicates whether the composition has an associated template. Used to determine 404 handling. |
| spec | `StudioSpec` | The fetched composition specification, representing the UI of the composition. |
| refetchSpec | `() => void` | Function to refetch the specification. |
| isLoading | `boolean` | Indicates whether the request is in progress. |

****

**Parameters:**

| **Name** | **Type** | **Description** |
|---|---|---|
| compositionQuery | `CompositionQuery` | Query object for fetching composition data. |
| options | `CompositionQueryOptions` | Optional configuration options to fetch linked data. |

Example

```
import { useCompositionData } from '@contentstack/studio-react';
const { spec, refetchSpec, isLoading, error } = useCompositionData(compositionQuery,options);
```
