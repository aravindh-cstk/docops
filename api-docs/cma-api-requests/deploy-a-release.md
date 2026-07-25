---
title: "Deploy a Release"
description: /releases/{release_uid}/deploy
url: /deploy-a-release
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:08:58.900Z
updated_at: 2024-11-14T06:34:38.065Z
---

# Deploy a Release

<p>The <span data-type='inlineCode'>Deploy a Release</span> request deploys a specific Release to specific environment(s) and locale(s).</p><p>When executing the API request, provide the Release UID. In the 'Body' section, you need to provide the details of the Release that you want to deploy. For example, you need to provide the scheduled time (in case of scheduled release), action, and environment(s) on which the Release should be deployed.</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.release:deploy</span> scope.</p>

**API Endpoint**: `/releases/{release_uid}/deploy`

**Method**: `POST`

## URL Parameters

- **release_uid** (required)
  <p>Enter the unique ID of the release which you want to deploy on a specific environment and locale.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **release_version** (optional)
  <p>Enter the release version.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **Content-Type** (required)
  <p>Enter <span class="code">application/json</span> to pass a request body.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

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

## Response

```json
{
	"notice": "Release sent successfully for deployment."
}
```

