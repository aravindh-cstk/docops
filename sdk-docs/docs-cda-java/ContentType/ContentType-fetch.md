---
title: "fetch"
description: "fetch all the content types available for the stack"
url: "https://www.contentstack.com/java-contenttype-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

fetch all the content types available for the stack

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params | JSONObject | Yes | — | key value parameters of type JSONObject |
| callback | ContentTypesCallback | Yes | — | The callback of type ContentTypesCallback |

Returns:
Type
void

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
ContentType contentType = stack.contentType("contentTypeUid");
contentType.fetch(new JSONObject(), new ContentTypesCallback() {
 @Override
public void onCompletion(ContentTypesModel model, Error error) {
   JSONArray resp = model.getResultArray();
}
});
```
