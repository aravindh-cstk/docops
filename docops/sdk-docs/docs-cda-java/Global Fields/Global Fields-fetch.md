---
title: "fetch"
description: "The `fetch` method retrieves the global field data of the specified global field."
url: "https://www.contentstack.com/java-delivery-sdk-global-fields-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The `fetch` method retrieves the global field data of the specified global field.

No parameters.

Returns:
Type
void

**Example:**

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
GlobalField globalField = stack.globalField("globalfields_uid");
        globalField.fetch(new GlobalFieldsCallback() {
            @Override
            public void onCompletion(GlobalFieldsModel model, Error error) {
                JSONArray resp = model.getResultArray();
                Assertions.assertTrue(resp.isEmpty());
            }
        });
```
