---
title: "addParam"
description: "The `addParam` method adds a query parameter to the Asset request for filtering or configuring the response (e.g., locale, publish details)."
url: "https://www.contentstack.com/java-management-asset-addparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addParam

The `addParam` method adds a query parameter to the Asset request for filtering or configuring the response (e.g., locale, publish details).

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | None | Query parameter name sent with the request (for example, `locale` or `include_publish_details` ). Set when building the request and applied to Asset methods such as `find()` and `fetch()` . |
| value | Object | Yes | None | Value assigned to the query parameter. Determines the behavior or filtering applied to the request (for example, `"en-us"` for `locale` , or `true` for `include_publish_details` ). |

Returns:
Type
The same Asset instance to allow method chaining  (e.g., addParam, find, fetch).

**Value Handling in Requests**:

- Values are serialized to strings when sent over HTTP.
  - `Boolean`: `true`/`false`
  - `Number`: decimal string (e.g., `10`, `3.14`)
  - `String`: sent as it is
- Pass simple types that align with API expectations:
  - `String` (e.g., `"en-us"`)
  - `Boolean` (e.g., `true`)
  - Numeric types (`Integer`, `Long`, etc.)
- The `value` parameter must not be `null`.

**Additional Resource:** Refer to the [asset](/docs/developers/sdks/content-management-sdk/java/reference#asset) method for the complete list of query parameters that could be passed in the key.
**Example**

```
import com.contentstack.cms.Contentstack;
import com.contentstack.cms.stack.Asset;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

Map<String, Object> headers = new HashMap<>();
headers.put("api_key", "<API_KEY>");
headers.put("authorization", "<MANAGEMENT_TOKEN>");
Contentstack client = new Contentstack.Builder().build();
Asset asset = client.stack(headers).asset("<ASSET_UID>");
asset.addParam("locale", "en-us");
asset.addParam("include_publish_details", true);
try {
    var response = asset.fetch().execute();
    if (response.isSuccessful()) {
        // Use response.body()
    }
} catch (IOException e) {
    // Handle error
}
```
