---
title: "ForgotPasswordAsync"
description: "The Forgot password call sends a request for a temporary password to log in to an account in case a user has forgotten the login password."
url: "https://www.contentstack.com/dotnet-management-user-forgotpasswordasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## ForgotPasswordAsync

The Forgot password call sends a request for a temporary password to log in to an account in case a user has forgotten the login password.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| email | string | Yes | — | The email for the account that user has forgotten the login password |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.ForgotPasswordAsync("<EMAIL>");
```
