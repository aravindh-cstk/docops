---
title: "fetch:completion:"
description: "The `whereKey:equalTo: ` method adds a condition to filter entries where the specified key matches the provided value."
url: "https://www.contentstack.com/ios-taxonomy-fetch-completion-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch:completion:

The `whereKey:equalTo:
` method adds a condition to filter entries where the specified key matches the provided value.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params | NSDictionary<NSString*, id>* | No | — | Optional parameters for the request |
| completionBlock | Block | No | — | Completion handler with result or error |

Returns:
Type
void

**Objective C:**

```
NSDictionary *params = @{ @"include_count":@(true), @"include_global_field_schema": @(true) }; 
[taxonomy fetch:params completion:^(NSDictionary *entries, NSError *error) { 
if (error) 
     { NSLog(@"Error: %@", error.localizedDescription); 
 return; 
     }
 NSLog(@"Fetched entries: %@", entries); 
     }];
```

**Swift:**

```
let params = [ "include_count": true, "include_global_field_schema": true ] as [String : Any] 
taxonomy.fetch(params) { (entries, error) in 
if let error = error { 
print("Error: \(error.localizedDescription)") 
return } 
if let entries = entries {
print("Fetched entries: \(entries)") 
  } 
}
```
