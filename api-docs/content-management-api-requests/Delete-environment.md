---
title: "Delete environment"
description: DELETE /environments/{environment_name}
url: developer-apis/content-management-api-requests/delete-environment
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-28
---

# Delete environment

**DELETE** `/environments/{environment_name}`

The Delete environment call will delete an existing publishing environment from your stack.

When executing the API call, under the 'Header' section, you need to enter the API key of your stack and the authtoken that you receive after logging into your account.  
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

## Sample Response

```json
{
  "notice": "Environment deleted successfully."
}
```

