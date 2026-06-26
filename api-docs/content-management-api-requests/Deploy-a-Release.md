---
title: "Deploy a Release"
description: POST /releases/{release_uid}/deploy
url: developer-apis/content-management-api-requests/deploy-a-release
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-11-14
---

# Deploy a Release

**POST** `/releases/{release_uid}/deploy`

The Deploy a Release request deploys a specific Release to specific environment(s) and locale(s).

When executing the API request, provide the Release UID. In the 'Body' section, you need to provide the details of the Release that you want to deploy. For example, you need to provide the scheduled time (in case of scheduled release), action, and environment(s) on which the Release should be deployed.

To configure the permissions for your application via OAuth, please include the cm.release:deploy scope.

## URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release which you want to deploy on a specific environment and locale.
  Default: `blt719af000dcde0000`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

```json
{
	"release": {
		"scheduled_at": "2018-12-12T13:13:13.122Z",
		"action": "publish/unpublish",
		"environments": [
			"Production",
			"UAT"
		]
	}
}
```

## Sample Response

```json
{
	"notice": "Release sent successfully for deployment."
}
```

