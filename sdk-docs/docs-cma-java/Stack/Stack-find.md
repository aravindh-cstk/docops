---
title: "find"
description: "Find call fetches stack information. All Stack: auth token is required to fetch all the stacks. Single Stack: api_key and authtoken is required, and organization_uid is optional."
url: "https://www.contentstack.com/java-management-stack-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

Find call fetches stack information.

All Stack: auth token is required to fetch all the stacks.

Single Stack: api_key and authtoken is required, and organization_uid is optional.

No parameters.

Returns:
Type
Call

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Stack stack = contentstack.stack();
Call<ResponseBody> response = stack.find().execute();
if (response.isSuccessful) {
    System.out.println("Response" + response);
}
```
