---
title: "GetInvitationsAsync"
description: "The Get all organization invitations call gives you a list of all the Organization invitations."
url: "https://www.contentstack.com/dotnet-management-organization-getinvitationsasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## GetInvitationsAsync

The Get all organization invitations call gives you a list of all the Organization invitations.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query Parameter collection |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Organization("<ORG_UID>").GetInvitationsAsync();
```
