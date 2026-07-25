---
title: "Cancel scheduled action"
description: /publish-queue/{publish_queue_uid}/unschedule
url: /cancel-scheduled-action
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:17.882Z
updated_at: 2024-02-29T11:24:32.497Z
---

# Cancel scheduled action

<p>The <span data-type='inlineCode'>Cancel Scheduled Action</span> request will allow you to cancel any scheduled publishing or unpublishing activity of entries and/or assets and also cancel the deployment of releases.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.publish-queue.management:write</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p><p class="note"><strong>Note</strong>: You must pass api_version:3.2 parameter in the <strong>Header</strong> section of the request to enable Nested References Publishing.</p>

**API Endpoint**: `/publish-queue/{publish_queue_uid}/unschedule`

**Method**: `GET`

## URL Parameters

- **publish_queue_uid** (required)
  <p>Enter the UID of the event to be cancelled in the publish queue.</p>

## Headers

- **api_key** (required)
  <p></p>
<p>Enter the API key of the stack.</p>
<p><br></p><br><p></p>
- **authtoken** (required)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>
- **api_version** (required)
  <p>Enter the API version to enable Nested Reference Publishing.</p>

## Response

```json
{
    "notice": "Entry unscheduled successfully."
}
```

