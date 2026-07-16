---
title: "includeBranch"
description: "The `includeBranch` method includes the branch details in the result for single or multiple global fields."
url: "https://www.contentstack.com/android-global-fields-includebranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeBranch

The `includeBranch` method includes the branch details in the result for single or multiple global fields.

No parameters.

Returns:
Type
void

**Example:**

```
import com.contentstack.sdk.*;
Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
GlobalField globalField = stack.globalField("globalFieldUid").includeBranch();
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

Note:

- Information about Global fields can be retrieved by all users, regardless of their role or access level.
- If your Global field contains nested Global fields, they will appear as part of the schema in the API response.
