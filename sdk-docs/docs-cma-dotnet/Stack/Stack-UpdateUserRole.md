---
title: "UpdateUserRole"
description: "The Update User Role API Request updates the roles of an existing user account."
url: "https://www.contentstack.com/dotnet-management-stack-updateuserrole"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## UpdateUserRole

The Update User Role API Request updates the roles of an existing user account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| usersRole | List<UserInvitation> | Yes | — | List of user and roles to be assigned in Stack. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
UserInvitation invitation = new UserInvitation()
{
        Uid = "<USER_ID>",
        Roles = new System.Collections.Generic.List<string>() { "<ROLE_UID>" }
};
ContentstackResponse contentstackResponse = client.stack("<API_KEY>")
.UpdateUserRole(
  new List<UserInvitation>() {
     invitation
  }
);
```
