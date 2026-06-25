---
title: "Cancel scheduled action"
description: GET /publish-queue/{publish_queue_uid}/unschedule
url: developer-apis/content-management-api-requests/cancel-scheduled-action
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-29
---

# Cancel scheduled action

**GET** `/publish-queue/{publish_queue_uid}/unschedule`

The Cancel Scheduled Action request will allow you to cancel any scheduled publishing or unpublishing activity of entries and/or assets and also cancel the deployment of releases.  
To configure the permissions for your application via OAuth, please include the cm.publish-queue.management:write scope.

**Note**: You must pass api_version:3.2 parameter in the **Header** section of the request to enable Nested References Publishing.

## URL Parameters

- **publish_queue_uid** (required)
  Enter the UID of the event to be cancelled in the publish queue.
  Default: `bltc2bbdb4a01c313a2cb3b`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`
- **api_version** (required)
  Enter the API version to enable Nested Reference Publishing.
  Default: `3.2`

## Sample Response

```json
{
    "notice": "Entry unscheduled successfully."
}
```

