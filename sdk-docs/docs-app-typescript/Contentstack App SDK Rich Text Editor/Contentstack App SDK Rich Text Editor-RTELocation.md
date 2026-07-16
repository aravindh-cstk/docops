---
title: "RTELocation"
description: "The `RTELocation` object provides access to the RTE context and entry data within rich text fields."
url: "https://www.contentstack.com/appsdk-rte-rtelocation"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## RTELocation

The `RTELocation` object provides access to the RTE context and entry data within rich text fields.

```
const rteLocation = sdk.location.RTELocation;
if (rteLocation) {
  const entry = rteLocation.entry;
  const entryData = entry.getData();
}
```

It supports only the [entry](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#entry-object) core object:
