---
title: "findAll"
description: "The findAll method retrieves all the global fields of the stack."
url: "https://www.contentstack.com/copy-of-java-delivery-sdk-global-fields-findall"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## findAll

The `findAll` method retrieves all the global fields of the stack.

No parameters.

Returns:
Type
void

**Example:**

```
GlobalField globalField = stack.globalField();
        globalField.findAll(new GlobalFieldsCallback() {
            @Override
            public void onCompletion(GlobalFieldsModel globalFieldsModel, Error error) {
                assertTrue(globalFieldsModel.getResultArray() instanceof JSONArray);
                assertNotNull(((JSONArray) globalFieldsModel.getResponse()).length());
            }
        });
```
