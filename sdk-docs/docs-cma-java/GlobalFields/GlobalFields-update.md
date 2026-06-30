---
title: "update"
description: "The \"Update a global field\" request allows you to update the schema of an existing global field. When executing the API call, in the URI Parameters section, provide the unique ID of your global field. Note : You need to use either the stack's Management Token or the user Authtoken (one of them is mandatory), along with the stack API key, to make a valid Content Management API request."
url: "https://www.contentstack.com/java-management-globalfield-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The "Update a global field" request allows you to update the schema of an existing global field.

When executing the API call, in the URI Parameters section, provide the unique ID of your global field.

**Note**: You need to use either the stack's Management Token or the user Authtoken (one of them is mandatory), along with the stack API key, to make a valid Content Management API request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The request body. |

Returns:
Type
Void

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
GlobalField globalField = contentstack.stack().globalField();
Call<ResponseBody> response = globalField.update(requestBody).execute();
if(response.isSuccessful) {
    System.out.println("Response" + response);
}
```
