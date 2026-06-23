---
title: "Update environment"
description: PUT /environments/{environment_name}
url: developers/apis/content-management-api/requests/update-environment
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-28
---

# Update environment

**PUT** `/environments/{environment_name}`

The Update environment call will update the details of an existing publishing environment for a stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.

In the 'Body' section, enter the updated details of the environment. You can modify the environment name, the URLs (which include the language code and the URL of the server).  
To configure the permissions for your application via OAuth, please include the cm.environments.management:write scope.

## URL Parameters

- **environment_name** (required)
  Enter the name of the environment.
  Default: `development`

## Headers

- **api_key** (required)
  Default: `the API key of your stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

## Sample Request

```json
{
	"environment": {
		"name": "development",
		"urls": [{
			"locale": "en-us",
			"url": "http://example.com/"
		}]
	}
}
```

## Sample Response

```json
{
  "notice": "Environment updated successfully.",
  "environment": {
    "name": "production",
     "urls": [
      {
        "locale": "en-us",
        "url": "http://example.com/"
      }
    ],
    "uid": "asdfghjkl123456",
    "created_by": "abcd1234567890",
    "updated_by": "abcd1234567890",
    "created_at": "2015-01-08T15:07:53.495Z",
    "updated_at": "2015-01-08T15:07:53.495Z",
    "ACL": {},
    "tags": [],
    "_version": 1
  }
}
```

