---
title: "Taxonomy(stack:)"
description: "The Taxonomy(stack:) method initializes a new instance of the Taxonomy class."
url: "https://www.contentstack.com/swift-taxonomy-taxonomy-stack-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Taxonomy(stack:)

The Taxonomy(stack:) method initializes a new instance of the Taxonomy class.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| stack | Stack | Yes | — | The Stack instance for making API requests |

Returns:
Type
Taxonomy

**Example:**

```
let stack = Contentstack.stack( apiKey: "your_api_key", deliveryToken: "your_delivery_token", environment:"your_environment" ) 
let taxonomy = Taxonomy(stack: stack)
```
