---
title: "clone"
description: "The `clone` method creates a duplicate of an existing release with a new name or description."
url: "https://www.contentstack.com/java-management-releases-clone"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## clone

The `clone` method creates a duplicate of an existing release with a new name or description.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | Request body to clone a release |

Returns:
Type
Call

**Example:**

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Call<ResponseBody> response = contentstack.stack().releases("RELEASE_UID").clone(requestBody).execute();
if (response.isSuccessful()) {
    System.out.println("Release cloned successfully.");
}
```
