---
title: "deploy"
description: "The deploy method deploys all entries and assets from a release to specified environments and locales."
url: "https://www.contentstack.com/java-management-releases-deploy"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## deploy

The `deploy` method deploys all entries and assets from a release to specified environments and locales.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The requestBody to deploy a release. |

Returns:
Type
Call

**Example:**

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Call<ResponseBody> response = contentstack.stack().releases("RELEASE_UID").deploy(requestBody).execute();
if (response.isSuccessful()) {
    System.out.println("Release cloned successfully.");
}
```
