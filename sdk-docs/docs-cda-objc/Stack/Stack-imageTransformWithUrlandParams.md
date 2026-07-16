---
title: "imageTransformWithUrl:andParams:"
description: "Transforms provided image url based on transformation parameters."
url: "https://www.contentstack.com/ios-stack-imagetransformwithurl-andparams-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## imageTransformWithUrl:andParams:

Transforms provided image url based on transformation parameters.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| url | NSString | Yes | — | Url on which transformations to be applied. |
| params | NSDictionary<NSString*,id> | Yes | — | Transformation parameters. |

Returns:
Type
Stack

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
NSDictionary *params = [[NSDictionary alloc] initWithObjectsAndKeys:[NSNumber numberWithInt:100], @"width", [NSNumber numberWithInt:100], @"height", nil];
NSString *transformedUrl = [stack imageTransformWithUrl:imageURL andParams:params];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
let params:[String : AnyObject?] = [
  "width":100 as AnyObject,
  "height":100 as AnyObject,
];
let transformedUrl:String = stack.imageTransformation(withUrl: imageURL, andParams: params);
```
