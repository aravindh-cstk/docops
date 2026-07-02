---
title: "transferOwnership"
description: "The \"Transfer organization ownership\" call transfers the ownership of an Organization to another user. When the call is executed, an email invitation for accepting the ownership of a particular Organization is sent to the specified user."
url: "https://www.contentstack.com/java-management-organization-transferownership"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## transferOwnership

The "Transfer organization ownership" call transfers the ownership of an Organization to another user. When the call is executed, an email invitation for accepting the ownership of a particular Organization is sent to the specified user.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | The request body | Yes | — | The request body. |

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Organisation organisation = contentstack.organisation();
Call&lt;ResponseBody&gt; response = organisation.transferOwnership(body).execute();
if (response.isSuccessful){
	System.out.println("Response"+ response)
}
```
