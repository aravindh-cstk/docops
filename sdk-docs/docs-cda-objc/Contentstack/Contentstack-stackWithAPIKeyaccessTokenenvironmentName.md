---
title: "stackWithAPIKey:accessToken:environmentName:"
description: "Create a new Stack instance with stack’s API key, Delivery token, and Environment."
url: "https://www.contentstack.com/ios-contentstack-stackwithapikey-accesstoken-environmentname-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## stackWithAPIKey:accessToken:environmentName:

Create a new Stack instance with stack’s API key, Delivery token, and Environment.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| apiKey | NSString | Yes | — | Stack API Key. |
| deliveryToken | NSString | Yes | — | Environment specific delivery token. |
| environment | NSString | Yes | — | Stack environment id to fetch content |

Returns:
Type
Stack

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN"
environmentName:@"ENVIRONMENT"];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:"ENVIRONMENT")
```
