---
title: "Get publish rules by content types"
description: /workflows/content_type/{content_type_uid}?action=(publish/unpublish)&locale={locale_code}&environment={environment_uid}
url: /get-publish-rules-by-content-types
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:07.563Z
updated_at: 2024-02-27T13:55:14.106Z
---

# Get publish rules by content types

<p>The&nbsp;<span data-type='inlineCode'>Get Publish Rules by Content Types</span>&nbsp;request allows you to retrieve details of a Publish&nbsp;Rule applied to a specific content type of your stack.</p><p><span style="background-color: initial;">When executing the API request, in the 'Header' section, you need to provide the API Key of your stack and the authtoken that you receive after logging into your account.<br /></span><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.workflows.management:read</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/workflows/content_type/{content_type_uid}?action=(publish/unpublish)&locale={locale_code}&environment={environment_uid}`

**Method**: `GET`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the UID of the content type of which you want to retrieve the Publishing Rule.</p>

## Query Parameters

- **action** (required)
  <p><span style="color: rgb(116, 133, 144); font-family: proximaNovaRegular, Arial, Helvetica, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">Enter the action that has been set in the Publishing Rule.</span></p>
- **locale** (optional)
  <p>Enter the code of the locale where your Publishing Rule will be applicable.</p>
- **environment** (optional)
  <p>Enter the UID of the environment where your Publishing Rule will be applicable.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **Content-Type** (required)

## Response

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

