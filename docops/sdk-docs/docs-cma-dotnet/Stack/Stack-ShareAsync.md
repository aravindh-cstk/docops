---
title: "ShareAsync"
description: "The Share a stack call shares a stack with the specified user to collaborate on the stack."
url: "https://www.contentstack.com/dotnet-management-stack-shareasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## ShareAsync

The Share a stack call shares a stack with the specified user to collaborate on the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| invitations | List<UserInvitation> | Yes | — | List of user email with roles to be assign from Stack. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
UserInvitation invitation = new UserInvitation()
{
        Email = "<EMAIL>",
        Roles = new System.Collections.Generic.List<string>() { "<ROLE_UID>" }
};
ContentstackResponse contentstackResponse = await client.stack("<API_KEY>")
.ShareAsync(
  new List() {
      invitation
  }
);
```
