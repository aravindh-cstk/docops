---
title: "AddUserAsync"
description: "The Add users to organization call allows you to send invitations to add users to your organization. Only the owner or the admin of the organization can add users."
url: "https://www.contentstack.com/dotnet-management-organization-adduserasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## AddUserAsync

The Add users to organization call allows you to send invitations to add users to your organization. Only the owner or the admin of the organization can add users.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| orgInvite | List<UserInvitation> | Yes | — | List of User invitation. |
| stackInvite | Dictionary<string, List<UserInvitation>> | No | — | Stack Uid with user invitation details. |

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
ContentstackResponse contentstackResponse = await client.Organization("<ORG_UID>")
.AddUserAsync(
new System.Collections.Generic.List<UserInvitation>()
    {
        invitation
    },
 new Dictionary<string, List<UserInvitation>> ()
    {
          "<STACK_UID>"= invitation
    }
 );
```
