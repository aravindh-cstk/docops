---
title: "where:"
description: "The `where()` method retrieves the assets from the stack using any other field UID of the assets."
url: "https://www.contentstack.com/ios-assetlibrary-where-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## where:

The `where()` method retrieves the assets from the stack using any other field UID of the assets.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| field | NSString | No | — | Field UID of the Asset |
| value | NSObject | No | — | The value to match for the field. |

Returns:
Type
AssetLibrary

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" <span>environmentName:@"ENVIRONMENT"];
AssetLibrary * asset = [stack assetLibrary];
[asset where:@"fieldName"equalTo:@"Value"];
[asset fetchAll:^(ResponseType type, NSArray *result, NSError *error) {
if (error) { 
   NSLog(@"Error: %@", error.localizedDescription); 
} else {
   NSLog(@"Fetched assets: %@", result); }
}];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")
let asset = stack.assetLibrary()
asset.where("fieldName",equalTo:"Value")
asset.fetchAll { (responseType, result, error) in
if let error = error {
     print("Error: \(error.localizedDescription)") 
  } else { 
     print("Fetched assets: \(result)") 
  } 
}
```
