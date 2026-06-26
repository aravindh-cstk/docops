---
title: "FullPage"
description: "The `FullPage` object enables full-page applications within the Contentstack interface for handling complex workflows or data operations."
url: "https://www.contentstack.com/developers/sdks/contentstack-app-sdk/typescript/reference/fullpage"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# FullPage

## FullPage

The `FullPage` object enables full-page applications within the Contentstack interface for handling complex workflows or data operations.

```
const fullPage = sdk.location.FullPage;
if (fullPage) {
  const stack = fullPage.stack;
  const contentTypes = await stack.getContentTypes();
}
```

It supports only the [Stack](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#stack-object) core object.
