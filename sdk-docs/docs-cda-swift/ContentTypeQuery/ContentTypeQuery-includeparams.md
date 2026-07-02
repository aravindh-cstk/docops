---
title: "include(params:)"
description: "Include URI parametes to fetch ContentType with Global Fields and Count."
url: "https://www.contentstack.com/swift-contenttypequery-include-params-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## include(params:)

Include URI parametes to fetch ContentType with Global Fields and Count.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params | ContentTypeQuery.Include | Yes | — | The member of your ContentTypeQuery.Include that you want to include in response |

Returns:
Type
Self

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

stack.contentType().query().include(params: [.all])
.find { (result: Result<ContentstackResponse<ContentTypeModel>, Error>, response: ResponseType) in
    switch result {
    case .success(let contentstackResponse):
        // Contentstack response with ContentTypeModel array in items.
    case .failure(let error):
        //Error Message
    }
}
```

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.contentType().query().include(params: [.count]) 
.find { (result: Result<ContentstackResponse<ContentTypeModel>, Error>, response: ResponseType) in 
  switch result { 
  case .success(let contentstackResponse): 

  case .failure(let error): 
  }
}
```
