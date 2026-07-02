---
title: "resendInvitation"
description: "Resend pending organization invitation call allows you to resend Organization invitations to users who have not yet accepted the earlier invitation. Only the owner or the admin of the Organization can resend the invitation to add users to an Organization."
url: "https://www.contentstack.com/java-management-organization-resendinvitation"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## resendInvitation

Resend pending organization invitation call allows you to resend Organization invitations to users who have not yet accepted the earlier invitation.

Only the owner or the admin of the Organization can resend the invitation to add users to an Organization.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| shareUid | String | Yes | — | The share uid. |

Returns:
Type
Void

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Organisation organisation = contentstack.organisation();
Call&lt;ResponseBody&gt; response = organisation.resendInvitation("shareUid").execute();
if (response.isSuccessful){
	System.out.println("Response"+ response)
}
```
