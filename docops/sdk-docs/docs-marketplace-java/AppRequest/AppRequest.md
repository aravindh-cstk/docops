---
title: "AppRequest"
description: "If a user does not have the necessary permissions to install an app in an organization or stack, they can request the organization or stack administrator to install the app on their behalf. To do this, the user clicks the Request Install button. Once the request is made, the organization or stack administrator can then approve or reject the request. Example: AppRequest appRequest = marketplace.request();"
url: "https://www.contentstack.com/developers/sdks/marketplace-sdk/java/reference/apprequest"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# AppRequest

## AppRequest

If a user does not have the necessary permissions to install an app in an organization or stack, they can request the organization or stack administrator to install the app on their behalf. To do this, the user clicks the **Request Install** button.

Once the request is made, the organization or stack administrator can then approve or reject the request.

**Example:**

```
AppRequest appRequest = marketplace.request();
```

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| orgId | String | Yes | — | UID of the organization |
