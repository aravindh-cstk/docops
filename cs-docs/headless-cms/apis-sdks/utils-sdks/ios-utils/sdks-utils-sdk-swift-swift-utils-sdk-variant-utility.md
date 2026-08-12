---
title: "Swift Utils SDK Variant Utility"
description: "Learn to use the Contentstack Swift Utils SDK Variant Utility to extract variant metadata and generate data-csvariants JSON attributes for your Swift apps."
url: /developers/sdks/utils-sdk/swift/swift-utils-sdk-variant-utility
---

# Swift Utils SDK Variant Utility

## Swift Utils SDK Variant Utility

The ContentstackUtils is a public struct in the Swift Utils SDK that provides static helpers, including Rich Text rendering and **variant metadata** utilities.

The variant APIs perform the following:

-   Read dictionaries shaped like Content Delivery API entry JSON.
-   Produce alias lists or JSON attributes.
-   Generate formats suitable for HTML data-csvariants rendering.

**Note:** These helpers do not issue HTTP requests or walk paginated APIs. Each call processes only the entry dictionary or array you supply, the same behavior as the static ContentstackUtils variant methods in the Swift Utils package.

## Prerequisites

-   **Swift:** Swift 5 (swiftLanguageVersions in the [contentstack-utils-swift](https://github.com/contentstack/contentstack-utils-swift) Package.swift).
-   **Platforms:** macOS 10.13+, iOS 11+, tvOS 11+, or watchOS 4+ (per the same manifest).
-   **Module:** Add the ContentstackUtils library target from that package using Swift Package Manager or CocoaPods. For detailed steps, refer to the [README](https://github.com/contentstack/contentstack-utils-swift/blob/master/README.md) file in the repo.

## Use Cases

Use these static methods after you already have the entry JSON as \[String: Any\] (e.g., from JSONSerialization, your content delivery client, or a bridge from your models), and you need to:

-   Extract **variant alias strings** from publish\_details.variants.
-   Produce a serialized **data-csvariants** **payload** for HTML markup.

**Warning:**

The getVariantMetadataTags returns raw JSON text for data-csvariants, which you might embed in HTML (for example, in WKWebView). However, this JSON contains double quotes and other attribute-sensitive characters, so inserting it directly into <div data-csvariants="..."> can break the markup.

To prevent this, escape characters such as &, ", ', <, and \> before embedding, or assign the value using a DOM API that handles attribute escaping.

## Method Index

<table><colgroup data-width="727"><col style="width:58.32190000000001%"><col style="width:41.67809999999999%"></colgroup><tbody><tr><td><strong>Method Name</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code"><a href="/docs/developers/sdks/utils-sdk/swift/swift-utils-sdk-variant-utility#getvariantaliases-single-entry" target="_self">getVariantAliases(entry:contentTypeUid:)</a></span></td><td>Builds one payload dictionary (<span class="code">entry_uid</span>, <span class="code">contenttype_uid</span>, <span class="code">variants</span>) for a single entry.</td></tr><tr><td><span class="code"><a href="/docs/developers/sdks/utils-sdk/swift/swift-utils-sdk-variant-utility#getvariantaliases-multiple-entries" target="_self">getVariantAliases(entries:contentTypeUid:)</a></span></td><td>Validates <span class="code">contentTypeUid</span> once and maps entries in order. Builds one payload per entry and collects each nested object’s string <span class="code">alias</span>. Returns payloads in input order.</td></tr><tr><td><span class="code"><a href="/docs/developers/sdks/utils-sdk/swift/swift-utils-sdk-variant-utility#getvariantmetadatatags-single-entry" target="_self">getVariantMetadataTags(entry:contentTypeUid:)</a></span></td><td>Returns a dictionary with key <span class="code">data-csvariants</span> whose value is JSON text: an array of zero or one payload.</td></tr><tr><td><span class="code"><a href="/docs/developers/sdks/utils-sdk/swift/swift-utils-sdk-variant-utility#getvariantmetadatatags-multiple-entries" target="_self">getVariantMetadataTags(entries:contentTypeUid:)</a></span></td><td>Serializes multiple variant payloads into a JSON string array containing one object per input entry.</td></tr></tbody></table>

## Error Reference

Variant helpers throw ContentstackUtils.VariantUtilityError, a public enum with invalidArgument(String). The implementation emits the following messages:

<table><tbody><tr><td><strong>Error</strong></td><td><strong>Trigger</strong></td><td><strong>Affected APIs</strong></td><td><strong>Resolution</strong></td></tr><tr><td><strong>entryUid is required.</strong></td><td><span class="code">entry["uid"]</span> is missing, not a <span class="code">String</span>, or <span class="code">""</span> (SDK does not trim the uid)</td><td>All APIs processing a non-nil entry</td><td>Provide a valid, non-empty string uid</td></tr><tr><td><strong>contentTypeUid must not be empty</strong></td><td>Value is empty or whitespace-only after trimming</td><td>All APIs except <span class="code">getVariantMetadataTags</span> with a nil entry</td><td>Pass a valid, non-empty content type UID</td></tr><tr><td><strong>Failed to encode JSON string</strong></td><td>UTF-8 <span class="code">String</span> conversion failed after <span class="code">JSONSerialization</span></td><td><span class="code">getVariantMetadataTags</span> during JSON text serialization</td><td>Handle as an edge case based on your app's policy</td></tr><tr><td><strong>Foundational errors</strong></td><td><span class="code">JSONSerialization.data</span> throws non-<span class="code">VariantUtilityError</span> exceptions if the object graph is not JSON-serializable</td><td>APIs handling JSON serialization (e.g., <span class="code">getVariantMetadataTags</span>)</td><td>Ensure payloads use standard serializable types</td></tr></tbody></table>

Catch the associated value when you need the message:

catch ContentstackUtils.VariantUtilityError.invalidArgument(let message) { ... }.

**Note:**

-   Return values are loosely typed (\[String: Any\] or arrays) for JSON interchange. Access properties using string keys and narrow values with optional casts (for example, as? String or as? \[String: Any\]).
-   Avoid force casts (as!), including when working with data-csvariants. The SDK does not provide generated types, so decode into your own Codable models when you need stricter typing.

**Additional Resource:** For Content Delivery API entry shape and the publish\_details, refer to the [Content Delivery API](/docs/developers/apis/content-delivery-api) documentation.

## Rules for Building Variant Payload

The following rules apply when the SDK builds a variant payload from an entry dictionary, primarily within the getVariantAliases(entry:contentTypeUid:) method:

-   **Type Casting:** publish\_details and variants must be cast to \[String: Any\] (JSON object).
-   **Graceful Failure:** If publish\_details or variants are missing or have the wrong type, the result is \[\] (empty array). The SDK does not throw an error.
-   **Alias Extraction:** Only dictionaries within variants that contain a string alias are included. Other data shapes are skipped.
-   **Unspecified Order:** The iteration order for aliases is not guaranteed because variants are modeled as a dictionary. Do not rely on the alias order matching the source JSON.

**Serialization:**

-   getVariantAliases (single- and multi-entry) returns in-memory dictionaries only and does not call JSONSerialization.
-   getVariantMetadataTags serializes one or more payloads into JSON text for the data-csvariants value.

Refer to the respective method sections for nil/empty-array behavior and method-specific error handling.

## Class-Level Example

Following is a minimal Swift example using static ContentstackUtils APIs. It uses a sample \[String: Any\] entry, calls getVariantAliases and getVariantMetadataTags, and handles VariantUtilityError.

For multiple entries (list responses) and optional nil entry handling, use the **Example** subsections under each method in Variant methods below.

```
import ContentstackUtils
let contentTypeUid = "<CONTENT_TYPE_UID>"
// `entry` represents JSON from your Content Delivery fetch (decode to [String: Any] as you prefer).
// Note: Credentials (API key, Delivery token, etc.) are used by your Delivery client, not here.
let entry: [String: Any] = [
    "uid": "entry_uid_single",
    "publish_details": [:] // optional; see method notes for `publish_details.variants` shape
]
do {
    // 1. Get Variant Aliases
    let payload = try ContentstackUtils.getVariantAliases(
        entry: entry,
        contentTypeUid: contentTypeUid
    )
    let aliases = payload["variants"] as? [String] ?? []
    print("Aliases: \(aliases)")
    // 2. Get Data Attribute Map
    let attributeMap = try ContentstackUtils.getVariantMetadataTags(
        entry: entry,
        contentTypeUid: contentTypeUid
    )

    if let json = attributeMap["data-csvariants"] as? String {
        // Ensure proper HTML attribute escaping when embedding the JSON in the DOM
        print("Serialized Attribute: \(json)")
    }
} catch ContentstackUtils.VariantUtilityError.invalidArgument(let message) {
    // Invalid uid, contentTypeUid, or JSON encoding failure
    print("Variant Error: \(message)")
} catch {
    print(error)
}
```

## getVariantAliases (Single Entry)

The getVariantAliases method builds one payload from a single entry. It extracts variant alias strings from publish\_details.variants and returns them along with the entry UID and the content type UID in a single dictionary.

### Parameters:

<table><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Required</strong></td><td><strong>Default</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">entry</span></td><td><span class="code">[String: Any]</span></td><td>Yes</td><td>N/A</td><td>Delivery-style entry object. Supply JSON as a dictionary (e.g., via <span class="code">JSONSerialization</span>). Reads <span class="code">publish_details</span> / <span class="code">variants</span> when present and correctly typed.</td></tr><tr><td><span class="code">contentTypeUid</span></td><td><span class="code">String</span></td><td>Yes</td><td>N/A</td><td>Content type UID for the entry. Must match your stack model. The returned <span class="code">contenttype_uid</span> is this exact argument, not a normalized copy.</td></tr></tbody></table>

### Returns

<table><tbody><tr><td><strong>Value</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">[String: Any]</span></td><td>Returns a dictionary containing <span class="code">entry_uid</span>, <span class="code">contenttype_uid</span>, and <span class="code">variants</span>.</td></tr></tbody></table>

### Validation

Throws when:

-   contentTypeUid is empty after trimming whitespace
-   entry\["uid"\] is missing, not a String, or an empty string ("")

**Note:** Missing or incorrectly typed publish\_details or variants does **not** throw an error.

### Behavior

-   Validates contentTypeUid first, then entry\["uid"\]
-   Extracts aliases from publish\_details.variants based on the [Rules for Building Variant Payload](/docs/developers/sdks/utils-sdk/swift/swift-utils-sdk-variant-utility#rules-for-building-variant-payload)**.**
-   Returns empty variants when source data is missing or invalid

### Example

The following snippet builds a payload from one entry dictionary and reads aliases safely.

```
import ContentstackUtils
let contentTypeUid = "<CONTENT_TYPE_UID>"
let entry: [String: Any] = /* JSONSerialization or your Delivery response model */
do {
    let result = try ContentstackUtils.getVariantAliases(
        entry: entry,
        contentTypeUid: contentTypeUid
    )
    let entryUid = result["entry_uid"] as? String
    let aliases = result["variants"] as? [String] ?? []
    _ = entryUid
    _ = aliases
} catch ContentstackUtils.VariantUtilityError.invalidArgument(let message) {
    print(message)
} catch {
    print(error)
}
```

## getVariantAliases (Multiple Entries)

The getVariantAliases method runs the single-entry helper for each element. Use it after you have an array, such as a list response’s items. It applies extraction logic to an array of entry dictionaries and collects one result payload dictionary per entry.

### Parameters

<table><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Required</strong></td><td><strong>Default</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">entries</span></td><td><span class="code">[[String: Any]]</span></td><td>Yes</td><td>N/A</td><td>Entry objects (e.g., the <span class="code">items</span> array from a list response). Each element must satisfy the same UID rules as the single-entry API. Can be passed an empty array.</td></tr><tr><td><span class="code">contentTypeUid</span></td><td><span class="code">String</span></td><td>Yes</td><td>N/A</td><td>Shared content type UID for all entries in this call. Must be non-empty after trim.</td></tr></tbody></table>

### Returns

<table><tbody><tr><td><strong>Value</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">[String: Any]</span></td><td>An array of payload dictionaries, retaining the same order as the input entries array.</td></tr></tbody></table>

### Validation

-   Throws the same messages as the single-entry API
-   **contentTypeUid:** Must be non-empty after trimming (validated even when entries are empty)
-   **entries:**
    -   **Empty:** returns an empty array (no UID checks)
    -   **Non-empty:** Each item must have a valid uid (non-empty String). Fails fast on the first invalid entry (entryUid is required.).

### Behavior

-   Validates contentTypeUid once, then maps entries in order using getVariantAliases(entry:contentTypeUid:)
-   Follows the **Rules for Building a Variant Payload** for extraction

### Example

The following snippet parses a list of entries and reads their variants. It retrieves an array of structured dictionary payloads for each entry.

```
import ContentstackUtils
let contentTypeUid = "<CONTENT_TYPE_UID>"
// e.g., query "items" from Content Delivery API
let entries: [[String: Any]] = [
    ["uid": "entry_1", "publish_details": ["variants": ["var_1": ["alias": "alias_1"]]]],
    ["uid": "entry_2", "publish_details": ["variants": ["var_2": ["alias": "alias_2"]]]]
]
do {
    let results = try ContentstackUtils.getVariantAliases(
        entries: entries,
        contentTypeUid: contentTypeUid
    )
    for payload in results {
        let entryUid = payload["entry_uid"] as? String ?? "Unknown"
        let aliases = payload["variants"] as? [String] ?? []
        print("Entry \(entryUid) has aliases: \(aliases)")
    }
} catch ContentstackUtils.VariantUtilityError.invalidArgument(let message) {
    print(message)
} catch {
    print(error)
}
```

## getVariantMetadataTags (Single Entry)

The getVariantMetadataTags method produces the data-csvariants attribute value as JSON text for optional single-entry rendering. It serializes variant payload data into a single-key map for use with HTML data-\* attributes.

### Parameters

<table><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Required</strong></td><td><strong>Default</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">entry</span></td><td><span class="code">[String: Any]?</span></td><td>No</td><td><span class="code">nil</span></td><td>Pass <span class="code">nil</span> when no entry is bound. When non-nil, the rules from <span class="code">getVariantAliases(entry:contentTypeUid:)</span> apply.</td></tr><tr><td><span class="code">contentTypeUid</span></td><td><span class="code">String</span></td><td>Yes</td><td>N/A</td><td>Content type UID applied when the <span class="code">entry</span> is non-<span class="code">nil</span>. If <span class="code">entry</span> is <span class="code">nil</span>, pass any valid <span class="code">String</span> to satisfy the signature.</td></tr></tbody></table>

### Returns

<table><tbody><tr><td><strong>Value</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">[String: Any]</span></td><td>A dictionary with the key <span class="code">data-csvariants</span>, mapping to a String containing JSON (an array with one payload object)</td></tr></tbody></table>

### Validation

-   **entry == nil:**
    -   Returns data-csvariants as the string "\[\]"
    -   Skips contentTypeUid validation
-   **entry != nil:**
    -   Throws when contentTypeUid is empty after trimming or entry\["uid"\] is missing/invalid.
    -   Follows validation from getVariantAliases(entry:contentTypeUid:)
-   **JSON serialization:**
    -   Throws Failed to encode JSON string if UTF-8 conversion fails.
    -   JSONSerialization.data may throw for non-serializable payloads.

### Behavior

-   Skips contentTypeUid validation when entry is nil.
-   For non-nil entry: Calls getVariantAliases, wraps the result in an array, and serializes it.
-   Follows the [Rules for Building Variant Payload](/docs/developers/sdks/utils-sdk/swift/swift-utils-sdk-variant-utility#rules-for-building-variant-payload) for payload shape and alias extraction.

### Example

Use this when rendering optional embedded content, and you need a data-csvariants string for the DOM.

```
import ContentstackUtils
let optionalEntry: [String: Any]? = nil // Example of an empty slot
let contentTypeUid = "movie"
do {
    let attributeMap = try ContentstackUtils.getVariantMetadataTags(
        entry: optionalEntry,
        contentTypeUid: contentTypeUid
    )
    if let jsonString = attributeMap["data-csvariants"] as? String {
        // Ensure you properly escape the JSON string for HTML attributes before embedding
        print("Serialized Attribute: \(jsonString)")
    }
} catch {
    print("Encoding failed or invalid argument: \(error)")
}
```

## getVariantMetadataTags (Multiple Entries)

The getVariantMetadataTags method produces the data-csvariants attribute value as JSON text for multiple entries. It serializes variant payload data into a single-key map for use with HTML data-\* attributes.

### Parameters

<table><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Required</strong></td><td><strong>Default</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">entries</span></td><td><span class="code">[[String: Any]]</span></td><td>Yes</td><td>N/A</td><td>Entries to serialize. Can be passed as an empty array. Each element must pass single-entry validation.</td></tr><tr><td><span class="code">contentTypeUid</span></td><td><span class="code">String</span></td><td>Yes</td><td>N/A</td><td>Content type UID applicable to all entries. Must be non-empty after trim.</td></tr></tbody></table>

### Returns

<table><tbody><tr><td><strong>Value</strong></td><td><strong>Description</strong></td></tr><tr><td><span class="code">[String: Any]</span></td><td>Returns a dictionary with the key <span class="code">data-csvariants</span>, mapping to a String containing JSON.</td></tr></tbody></table>

### Validation

-   Throws when contentTypeUid is empty after trimming (validated before processing entries).
-   **For non-empty entries:** Throws on the first invalid item if entry\["uid"\] is missing or empty.
-   **JSON serialization:** Throws Failed to encode JSON string if UTF-8 conversion fails.

### Behavior

-   Calls getVariantAliases(entries:contentTypeUid:) and serializes the result to a JSON string.
-   Follows the [Rules for Building Variant Payload](/docs/developers/sdks/utils-sdk/swift/swift-utils-sdk-variant-utility#rules-for-building-variant-payload) for per-entry extraction.
-   Returns a JSON string; ensure proper escaping when embedding in HTML attributes.

### Example

The following snippet wraps a list of entries for a single HTML attribute value.

```
import ContentstackUtils
let contentTypeUid = "movie"
// e.g., a list response from the Delivery API
let entries: [[String: Any]] = [
    ["uid": "entry_1", "publish_details": ["variants": ["v1": ["alias": "cs_p_1"]]]],
    ["uid": "entry_2", "publish_details": ["variants": ["v2": ["alias": "cs_p_2"]]]]
]
do {
    let attributeMap = try ContentstackUtils.getVariantMetadataTags(
        entries: entries,
        contentTypeUid: contentTypeUid
    )
    if let jsonString = attributeMap["data-csvariants"] as? String {
        // Output looks like: [{"entry_uid":"entry_1",...}, {"entry_uid":"entry_2",...}]
        print("Serialized Array Attribute: \(jsonString)")
    }
} catch ContentstackUtils.VariantUtilityError.invalidArgument(let message) {
    print("Invalid Argument: \(message)")
} catch {
    print(error)
}
```

## Deprecated Methods

The following methods are deprecated and will be removed in a future release:

-   getDataCsvariantsAttribute(entry:contentTypeUid:)
-   getDataCsvariantsAttribute(entries:contentTypeUid:)

**Note:** Use getVariantMetadataTags instead. These methods internally delegate to the new methods to ensure backward compatibility.
