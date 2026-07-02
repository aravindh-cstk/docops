---
title: "include(params:)"
description: "The include(params:) method adds optional response options (count, relative URLs, dimensions, fallback, metadata) to the asset query."
url: "https://www.contentstack.com/swift-assetquery-include-params-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## include(params:)

The `include(params:)` method adds optional response options (count, relative URLs, dimensions, fallback, metadata) to the asset query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params | AssetQuery.Include | Yes | None | Defines optional data you manually set in `.include()` to return assets with metadata or relative URLs. |

Returns:
Type
Self

**AssetQuery.Include options:**

| Option | Description |
|---|---|
| `.count` | Include the total count of assets in the response. |
| `.relativeURL` | Include relative URLs for assets. |
| `.dimension` | Include image dimensions (height/width). Supported types: JPG, GIF, PNG, WebP, BMP, TIFF, SVG, PSD. |
| `.fallback` | Return fallback locale content when the requested locale is not available. |
| `.metadata` | Include metadata in the response. |
| `.all` | Equivalent to `[.count, .relativeURL, .dimension, .fallback, .metadata]`. |

**Examples**

**Include all options (.all):**

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.asset().query().include(params: [.all])
.find { (result: Result<ContentstackResponse<AssetModel>, Error>, response: ResponseType) in
    switch result {
    case .success(let contentstackResponse):
    case .failure(let error):        //Error Message
    }
}
```

**Include count only (.count):**

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.asset().query().include(params: [.count]) 
.find { (result: Result<ContentstackResponse<AssetModel>, Error>, response: ResponseType) in 
  switch result { 
  case .success(let contentstackResponse): 
  case .failure(let error): 
  }
}
```

**Include relative URLs (.relativeURL):**

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.asset().query().include(params: [.relativeURL])
.find { (result: Result<ContentstackResponse<AssetModel>, Error>, response: ResponseType) in
    switch result {
    case .success(let contentstackResponse):
    case .failure(let error):
    }
}
```

**Include image dimensions (.dimension):**

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.asset().query().include(params: [.dimension]) 
.find { (result: Result<ContentstackResponse<AssetModel>, Error>, response: ResponseType) in 
  switch result { 
  case .success(let contentstackResponse): 
  case .failure(let error): 
  }
}
```

**Include fallback locale (.fallback):**

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.asset().query().include(params: [.fallback]) 
.find { (result: Result<ContentstackResponse<AssetModel>, Error>, response: ResponseType) in 
  switch result { 
  case .success(let contentstackResponse): 
  case .failure(let error): 
  }
}
```
