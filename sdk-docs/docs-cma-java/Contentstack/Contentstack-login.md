---
title: "login"
description: "Before executing any calls, retrieve the authtoken by authenticating yourself via the login call of User Session. The authtoken is returned to the 'Response' body of the login call and is mandatory in all the calls."
url: "https://www.contentstack.com/java-management-contentstack-login"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## login

Before executing any calls, retrieve the authtoken by authenticating yourself via the login call of User Session. The authtoken is returned to the 'Response' body of the login call and is mandatory in all the calls.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| emailId | String | Yes | — | The email id of the user |
| password | String | Yes | — | The password of the contentstack user |
| tfaToken | String | No | — | The tfa token |

Returns:
Type
LoginDetails

```
import contentstack;

Contentstack contentstack = new Contentstack.Builder().build();
.
LoginDetails login = contentstack.login("emailId", "password");

  or

LoginDetails login = contentstack.login("emailId", "password", "tfaToken");
```
