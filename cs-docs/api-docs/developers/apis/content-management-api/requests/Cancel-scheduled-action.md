---
title: "Cancel scheduled action"
description: GET /publish-queue/{publish_queue_uid}/unschedule
url: developers/apis/content-management-api/requests/cancel-scheduled-action
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-29
---

# Cancel scheduled action


**Method:** `GET`  
**Endpoint:** `/publish-queue/{publish_queue_uid}/unschedule`

The Cancel Scheduled Action request will allow you to cancel any scheduled publishing or unpublishing activity of entries and/or assets and also cancel the deployment of releases.  
To configure the permissions for your application via OAuth, please include the cm.publish-queue.management:write scope.

**Note**: You must pass api_version:3.2 parameter in the **Header** section of the request to enable Nested References Publishing.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| branch | main | Enter your branch unique ID. |

| api_version | 3.2 | Enter the API version to enable Nested Reference Publishing. |

| publish_queue_uid | bltc2bbdb4a01c313a2cb3b | Enter the UID of the event to be cancelled in the publish queue. |

**Response (200):**

```json
{
    "notice": "Entry unscheduled successfully."
}
```
