---
title: "Install an app"
description: POST /apps/{app_uid}/install
url: developer-apis/apps-api/requests/install-an-app
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Install an app

**POST** `/apps/{app_uid}/install`

The **Install an app** request is used to initiate the installation of the app.

## URL Parameters

- **app_uid** (required)
  The UID of the app to be installed.

## Headers

- **authtoken** (required)
  Enter your management token.
  Default: `your_authtoken`
- **organization_uid** (required)
  The UID of the organization.
  Default: `your_organization_uid`

## Sample Response

```json
{
	"data": {
		"status": "installed",
		"installation_uid": "60ffeac0a8c41db93df7786a",
		"redirect_to": "config",
		"redirect_uri": "https://app.contentstack.com/installed-apps/{installation-uid}/stacks/{stack-uid}/config"
	}
}
```

