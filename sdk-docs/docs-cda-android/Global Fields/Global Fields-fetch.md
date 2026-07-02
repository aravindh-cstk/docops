---
title: "fetch"
description: "The fetch method retrieves the details of the specified global field."
url: "https://www.contentstack.com/android-global-fields-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The fetch method retrieves the details of the specified global field.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| globalFieldUid | String | Yes | — | UID of the global field |

Returns:
Type
void

**Example:**

```
import com.contentstack.sdk.*;
Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
GlobalField globalField = stack.globalField("globalFieldUid");
globalField.fetch(new GlobalFieldsResultCallback() {
@Override
public void onCompletion(GlobalFieldsModel globalFieldsModel, Error error) {
if (error == null) {
JSONArray result = globalFieldsModel.getResultArray();
System.out.println("Global Fields Response: " + result);
} else {
System.out.println("Error: " + error.getErrorMessage());
       }
    }
});
```
