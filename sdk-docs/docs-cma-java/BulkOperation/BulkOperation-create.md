---
title: "create"
description: "The `create` method creates a new release in the stack."
url: "https://www.contentstack.com/java-management-bulkoperation-publish"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The `create` method creates a new release in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestBody | JSONObject | Yes | — | The requestBody to create a release. |

Returns:
Type
Call

**Example:**

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Release release = contentstack.stack().releases();
Call<ResponseBody> response = release.create(requestBody).execute();
if (response.isSuccessful()) {
    System.out.println("Release created successfully.");
}
```
