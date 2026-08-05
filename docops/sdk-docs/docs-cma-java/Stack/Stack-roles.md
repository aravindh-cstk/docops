---
title: "roles"
description: "A role is a collection of permissions that is applied to all the users who are assigned this role."
url: "https://www.contentstack.com/java-management-stack-roles"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## roles

A role is a collection of permissions that is applied to all the users who are assigned this role.

### Overload 1

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSONObject | Yes | — | The Update User Role API Request updates the roles of an existing user account. This API Request will override the existing roles assigned to a user. For example, we have an existing user with the Developer role, and if you execute this API request with the "Content Manager" role, the user role will lose Developer rights, and the user role be updated to just Content Manager. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.roles(body).execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```

### Overload 2

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| roleUid | String | No | — | The unique ID of the role of which you want to retrieve the details. |

Returns:
Type
Roles

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.roles("roleUid").execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
