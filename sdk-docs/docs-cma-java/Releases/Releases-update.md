---
title: "update"
description: "The `update` method modifies the name, description, or schedule of an existing release."
url: "https://www.contentstack.com/java-management-releases-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The `update` method modifies the name, description, or schedule of an existing release.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | Request body to update a release |

Returns:
Type
Call

**Example:**

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Call<ResponseBody> response = contentstack.stack().releases().update().execute();
if (response.isSuccessful()) {
    System.out.println("Release updated successfully.");
}
```
