---
title: "Request/Accept/Reject Entry Publish Request"
description: /content_types/{content_type_uid}/entries/{entry_uid}/workflow?locale={locale_code}
url: /request-accept-reject-entry-publish-request
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:05.669Z
updated_at: 2023-01-05T14:09:05.669Z
---

# Request/Accept/Reject Entry Publish Request

<p><span style="background-color: initial;">This multipurpose request allows you to either send a publish request or accept/reject a received publish&nbsp;request.</span></p><p>When executing the API request, in the 'Header' section, you need to provide the API Key of your stack and the authtoken that you receive after logging into your account.</p><p>In the 'Body' section, you need to provide the details of the publish rule, such as its UID, action (‘publish’, ‘unpublish’, or ’both’), status (this could be ‘0’ for Approval Requested, ‘1’ for ‘Approval Accepted’, and ‘-1’ for ‘Approval Rejected’), notification setting, and comment for the approver.</p>

**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}/workflow?locale={locale_code}`

**Method**: `POST`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type to which the entry belongs.<br></p>
- **entry_uid** (required)
  <p>Enter the unique ID of the entry on which the Publishing Rule is applicable.</p>

## Query Parameters

- **locale** (optional)
  <p>Enter the code of the locale that the entry belongs to.</p>

## Headers

- **api_key** (required)
- **authtoken** (required)
- **Content-Type** (required)

## Request Body

```json
{
	"workflow": {
		"publishing_rule": {
			"uid": "blt9b9253297f117e84",
			"action": "publish",
			"status": 1,
			"notify": false,
			"comment": "Please review this."
		}
	}
}
```

## Response

```json
[{
		"notice": "You have sent an approval request to publish the entry on development environment."
	},
	{
		"notice": "You have accepted the request to publish entry on development environment."
	},
	{
		"notice": "You have rejected the request to publish entry on development environment."
	}
]
```

