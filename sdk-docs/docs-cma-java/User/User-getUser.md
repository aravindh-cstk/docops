---
title: "getUser"
description: "The \"Get user\" call returns comprehensive information about an existing user account. The information returned includes details of the stacks owned by and shared with the specified user account."
url: "https://www.contentstack.com/java-management-user-getuser"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getUser

The "Get user" call returns comprehensive information about an existing user account. The information returned includes details of the stacks owned by and shared with the specified user account.

### Overload 1

No parameters.

Returns:
Type
Call

### Overload 2

No parameters.

```
import contentstack;
Contentstack contentstack= new Contentstack.Builder().build();
User user = contentstack.user();
Call<ResponseBody> response = user.getUser().execute()
if (response.isSuccessful){ 
   System.out.println("Response"+ response)
}
```
