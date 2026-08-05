---
title: "includeGlobalFieldSchema"
description: "The `includeGlobalFieldSchema` method includes the schema of the global field in the response."
url: "https://www.contentstack.com/java-delivery-sdk-global-fields-includeglobalfieldschema"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeGlobalFieldSchema

The `includeGlobalFieldSchema` method includes the schema of the global field in the response.

No parameters.

Returns:
Type
GlobalField

**Example:**

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
GlobalField globalField = stack.globalField().includeGlobalFieldSchema();
```

Note:

- All users can retrieve information about Global fields, regardless of their role or access level.
- If a Global field includes [nested Global fields](/docs/developers/global-field/about-global-field#nested-global-fields), the API response will return them as part of the overall schema.
