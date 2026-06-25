---
title: "Uninstall an App"
description: DELETE /installations/{installation-uid}
url: developer-apis/apps-api/requests/uninstall-an-app
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Uninstall an App

**DELETE** `/installations/{installation-uid}`

The **Uninstall an app** call is used to uninstall an app from your stack or an organization.

## URL Parameters

- **installation_uid** (required)
  The installation UID of the app.

## Headers

- **authtoken** (required)
  Enter your management token.
  Default: `your_authtoken`
- **organization_uid** (required)
  The UID of the organization.
  Default: `your_organization_uid`

