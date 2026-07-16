---
title: "setHost"
description: "The `setHost` method specifies the API endpoint for your Contentstack region. This method ensures that your requests are routed to the appropriate regional host enabling optimal performance and compliance with regional data policies. For a complete list of supported regions and their base URLs, refer to the Content Management API documentation."
url: "https://www.contentstack.com/java-management-contentstack-sethost"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setHost

The `setHost` method specifies the API endpoint for your Contentstack region. This method ensures that your requests are routed to the appropriate regional host enabling optimal performance and compliance with regional data policies.

For a complete list of supported regions and their base URLs, refer to the [Content Management API](/docs/developers/apis/content-management-api#base-url) documentation.

No parameters.

The following code snippet demonstrates how to initialize the Contentstack client and set the regional host (for example, for Australia):

```
import Contentstack; 

// Initialize the Contentstack client and set the regional host (e.g., for Australia)

Contentstack client = new Contentstack.Builder()
       .setAuthtoken(TestClient.AUTHTOKEN)
       .setHost("au-api.contentstack.com")
       .build();

// Get the entry instance from the specified content type and entry UID

Entry entry = client.stack("apiKey").contentType("contentType").entry("entry_uid");

// Fetch the entry from the specified region

Response<ResponseBody> response = entry.fetch();
```
