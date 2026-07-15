---
title: "inviteUser"
description: "The \"Add Users to organization\" call allows you to send invitations to add users to your organization. Only the owner or the admin of the organization can add users."
url: "https://www.contentstack.com/java-management-organization-inviteuser"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## inviteUser

The "Add Users to organization" call allows you to send invitations to add users to your organization. Only the owner or the admin of the organization can add users.

No parameters.

Returns:
Type
Void

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Organisation organisation = contentstack.organisation();
Call&lt;ResponseBody&gt; response = organisation.inviteUser(body).execute();
if (response.isSuccessful){
	System.out.println("Response"+ response)
}
```
