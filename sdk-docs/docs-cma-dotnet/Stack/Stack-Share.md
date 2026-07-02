---
title: "Share"
description: "The Share a stack call shares a stack with the specified user to collaborate on the stack."
url: "https://www.contentstack.com/dotnet-management-stack-share"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Share

The Share a stack call shares a stack with the specified user to collaborate on the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| email | string | Yes | — | User email to be shared stack access. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
UserInvitation invitation = new UserInvitation()
{
        Email = "<EMAIL>",
        Roles = new System.Collections.Generic.List<string>() { "<ROLE_UID>" }
};
ContentstackResponse contentstackResponse = client.stack("<API_KEY>")
.Share(
  new List() {
      invitation
  }
);
```
