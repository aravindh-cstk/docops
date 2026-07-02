---
title: "connect"
description: "The connect method establishes a connection to the filesystem with optional configuration overrides."
url: "https://www.contentstack.com/datasync-filesystem-global-connect"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## connect

The `connect` method establishes a connection to the filesystem with optional configuration overrides.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| overrides | object | Yes | — | Provides optional overrides or filesystem-specific settings |

Returns:
Type
baseDir

**Example:**

```
Stack.connect({ overrides })
  .then((baseDir) => {
    // Connection established
  })
  .catch((error) => {
    // Handle errors related to filesystem connection
  });
```
