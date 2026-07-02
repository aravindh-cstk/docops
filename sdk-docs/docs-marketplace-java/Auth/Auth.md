---
title: "Auth"
description: "While authorizing a Contentstack App, the app requests permissions from the user to perform a set of operations on behalf of the user. The app receives an access token after a user authenticates and authorizes access, then passes it as a credential when it calls the Contentstack APIs. The Auth class handles user-requested permissions, allowing users to either request for the permission or, once their task is finished, request permission revocations. Example: Auth auth = marketplace.authorizations() .addParam(\"param1\", \"value1\") .addHeader(\"authtoken\", ORG\\_UID);"
url: "https://www.contentstack.com/developers/sdks/marketplace-sdk/java/reference/auth"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# Auth

## Auth

While authorizing a Contentstack App, the app requests permissions from the user to perform a set of operations on behalf of the user. The app receives an access token after a user authenticates and authorizes access, then passes it as a credential when it calls the Contentstack APIs.

The Auth class handles user-requested permissions, allowing users to either request for the permission or, once their task is finished, request permission revocations.

**Example:**

```
Auth auth = marketplace.authorizations()
.addParam("param1", "value1")
.addHeader("authtoken", ORG_UID);
```

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| organizationUid | String | Yes | — | UID of the organization |
