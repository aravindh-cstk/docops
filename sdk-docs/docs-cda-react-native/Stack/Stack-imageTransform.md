---
title: "imageTransform"
description: "Performs transformations on images of mentioned url based on transformation parameters"
url: "https://www.contentstack.com/image-transform"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## imageTransform

Performs transformations on images of mentioned url based on transformation parameters

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| url | string | No | — | Image url on which transformations need to be applied. |
| params | object | No | — | Object with transformation parameters |

Returns:
Type
string

```
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({"api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment"});
Stack.imageTransform(imageURL, {height: 100, width: 200, disable: "upscale"});
```

```
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({"api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment"});
Stack.imageTransform(imageURL, {crop: "150,100"});
```

```
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({"api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment"});
Stack.imageTransform(imageURL, {format: "png", crop: "150,100"});
```
