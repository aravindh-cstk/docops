---
title: "removeUsers"
description: "The \"Remove Users from Organization\" request allows you to remove existing users from your organization. Note : Only the owner or the admin of the organization can remove users."
url: "https://www.contentstack.com/java-management-organization-removeusers"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## removeUsers

The "Remove Users from Organization" request allows you to remove existing users from your organization.

**Note**: Only the owner or the admin of the organization can remove users.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | Object | Yes | — | The request body in JSONObject format. |

Returns:
Type
Void

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Organisation organisation = contentstack.organisation();
Call&lt;ResponseBody&gt; response = organisation.removeUsers(body).execute();
if (response.isSuccessful){
	System.out.println("Response"+ response)
}
```
