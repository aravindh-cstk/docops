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


**Method:** `GET`  
**Endpoint:** `/workflows/content_type/{content_type_uid}?action=(publish/unpublish)&locale={locale_code}&environment={environment_uid}`

The Get Publish Rules by Content Types request allows you to retrieve details of a Publish Rule applied to a specific content type of your stack.

When executing the API request, in the 'Header' section, you need to provide the API Key of your stack and the authtoken that you receive after logging into your account.  
To configure the permissions for your application via OAuth, please include the cm.workflows.management:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| Content-Type | application/json |  |

| content_type_uid | content_type_uid | Enter the UID of the content type of which you want to retrieve the Publishing Rule. |

| action | publish/unpublish | Enter the action that has been set in the Publishing Rule. |

| locale | en-us | Enter the code of the locale where your Publishing Rule will be applicable. |

| environment | production | Enter the UID of the environment where your Publishing Rule will be applicable. |

**Response (200):**

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
