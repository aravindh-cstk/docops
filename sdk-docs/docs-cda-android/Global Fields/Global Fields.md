---
title: "Global Fields"
description: "A Global field is a reusable field (or group of fields) that you can define once and reuse in any content type within your stack. This eliminates the need (and thereby time and efforts) to create the same set of fields repeatedly in multiple content types. Example: import com.contentstack.sdk.*; Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment); GlobalField globalField = stack.globalField(); globalField.findAll(new GlobalFieldsResultCallback() { @Override public void onCompletion(GlobalFieldsModel globalFieldsModel, Error error) { if(error == null){ JSONArray result = globalFieldsModel.getResultArray(); } else { System.out.println(\"❌ Error: \" + error.getErrorMessage()); } } });"
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/android/reference/global-fields"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# Global Fields

## Global Fields

A Global field is a reusable field (or group of fields) that you can define once and reuse in any content type within your stack. This eliminates the need (and thereby time and efforts) to create the same set of fields repeatedly in multiple content types.

**Example:**

```
import com.contentstack.sdk.*;
Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
GlobalField globalField = stack.globalField();
globalField.findAll(new GlobalFieldsResultCallback() {
@Override
public void onCompletion(GlobalFieldsModel globalFieldsModel, Error error) {
if(error == null){
JSONArray result = globalFieldsModel.getResultArray();
} else {
System.out.println("❌ Error: " + error.getErrorMessage());
       }
    }
});
```
