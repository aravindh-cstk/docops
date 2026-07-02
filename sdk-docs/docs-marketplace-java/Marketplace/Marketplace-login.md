---
title: "login"
description: "The login method is an optional method for the user to perform CRUD operations. Alternatively, users can perform CRUD operations directly using an authtoken without logging in."
url: "https://www.contentstack.com/java-marketplace-login"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## login

The login method is an optional method for the user to perform CRUD operations. Alternatively, users can perform CRUD operations directly using an authtoken without logging in.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| emailId | String | Yes | — | Your email id |
| password | String | Yes | — | Your password |

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID").login(“emailId”, “password”).build();
```
