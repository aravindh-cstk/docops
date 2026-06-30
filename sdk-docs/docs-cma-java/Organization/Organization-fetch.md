---
title: "fetch"
description: "The \"Get a single organization\" call gets the comprehensive details of a specific organization related to the system user."
url: "https://www.contentstack.com/java-management-organization-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The "Get a single organization" call gets the comprehensive details of a specific organization related to the system user.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Organisation organisation = contentstack.organisation();
Call&lt;ResponseBody&gt; response = organisation.fetch().execute();
if (response.isSuccessful){
	System.out.println("Response"+ response)
}
```
