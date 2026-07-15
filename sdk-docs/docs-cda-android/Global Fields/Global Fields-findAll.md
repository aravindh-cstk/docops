---
title: "findAll"
description: "The `findAll` method retrieves the details of all the global fields of the stack."
url: "https://www.contentstack.com/android-global-fields-findall"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## findAll

The `findAll` method retrieves the details of all the global fields of the stack.

No parameters.

Returns:
Type
void

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
System.out.println("Error: " + error.getErrorMessage());
       }
    }
});
```
