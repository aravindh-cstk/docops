---
title: "stackWithAPIKey:accessToken:environmentName:config:"
description: "Create a new Stack instance with stack’s API key, Delivery token, Environment and Config."
url: "https://www.contentstack.com/ios-contentstack-stackwithapikey-accesstoken-environmentname-config-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## stackWithAPIKey:accessToken:environmentName:config:

Create a new Stack instance with stack’s API key, Delivery token, Environment and Config.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| apiKey | NSString | Yes | — | Stack API Key. |
| deliveryToken | NSString | Yes | — | Environment specific delivery token. |
| environment | NSString | Yes | — | Stack environment id to fetch content |
| config | Config | Yes | — | Config of stack. |

Returns:
Type
Stack

**Obj-C**

```
Config *config = [[Config alloc] init];
config.host = @"customcontentstack.io";
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN"
environmentName:@"ENVIRONMENT" config:config];
```

**Swift**

```
let config:Config = Config()
config.host = "customcontentstack.io"
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:"ENVIRONMENT", config:config)
```
