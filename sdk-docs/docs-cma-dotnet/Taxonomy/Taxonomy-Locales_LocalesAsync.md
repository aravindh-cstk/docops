---
title: "Locales / LocalesAsync"
description: "The `Locales` and `LocalesAsync` actions return the localized versions available for the targeted taxonomy. The response body is raw JSON from the API. The SDK does not provide a dedicated typed model for this response. Validation Unsupported `ParameterCollection` value types can throw `ContentstackException` . Passing `null` for `collection` is valid. Some query keys or values may be ignored by the API or only fail after the server response. Behavior Each call maps to a single HTTP GET request. The response shape depends on the Management API. Do not assume a fixed schema unless using your own DTOs. Use `Localize` / `LocalizeAsync` to create or update localized content. Use `stack.Locale().Query()` to list stack-level locale definitions (separate from taxonomy or term locale payloads)."
url: "https://www.contentstack.com/taxonomy-locales-localesasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Locales / LocalesAsync

The `Locales` and `LocalesAsync` actions return the localized versions available for the targeted taxonomy.

The response body is raw JSON from the API. The SDK does not provide a dedicated typed model for this response.

**Validation**

- Unsupported `ParameterCollection` value types can throw `ContentstackException`.
- Passing `null` for `collection` is valid. Some query keys or values may be ignored by the API or only fail after the server response.

**Behavior**

- Each call maps to a single HTTP GET request.
- The response shape depends on the Management API. Do not assume a fixed schema unless using your own DTOs.
- Use `Localize` / `LocalizeAsync` to create or update localized content.
- Use `stack.Locale().Query()` to list stack-level locale definitions (separate from taxonomy or term locale payloads).

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | null | Defines optional query parameters for `Locales()` . Provide values to control the returned locale list. |

Returns:
Type
ContentstackResponse or Task<ContentstackResponse> (for async) containing the taxonomy locale data.

The following example builds a client and stack, calls `LocalesAsync` for one taxonomy UID, reads JSON with `OpenJObjectResponse()`, and handles API failures and invalid SDK targeting.

```
using System;
using System.Threading.Tasks;
using Contentstack.Management.Core;
using Contentstack.Management.Core.Exceptions;
using Newtonsoft.Json.Linq;

try
{
    ContentstackClient client = new ContentstackClient("AUTHTOKEN");
    Stack stack = client.Stack("APIKEY");

    ContentstackResponse response = await stack.Taxonomy("TAXONOMYUID").LocalesAsync();
    JObject json = response.OpenJObjectResponse();

    Console.WriteLine($"HTTP {(int)response.StatusCode}; taxonomies node present: {json["taxonomies"] != null}");
}
catch (ContentstackErrorException ex)
{
    Console.WriteLine($"API error ({(int)ex.StatusCode}): {ex.ErrorMessage}");
}
catch (InvalidOperationException ex)
{
    Console.WriteLine($"Invalid operation: {ex.Message}");
}
```
