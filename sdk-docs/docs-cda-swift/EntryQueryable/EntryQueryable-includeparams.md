---
title: "include(params:)"
description: "Instance method for including count, Unpublished, ContentType schema, Global Fields schema, and Reference ContentType Uid in result."
url: "https://www.contentstack.com/swift-entryqueryable-includereference-with-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## include(params:)

Instance method for including count, Unpublished, ContentType schema, Global Fields schema, and Reference ContentType Uid in result.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params | Query.Include | Yes | — | The member of your Query.Include that you want to include in response |

Returns:
Type
Self

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.contentType(uid: contentTypeUID).entry().query().include(params: [.count])
```

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.contentType(uid: contentTypeUID).entry().query().include(params: [.refContentTypeUID])
```

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.contentType(uid: contentTypeUID).entry().query().include(params: [.contentType])
```

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.contentType(uid: contentTypeUID).entry().query().include(params: [.globalField])
```

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.contentType(uid: contentTypeUID).entry().query().include(params: [.fallback])
```

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.contentType(uid: contentTypeUID).entry().query().include(params: [.embeddedItems])
```

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.contentType(uid: contentTypeUID).entry().query().include(params: [.unpublished])
```

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.contentType(uid: contentTypeUID).entry().query().include(params: [.count, .fallback, .embeddedItems])
```

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.contentType(uid: contentTypeUID).entry().query().include(params: [.all])
```
