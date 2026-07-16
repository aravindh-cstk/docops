---
title: "create"
description: "The Create a global field request allows you to create a new global field in a particular stack of your Contentstack account. You can use this global field in any content type within your stack. Note : Only the stack owner, administrator, and developer can create global fields. You need to use either the stack's Management Token or the user Authtoken (one of them is mandatory), along with the stack API key, to make a valid Content Management API request. Read more about authentication ."
url: "https://www.contentstack.com/java-management-globalfield-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The Create a global field request allows you to create a new global field in a particular stack of your Contentstack account. You can use this global field in any content type within your stack.

**Note**: Only the stack owner, administrator, and developer can create global fields.
You need to use either the stack's Management Token or the user Authtoken (one of them is mandatory), along with the stack API key, to make a valid Content Management API request. Read more about[ authentication](/docs/developers/security).

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSONObject | Yes | — | The request body. |

Returns:
Type
Call

**Example 1:**

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
GlobalField globalField = contentstack.stack().globalField();
Call<ResponseBody> response = globalField.create(body).execute();
if(response.isSuccessful) {
    System.out.println("Response" + response);
}
```

**Example 2:**

```
// For Nested global fields pass api_version param with value 3.2
import com.contentstack.cms.Contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
GlobalField globalField = contentstack.stack().globalField();
globalField.addHeader("api_version","3.2");
Response<ResponseBody> response = globalField.create(body).execute();
if(response.isSuccessful) {
    System.out.println("Response" + response);
} else {
    System.out.println("Error: "+ response.errorBody().string());
}
```
