---
title: ".NET Utils SDK Variant Utility"
description: "Utilize the Contentstack .NET Utils SDK Variant Utility to extract variant aliases and generate data-csvariants attributes using GetVariantAliases."
url: /developers/sdks/utils-sdk/dot-net/dotnet-utils-sdk-variant-utility
uid: blt62a59393c3639a28
---

# .NET Utils SDK Variant Utility

## .NET Utils SDK Variant Utility

The Variant Utility reads variant alias data from CDA entry responses and formats it for application use. Use this utility when working with variant-aware entries that include publish\_details.variants.

It helps you:

-   Extract variant aliases per entry
-   Generate the data-csvariants attribute for frontend rendering

## Use cases

Use this utility when:

-   You fetch entries with variant headers (for example, x-cs-variant-uid)
-   You need alias values for personalization or targeting
-   You want to render variant data in HTML using data-csvariants

## Method index

| **Method** | **Description** |
| --- | --- |
| [GetVariantAliases(JsonObject, string)](/docs/developers/sdks/utils-sdk/dot-net/dotnet-utils-sdk-variant-utility#getvariantaliases-single-entry) | Returns variant aliases for a single entry. |
| [GetVariantAliases(JsonArray, string)](/docs/developers/sdks/utils-sdk/dot-net/dotnet-utils-sdk-variant-utility#getvariantaliases-multiple-entries) | Returns variant aliases for multiple entries. |
| [GetVariantMetadataTags(JsonObject, string)](/docs/developers/sdks/utils-sdk/dot-net/dotnet-utils-sdk-variant-utility#getvariantmetadatatags-single-entry) | Builds the HTML attribute payload for a single entry. |
| [GetVariantMetadataTags(JsonArray, string)](/docs/developers/sdks/utils-sdk/dot-net/dotnet-utils-sdk-variant-utility#getvariantmetadatatags-multiple-entries) | Builds the HTML attribute payload for multiple entries. |

## GetVariantAliases (Single Entry)

The GetVariantAliases(JsonObject, string) retrieves each variant’s alias from publish\_details.variants on the CDA entry JSON and returns one result as a JsonObject.

### Parameters

<table><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Required</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">entry</span></td><td><span class="code">JsonObject</span></td><td>Yes</td><td>CDA entry used to read <span class="code">publish_details.variants</span></td></tr><tr><td><span class="code">contentTypeUid</span></td><td><span class="code">string</span></td><td>Yes</td><td>Content type UID for the entry. Returned as <span class="code">contenttype_uid</span> in the result</td></tr></tbody></table>

### Returns

<table><tbody><tr><td><strong>Value</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">JsonObject</span></td><td>For single-entry input. Contains <span class="code">entry_uid</span>, <span class="code">contenttype_uid</span>, and <span class="code">variants</span></td></tr></tbody></table>

### Validation

Throws ArgumentException if:

-   entry is null
-   entry.uid is missing
-   contentTypeUid is null or empty

### Behavior

-   If the payload contains a nested entry object, the method reads from that object.

### Example

The following example retrieves variant aliases for a single entry:

```
// Initialize the utility and process a single entry
var variantUtils = new VariantUtility();
JsonObject entry = GetEntryFromJson(); // Method to fetch your CDA entry
string contentTypeUid = "product";

try {
    JsonObject result = variantUtils.GetVariantAliases(entry, contentTypeUid);
    // Access aliases from the result object
    var aliases = result["variants"];
} catch (ArgumentException ex) {
    Console.WriteLine($"Validation Error: {ex.Message}");
}
```

## GetVariantAliases (Multiple Entries)

The Utils.GetVariantAliases(JsonArray, string) retrieves variant aliases for each CDA entry in a JsonArray and returns one result object per valid entry as a JsonArray.

### Parameters

<table><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Required</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">entries</span></td><td><span class="code">JsonArray</span></td><td>No</td><td>CDA entries to process. Returns an empty array if null. Skips entries with invalid UIDs.</td></tr><tr><td><span class="code">contentTypeUid</span></td><td><span class="code">string</span></td><td>Yes</td><td>Content type UID applied to all entries. Returned as <span class="code">contenttype_uid</span> in each result object.</td></tr></tbody></table>

### Returns

<table><tbody><tr><td><strong>Value</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">JsonArray</span></td><td>Each element has the same shape as the single-entry <span class="code">JsonObject</span> result (<span class="code">entry_uid</span>, <span class="code">contenttype_uid</span>, <span class="code">variants</span>).</td></tr></tbody></table>

### Validation

-   Throws ArgumentException if contentTypeUid is null or empty.

### Behavior

-   Skips invalid entries and processes only entries with a valid UID.

### Example

The following example retrieves variant aliases for multiple entries:

```
// Initialize the utility and process multiple entries
var variantUtils = new VariantUtility();
JsonArray entries = GetEntriesFromListResponse(); // Method to fetch your CDA entries list
string contentTypeUid = "product";

try {
    JsonArray results = variantUtils.GetVariantAliases(entries, contentTypeUid);
    foreach (var result in results) {
        Console.WriteLine($"Entry: {result["entry_uid"]}, Aliases: {result["variants"]}");
    }
} catch (ArgumentException ex) {
    Console.WriteLine($"Validation Error: {ex.Message}");
}
```

## GetVariantMetadataTags (Single Entry)

The GetVariantMetadataTags(JsonObject, string) method builds a JsonObject for HTML integration. The data-csvariants property is a string containing a serialized JSON array of variant details.

### Parameters

<table><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Required</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">entry</span></td><td><span class="code">JsonObject</span></td><td>No</td><td>CDA entry. Defines the entry to serialize. Returns <span class="code">data-csvariants</span> as "[]" if null.</td></tr><tr><td><span class="code">contentTypeUid</span></td><td><span class="code">string</span></td><td>Yes (if entry provided)</td><td>Content type UID for the entry. Required whenever <span class="code">entry</span> is not null.</td></tr></tbody></table>

### Returns

<table><tbody><tr><td><strong>Value</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">JsonObject</span></td><td>Contains <span class="code">data-csvariants</span> as a string (serialized JSON array). Each element represents <span class="code">{ entry_uid, contenttype_uid, variants }</span>.</td></tr></tbody></table>

**Note:** The data-csvariants value is a serialized JSON array where each element follows the shape { entry\_uid, contenttype\_uid, variants }. Exact formatting depends on System.Text.Json serialization.

### Validation

-   Throws ArgumentException if entry is provided, and contentTypeUid is null or empty.

### Behavior

-   Processes a single entry via the array path (same pipeline as the JsonArray overload with one element).
-   Returns { "data-csvariants": "\[\]" } if entry is null. It does not throw an error.

**Note:** The data-csvariants is returned as raw JSON text. In standard Razor or Blazor attribute binding, output is HTML-encoded automatically. If you inject this value into raw HTML or bypass framework encoding, encode it for an HTML attribute before rendering.

### Example

The following example builds the attribute for a single entry:

```
// Initialize the utility and generate metadata tags
var variantUtils = new VariantUtility();
JsonObject entry = GetEntryFromJson();
string contentTypeUid = "product";

try {
    JsonObject attributeMap = variantUtils.GetVariantMetadataTags(entry, contentTypeUid);
    string jsonString = attributeMap["data-csvariants"].ToString();
    // Output: "[{\"entry_uid\":\"...\",\"contenttype_uid\":\"...\",\"variants\":[...]}]"
} catch (ArgumentException ex) {
    Console.WriteLine(ex.Message);
}
```

## GetVariantMetadataTags (Multiple Entries)

The GetVariantMetadataTags(JsonArray, string) method builds a JsonObject whose data-csvariants string serializes variant details for multiple entries.

### Parameters (JsonArray overload)

<table><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Required</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">entries</span></td><td><span class="code">JsonArray</span></td><td>No</td><td>CDA entries. Returns <span class="code">{ "data-csvariants": "[]" }</span> if null.</td></tr><tr><td><span class="code">contentTypeUid</span></td><td><span class="code">string</span></td><td>Yes (if entries provided)</td><td>Shared content type UID for the entries. Required whenever <span class="code">entries</span> are not null.</td></tr></tbody></table>

### Returns

<table><tbody><tr><td><strong>Value</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">JsonObject</span></td><td>Contains <span class="code">data-csvariants</span> as a string (serialized JSON array). Each element represents <span class="code">{ entry_uid, contenttype_uid, variants }</span>.</td></tr></tbody></table>

### Validation

-   Throws ArgumentException if entries are provided, and contentTypeUid is null or empty.

### Behavior

-   Calls GetVariantAliases and serializes the result into data-csvariants.
-   Returns { "data-csvariants": "\[\]" } if entries is null. It does not throw an error.

**Note:** The data-csvariants is returned as raw JSON text. In standard Razor or Blazor attribute binding, output is HTML-encoded automatically. If you inject this value into raw HTML or bypass framework encoding, encode it for an HTML attribute before rendering.

### Example

The following example builds the attribute for multiple entries:

```
// Initialize the utility and generate metadata tags for multiple entries
var variantUtils = new VariantUtility();
JsonArray entries = GetEntriesFromListResponse();
string contentTypeUid = "product";

try {
    JsonObject attributeMap = variantUtils.GetVariantMetadataTags(entries, contentTypeUid);
    string jsonString = attributeMap["data-csvariants"].ToString();
    // Output: "[{\"entry_uid\":\"...\"},{\"entry_uid\":\"...\"}]"
} catch (ArgumentException ex) {
    Console.WriteLine(ex.Message);
}
```

## Deprecated Methods

The following methods are deprecated and will be removed in a future release:

-   GetDataCsvariantsAttribute(JsonObject, string)
-   GetDataCsvariantsAttribute(JsonArray, string)

**Note:** Use GetVariantMetadataTags instead. These methods internally delegate to GetVariantMetadataTags and return the same result, ensuring backward compatibility.
