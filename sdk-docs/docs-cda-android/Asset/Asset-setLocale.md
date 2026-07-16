---
title: "setLocale"
description: "The `setLocale` sets the locale for a single asset request. Call it before `Asset.fetch()` so the SDK includes the locale in the GET request. Note: The response contains the asset data for the specified locale. Field-level values depend on your stack’s localization settings and how the Content Delivery API serves localized assets."
url: "https://www.contentstack.com/android-asset-setlocale"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setLocale

The `setLocale` sets the locale for a single asset request. Call it before `Asset.fetch()` so the SDK includes the locale in the GET request.

**Note:** The response contains the asset data for the specified locale. Field-level values depend on your stack’s localization settings and how the [Content Delivery API](/docs/developers/apis/content-delivery-api) serves localized assets.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| Locale | String | No | N/A | Locale code for the asset (e.g., " `en-us` "). Sent as the locale query parameter. |

Returns:
Type
The asset instance for method chaining

**Additional Resource:** Refer to the [List of Supported Languages](/docs/developers/multilingual-content/list-of-supported-languages) document to follow the standard code format or refer to [Add a Custom Language](/docs/developers/multilingual-content/add-a-custom-language) document to create and add a custom language.

**Example:** Creates a stack, fetches an asset with a locale, and reads its fields via getters or `toJSON()`.

```
import android.content.Context;
import com.contentstack.sdk.*;
import org.json.JSONObject;

Context context = getApplicationContext(); // e.g. call from Activity; or pass Context in from your layer

try {
    Stack stack = Contentstack.stack("<API_KEY>", "<DELIVERY_TOKEN>", "<ENVIRONMENT>");
    Asset asset = stack.asset("<ASSET_UID>");
    asset.setLocale("en-us").fetch(new FetchResultCallback() {
        @Override
        public void onCompletion(ResponseType responseType, Error error) {
            if (error == null) {
                String fileName = asset.getFileName(); // use in UI or downloads
                JSONObject json = asset.toJSON();
                if (json != null) {
                    String title = json.optString("title"); // empty string if key missing; API may localize per locale
                }
            } else {
                String message = error.getErrorMessage(); // e.g. log or show to the user
            }
        }
    });
} catch (Exception e) {
    // Handle stack initialization failure (e.g. log or surface to the user)
}
```
