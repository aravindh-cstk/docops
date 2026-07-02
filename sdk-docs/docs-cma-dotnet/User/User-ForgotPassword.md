---
title: "ForgotPassword"
description: "The Forgot password call sends a request for a temporary password to log in to an account in case a user has forgotten the login password."
url: "https://www.contentstack.com/dotnet-management-user-forgotpassword"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## ForgotPassword

The Forgot password call sends a request for a temporary password to log in to an account in case a user has forgotten the login password.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| email | string | Yes | — | The email for the account that user has forgotten the login password |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.ForgotPassword("<EMAIL>");
```
