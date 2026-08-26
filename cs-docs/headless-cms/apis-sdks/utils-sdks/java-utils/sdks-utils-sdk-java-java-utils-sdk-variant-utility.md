---
title: "Java Utils SDK Variant Utility"
description: "Extract variant metadata and aliases from Contentstack CDA entry JSON with the Java Utils SDK. Generate data-csvariants for frontend personalization."
url: /developers/sdks/utils-sdk/java/java-utils-sdk-variant-utility
uid: blt6f92c94894eb1b22
---

# Java Utils SDK Variant Utility

## Java Utils SDK Variant Utility

The Java Utils SDK provides static helpers to extract and format variant metadata from Content Delivery API (CDA) entry JSON.

These helpers generate:

-   Variant alias strings for personalization logic (e.g., cs\_personalize\_0\_0)
-   A data-csvariants attribute value for HTML rendering

**Note:** The getVariantAliases and getVariantMetadataTags helpers only transform JSON in memory. They do not send HTTP requests or modify query results. Use Delivery SDK options, such as limit and skip, to control data retrieval.

Use these utilities to:

-   Extract variant aliases without manually parsing JSON
-   Generate a consistent data-csvariants payload across entries
-   Prepare variant data for frontend personalization

**Note:** If you only need raw variant data, read publish\_details.variants directly from the API response.

## Initialization

Import com.contentstack.utils.Utils and call its static methods to work with variant metadata. These methods return org.json.JSONObject and org.json.JSONArray types.

```
import com.contentstack.utils.Utils;
import org.json.JSONArray;
import org.json.JSONObject;
```

**Tip:**

If your application uses another Java JSON library, such as Jackson (ObjectMapper) or Gson (Gson), convert the data to org.json before calling these methods. Here is an example using the Jackson library:

```
JSONObject entryJson = new JSONObject(jacksonMapper.writeValueAsString(myObj));
JSONArray entriesJson = new JSONArray(jacksonMapper.writeValueAsString(myList));
```

## Method index

| **Method** | **Description** |
| --- | --- |
| getVariantAliases(JSONObject) | Returns variant aliases for a single entry. |
| getVariantAliases(JSONArray) | Returns variant aliases for multiple entries. |
| getVariantMetadataTags(JSONObject) | Builds the HTML attribute payload for a single entry. |
| getVariantMetadataTags(JSONArray) | Builds the HTML attribute payload for multiple entries. |
| getDataCsvariantsAttribute(JSONObject) | Deprecated. Use getVariantMetadataTags(JSONObject) instead. |
| getDataCsvariantsAttribute(JSONArray) | Deprecated. Use getVariantMetadataTags(JSONArray) instead. |

## Class-level example

This example shows how to fetch an entry with variant context, extract variant aliases, and generate the data-csvariants attribute.

```
import com.contentstack.sdk.Contentstack;
import com.contentstack.sdk.Entry;
import com.contentstack.sdk.EntryResultCallBack;
import com.contentstack.sdk.Error;
import com.contentstack.sdk.ResponseType;
import com.contentstack.sdk.Stack;
import com.contentstack.utils.Utils;
import org.json.JSONObject;

public class VariantUtilsExample {
    public static void main(String[] args) {
        Stack stack = Contentstack.stack("<API_KEY>", "<DELIVERY_TOKEN>", "<ENVIRONMENT>");
        Entry entry = stack.contentType("<CONTENT_TYPE_UID>").entry("<ENTRY_UID>")
                .variants(new String[] { "cs_personalize_0_0", "cs_personalize_0_3" });
        entry.fetch(new EntryResultCallBack() {
            @Override
            public void onCompletion(ResponseType responseType, Error error) {
                if (error != null) {
                    // Handle delivery error (network, auth, etc.)
                    return;
                }
                Object json = entry.toJSON();
                JSONObject raw = json instanceof JSONObject
                        ? (JSONObject) json
                        : new JSONObject(json.toString());
                JSONObject entryJson = raw.has("entry") ? raw.getJSONObject("entry") : raw;
                JSONObject variantInfo = Utils.getVariantAliases(entryJson, "<CONTENT_TYPE_UID>");
                // variantInfo: entry_uid, contenttype_uid, variants (JSONArray of alias strings)
                JSONObject attr = Utils.getVariantMetadataTags(entryJson, "<CONTENT_TYPE_UID>");
                String dataCsvariants = attr.getString("data-csvariants");
                // Use dataCsvariants as the value for the HTML attribute data-csvariants
            }
        });
    }
}
```

## getVariantAliases (Single Entry)

The getVariantAliases method extracts variant alias values from a single CDA entry and returns them in a structured JSON object. Use it to retrieve aliases for a single entry when rendering personalization data or preparing delivery metadata.

### Parameters

| **Name** | **Type** | **Required** | **Default** | **Description** |
| --- | --- | --- | --- | --- |
| entry | JSONObject | Yes | N/A | A CDA entry object that includes a uid and may include publish\_details.variants. |
| contentTypeUid | String | Yes | N/A | The content type UID to include in the result (e.g., "movie"). |

### Returns

| **Value** | **Description** |
| --- | --- |
| org.json.JSONObject | Contains the following keys: entry\_uid (String), contenttype\_uid (String), variants (JSONArray of alias strings) |

### Validation

-   Throws an IllegalArgumentException if contentTypeUid is null or empty.
-   Throws an IllegalArgumentException if entry is null.
-   Throws an IllegalArgumentException if entry does not contain a valid uid.

### Behavior

-   Reads alias values from publish\_details.variants.<variantKey>.alias.
-   Returns an empty JSONArray if publish\_details or variants are missing.
-   Ignores empty or missing alias values.
-   Preserves the iteration order of keys in variants.

### Example

The following example fetches an entry with variant context and extracts variant aliases using Utils.getVariantAliases.

```
import com.contentstack.sdk.Contentstack;
import com.contentstack.sdk.Entry;
import com.contentstack.sdk.EntryResultCallBack;
import com.contentstack.sdk.Error;
import com.contentstack.sdk.ResponseType;
import com.contentstack.sdk.Stack;
import com.contentstack.utils.Utils;
import org.json.JSONArray;
import org.json.JSONObject;

public class GetVariantAliasesExample {
    private static final String CONTENT_TYPE_UID = "<CONTENT_TYPE_UID>";

    private static JSONObject unwrapEntryJson(Object toJsonResult) {
        JSONObject raw = toJsonResult instanceof JSONObject
                ? (JSONObject) toJsonResult
                : new JSONObject(toJsonResult.toString());
        return raw.has("entry") ? raw.getJSONObject("entry") : raw;
    }

    public static void main(String[] args) {
        Stack stack = Contentstack.stack("<API_KEY>", "<DELIVERY_TOKEN>", "<ENVIRONMENT>");
        Entry entry = stack.contentType(CONTENT_TYPE_UID).entry("<ENTRY_UID>")
                .variants(new String[] { "cs_personalize_0_0", "cs_personalize_0_3" });
        entry.fetch(new EntryResultCallBack() {
            @Override
            public void onCompletion(ResponseType responseType, Error error) {
                if (error != null) {
                    return;
                }
                JSONObject entryJson = unwrapEntryJson(entry.toJSON());
                try {
                    JSONObject variantInfo = Utils.getVariantAliases(entryJson, CONTENT_TYPE_UID);
                    String entryUid = variantInfo.getString("entry_uid");
                    JSONArray aliases = variantInfo.getJSONArray("variants");
                    for (int i = 0; i < aliases.length(); i++) {
                        String alias = aliases.getString(i);
                    }
                } catch (IllegalArgumentException ex) {
                    // Handle validation error
                }
            }
        });
    }
}
```

## getVariantAliases (Multiple Entries)

The getVariantAliases method extracts variant alias values for multiple entries and returns one result object per entry.

### Parameters

| **Name** | **Type** | **Required** | **Defaults** | **Description** |
| --- | --- | --- | --- | --- |
| entries | JSONArray | No | N/A | An array of CDA entry objects. Returns an empty result if null. |
| contentTypeUid | String | Yes | N/A | The content type UID is applied to each result object. |

### Returns

| **Value** | **Description** |
| --- | --- |
| org.json.JSONArray | Each element is a JSONObject with entry\_uid, contenttype\_uid, and variants. |

### Validation

-   Throws an IllegalArgumentException if contentTypeUid is null or empty.
-   Returns an empty JSONArray if entries is null.

### Behavior

-   Processes only valid JSONObject elements that contain a uid.
-   Skips null elements or non-JSON objects.
-   Applies the same extraction logic as the single-entry method.

### Example

The following example shows how to fetch entries and extract variant aliases:

```
import com.contentstack.sdk.Contentstack;
import com.contentstack.sdk.Entry;
import com.contentstack.sdk.Error;
import com.contentstack.sdk.Query;
import com.contentstack.sdk.QueryResult;
import com.contentstack.sdk.QueryResultsCallBack;
import com.contentstack.sdk.ResponseType;
import com.contentstack.sdk.Stack;
import com.contentstack.utils.Utils;
import org.json.JSONArray;
import org.json.JSONObject;

Stack stack = Contentstack.stack("<API_KEY>", "<DELIVERY_TOKEN>", "<ENVIRONMENT>");
Query query = stack.contentType("<CONTENT_TYPE_UID>").query();
query.setHeader("x-cs-variant-uid", "cs_personalize_0_0, cs_personalize_0_3");
query.limit(100);

query.find(new QueryResultsCallBack() {
    @Override
    public void onCompletion(ResponseType responseType, QueryResult queryResult, Error error) {
        if (error != null) {
            return;
        }
        JSONArray entriesArray = new JSONArray();
        for (Entry e : queryResult.getResultObjects()) {
            Object json = e.toJSON();
            JSONObject raw = json instanceof JSONObject ? (JSONObject) json : new JSONObject(json.toString());
            entriesArray.put(raw.has("entry") ? raw.getJSONObject("entry") : raw);
        }
        JSONArray allVariantInfo = Utils.getVariantAliases(entriesArray, "<CONTENT_TYPE_UID>");
    }
});
```

## getVariantMetadataTags (Single Entry)

The getVariantMetadataTags builds the data-csvariants attribute payload for a single entry. If entry is null, it returns an empty array string. Use this method to serialize variant metadata into an HTML attribute for a single entry.

### Returns

| **Value** | **Description** |
| --- | --- |
| org.json.JSONObject | Contains the key data-csvariants (String). The value is a JSON string of a one-element array (or an empty array if the entry is null). Each item includes entry\_uid, contenttype\_uid, and variants. |

### Parameters

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| entry | JSONObject | No | A single CDA entry or null. |
| contentTypeUid | String | Yes (when entry is non-null) | Content type UID for the serialized object. |

### Validation

-   If entry is null, returns {"data-csvariants": "\[\]"}.
-   If entry is non-null and contentTypeUid is null or empty, throws an exception.

### Behavior

-   Delegates processing to the JSONArray overload using a one-element array.
-   Generates the data-csvariants value using JSONArray.toString().
-   Uses the same output structure as getVariantAliases(JSONArray, contentTypeUid).

**Note:** The getVariantMetadataTags method returns raw JSON text for the data-csvariants value. If you render it into an HTML attribute, escape it for HTML attribute context unless your templating or rendering framework already applies attribute encoding. If you build raw HTML strings manually, encode the value before insertion.

### Example

The following example fetches a Delivery entry with variant context, unwraps entry.toJSON(), and calls Utils.getVariantMetadataTags to build the HTML data-csvariants payload.

```
import com.contentstack.sdk.Contentstack;
import com.contentstack.sdk.Entry;
import com.contentstack.sdk.EntryResultCallBack;
import com.contentstack.sdk.Error;
import com.contentstack.sdk.ResponseType;
import com.contentstack.sdk.Stack;
import com.contentstack.utils.Utils;
import org.json.JSONArray;
import org.json.JSONObject;

public class GetVariantMetadataTagsExample {
    private static final String CONTENT_TYPE_UID = "<CONTENT_TYPE_UID>";

    private static JSONObject unwrapEntryJson(Object toJsonResult) {
        JSONObject raw = toJsonResult instanceof JSONObject
                ? (JSONObject) toJsonResult
                : new JSONObject(toJsonResult.toString());
        return raw.has("entry") ? raw.getJSONObject("entry") : raw;
    }

    public static void main(String[] args) {
        Stack stack = Contentstack.stack("<API_KEY>", "<DELIVERY_TOKEN>", "<ENVIRONMENT>");
        Entry entry = stack.contentType(CONTENT_TYPE_UID).entry("<ENTRY_UID>")
                .variants(new String[] { "cs_personalize_0_0", "cs_personalize_0_3" });

        entry.fetch(new EntryResultCallBack() {
            @Override
            public void onCompletion(ResponseType responseType, Error error) {
                if (error != null) {
                    return;
                }
                JSONObject entryJson = unwrapEntryJson(entry.toJSON());
                try {
                    JSONObject attr = Utils.getVariantMetadataTags(entryJson, CONTENT_TYPE_UID);
                    String dataCsvariants = attr.getString("data-csvariants");
                    JSONArray parsed = new JSONArray(dataCsvariants);
                    if (parsed.length() > 0) {
                        JSONObject meta = parsed.getJSONObject(0);
                        meta.getString("entry_uid");
                        meta.getJSONArray("variants");
                    }
                } catch (IllegalArgumentException ex) {
                    // Handle validation error
                }
            }
        });
    }
}
```

## getVariantMetadataTags (Multiple Entries)

The getVariantMetadataTags builds the data-csvariants attribute payload for multiple entries by serializing the result of getVariantAliases(entries, contentTypeUid).

### Returns

| **Value** | **Description** |
| --- | --- |
| org.json.JSONObject | Contains the key data-csvariants (String). The value is a JSON string of an array of objects, each with entry\_uid, contenttype\_uid, and variants. |

### Parameters

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| entries | JSONArray | No | An array of CDA entry objects or null. |
| contentTypeUid | String | Yes (when entries are non-null) | Content type UID applied to each object in the array. |

### Validation

-   If entries are null, returns {"data-csvariants": "\[\]"}.
-   If entries are non-null and contentTypeUid is null or empty, throws IllegalArgumentException with message ContentType is required.

### Behavior

-   Skips invalid entries using the same rules as getVariantAliases(JSONArray, contentTypeUid).
-   Serializes the result of getVariantAliases(entries, contentTypeUid) using JSONArray.toString().

**Note:** The getVariantMetadataTags method returns raw JSON text for the data-csvariants value. Escape it for HTML attribute context unless your rendering framework applies attribute encoding.

### Example

The following example returns a JSONObject where data-csvariants is a stringified JSON array of objects.

```
import com.contentstack.sdk.Contentstack;
import com.contentstack.sdk.Entry;
import com.contentstack.sdk.Error;
import com.contentstack.sdk.Query;
import com.contentstack.sdk.QueryResult;
import com.contentstack.sdk.QueryResultsCallBack;
import com.contentstack.sdk.ResponseType;
import com.contentstack.sdk.Stack;
import com.contentstack.utils.Utils;
import org.json.JSONArray;
import org.json.JSONObject;

public class GetVariantMetadataTagsArrayExample {
    private static final String CONTENT_TYPE_UID = "<CONTENT_TYPE_UID>";

    private static JSONObject unwrapEntryJson(Object toJsonResult) {
        JSONObject raw = toJsonResult instanceof JSONObject
                ? (JSONObject) toJsonResult
                : new JSONObject(toJsonResult.toString());
        return raw.has("entry") ? raw.getJSONObject("entry") : raw;
    }

    public static void main(String[] args) {
        Stack stack = Contentstack.stack("<API_KEY>", "<DELIVERY_TOKEN>", "<ENVIRONMENT>");
        Query query = stack.contentType(CONTENT_TYPE_UID).query();
        query.setHeader("x-cs-variant-uid", "cs_personalize_0_0, cs_personalize_0_3");
        query.limit(100);

        query.find(new QueryResultsCallBack() {
            @Override
            public void onCompletion(ResponseType responseType, QueryResult queryResult, Error error) {
                if (error != null) {
                    return;
                }
                JSONArray entriesArray = new JSONArray();
                for (Entry e: queryResult.getResultObjects()) {
                    entriesArray.put(unwrapEntryJson(e.toJSON()));
                }
                try {
                    JSONObject attr = Utils.getVariantMetadataTags(entriesArray, CONTENT_TYPE_UID);
                    String dataCsvariants = attr.getString("data-csvariants");
                    JSONArray parsed = new JSONArray(dataCsvariants);
                } catch (IllegalArgumentException ex) {
                    // Handle validation error
                }
            }
        });
    }
}
```

## Deprecated Methods

The following methods are deprecated and will be removed in a future release:

-   getDataCsvariantsAttribute(JSONObject entry, String contentTypeUid)
-   getDataCsvariantsAttribute(JSONArray entries, String contentTypeUid)

**Note:** Use getVariantMetadataTags instead. These methods internally delegate to getVariantMetadataTags and return the same result, ensuring backward compatibility.
