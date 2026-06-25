---
title: "Get publish rules by content types"
description: GET /workflows/content_type/{content_type_uid}?action=(publish/unpublish)&locale={locale_code}&environment={environment_uid}
url: developers/apis/content-management-api/requests/get-publish-rules-by-content-types
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-27
---

# Get publish rules by content types

**GET** `/workflows/content_type/{content_type_uid}?action=(publish/unpublish)&locale={locale_code}&environment={environment_uid}`

The Get Publish Rules by Content Types request allows you to retrieve details of a Publish Rule applied to a specific content type of your stack.

When executing the API request, in the 'Header' section, you need to provide the API Key of your stack and the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.workflows.management:read scope.

## URL Parameters

- **content_type_uid** (required)
  Enter the UID of the content type of which you want to retrieve the Publishing Rule.
  Default: `content_type_uid`

## Query Parameters

- **action** (required)
  Enter the action that has been set in the Publishing Rule.
  Default: `publish/unpublish`
- **locale** (optional)
  Enter the code of the locale where your Publishing Rule will be applicable.
  Default: `en-us`
- **environment** (optional)
  Enter the UID of the environment where your Publishing Rule will be applicable.
  Default: `production`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`

## Sample Response

```json
{
	"publishing_rules": [{
			"locale": "en-us",
			"action": "publish",
			"environment": "bltf00d80f0b317cf90",
			"workflow_stage": "complete",
			"uid": "blt27ae01ef747fa622"
		},
		{
			"locale": "fr-fr",
			"action": "publish",
			"uid": "blt9b9253297f117e84",
			"environment": "bltf00d80f0b317cf90",
			"workflow_stage": "complete",
			"approvers": [
				"blt5f75d38457c7b306"
			]
		},
		{
			"locale": "hi-in",
			"action": "publish",
			"uid": "blt9b9253297f117e84",
			"environment": "bltf00d80f0b317cf90",
			"workflow_stage": "complete",
			"approvers": [
				"blt5f75d38457c7b306"
			]
		}
	]
}
```

