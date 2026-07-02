---
title: "initWithStack"
description: "The initWithStack method initializes a new instance of the Taxonomy class using the specified Stack."
url: "https://www.contentstack.com/ios-taxonomy-initwithstack"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## initWithStack

The `initWithStack` method initializes a new instance of the Taxonomy class using the specified Stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| stack | String | Yes | — | The stack instance for making API requests |

Returns:
Type
Taxonomy

**Objective C:**

```
Stack *stack = [Contentstack stackWithAPIKey:@"api_key" 
                             deliveryToken:@"delivery_token" 
                              environment:@"environment"];
Taxonomy *taxonomy = [[Taxonomy alloc] initWithStack:stack];
```

**Swift:**

```
let stack = Contentstack.stack(apiKey: "api_key",
                             deliveryToken: "delivery_token",
                             environment: "environment")
let taxonomy = Taxonomy(stack: stack)
```
