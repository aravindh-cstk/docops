---
title: "ResendInvitation"
description: "The Resend pending organization invitation call allows you to resend Organization invitations to users who have not yet accepted the earlier invitation. Only the owner or the admin of the Organization can resend the invitation to add users to an Organization."
url: "https://www.contentstack.com/dotnet-management-organization-resendinvitation"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## ResendInvitation

The Resend pending organization invitation call allows you to resend Organization invitations to users who have not yet accepted the earlier invitation. Only the owner or the admin of the Organization can resend the invitation to add users to an Organization.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| shareUid | string | No | — | Uid for share invitation send to user. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Organization("<ORG_UID>").ResendInvitation("<SHARE_UID>");
```
