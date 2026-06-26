---
title: "[.NET Utils] - .NET Utils SDK Variant Utility"
description: The Variant Utility reads variant alias data from CDA entry responses and formats it for application use.
url: https://www.contentstack.com/docs/developers/sdks/utils-sdk/dot-net/dotnet-utils-sdk-variant-utility
product: Contentstack
doc_type: sdk-reference
audience:
  - developers
  - dotnet-developers
version: unknown
last_updated: 2026-04-12
---

# [.NET Utils] - .NET Utils SDK Variant Utility

This page explains how to use the .NET Utils SDK Variant Utility to extract variant alias data from CDA entry responses and generate `data-csvariants` metadata for frontend rendering; it is intended for developers working with variant-aware entries that include `publish_details.variants`.

## .NET Utils SDK Variant Utility

The Variant Utility reads variant alias data from CDA entry responses and formats it for application use. Use this utility when working with variant-aware entries that include `publish_details.variants`.

It helps you:
- Extract variant aliases per entry
- Generate the `data-csvariants` attribute for frontend rendering

## Use cases
Use this utility when:
- You fetch entries with variant headers (for example, `x-cs-variant-uid`)
- You need alias values for personalization or targeting
- You want to render variant data in HTML using `data-csvariants`

## Method index

| Method | Description |
|---|---|
| `GetVariantAliases(JObject, string)` | Returns variant aliases for a single entry. |
| `GetVariantAliases(JArray, string)` | Returns variant aliases for multiple entries. |
| `GetVariantMetadataTags(JObject, string)` | Builds the HTML attribute payload for a single entry. |
| `GetVariantMetadataTags(JArray, string)` | Builds the HTML attribute payload for multiple entries. |

## GetVariantAliases (Single Entry)
The `GetVariantAliases(JObject, string)` retrieves each variant’s alias from `publish_details.variants` on the CDA entry JSON and returns one result as a `JObject`.

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `entry` | `JObject` | Yes | CDA entry used to read `publish_details.variants` |
| `contentTypeUid` | `string` | Yes | Content type UID for the entry. Returned as `contenttype_uid` in the result |

### Returns

| Value | Description |
|---|---|
| `JObject` | For single-entry input. Contains `entry_uid`, `contenttype_uid`, and `variants` |

### Validation
Throws `ArgumentException` if:
- `entry` is null
- `entry.uid` is missing
- `contentTypeUid` is null or empty

### Behavior
- If the payload contains a nested entry object, the method reads from that object.

### Example
The following example retrieves variant aliases for a single entry:

```
// Initialize the utility and process a single entry
var variantUtils = new VariantUtility();
JObject entry = GetEntryFromJson(); // Method to fetch your CDA entry
string contentTypeUid = "product";

try {
    JObject result = variantUtils.GetVariantAliases(entry, contentTypeUid);
    // Access aliases from the result object
    var aliases = result["variants"];
} catch (ArgumentException ex) {
    Console.WriteLine($"Validation Error: {ex.Message}");
}
```

## GetVariantAliases (multiple entries)
The `Utils.GetVariantAliases(JArray, string)` retrieves variant aliases for each CDA entry in a `JArray` and returns one result object per valid entry as a `JArray`.

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `entries` | `JArray` | No | CDA entries to process. Returns an empty array if null. Skips entries with invalid UIDs. |
| `contentTypeUid` | `string` | Yes | Content type UID applied to all entries. Returned as `contenttype_uid` in each result object. |

### Returns

| Value | Description |
|---|---|
| `JArray` | Each element has the same shape as the single-entry `JObject` result (`entry_uid`, `contenttype_uid`, `variants`). |

### Validation
- Throws `ArgumentException` if `contentTypeUid` is null or empty.

### Behavior
- Skips invalid entries and processes only entries with a valid `UID`.

### Example
The following example retrieves variant aliases for multiple entries:

```
// Initialize the utility and process multiple entries
var variantUtils = new VariantUtility();
JArray entries = GetEntriesFromListResponse(); // Method to fetch your CDA entries list
string contentTypeUid = "product";

try {
    JArray results = variantUtils.GetVariantAliases(entries, contentTypeUid);
    foreach (var result in results) {
        Console.WriteLine($"Entry: {result["entry_uid"]}, Aliases: {result["variants"]}");
    }
} catch (ArgumentException ex) {
    Console.WriteLine($"Validation Error: {ex.Message}");
}
```

## GetVariantMetadataTags (Single Entry)
The `GetVariantMetadataTags(JObject, string)` method builds a `JObject` for HTML integration. The `data-csvariants` property is a string containing a serialized JSON array of variant details.

### Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `entry` | `JObject` | No | CDA entry. Defines the entry to serialize. Returns `data-csvariants` as "[]" if null. |
| `contentTypeUid` | `string` | Yes (if entry provided) | Content type UID for the entry. Required whenever `entry` is not null. |

### Returns

| Value | Description |
|---|---|
| `JObject` | Contains `data-csvariants` as a string (serialized JSON array). Each element represents `{ entry_uid, contenttype_uid, variants }`.**Note:** The `data-csvariants` value is a serialized JSON array where each element follows the shape `{ entry_uid, contenttype_uid, variants }`. Exact formatting depends on Newtonsoft.Json serialization. |

### Validation
- Throws `ArgumentException` if `entry` is provided, and `contentTypeUid` is null or empty.

### Behavior
- Processes a single entry via the array path (same pipeline as the `JArray` overload with one element).
- Returns `{ "data-csvariants": "[]" }` if `entry` is null. It does not throw an error.

**Note:** The `data-csvariants` is returned as raw JSON text. In standard Razor or Blazor attribute binding, output is HTML-encoded automatically. If you inject this value into raw HTML or bypass framework encoding, encode it for an HTML attribute before rendering.

### Example
The following example builds the attribute for a single entry:

```
// Initialize the utility and generate metadata tags
var variantUtils = new VariantUtility();
JObject entry = GetEntryFromJson();
string contentTypeUid = "product";

try {
    JObject attributeMap = variantUtils.GetVariantMetadataTags(entry, contentTypeUid);
    string jsonString = attributeMap["data-csvariants"].ToString();
    // Output: "[{\"entry_uid\":\"...\",\"contenttype_uid\":\"...\",\"variants\":[...]}]"
} catch (ArgumentException ex) {
    Console.WriteLine(ex.Message);
}
```

## GetVariantMetadataTags (multiple entries)
The `GetVariantMetadataTags(JArray, string)` method builds a `JObject` whose `data-csvariants` string serializes variant details for multiple entries.

### Parameters (JArray overload)

| Name | Type | Required | Description |
|---|---|---|---|
| `entries` | `JArray` | No | CDA entries. Returns `{ "data-csvariants": "[]" }` if null. |
| `contentTypeUid` | `string` | Yes (if entries provided) | Shared content type UID for the entries. Required whenever `entries` are not null. |

### Returns

| Value | Description |
|---|---|
| `JObject` | Contains `data-csvariants` as a string (serialized JSON array). Each element represents `{ entry_uid, contenttype_uid, variants }`. |

### Validation
- Throws `ArgumentException` if `entries` are provided, and `contentTypeUid` is null or empty.

### Behavior
- Calls `GetVariantAliases` and serializes the result into `data-csvariants`.
- Returns `{ "data-csvariants": "[]" }` if `entries` is null. It does not throw an error.

**Note:** The `data-csvariants` is returned as raw JSON text. In standard Razor or Blazor attribute binding, output is HTML-encoded automatically. If you inject this value into raw HTML or bypass framework encoding, encode it for an HTML attribute before rendering.

### Example
The following example builds the attribute for multiple entries:

```
// Initialize the utility and generate metadata tags for multiple entries
var variantUtils = new VariantUtility();
JArray entries = GetEntriesFromListResponse();
string contentTypeUid = "product";

try {
    JObject attributeMap = variantUtils.GetVariantMetadataTags(entries, contentTypeUid);
    string jsonString = attributeMap["data-csvariants"].ToString();
    // Output: "[{\"entry_uid\":\"...\"},{\"entry_uid\":\"...\"}]"
} catch (ArgumentException ex) {
    Console.WriteLine(ex.Message);
}
```

## Deprecated Methods
The following methods are deprecated and will be removed in a future release:
- `GetDataCsvariantsAttribute(JObject, string)`
- `GetDataCsvariantsAttribute(JArray, string)`

**Note:** Use `GetVariantMetadataTags` instead. These methods internally delegate to `GetVariantMetadataTags` and return the same result, ensuring backward compatibility.

## Common questions

### What input data does the Variant Utility read to extract aliases?
It reads variant alias data from `publish_details.variants` on CDA entry responses.

### When should I use `GetVariantAliases` vs `GetVariantMetadataTags`?
Use `GetVariantAliases` to return aliases as `JObject`/`JArray` results, and use `GetVariantMetadataTags` to build the `data-csvariants` HTML attribute payload.

### What happens if I pass `null` entries to the JArray overloads?
For `GetVariantAliases(JArray, string)`, it returns an empty array if null. For `GetVariantMetadataTags(JArray, string)`, it returns `{ "data-csvariants": "[]" }` if null.

### Are `GetDataCsvariantsAttribute` methods still supported?
They are deprecated and will be removed in a future release; use `GetVariantMetadataTags` instead.

<!-- filename: dotnet-utils-sdk-variant-utility.md -->