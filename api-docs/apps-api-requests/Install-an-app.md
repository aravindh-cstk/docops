---
title: "Install an app"
description: /apps/{app_uid}/install
url: /install-an-app
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:08:59.842Z
updated_at: 2023-01-05T14:08:59.842Z
---

# Install an app

The <strong>Install an app</strong> request is used to initiate the installation of the app.<br>

**API Endpoint**: `/apps/{app_uid}/install`

**Method**: `POST`

## URL Parameters

- **app_uid** (required)
  <p>The UID of the app to be installed.</p>

## Headers

- **authtoken** (required)
  <p>Enter your management token.</p>
- **organization_uid** (required)
  <p>The UID of the organization.</p>

## Response

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

