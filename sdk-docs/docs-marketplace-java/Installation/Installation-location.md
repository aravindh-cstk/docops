---
title: "location"
description: "The location method returns a new Location object with the specified client, organisationId, and installationId."
url: "https://www.contentstack.com/java-marketplace-installation-location"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## location

The location method returns a new Location object with the specified client, organisationId, and installationId.

No parameters.

Returns:
Type
location

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
Installation installation = marketplace.installation(); 
Call result = installation.location().execute();
```
