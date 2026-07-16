---
title: "validateInstallationId"
description: "The validateInstallationId method validates if the installationId is not null or empty."
url: "https://www.contentstack.com/java-marketplace-installation-validateinstallationid"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## validateInstallationId

The validateInstallationId method validates if the installationId is not null or empty.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| installationId | String | Yes | — | UI for the installation |

Returns:
Type
void

**Example:**

```
Installation installation = marketplace.installation();
Installation installation = marketplace.installation("installationId");
```
