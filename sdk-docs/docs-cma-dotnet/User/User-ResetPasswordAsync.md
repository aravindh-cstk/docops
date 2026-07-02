---
title: "ResetPasswordAsync"
description: "The Reset password call sends a request for resetting the password of your Contentstack account."
url: "https://www.contentstack.com/dotnet-management-user-resetpasswordasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## ResetPasswordAsync

The Reset password call sends a request for resetting the password of your Contentstack account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| resetToken | string | Yes | — | The reset password token send to email. |
| password | string | Yes | — | The password for the account. |
| confirmPassword | string | Yes | — | The confirm password for the account. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.ResetPasswordAsync("<RESET_TOKEN>", "<PASSWORD>", "<CONFIRM_PASSWORD>");
```
